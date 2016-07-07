const observer = {
  aboutObserve: function(){
    const target = document.querySelector('.section-body-about');
      const observer = new MutationObserver( mutations => {
      if(document.querySelector('.kaleo')){
        buttons.kaleoButton('.kaleo');
        buttons.scelButton('.scel');
        buttons.droneButton('.drone');
        buttons.ieeeButton('.ieee');
        buttons.sabButton('.sab');
      } 
    });
    const config = { attributes: true, childList: true, characterData: true};
    observer.observe(target,config);
  }
};