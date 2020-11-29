const calc = () =>{
  const inputChexbox = document.querySelectorAll('[type=checkbox]'),
        hiddenSeptic = document.querySelectorAll('.hiddenSeptic'),
        formControl = document.querySelectorAll('.form-control'),

        panel = document.querySelectorAll('.panel'),
        calcResultInput = document.getElementById('calc-result');

  let myonoffswitch = document.getElementById('myonoffswitch'),
      myonoffswitchTwo = document.getElementById('myonoffswitch-two');


  //сразу убираем второй колодец    
  hiddenSeptic.forEach((e) =>{ 
    e.style.display = 'none';
  });

  //проверка вводимых дынных-ТОЛЬКО ЦИФРЫ
  // panelBody.addEventListener('input', (e) =>{
  //   let target = e.target;
  //   if(target.matches('.focus-visible')){
  //     target.value = target.value.replace(/\D/g, ''); // ограничиваем ввод всего кроме цифр
  //   }
  // });

  const countSum = () =>{  
    const SepticOneBeffor = 15000,//камера
          SeptictwoAfter = 10000;

    let countSept = 0,
        calcResult = 0,
        typeValue = 0;

  const select = () =>{
    inputChexbox.forEach((elem)=>{
      elem.addEventListener('change', ()=>{
          if(myonoffswitch.checked === true){
            countSept = SeptictwoAfter;
            calcResult = countSept;
              calcResultInput.value = Math.floor(calcResult + (calcResult * typeValue) + (calcResult * typeValue));

            hiddenSeptic.forEach((e) =>{
              e.style.display = 'none';
            })
          }else if(myonoffswitch.checked === false){
            countSept = SepticOneBeffor
            calcResult = countSept;
            calcResultInput.value = Math.floor(calcResult + (calcResult * typeValue) + (calcResult * typeValue) + (calcResult * typeValue) +(calcResult * typeValue));
            hiddenSeptic.forEach((e) =>{
              e.style.display = 'inline-block';
            })
          }
        });
      });
    };
    formControl.forEach((elem) =>{
      elem.addEventListener('click', ()=>{
        typeValue = elem.options[elem.selectedIndex].value;//получаем наше value 
        select();
        console.log(typeValue);
      })
    });
  }  ;    



  panel.forEach((elem) =>{
    elem.addEventListener('change', (e) =>{
      let target = e.target;
      if(target.matches('select') || target.matches('input')){
        countSum();
      }
    });
  });

};
export default calc;
