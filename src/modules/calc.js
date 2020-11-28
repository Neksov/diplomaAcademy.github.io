const calc = () =>{
  const inputChexbox = document.querySelectorAll('[type=checkbox]'),
        hiddenSeptic = document.querySelectorAll('.hiddenSeptic'),
        inputMetr = document.querySelector('[type = metr]'),

        calcResult = document.getElementById('calc-result');
console.log(inputMetr);

  let myonoffswitch = document.getElementById('myonoffswitch'),
      myonoffswitchTwo = document.getElementById('myonoffswitch-two'),
      countSept;

  //сразу убираем второй колодец    
  hiddenSeptic.forEach((e) =>{ 
    e.style.display = 'none';
  });

  //проверка вводимых дынных-ТОЛЬКО ЦИФРЫ
  // inputMetr.addEventListener('input', (e) =>{
  //   let target = e.target;
  //   if(target.matches('metr')){
  //     target.value = target.value.replace(/\D/g, ''); // ограничиваем ввод всего кроме цифр
  //   }
  // });
  
  const SepticOneBeffor = 15000,//камера
        SeptictwoAfter = 10000,
        
        oneBottom = 0.1,//днище
        twoBottom = 0.2;


  inputChexbox.forEach((elem)=>{
    elem.addEventListener('click', ()=>{
        if(myonoffswitch.checked === true){
          countSept = SeptictwoAfter;
          hiddenSeptic.forEach((e) =>{
            e.style.display = 'none';
          })
          console.log(countSept);

        }else if(myonoffswitch.checked === false){
          countSept = SepticOneBeffor
          hiddenSeptic.forEach((e) =>{
            e.style.display = 'inline-block';
          })
          console.log(countSept);
        }
      });
  });
  
};
export default calc;
