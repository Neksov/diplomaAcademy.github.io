const tabs = () =>{
  const panelGroup  = document.querySelectorAll('.panel-group'),
        panel = document.querySelectorAll('.panel'),
        collapse = document.querySelectorAll('.collapse'),
        constructBtn = document.querySelectorAll('.construct-btn'),
        collapsed = document.querySelectorAll('.collapsed');


  const toggleTabContent = (index) =>{
    for(let i=0; i < panel.length; i++){
      if(index === i){
        panel[i].classList.remove('d-none');
        collapse[i].classList.add('in'); 
      }else{
        panel[i].classList.add('d-none');
        collapse[i].classList.remove('in');
      }
    };
  };

  panelGroup.forEach((e) =>{
    
    e.addEventListener('click', (event) =>{ 
      let target = event.target;
      target = target.closest('.panel'); 
      if (target.matches('.panel')){
        panel.forEach((item, i ) =>{ 
        if (item === target){
          toggleTabContent(i);
        }
        });
      };
    });

    e.addEventListener('click', (event) =>{ 
      if (event.target.closest('.construct-btn')){
        constructBtn.forEach((item, i ) =>{ 
        if (item === event.target){
          toggleTabContent(i+1);
        }
        });
      };
    })

  });
};
export default tabs;