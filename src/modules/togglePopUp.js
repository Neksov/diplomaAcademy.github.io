const togglePopUp = () =>{
  const popup = document.querySelectorAll('.popup'),
        popupCall = document.querySelector('.popup-call'),
        popupDiscount = document.querySelector('.popup-discount'),
        popupCheck = document.querySelector('.popup-check'),
        popupConsultation = document.querySelector('.popup-consultation'),
        popupBtn = document.querySelectorAll('.button'),
        callBtn = document.querySelectorAll('.call-btn'),
        phoneUser = document.querySelector('.phone-user'),
        userName = document.querySelectorAll('[name=user_name]');

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
export default togglePopUp;