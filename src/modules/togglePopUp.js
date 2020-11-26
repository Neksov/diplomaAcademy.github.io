const togglePopUp = () =>{
  const popup = document.querySelectorAll('.popup'),
        popupCall = document.querySelector('.popup-call'),
        popupDiscount = document.querySelector('.popup-discount'),
        popupCheck = document.querySelector('.popup-check'),
        popupConsultation = document.querySelector('.popup-consultation'),
        popupBtn = document.querySelectorAll('.button'),
        callBtn = document.querySelectorAll('.call-btn'),
        name1 =document.getElementById('name_1'),
        phone1 =document.getElementById('phone_1'),
        name11 =document.getElementById('name_11'),
        phone11 =document.getElementById('phone_11'),
        name12 =document.getElementById('name_12'),
        phone12 =document.getElementById('phone_12'),
        name13 =document.getElementById('name_13'),
        phone13 =document.getElementById('phone_13');

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
              name1.value = '';
              phone1.value = '';
              name11.value = '';
              phone11.value = '';
              name12.value = '';
              phone12.value = '';
              name13.value = '';
              phone13.value = '';
            }else{
              target = target.closest('.popup-content');
                if(!target){
                  elem.style.display = 'none';
                  name1.value = '';
                  phone1.value = '';
                  name11.value = '';
                  phone11.value = '';
                  name12.value = '';
                  phone12.value = '';
                  name13.value = '';
                  phone13.value = '';
                }
            }
          });
  
        });
};
export default togglePopUp;