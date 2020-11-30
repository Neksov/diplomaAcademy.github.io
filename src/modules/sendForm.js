const sendForm = () =>{
  let errorMessage = 'Ошибка',
      successMessage = 'Отправлено';

  const captureForm = document.querySelectorAll('.capture-form'),//форма с pop-up 
        mainForm = document.querySelector('.main-form'),// форма консультация
        directorForm = document.querySelector('.director-form'),// форма вопрос
        phone1 = document.getElementById('phone_1'),
        phone11 = document.getElementById('phone_11'),
        phone12 = document.getElementById('phone_12'),
        phone13 = document.getElementById('phone_13'),
        phone2 = document.getElementById('phone_2'),
        phone3 = document.getElementById('phone_3'),
        input = document.querySelectorAll('input'),
        phoneUser = document.querySelectorAll('input[name="user_phone'),
        userName = document.querySelectorAll('[name=user_name]'),
        popupCall = document.querySelector('.popup-call'),
        popupDiscount = document.querySelector('.popup-discount'),
        popupCheck = document.querySelector('.popup-check'),
        quest = document.querySelector('#quest'),
        popupConsultation = document.querySelector('.popup-consultation'),
        userQuest = document.querySelector('[name=user_quest]');

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
          target.value = target.value.replace(/[^0-9+]/ig, '').substring(0,12);
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
    };

    let cleaFields = () =>{ //очищаем поля в модалках
      phoneUser.forEach((elem) =>{
        elem.value ='';
      });
      userName.forEach((elem) =>{
        elem.value ='';
      });
      userQuest.value ='';
    };

    captureForm.forEach((elem)=>{
      elem.addEventListener('submit', (event) =>{
        event.preventDefault();//отменяем стандарное поведение браузера
        elem.appendChild(statusMessage);// добавляем элемент на страницу    
        elem.appendChild(load);
        //проверяем введенный номер
        if(!phone1.value.match(/[0-9+]{7,12}/ig) && !phone11.value.match(/[0-9+]{7,12}/ig) && !phone12.value.match(/[0-9+]{7,12}/ig) && !phone13.value.match(/[0-9+]{7,12}/ig) && !phone2.value.match(/[0-9+]{7,12}/ig)) {
          alert('Номер введен не верно, повторите');
          statusMessage.remove();//удаляем сообщение под формой
          return;
        }
        load.classList.add('sk-spinner-pulse');//вывод спинер загрузка
        popupDiscount.classList.add('calculator-data');

        const formData = new FormData(elem);//создаем экземпляр класса и в эту функцию передаем форму с которой получаем данные

        if(elem.closest('.calculator-data')){
          const construct = document.querySelectorAll('.calculator');
          construct.forEach((item) =>{
            formData.append(item.getAttribute('name'), item.value);
          });
        };

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

        popupDiscount.classList.remove('calculator-data');
        //очищаем поля
        cleaFields();
        statusMessage.textContent ='';
      });
    });
  
    mainForm.addEventListener('submit', (event) =>{
      event.preventDefault();//отменяем стандарное поведение браузера
      mainForm.appendChild(statusMessage);// добавляем элемент на страницу    
      mainForm.appendChild(load);

      if(!phone3.value.match(/[0-9+]{7,12}/ig)) {  //проанряем введенный номер
        alert('Номер введен не верно, повторите');
        statusMessage.remove();//удаляем сообщение под формой
        return;
      }
      load.classList.add('sk-spinner-pulse');//вывод спинер загрузка
        
      const formData = new FormData(mainForm);//создаем экземпляр класса и в эту функцию передаем форму с которой получаем данные
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
      cleaFields();
      statusMessage.textContent ='';
    });


    directorForm.addEventListener('submit', (event) =>{
      event.preventDefault();//отменяем стандарное поведение браузера
      let questions = userQuest.value; //берем значения с инпута вопрос
      quest.value = questions;
    });

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