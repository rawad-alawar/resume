
var bio = {
	'name': "Rawad Al-awar",
	'role': "Javascript Ninja/Assasin",
	'contact':{
		"phone": '(919) 223-6818',
		"email": 'ralawar54@gmail.com',
		"github": 'rawad-alawar',
		"location": 'Austin, Texas'
	},
	'picture': 'images/sasunrise.JPG',
	'welcomeMessage':"Hello World!",
	'skills': ['Javascript',' Python', ' Matlab', ' Data Analysis']
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);

var work = {
	"jobs": [
			{
				"employer": "Trican Well Services",
				"title": "Field Engineer I",
				"location": "Odessa, Texas, USA",
				"datesWorked": "June, 2015 to October, 2015",
				"description": "Run frac and cement jobs."
			},

			{
				"employer": "Trican Well Services",
				"title": "Special Projects Engineer",
				"location": "The Woodlands, Texas, USA",
				"datesWorked": "March, 2014 to January, 2015",
				"description": "Analyse geomechanics data."
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
		"certificates": "Business Administration",
		"program": ''
		},

		{
			"name": "Enspiral DevAcademy",
			"datesAttended": "2016",
			"location": "Wellington, New Zealand",
			"program": "Front End Development",
			"major": ''
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
				"title": "Resume",
				"dates": "February, 2016",
				"description": "Built my resume",
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
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contact.github));
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contact.email));
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contact.phone));
//formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contact.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

for (i in formattedContactInfo){

	$("#topContacts").append(formattedContactInfo[i])
}


if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (i in bio.skills){
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkills);
	}
};

function displayWork (){
if (work.jobs.length >0) {
	

	for (i in work.jobs){

		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
		var formattedWorkTitle = HTMLworkTitle.replace('%data%',work.jobs[i]["title"]);
		var formattedWorkLocation = HTMLworkLocation.replace('%data%',work.jobs[i].location);
		var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[i].datesWorked);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);

		var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;
		$('#workExperience').append(HTMLworkStart);
		$('.work-entry:last').append(formattedEmployerWorkTitle);
		$('.work-entry:last').append(formattedWorkLocation);
		$('.work-entry:last').append(formattedWorkDates);
		$('.work-entry:last').append(formattedWorkDescription);
	}
}
}

displayWork();

$(document).click(function(loc) { 
	
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);

	});

$('#main').append(internationalizeButton);
function inName() {
    var finalName = $('#name').text();
    var firstName = '';
    var firstLetter = '';
    var lastName = '';
    // Your code goes here!
    finalName = finalName.toLowerCase();
    firstName = finalName.slice(0, finalName.indexOf(' '));
    
    firstLetter= firstName[0].toUpperCase();
    
    firstName = firstLetter+ firstName.slice(1,firstName.length);
    
    lastName = finalName.slice(finalName.indexOf(" "), finalName.length);
    lastName = lastName.toUpperCase();
    // Don't delete this line!
    finalName = firstName+lastName;
    return finalName;
}

projects.display = function(){
	if (projects.projects.length>0){

		for (i in projects.projects){
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title)
			var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates)
			var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description)

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);
		}

		for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
	}
}

projects.display();

education.display = function () {
	if(education.schools.length > 0) {
		for (i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedSchoolProgram = HTMLschoolProgram.replace("%data%", education.schools[i].program)
			
			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolProgram);
			
		}
	}

	if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
}

education.display();

$('#mapDiv').append(googleMap);