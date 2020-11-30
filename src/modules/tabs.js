const tabs = () =>{
  const panelGroup  = document.querySelectorAll('.panel-group'),
        panel = document.querySelectorAll('.panel'),
        collapse = document.querySelectorAll('.collapse');

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
      if (event.target.closest('.construct-btn2')) {
        const panelВefault = event.target.closest('.panel-default');
        const panelСollapse = panelВefault.querySelector('.collapse');
        const nextBlock = panelВefault.nextSibling.nextSibling;
        const nextBlockChild = nextBlock.querySelector('.collapse');

        panelСollapse.classList.remove('in');
        nextBlockChild.classList.add('in');
    }
    })

  });
};
export default tabs;