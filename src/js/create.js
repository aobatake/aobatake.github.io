const elements = {
 	createElement: function(html,text='',classList){
 		let element = document.createElement(html);
 		element.textContent = text;
 		element.classList = classList;
 		return element;
 	},
 	createAbout: function(){
 		let paragraph = document.querySelector('.section-body-about');
		paragraph.innerHTML = about.headers.main + about.body.top + '<br>' + about.body.bot; 	
	},
 	createExp: function(){
 		let paragraph = document.querySelector('.section-body-about');
 		let grpList = '<ul class="grpList">' + exp.projects.kaleo + exp.projects.scel + exp.projects.drone + '</ul>';
 		let extraList = '<ul class="extraList">' + exp.extra.ieee + exp.extra.sab + '</ul>'; 
		paragraph.innerHTML = exp.headers.projects + grpList + exp.headers.extra + extraList;
 	},


 };
