const sendForm = () =>{
  let errorMessage = 'Ошибка',
      successMessage = 'Отправлено';

  const captureForm = document.querySelectorAll('.capture-form'),//форма с pop-up 
        mainForm = document.querySelector('.main-form'),// форма консультация
        directorForm = document.querySelector('.director-form'),// форма вопроса
        input = document.querySelectorAll('input'),
        phoneUser = document.querySelectorAll('.phone-user'),
        userQuest = document.querySelector('[name=user_quest]'),
        userName = document.querySelectorAll('[name=user_name]'),
        popupCall = document.querySelector('.popup-call'),
        popupDiscount = document.querySelector('.popup-discount'),
        popupCheck = document.querySelector('.popup-check'),
        popupConsultation = document.querySelector('.popup-consultation');

let statusMessage = document.createElement('div'),//добавялем элемент на страницу
    load = document.createElement('div');
  
    statusMessage.style.cssText = 'font-size: 2rem;'; //стилизуем статус сообщения
    statusMessage.style.cssText = 'color: black;'; 

    input.forEach((elem) =>{  //проверка вводимых дынных
      elem.addEventListener('input', (e) =>{  
        let target = e.target;
        if(target.matches('[name=user_name]') || target.matches('[name=user_quest]')){
          target.value = target.value.replace(/[^а-яё\s]/ig, ''); // ограничиваем ввод всего кроме кирилицы
        }else if(target.matches('.phone-user')){
          target.value = target.value.replace(/[^\+\d]/g, '').substring(0,12); // ограничиваем ввод всего кроме цифр и знака + 
        }
      });
    });
  
    let timeOut = () => { //таймер на закрытие окна
      setTimeout(() => {
          statusMessage.remove();
          popupCall.style.display = 'none';//закрываем модалку
          popupDiscount.style.display = 'none';//закрываем модалку
          popupCheck.style.display = 'none';//закрываем модалку
          popupConsultation.style.display = 'none';//закрываем модалку
      }, 3000);
    }
    phoneUser.forEach((elem)=>{
      if(!elem.value.match(/[0-9+]{7,13}/ig)) {
        // alert('Номер введен не верно');
        return;
      }
    });

    captureForm.forEach((elem)=>{
      elem.addEventListener('submit', (event) =>{
        console.log(elem)
        event.preventDefault();//отменяем стандарное поведение браузера
        elem.appendChild(statusMessage);// добавляем элемент на страницу    
        elem.appendChild(load);

        load.classList.add('sk-spinner-pulse');//вывод спинер загрузка
        
        const formData = new FormData(elem);//создаем экземпляр класса и в эту функцию передаем форму с которой получаем данные
        let body = {}; //обект в который помещаем наши данные

        //для отправки JSON перебираем и записываем каждый цикл
        formData.forEach((val, key) =>{
          body[key] = val;
        });

        postData(body) 
        .then((response) =>{
          if(response.status !==200){
            throw new Error('status network not 200');
          }
          load.remove(load);//удаляем прилоадер
          statusMessage.textContent = successMessage;
          timeOut();
        })
        .catch((error) =>{
          load.remove(load);//удаляем прилоадер
          statusMessage.textContent = errorMessage;
          timeOut();
          console.error(error); 
        });

        //очищаем поля
        userName.value = '';
        phoneUser.value = '';
        statusMessage.textContent ='';

      });
    })
  

    const postData = (body) =>{
      //запрос к серверу через fetch
      return fetch ('./server.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' //свойство и значение
        },
        body: JSON.stringify(body),
        credentials: 'include' //проверка подлинности
      });
    };
};

export default sendForm;