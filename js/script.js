window.addEventListener('DOMContentLoaded' , () =>{//load дожидается загрузки всей страницы, DOMContentLoaded дожидает только загрузки DOM дерево
  'use strict';
//popup
const togglePopUp = () =>{
  const popup = document.querySelectorAll('.popup'),
        popupCall = document.querySelector('.popup-call'),
        popupDiscount = document.querySelector('.popup-discount'),
        popupCheck = document.querySelector('.popup-check'),
        popupConsultation = document.querySelector('.popup-consultation'),
        popupBtn = document.querySelectorAll('.button'),
        callBtn = document.querySelectorAll('.call-btn');

        popupBtn.forEach((elem) =>{
          elem.addEventListener('click', (event) =>{
            if(event.target.matches('.discount-btn')){
              popupDiscount.style.display = 'block';
            }else if(event.target.matches('.check-btn')){
              popupCheck.style.display = 'block';
            }else if(event.target.matches('.consultation-btn')){
              popupConsultation.style.display = 'block';
            }
          });
        });

        callBtn.forEach((elem)=>{
          elem.addEventListener('click', (event) =>{
            if(event.target.matches('.call-btn')){
              popupCall.style.display = 'block';
            }
          });
        });

        popup.forEach((elem)=>{
          elem.addEventListener('click', (event) =>{
            let target = event.target;
            if(target.classList.contains('popup-close')){//закрытие онка по крестику 
              elem.style.display = 'none';
            }else{
              target = target.closest('.popup-content');
                if(!target){
                  elem.style.display = 'none';
                }
            }
          });
  
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
        constructBtn = document.querySelectorAll('.collapsed');

        const toggleTabContent = (index) =>{
          for(let i=0; i < panelHeading.length; i++){
            if(index === i){
              panelHeading[i].classList.remove('d-none');
              collapse[i].classList.add('in'); 
            }else{
              panelHeading[i].classList.add('d-none');
              collapse[i].classList.remove('in');
            }
          }
        };

  panelGroup.forEach((e) =>{
    e.addEventListener('click', (event) =>{ 
      let target = event.target;
      target = target.closest('.panel-heading'); 

      if (target){
        panelHeading.forEach((item, i ) =>{ 
        if (item === target){
          toggleTabContent(i);
        }
        });
      }
    })
});
};
tabs();

// new WOW().init();
}); 





