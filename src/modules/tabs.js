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
          };
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
export default tabs;