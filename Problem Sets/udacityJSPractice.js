/*var awesomeThoughts = "I am Ra and I am AWESOME!";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
console.log(funThoughts);

$("#main").append(funThoughts);
*/
var name = ("Rawad Al-awar");
var formattedName = HTMLheaderName.replace("%data%", name );


var role = ("Javascript Ninja/Assasin");
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	'name': "Rawad Al-awar",
	'role': "Javascript Ninja/Assasin",
	'contact':{
		"phone": '(919) 223-6818',
		"email": 'ralawar54@gmail.com',
		"github": 'rawad-alawar'
	},
	'picture': 'images/sasunrise.JPG',
	'welcomeMessage':"Hello World!",
	'skills': ['Javascript',' Python', ' Matlab', ' Data Analysis']
};

var work = {
	"jobs": [
			{
				"employer": "Trican Well Services",
				"title": "Field Engineer I",
				"location": "Odessa, Texas, USA",
				"datesWorked": "June, 2015 -October, 2015",
				"description": ""
			},

			{
				"employer": "Trican Well Services",
				"title": "Special Projects Engineer",
				"location": "The Woodlands, Texas, USA",
				"datesWorked": "March, 2014 -January, 2015",
				"description": ""
			}
	]
}

var education = {
	"schools": [
		{"name": "The University of Texas at Austin",
		"datesAttended": "2010 to 2013",
		"location": "Austin, Texas",
		"degree": "BS",
		"major": "Petroleum Engineering",
		"certificates": "Business Administration"
		},

		{
			"name": "Enspiral DevAcademy",
			"datesAttended": "2016",
			"location": "Wellington, New Zealand",
			"program": "Front End Development"
		}
	],

	"onlineCourses":[
		{"title":"Javascript",
		 "school": "Code Academy",
		 "dates": 2016,
		 "url": "https://www.codecademy.com/learn/javascript"
		}

		]
	
};

var projects = {
		"projects": [
			{
				"title": "",
				"datesWorked": "",
				"description": "",
				"images": "",
				"url":""
			}


		]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contact.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contact.github));
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contact.phone));
//formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contact.location));


//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}
/*var mobile = bio.contact.phone;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var email = bio.contact.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var github = bio.contact.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var pic = bio.picture;
var formattedPic = HTMLbioPic.replace("%data%", pic);
$("#header").append(formattedPic);

var welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedWelcomeMessage);

var skills = bio.skills;
var formattedSkills =  HTMLskills.replace("%data%", skills);
$("#header").append(HTMLskillsStart);
$("#skills-h3").append(formattedSkills);*/


if (bio.skills > 0){
	$("#header").append(HTMLskillsStart);
}


