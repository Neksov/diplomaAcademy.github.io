window.addEventListener('DOMContentLoaded' , () =>{//load дожидается загрузки всей страницы, DOMContentLoaded дожидает только загрузки DOM дерево
  'use strict';
//popup 
const togglePopUp = () =>{
  const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.button'),
        callBtn = document.querySelector('.call-btn');

        popupBtn.forEach((elem) =>{
          elem.addEventListener('click', (event) =>{
            if(event.target.matches('.check-btn') || event.target.matches('.discount-btn') || event.target.matches('.consultation-btn')){
              popup.style.display = 'block';
            }
          });
        });
        callBtn.addEventListener('click', (event) =>{
          if(event.target.matches('.call-btn')){
            popup.style.display = 'block';
          }
        });


        popup.addEventListener('click', (event) =>{
          let target = event.target;
          if(target.classList.contains('popup-close')){//закрытие онка по крестику 
            popup.style.display = 'none';
          }else{
            target = target.closest('.popup-content');
              if(!target){
                popup.style.display = 'none';
              }
          }
        });
};
togglePopUp();

//showAll
const showAll = () =>{
  const addSentenceBtn = document.querySelector('.add-sentence-btn'),
        hidden = document.querySelectorAll('.hidden'),
        visibleSmBlock = document.querySelector('.visible-sm-block');

        hidden.forEach((elem) =>{
          addSentenceBtn.addEventListener('click',() =>{
            elem.classList.remove('hidden');
            visibleSmBlock.classList.remove('visible-sm-block') 
            addSentenceBtn.style.display = 'none';
          });
        });
};
showAll();

//tabs
const tabs = () =>{
  const panelGroup  = document.querySelectorAll('.panel-group'),
        panelHeading = document.querySelectorAll('.panel-heading'),
        collapse = document.querySelectorAll('.collapse'),
        constructBtn = document.querySelectorAll('.collapse');

        const toggleTabContent = (index) =>{
          for(let i=0; i < panelHeading.length; i++){
            if(index === i){
              panelHeading[i].classList.remove('d-none');//добавляем класс active
              collapse[i].classList.add('in'); 
            }else{
              panelHeading[i].classList.add('d-none');
              collapse[i].classList.remove('in'); 
            }
          }
        };

  panelGroup.forEach((e) =>{
    e.addEventListener('click', (event) =>{ 
      let target = event.target; //записываем в таргет элемент на котором произошло событие.
      target = target.closest('.panel-heading');// проверяем есть ли утаргета селектор .service-header-tab, если нет то подымается вверх пока не найдет, либо null 

      if (target){
        panelHeading.forEach((item, i ) =>{ // колбэк функция принимает 2 аргумента
        if (item === target){
          toggleTabContent(i);//вывзов функции сраниваем индекс который получили с индексем tabContent
        }
        });
      }
    target = target.parentNode; //присваиваем родителя если не выполняется условие if(target.classList.contains('service-header-tab')
    })
});
};
tabs();
}); 
