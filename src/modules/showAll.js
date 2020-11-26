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
export default showAll;