const about = {
	headers: {
		main : '<h1 class="aloha">Aloha!</h1>'
	},
	body : {
		top: '<h5>My name is Andrew Obatake. I was born and raised in Hawaii on the island of Oahu. I am currently a undergraduate student studying computer engineering at the University of Hawaii at Manoa.</h5>',
		bot : '<h5>Through college I found an interest in programming and later found web development to be interesting. This website is a continued work in progress and I hope to improve it the more I learn. Thanks for visiting!</h5>', 
	}

};

const exp = {
	headers: {
		main: '<h1 class="header-exp">Experience</h1>',
		projects: '<h2 class="work">Work / Projects</h2>',
		extra: '<h2>Extracurricular</h2>',
	},
	projects: {
		kaleo: '<li><a class="kaleo">Ka Leo</a><ul class="kaleoList"></ul> </li>',
		scel: '<li> <a class="scel">Smart Campus Energy Lab</a> <ul class="scelList"></ul> </li>',
		drone: '<li> <a class="drone">UH Drone Tech</a> <ul class="droneList"></ul> </li>',
	},
	extra : {
		ieee : '<li> <a class="ieee">IEEE UH Manoa</a> <ul class="ieeeList"></ul></li>' , 
		sab : '<li> <a class="sab">Electrical Engineering Student Advisory Board</a> <ul class="sabList"></ul> </li>',
	},

};

const kaleo = [
	'<li>Responsible for the upkeep and maintenance of the Board of Publications online components.</li>',
	'<li>Helped facilitate a redesign of both website and mobile app</li>'
];

const scel = [
	'<li>Created firmware that used a microcontroller to read sensor values and send them over wireless connection</li>',
	'<li>Mentored high school interns to create a smart plug</li>'
];

const drone = [
	'<li>Created a workflow process to capture, transfer and display photos</li>',
];

const ieee = [
	'<li>Executive Board: Events Coordinator</li>',
];

const sab = [
	'<li>Professional Fees Officer</li>',
	
];