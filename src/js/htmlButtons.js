const buttons = {
	aboutButton: function(){
	let aboutButton = document.querySelector('.about-button');
	aboutButton.addEventListener('click',() => {
			elements.createAbout();
		});
	},

	expButton: function(){
		let expButton = document.querySelector('.experience-button');
		expButton.addEventListener('click', () => {
			elements.createExp();
		});
	},
  kaleoButton: function(className){
    let list = document.querySelector(className);
    list.addEventListener('click', () => {
      let add = document.querySelector('.kaleoList'); 
      if(add.innerHTML === '') { 
        for(let i = 0; i < kaleo.length; i++){
          add.innerHTML += kaleo[i];
        }
      }
      else{
        add.innerHTML = '';
      }
    });
  },
  scelButton: function(className){
    let list = document.querySelector(className);
    list.addEventListener('click', () => {
      let add = document.querySelector('.scelList'); 
      if(add.innerHTML === '') { 
        for(let i = 0; i < scel.length; i++){
          add.innerHTML += scel[i];
        }
      }
      else{
        add.innerHTML = '';
      }
    });
  },
  droneButton: function(className){
    let list = document.querySelector(className);
    list.addEventListener('click', () => {
      let add = document.querySelector('.droneList'); 
      if(add.innerHTML === '') { 
        for(let i = 0; i < drone.length; i++){
          add.innerHTML += drone[i];
        }
      }
      else{
        add.innerHTML = '';
      }
    });
  },
  ieeeButton: function(className){
    let list = document.querySelector(className);
    list.addEventListener('click', () => {
      let add = document.querySelector('.ieeeList'); 
      if(add.innerHTML === '') { 
        for(let i = 0; i < ieee.length; i++){
          add.innerHTML += ieee[i];
        }
      }
      else{
        add.innerHTML = '';
      }
    });
  },
  sabButton: function(className){
    let list = document.querySelector(className);
    list.addEventListener('click', () => {
      let add = document.querySelector('.sabList'); 
      if(add.innerHTML === '') { 
        for(let i = 0; i < sab.length; i++){
          add.innerHTML += sab[i];
        }
      }
      else{
        add.innerHTML = '';
      }
    });
  },
};

