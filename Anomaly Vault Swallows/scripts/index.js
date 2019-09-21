var picturesDisabled = false;
var saveName;
var saveHidden = true;
var selfHidden = true;
var imagesDisabled = false;
var randNum;
var tempScene;
var kettleCounter = 0;
var ethicsCounter = 0;
var data = {
	player: {
		fName: "You",
		lName: "",
		age: "25",
		color: "Blue",
		artifact1: "",
		artifact2: "",
		character: "red",
		currentScene: "start",
		time: "Morning",
		day: 0,
	},
	story: [
		{index: "roommate", image: "", met: false, fName: "Sophia", lName: "Leone", desc:"Your roommate, a lesbian schoolteacher.",},
		{index: "assistant", image: "", met: false, fName: "Veronica", lName: "Rodriguez", desc:"Your (secretly kinky) assistant at work.",},
		{index: "girlfriend", image: "", met: false, fName: "Asa", lName: "Akira", desc:"Your roommate's girlfriend.",},
		{index: "boss", image: "", met: false, fName: "Peta", lName: "Jensen", desc:"Your direct supervisor.",},
		{index: "librarian", image: "", met: false, fName: "Mia", lName: "Malkova", desc:"Sexually frustrated librarian.",},
		{index: "madame", image: "", met: false, fName: "Lovely Madame", lName: "Sunny Leone", desc:"Phantom who lives inside the perfume bottle.",},
		{index: "gym", image: "", met: false, fName: "Karlee", lName: "Grey", desc:"Owner of the local gym.",},
		{index: "lifeguard", image: "", met: false, fName: "Anissa", lName: "Kate", desc:"Lifeguard at the local beach.",},
		{index: "chair", image: "", met: false, fName: "Priya", lName: "Rai", desc:"Chairwoman of Anomaly Vault.",},
	],
	gallery: [
	],
	bodytypes: [
		{index: "red", name: "Featureless Red"},
		{index: "basic", name: "Sissy"},
		{index: "macho", name: "Macho Man"},
		{index: "shemale", name: "Shemale"},
	],
}

var galleryArray = [
	//Bracelet Events
	{index: "braceletResearch1", dark: false, girl: "assistant", name: "First Research", hint: "Assistant event"},
	{index: "braceletResearch2", dark: false, girl: "assistant", name: "Caught Jilling", hint: "Assistant event"},
	{index: "braceletResearch3", dark: false, girl: "assistant", name: "New Ideas", hint: "Assistant event"},
	{index: "braceletHome1", dark: false, girl: "roommate", name: "Stay-at-Home Fun", hint: "Assistant event"},
	{index: "braceletHome2", dark: false, girl: "roommate", name: "Sexting", hint: "Assistant event"},
	{index: "braceletHome3", dark: false, girl: "girlfriend", name: "Fucking with the Girlfriend", hint: "Assistant event"},
	{index: "braceletOutdoor1", dark: false, girl: "gym", name: "Fitness Instructor's Exercise Plan", hint: "Assistant event"},
	{index: "braceletOutdoor2", dark: false, girl: "gym", name: "Fitness Instructor's Home", hint: "Assistant event"},
	{index: "braceletOutdoor4", dark: false, girl: "swallows", name: "Bar Room Fun", hint: "Assistant event"},
	{index: "braceletDream1", dark: false, girl: "", name: "Bracelet's Fate", hint: "Assistant event"},
	//Erotibox Events
	{index: "erotiboxResearch1", dark: false, girl: "", name: "Demo Reel - Sex Tape", hint: ""},
	{index: "erotiboxResearch3", dark: false, girl: "", name: "Mona Lisa - Work of Art", hint: ""},
	{index: "erotiboxResearch4", dark: false, girl: "", name: "Chessboard - Curseboard", hint: ""},
	{index: "erotiboxResearch5", dark: false, girl: "", name: "$20 - Stripper Money", hint: ""},
	{index: "erotiboxResearch6", dark: false, girl: "", name: "Water Bottle - Aphrodisiac Drink", hint: ""},
	{index: "erotiboxResearch8", dark: false, girl: "assistant", name: "Assistant - Sex Fiend", hint: ""},
	//Antique Mirror Events
	{index: "mirrorResearch1-1", dark: false, girl: "", name: "Gender Dynamics - First Research", hint: ""},
	{index: "mirrorResearch1-2", dark: false, girl: "girlfriend", name: "Gender Dynamics - Train Molester", hint: ""},
	{index: "mirrorResearch1-3", dark: false, girl: "gym", name: "Gender Dynamics - Abduction", hint: ""},
	{index: "mirrorResearch1-4", dark: false, girl: "librarian", name: "Gender Dynamics - Reverse Rape", hint: ""},
	{index: "mirrorResearch1-5", dark: false, girl: "roommate", name: "Gender Dynamics - Teasing a Virgin", hint: ""},
	{index: "mirrorResearch2-1", dark: false, girl: "assistantboss", name: "Public Sex - First Research", hint: ""},
	{index: "mirrorResearch2-2", dark: false, girl: "", name: "Public Sex - Free Use Greeting", hint: ""},
	{index: "mirrorResearch2-3", dark: false, girl: "", name: "Public Sex - Free Use Office", hint: ""},
	{index: "mirrorResearch2-5", dark: false, girl: "", name: "Public Sex - Free Use Gym", hint: ""},
	{index: "mirrorResearch2-4", dark: false, girl: "roommate", name: "Public Sex - Free Use School", hint: ""},
	//Time Stopwatch Events
	{index: "stopwatchResearch1", dark: false, girl: "", name: "Time Stopwatch - First Research", hint: ""},
	{index: "stopwatchResearch2", dark: false, girl: "boss", name: "Time Stopwatch - All at Once", hint: ""},
	{index: "stopwatchResearch3", dark: false, girl: "assistant", name: "Time Stopwatch - Endless Marathon", hint: ""},
	{index: "stopwatchHome1", dark: false, girl: "roommate", name: "Time Stopwatch - Public Embarrassment", hint: ""},
	{index: "stopwatchHome2", dark: false, girl: "roommate", name: "Time Stopwatch - In-Class Fun", hint: ""},
	{index: "stopwatchOutdoor1", dark: false, girl: "", name: "Time Stopwatch - Strip Show", hint: ""},
	{index: "stopwatchDream1", dark: false, girl: "", name: "Stopwatch's fate", hint: ""},
	//Exchange Gas Events
	{index: "gasResearch1", dark: true, girl: "assistant", name: "Exchange Gas - Personal Test", hint: ""},
	{index: "gasResearch2", dark: true, girl: "", name: "Exchange Gas - Assistant Test", hint: ""},
	{index: "gasResearch3", dark: true, girl: "assistant", name: "Exchange Gas - Final Test", hint: ""},
	//Gummy Dicks research
	{index: "gummyResearch1", dark: true, girl: "", name: "Gummy Dicks - Personal Test", hint: ""},
	{index: "gummyResearch2", dark: true, girl: "", name: "Gummy Dicks - Permanent Effects", hint: ""},
	//Cage research
	{index: "cageResearch1", dark: true, girl: "", name: "Punification Cage - Personal Test", hint: ""},
	//Onahole Research
	{index: "onaholeResearch1", dark: true, girl: "", name: "Succubus Onahole - Personal Test", hint: ""},
]

var logbookArray = [
	{index: "roommate", 
		desc: "Your lesbian roommate. She works at some fancy university as a teacher.",
		body: "She's got a really nice figure and gives off a very 'girl next door' vibe'. She often talks about how she gets hit on at her job by students and her coworkers.",
		clothes: "She prefers to wear demure, casual clothing like sweaters and long skirts.",
	},
	{index: "assistant", 
		desc: "Your assistant at Anomaly Vault.",
		body: "She's got a gorgeous, very petite figure. Although she tries to hide it she secretly enjoys her work here.",
		clothes: "Her work outfit isn't too professional, but standards are lax here. She wears a short skirt and a blazer opened enough you can clearly her pink undershirt which doubles as a bra.",
	},
	{index: "girlfriend", 
		desc: "Your roommate's Asian girlfriend. She also works as a teacher.",
		body: "She's rather petite but her confidence takes her far. It seems like she exposes as much skin as she can while still being able to claim she's dressed professionally.",
		clothes: "Unlike your roommate she's a lot more liberal when it comes to flauting herself, usually wearing a thin tanktop and tight jeans.",
	},
	{index: "boss", 
		desc: "Your supervisor at Anomaly Vault, she's extremely experienced in dealing with artifacts.",
		body: "She has a very professional air, almost to the 'stick in her ass' degree. There have been more than a few rumors that she takes artifacts home to improve her sex life.",
		clothes: "Working with the artifacts have given her a very liberal attitude towards showing off her body. She wears the company uniform but isn't shy about opening up to show cleavage.",
	},
	{index: "librarian", 
		desc: "A very superstitious librarian hoping to document the weird occurrences at her library (you) for her dissertation.",
		body: "She's very reserved in general, but you've heard more than a few rumors online that she used to be a model.",
		clothes: "In her small library the work uniform policy is more than a little sexist, and her outfit almost looks like it could be used in a porno. She looks good in it though.",
	},
	{index: "madame", 
		desc: "The spirit who appears before those who inhale the Appreciation Perfume.",
		body: "As a mystical being she has a great deal of control over her own body, but appears before those who can see her as a flawless, beautiful woman.",
		clothes: "The only outfit you've ever seen her in is a sheer robe, you can clearly see through it and it exposes her body.",
	},
	{index: "gym", 
		desc: "A young fitness instructor who works at the local gym.",
		body: "She works out frequently, but still retains a pretty thicc body.",
		clothes: "Despite the fact that it goes transparent when she sweats, her favored outfit is a white top and some small red shorts. She believes the ensemble 'encourages patrons' to exercise harder.",
	},
	{index: "lifeguard", 
		desc: "The dedicated lifeguard at the local private beach.",
		body: "More than a few people talk in quiet tones about how she used to do porn.",
		clothes: "She seems to prefer small bikinis while on the job, and isn't afraid of exposing herself.",
	},
	{index: "chair", 
		desc: "The chairwoman of your branch of Anomaly Vault, she's one of the highest authorities in the company.",
		body: "Nobody knows too many personal details about her, but she has an almost inhuman resistant to most artifacts.",
		clothes: "You've only ever seen her in expensive looking robes. Getting her out of them could prove to be a challenge.",
	},
];

var artifactArray = [
	{index: "bracelet", dark: false, equipable: false, title: "Reprehensive Bracelet", desc: "A partially tarnished silver bracelet.", desc2: "When worn, the wearer can become imperceivable and erase memories of themselves & their actions."},
	{index: "erotibox", dark: false, equipable: false, title: "Erotibox", desc: "A large wooden crate large enough to fit a person inside. <br>Anything put inside the box will become an erotic version of itself.", desc2: ""},
	{index: "mirror", dark: false, equipable: false, title: "Antique Mirror", desc: "An antique mirror dating back to the Victorian era. If a person stares into the eyes of their own reflection long enough, they will 'switch places' with an alternate reality version of themselves.<br>In these alternate realities social norms and the physical body of the person switched with can all be completely different.", desc2: ""},
	{index: "stopwatch", dark: false, equipable: true, title: "Time Stopwatch", desc: "A bronze stopwatch which appears at first glance to be broken, as the second hand jumps backwards every second.", desc2: "When the button at the top is pressed, the clock begins to record the time as normal but time stops for everyone except person holding the watch."},
	{index: "gas", dark: true, equipable: false, title: "Exchange Gas", desc: "Several aerosol gas containers. Subjects who inhale the gas experience a process called 'gender-swapping'. In most cases the process is temporary.", desc2: ""},
	{index: "gummy", dark: true, equipable: false, title: "Gummy Dicks", desc: "A package of several erect dicks seemingly made from the same candy as gummy bears. A fluid inside feminizes men, preventing erections and increasing both prostate size & sensitivity. Effects not permanent unless used repeatedly.", desc2: ""},
	{index: "onahole", dark: true, equipable: false, title: "Succubus Onahole", desc: "A fleshlight or 'onahole' made from an unknown material. Known to cause extreme euphoria when male genetalia is inserted, subjects state tendrils inside 'probed' them. Afterwards, subjects showed an extreme increase in semen production.", desc2: ""},
	{index: "cage", dark: true, equipable: false, title: "Punification Cage", desc: "A plastic pink chastity cage. Wearing it almost immediately triggers a powerful orgasm, but in all cases resulted in an extreme decrease in genital size.", desc2: ""},
];

var roommateF = data.story[0].fName;
var roommateL = data.story[0].lName;
var assistantF = data.story[1].fName;
var assistantL = data.story[1].lName;
var girlfriendF = data.story[2].fName;
var girlfriendL = data.story[2].lName;
var bossF = data.story[3].fName;
var bossL = data.story[3].lName;
var librarianF = data.story[4].fName;
var librarianL = data.story[4].lName;
var madameF = data.story[5].fName;
var madameL = data.story[5].lName;
var gymF = data.story[6].fName;
var gymL = data.story[6].lName;
var lifeguardF = data.story[7].fName;
var lifeguardL = data.story[7].lName;
var chairF = data.story[8].fName;
var chairL = data.story[8].lName;

//Startup & Systems config
function startup() {
	saveSlot(161);
	//alert(data.player.currentScene);
	//console.log(data);
	tempScene = data.player.currentScene;
	if(localStorage.getItem('data160')) {
		loadSlot(160);
		console.log('startup load successful. Now loading autosave at position ' + data.player.currentScene);
	}
	else{
		sceneTransition('start');
	}
}

function disablePictures() {
	if (imagesDisabled == false) {
		document.getElementById("playerImage").style.visibility = "hidden";		
		document.getElementById("playerImage").style.width = "0%";
		document.getElementById("playerImage").style.border = "none";
		imagesDisabled = true;
		sceneTransition(data.player.currentScene);
		document.getElementById('picturesDisabled').innerHTML = `Pictures have been disabled. No large image should appear after this screen. Refresh the game to restore them. Dialog images will still appear, and shop / inventory items will appear to be broken.`;
	}
	else {
		location.reload();
	}
}

function restartButton() {
	var restart = confirm ("restart the game?");
	if (restart == true) {
		loadSlot(161);
	}
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function passTime() {
	switch (data.player.time) {
		case "Morning":
			data.player.time = "Noon";
		break;
		case "Noon":
			data.player.time = "Evening";
		break;
		case "Evening":
			data.player.time = "Night";
		break;
		case "Night":
			if (data.player.currentScene == "newDay") {
				data.player.time = "Morning";
			}
		break;
	}
	console.log('time is now ' + data.player.time);
}

function nap() {
	if (data.player.time == "Night") {
		writeText("You can't take a nap right now.");
	}
	else {
		passTime();
		sceneTransition(tempScene);
	}
}

function nameUpdate() {
	roommateF = data.story[0].fName;
	roommateL = data.story[0].lName;
	assistantF = data.story[1].fName;
	assistantL = data.story[1].lName;
	girlfriendF = data.story[2].fName;
	girlfriendL = data.story[2].lName;
	librarianF = data.story[3].fName;
	librarianL = data.story[3].lName;
	madameF = data.story[4].fName;
	madameL = data.story[4].lName;
	gymF = data.story[5].fName;
	gymL = data.story[5].lName;
	lifeguardF = data.story[6].fName;
	lifeguardL = data.story[6].lName;
	chairF = data.story[7].fName;
	chairL = data.story[7].lName;
}

//Showing & hiding windows
function hideStuff() {
	//console.log("hideStuff start");
	hideSave();
	hideSelf();
	//console.log("hideStuff end");
}

function saveButton() {
	if (saveHidden == true) {
		showSave();
	}
	else {
		hideSave();
	}
}

function hideSave() {
	saveHidden = true;
	document.getElementById("save").style.visibility = "hidden"; 
}

function showSave() {
	hideStuff();
	generateSave();
	saveHidden = false;
	document.getElementById("save").style.visibility = "visible"; 
}

function selfButton() {
	if (selfHidden == true) {
		showSelf();
	}
	else {
		hideSelf();
	}
}

function hideSelf() {
	selfHidden = true;
	document.getElementById("self").style.visibility = "hidden";	
}

function showSelf() {
	hideStuff();
	selfHidden = false;
	document.getElementById("self").style.visibility = "visible"; 
	generateNav();
}

//Scene creation
function writeSpeech (name, img, text) {
	if (img == "") {
		img = "scripts/gamefiles/profiles/"+name+".jpg";
	}
	if (img == "none") {
		img = "scripts/gamefiles/none.png";
	}
	if (name == "player") {
		name = data.player.fName;
		img = "scripts/gamefiles/profiles/" + data.player.character + ".jpg";
	}
	if (name == "notes") {
		name = "Research Notes";
		img = "scripts/gamefiles/profiles/notes.png";
	}
	if (name == "gasF") {
		name = data.player.fName;
		img = "scripts/gamefiles/profiles/gasF.jpg";
	}
	if (name == "gasM") {
		name = assistantF;
		img = "scripts/gamefiles/profiles/gasM.jpg";
	}
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].index == name) {
			name = data.story[i].fName;
			var lName = data.story[i].lName;
		}
	}
	if (name == "Peta") {
		name = "Mrs. " + lName;
	}
	document.getElementById('output').innerHTML +=`
	<div class = "textBox">
		<img class = "textThumb" src = "
			`+ img +`
		">
		<p class = "textName">`+ name + `</p>
		<p>` + text + `</p>
	</div>
	<br>
	`;
}

function writeArtifact (name) {
	console.log("Now writing artifact tab id " + name);
	var researchStatus = 0;
	var researchTotal = 0;
	var desc2 = "";
	for (i = 0; i < artifactArray.length; i++) {
		if (artifactArray[i].index == name) {
			var jam = i;
			var title = artifactArray[i].title;
			var desc = artifactArray[i].desc;
			var artifactResearchCheck = name + "Research1";
			if (artifactArray[i].equipable == true) {
				console.log("artifact is equippable");
				if (galleryCheck(artifactResearchCheck) == true) {
					console.log("artifact has been researched");
					var equip = "Equip";
					desc2 = artifactArray[jam].desc2;
				}
				else {
					console.log("artifact has not been researched");
					var equip = "";
					desc2 = "";
				}
			}
			else {
				console.log("artifact is not equippable");
				if (galleryCheck(artifactResearchCheck) == true) {
					console.log("artifact has been researched");
					desc2 = artifactArray[jam].desc2;
				}
				else {
					console.log("artifact has not been researched");
					desc2 = "";
				}
				var equip = "";
			}
		}
	}
	//console.log('now checking number of scenes');
	for (i = 0; i < galleryArray.length; i++) {
		if (galleryArray[i].index.includes(name)) {
			researchTotal += 1;
			if (galleryCheck(galleryArray[i].index) == true) {
				researchStatus += 1;
			}
		}
	}
	console.log('Scenes found, current progress is ' + researchStatus + ' of ' + researchTotal);
	//console.log('now determining appropriate research level');
	document.getElementById('output').innerHTML +=`
	<div class = "textBox">
		<img class = "textThumb" src = "scripts/gamefiles/items/`+ name +`.jpg">
		<p class = "textName">`+ title + `</p>
		<p class = "textName">Research Status: `+researchStatus+` of `+researchTotal+` scenes unlocked</p>
		<p>
			<span class = "choiceText" onclick = "sceneTransition('`+name+`Research')">Research</span>   
			<span class = "choiceText" onclick = "equip('`+name+`')">`+equip+`</span>
		</p>
		<p class = "textName">`+ desc + `</p>
		<p class = "textName">`+ desc2 + `</p>
	</div>
	<br>
	`;
}

function writeBig (img, cap) {
	if (imagesDisabled != true) {
	document.getElementById('output').innerHTML += `
		<img class="bigPicture" src="` + img + `">
		<br>
	`;
	}
}

function writeMed (img, cap) {
	if (imagesDisabled != true) {
	document.getElementById('output').innerHTML += `
		<img class="medPicture" src="` + img + `">
		<br>
	`;
	}
}

function writeTransition (name, scene) {
	document.getElementById('output').innerHTML += `
		<p class="choiceText" onclick="sceneTransition('` + name + `')">
			` + scene + `
		</p>
	`;
}

function writeFunction (name, func) {
	document.getElementById('output').innerHTML += `
		<p class="choiceText" onclick="` + name + `">
			` + func + `
		</p>
	`;
}

function writeSpecial (text) {
	document.getElementById('output').innerHTML += `
		<p class = "specialText">` + text + `</p>
	`;
}

function writeText (text) {
	document.getElementById('output').innerHTML += `
		<p class='rawText'>` + text + `</p>
	`;
}
	
function sceneTransition(scene) {
	console.log("scene transition started");
	wrapper.scrollTop = 0;
	updateMenu();
	hideStuff();
	document.getElementById('output').innerHTML = '';
	tempScene = scene;
	writeScene(scene);
	data.player.currentScene = scene;
	console.log(data.player.currentScene);
	saveSlot(160);
	console.log("scene transition end");
}

function writePorn() {
	console.log("Now generating porn for day ID" + data.player.dayID);
	var pornID = data.player.dayID - 1;
	document.getElementById('output').innerHTML = '';
	if (imagesDisabled != true) {
		document.getElementById('output').innerHTML += `
			<img class="medPicture" onclick="writeEvent('porn`+pornID+`A')" src="images/porn/` + pornID + `A.jpg">
			<br>
		`;
	}
	else {
		writeText("The porn system is disabled without images.");
	}
}

function dreamCheck() {
	var event = false;
	var dreamChecker = data.player.artifact1 + "Dream" + "1";
	for (i = 0; i < galleryArray.length; i++) {
		if (dreamChecker == galleryArray[i].index) {
			if (galleryCheck(dreamChecker)==false) {
				event = dreamChecker;
			}
		}
	}
	dreamChecker = data.player.artifact2 + "Dream" + "2";
	for (i = 0; i < galleryArray.length; i++) {
		if (dreamChecker == galleryArray[i].index) {
			if (galleryCheck(dreamChecker)==false) {
				event = dreamChecker;
			}
		}
	}
	dreamChecker = data.player.artifact2 + "Dream" + "1";
	for (i = 0; i < galleryArray.length; i++) {
		if (dreamChecker == galleryArray[i].index) {
			if (galleryCheck(dreamChecker)==false) {
				event = dreamChecker;
			}
		}
	}
	switch (data.player.day) {
		case 0:
			event = 'dream0'; 
		break;
		case 1: 
			event = 'dream1';
		break;
	}
	tempScene = 'room';
	console.log('Final dream check result is ' + event);
	return event;
}

function researchLevel(name) {
	var artifactResearchName = name + 'Research';
	var failed = true;
	var sceneTarget = name + 'Failed';
	for (i = 0; i < galleryArray.length; i++) {
		if (galleryArray[i].index.includes(artifactResearchName)) {
			if (galleryCheck(galleryArray[i].index) != true) {
				failed = false;
				sceneTarget = galleryArray[i].index;
				break;
			}
		}
	}
	console.log('research level is ' + sceneTarget);
	if (failed == false) {
		writeEvent(sceneTarget);
	}
	else {
		sceneTransition(sceneTarget);
	}
}

//Menu
function updateMenu() {
	var researchStatus = 0;
	var researchTotal = 0;
	document.getElementById('playerName').innerHTML = data.player.fName + ' ' + data.player.lName;
	document.getElementById('day').innerHTML = "Day " + data.player.day + " - " + data.player.time;
	document.getElementById('playerImage').src = "scripts/gamefiles/characters/"+data.player.character+".jpg";
	for (i = 0; i < galleryArray.length; i++) {
		if (galleryArray[i].dark != true) {
			researchTotal += 1;
			if (galleryCheck(galleryArray[i].index) == true) {
				researchStatus += 1;
			}
		}
	}
	document.getElementById('scenesTotal').innerHTML = researchStatus + ' of ' + researchTotal + ' total scenes unlocked';
	researchStatus = 0;
	researchTotal = 0;
	if (data.player.artifact1 != "") {
		document.getElementById("playerArtifact1").style.width = "95%";
		document.getElementById("playerArtifact1").style.border = "3px solid white";
		document.getElementById('playerArtifact1').src = "scripts/gamefiles/items/"+data.player.artifact1+".jpg";
		document.getElementById('playerArtifact1Mobile').innerHTML = data.player.artifact1;
		for (i = 0; i < artifactArray.length; i++) {
			if (artifactArray[i].index == data.player.artifact1) {
				name = artifactArray[i].index;
			}
		}
		for (i = 0; i < galleryArray.length; i++) {
			if (galleryArray[i].index.includes(name)) {
				researchTotal += 1;
				if (galleryCheck(galleryArray[i].index) == true) {
					researchStatus += 1;
				}
			}
		}
		document.getElementById('artifact1Total').innerHTML = researchStatus + ' of ' + researchTotal + ' scenes unlocked';
	}
	else {
		document.getElementById("playerArtifact1").style.width = "0%";
		document.getElementById("playerArtifact1").style.border = "none";
	}
	researchStatus = 0;
	researchTotal = 0;
	if (data.player.artifact2 != "") {
		document.getElementById("playerArtifact2").style.width = "95%";
		document.getElementById("playerArtifact2").style.border = "3px solid white";
		document.getElementById('playerArtifact2').src = "scripts/gamefiles/items/"+data.player.artifact2+".jpg";
		document.getElementById('playerArtifact2Mobile').innerHTML = data.player.artifact2;
		for (i = 0; i < artifactArray.length; i++) {
			if (artifactArray[i].index == data.player.artifact2) {
				name = artifactArray[i].index;
			}
		}
		for (i = 0; i < galleryArray.length; i++) {
			if (galleryArray[i].index.includes(name)) {
				researchTotal += 1;
				if (galleryCheck(galleryArray[i].index) == true) {
					researchStatus += 1;
				}
			}
		}
		document.getElementById('artifact2Total').innerHTML = researchStatus + ' of ' + researchTotal + ' scenes unlocked';
	}
	else {
		document.getElementById("playerArtifact2").style.width = "0%";
		document.getElementById("playerArtifact2").style.border = "none";
	}
}

function changeName() {
	data.player.fName = document.getElementById('nameSubmission').value;
	updateMenu();
}

function flashMoney() {
	flashy();
	setTimeout(flashy, 1000);
}

function flashy() {
	document.getElementById('playerMoney').style.color = (document.getElementById('playerMoney').style.color == 'green' ? 'white' : 'green');
}

function renameEveryone() {
	for (i = 0; i < data.story.length; i++) {
		var sheet = 'nameSubmission' + i + '1';
		data.story[i].fName = document.getElementById(sheet).value;
		var sheet = 'nameSubmission' + i + '2';
		data.story[i].lName = document.getElementById(sheet).value;
	}
	sceneTransition("room");
}

function renamePlayer() {
	data.player.fName = document.getElementById('nameSubmission').value;
	data.player.lName = document.getElementById('lastSubmission').value;
	data.player.age = document.getElementById('ageSubmission').value;
	data.player.color = document.getElementById('colorSubmission').value;
	sceneTransition("prologue3");
}

function equip(n) {
	data.player.artifact2 = n;
	updateMenu();
	document.getElementById('output').innerHTML = '';
	for (i = 0; i < artifactArray.length; i++) {
		if (artifactArray[i].index == n) {
			var title = artifactArray[i].title;
		}
	}
	writeText("You've equipped the " + title);
	writeTransition(data.player.currentScene, "Go back");
}

function checkArtifact(n) {
	if (n == data.player.artifact1 || n == data.player.artifact2) {
		return true;
	}
	else {
		return false;
	}
}

//Saving
function saveSlot(slot) {
	saveName = "data" + slot;
	localStorage.setItem(saveName,JSON.stringify(data));
	var date = new Date();
	date = date.toDateString() + " " + date.toLocaleTimeString();
	saveName = "date" + slot;
	localStorage.setItem(saveName,date);
	generateSave();
}

function deleteSlot(slot) {
	saveName = "data" + slot;
	localStorage.removeItem(saveName);
	console.log("Saved data");
	saveName = "date" + slot;
	localStorage.removeItem(saveName);
	generateSave();
}

function loadSlot(slot) {
	saveName = "data" + slot;
	data = localStorage.getItem(saveName);
	data = JSON.parse(data);
	console.log("loaded data");
	sceneTransition(data.player.currentScene);
	updateSave();
	nameUpdate();
}

function saveFile(){
	hideStuff();
	document.getElementById('output').innerHTML = '';
	writeText("Copy the full length below and paste it into the input box when you want to load the data. I recommend copying to a txt file.");
	writeText("" + JSON.stringify(data) + "");
	writeTransition(data.player.currentScene, "Finished copying");
}

function loadFile(){
	data = prompt("Please paste the data", "");
	data = JSON.parse(data);
	saveSlot(160);
	loadSlot(160);
	if (data.player.fName == null) {
		alert("Invalid pasted data! If we tried to use this, the game would completely break!");
		loadSlot(161);
	}
	else {
		saveSlot(160);
		loadSlot(160);
	}
	updateSave();
	nameUpdate();
}

function generateSave() {
	for (i = 151; i < 159; i++) {
		var searchName = 'data' + i;
		if(localStorage.getItem(searchName)) {
			var buttonName = 'load' + i + 'Button';
			document.getElementById(buttonName).innerHTML = "LOAD";
			var buttonName = 'delete' + i + 'Button';
			document.getElementById(buttonName).innerHTML = "DELETE";
			var buttonName = 'save' + i + 'Date';
			var dateName = 'date' + i;
			document.getElementById(buttonName).innerHTML = localStorage.getItem(dateName);
		}
		else {
			var buttonName = 'load' + i + 'Button';
			document.getElementById(buttonName).innerHTML = "";
			var buttonName = 'delete' + i + 'Button';
			document.getElementById(buttonName).innerHTML = "";
			var buttonName = 'save' + i + 'Date';
			document.getElementById(buttonName).innerHTML = "";
		}
	}
}

function updateSave() {
	saveSlot(160);
}

//Gallery
function unlockScene(n) {
	var unlockedScene = "";
	for (i = 0; i < galleryArray.length; i++) {
		if (galleryArray[i].index == n) {
			unlockedScene = galleryArray[i];
		}
	}
	if (unlockedScene != "") {
		data.gallery.push(unlockedScene);
		writeSpecial("You unlocked a new scene in the gallery!");
	}
	else {
		console.log("Unlocking error, no scene named "+n+" found.");
	}
}

function generateGalleryNav() {
	for (i = 0; i < artifactArray.length; i++) {
		if (artifactArray[i].dark == false) {
			document.getElementById('output').innerHTML += `
				<div class = "textBox" onclick="generateArtifactPage('` + artifactArray[i].index + `')" >
					<img class = "textThumb" src = "scripts/gamefiles/items/`+ artifactArray[i].index +`.jpg">
					<br>
					<span class = "choiceText" onclick="generateArtifactPage('` + artifactArray[i].index + `')">`+artifactArray[i].title +`</span>
				</div>
				<br>
			`;
		}
	}
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].met == true) {
			document.getElementById('output').innerHTML += `
			<div class = "textBox" onclick="generateGirlPage('` + data.story[i].index + `')" >
				<img class = "textThumb" src = "scripts/gamefiles/profiles/`+ data.story[i].index +`.jpg">
				<br>
				<span class = "choiceText" onclick="generateGirlPage('` + data.story[i].index + `')">`+data.story[i].fName + ` ` + data.story[i].lName +`</span>
			</div>
			<br>
			`;
		}
	}
	document.getElementById('output').innerHTML += `
		<div class = "textBox" onclick="generateSwallowsPage()" >
			<img class = "textThumb" src = "scripts/gamefiles/profiles/swallows.png">
			<br>
			<span class = "choiceText" onclick="generateSwallowsPage()">Scenes written by Swallows999</span>
		</div>
		<br>
	`;
	writeFunction("generateDarkGalleryNav()", "View the dark vault gallery");
}

function generateDarkGalleryNav() {
	document.getElementById('output').innerHTML = '';
	for (i = 0; i < artifactArray.length; i++) {
		if (artifactArray[i].dark == true) {
			document.getElementById('output').innerHTML += `
				<div class = "textBox" onclick="generateArtifactPage('` + artifactArray[i].index + `')" >
					<img class = "textThumb" src = "scripts/gamefiles/items/`+ artifactArray[i].index +`.jpg">
					<br>
					<span class = "choiceText" onclick="generateArtifactPage('` + artifactArray[i].index + `')">`+artifactArray[i].title +`</span>
				</div>
				<br>
			`;
		}
	}
	writeTransition("gallery", "Go back");
}

function generateArtifactPage(n) {
	document.getElementById('output').innerHTML = '';
	writeBig("scripts/gamefiles/items/"+n+".jpg");
	console.log('checking for ' + n);
	for (i = 0; i < galleryArray.length; i++) {
		//console.log(galleryArray[i].index);
		//console.log(i);
		if (galleryArray[i].index.includes(n)) {
			console.log('event found, unlock status is ' + galleryCheck(galleryArray[i]));
			if (galleryCheck(galleryArray[i].index) == true) {
				writeFunction ("writeEvent('"+galleryArray[i].index+"')", galleryArray[i].name)
			}
		}
	}
	writeTransition(data.player.currentScene, "Go back");
}

function generateSwallowsPage() {
	document.getElementById('output').innerHTML = '';
	writeBig("scripts/gamefiles/profiles/swallows.png");
	for (i = 0; i < data.gallery.length; i++) {
		if (data.gallery[i].girl.includes('swallows')) {
			writeFunction ("writeEvent('"+data.gallery[i].index+"')", data.gallery[i].name)
		}
	}
	writeTransition(data.player.currentScene, "Go back");
}

function generateGirlPage(n) {
	document.getElementById('output').innerHTML = '';
	writeBig("scripts/gamefiles/characters/"+ n +".jpg");
	for (i = 0; i < data.gallery.length; i++) {
		if (data.gallery[i].girl.includes(n)) {
			writeFunction ("writeEvent('"+data.gallery[i].index+"')", data.gallery[i].name)
		}
	}
	writeTransition(data.player.currentScene, "Go back");
}

function galleryCheck(n) {
	for (x = 0; x < data.gallery.length; x++) {
		if (data.gallery[x].index.includes(n)) {
			return true;
			break;
		}
	}
	return false;
}

//Logbook
function generateNav() {
	console.log('now generating logbook navigation');
	document.getElementById('logbookLeft').innerHTML = ``;
	document.getElementById('logbookLeft').innerHTML += `<p class = "logbookSwitch" onclick = "switchDesc('player')">` + data.player.fName + `</p>`;
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].met == true) {
			document.getElementById('logbookLeft').innerHTML += `<p class = "logbookSwitch" onclick = "switchDesc('`+i+`')">` + data.story[i].fName + `</p>`;
		}
	}
	switchDesc('player');
}

function switchDesc(n) {
	if (n != "player") {
		console.log("now loading logbook for character ID " + n + " aka " + data.story[n].index);
		if (imagesDisabled != true) {
			document.getElementById('logbookRight').innerHTML = `
				<img id="selfImage" class="selfImage" src="scripts/gamefiles/characters/`+data.story[n].index+data.story[n].image+`.jpg">
			`;
		}
		document.getElementById('logbookRight').innerHTML += `
			<p class = "selfDesc">Name: `+data.story[n].fName+` `+data.story[n].lName+`</p><br><br>
			<p class = "selfDesc">`+logbookArray[n].desc+`</p><br><br>
			<p class = "selfDesc">`+logbookArray[n].body+`</p><br><br>
			<p class = "selfDesc">`+logbookArray[n].clothes+`</p><br><br>
			<p class = "selfDesc">   </p>br><br>
		`;
	}
	else {
		if (imagesDisabled != true) {
			document.getElementById('logbookRight').innerHTML = `
				<img id="selfImage" class="selfImage" src="scripts/gamefiles/characters/`+data.player.character+`.jpg">
			`;
		}
		var researchStatus = 0;
		var researchTotal = 0;
		for (i = 0; i < galleryArray.length; i++) {
			if (galleryArray[i].dark != true) {
				researchTotal += 1;
				if (galleryCheck(galleryArray[i].index) == true) {
					researchStatus += 1;
				}
			}
		}
		document.getElementById('logbookRight').innerHTML += `
			<p class = "selfDesc">Name: `+data.player.fName+` `+data.player.lName+`</p><br><br>
			<p class = "selfDesc">Day: `+data.player.day+`</p><br><br>
			<p class = "selfDesc">Time: `+data.player.time+`</p><br><br>
			<p class = "selfDesc">Total scenes unlocked: `+researchStatus+` of `+researchTotal+`</p><br><br>
		`;
		if (data.player.artifact1 != "") {
			for (i = 0; i < artifactArray.length; i++) {
				if (artifactArray[i].index == data.player.artifact1) {
					name1 = artifactArray[i].index;
					title1 = artifactArray[i].title;
				}
			}
			var research1Status = 0;
			var research1Total = 0;
			for (i = 0; i < galleryArray.length; i++) {
				if (galleryArray[i].index.includes(name1)) {
					research1Total += 1;
					if (galleryCheck(galleryArray[i].index) == true) {
						research1Status += 1;
					}
				}
			}
			document.getElementById('logbookRight').innerHTML += `
			<p class = "selfDesc">First equipped artifact: `+title1+`<br>`+research1Status+` of `+research1Total+` scenes unlocked</p><br><br>
			`;
		}
		if (data.player.artifact2 != "") {
			for (i = 0; i < artifactArray.length; i++) {
				if (artifactArray[i].index == data.player.artifact2) {
					name2 = artifactArray[i].index;
					title2 = artifactArray[i].title;
				}
			}
			var research2Status = 0;
			var research2Total = 0;
			for (i = 0; i < galleryArray.length; i++) {
				if (galleryArray[i].index.includes(name2)) {
					research2Total += 1;
					if (galleryCheck(galleryArray[i].index) == true) {
						research2Status += 1;
					}
				}
			}
			document.getElementById('logbookRight').innerHTML += `
			<p class = "selfDesc">Second equipped artifact: `+title2+`<br>`+research2Status+` of `+research2Total+` scenes unlocked</p><br><br>
			`;
		}
	}
}

function generateLogbookGallery(n) {
	for (i = 0; i < galleryArray.length; i++) {
		if (galleryArray[i].index.includes(n)) {
			if (galleryCheck(galleryArray[i].index) == true) {
				document.getElementById('logbookRight').innerHTML += '<br><br><p class = "selfDesc">' + galleryArray[i].name + '<br>This scene has been unlocked. Use the laptop to see it again.</p>';
			}
			else {
				document.getElementById('logbookRight').innerHTML += '<br><br><p class = "selfDesc">' + galleryArray[i].name + '<br>' + galleryArray[i].hint + '</p>';
				break;
			}
		}
	}
}

//Cheating
function cheat() {
	//If you're reading this, then please link to my patreon post instead of posting the cheats. The release post of v2 already has a list of cheat codes, and is visible to non-patrons
	var goof = document.getElementById('cheatSubmission').value;
	goof = goof.toLowerCase();
	var goofMessage = "Code does not exist";
	console.log("Testing cheat code " + goof);
	switch (goof) {
		case "swallows999": {
			goofMessage = "Welcome, Swallows."
			if (checkBody("swallows") != true) {
				var goof = {index: "swallows", name: "Anomaly Vault's Sponsor",};
				data.bodytypes.push(goof);
				var target = data.bodytypes.length - 1;
				changeBody(target);
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "new name": {
			data.player.currentScene = "renamingRoom";
			goofMessage = ""
			break;
		}
		case "scp": {
			if (data.player.color.includes('scp') == false) {
				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
				data.player.color += 'scp';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "securecontainprotect": {
			if (data.player.color.includes('scp') == false) {
				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
				data.player.color += 'scp';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "secure contain protect": {
			if (data.player.color.includes('scp') == false) {
				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
				data.player.color += 'scp';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "lobotomy": {
			if (data.player.color.includes('lobotomy') == false) {
				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
				data.player.color += 'lobotomy';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "lobotomycorp": {
			if (data.player.color.includes('lobotomy') == false) {
				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
				data.player.color += 'lobotomy';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "lobotomy corporation": {
			if (data.player.color.includes('lobotomy') == false) {
				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
				data.player.color += 'lobotomy';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "umbrella": {
			if (data.player.color.includes('umbrella') == false) {
				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
				data.player.color += 'umbrella';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "resident evil": {
			if (data.player.color.includes('umbrella') == false) {
				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
				data.player.color += 'umbrella';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "silent hill": {
			if (data.player.color.includes('silent') == false) {
				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
				data.player.color += 'silent';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "warehouse13": {
			if (data.player.color.includes('warehouse') == false) {
				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
				data.player.color += 'warehouse';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "warehouse 13": {
			if (data.player.color.includes('warehouse') == false) {
				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
				data.player.color += 'warehouse';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "fringe": {
			if (data.player.color.includes('fringe') == false) {
				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
				data.player.color += 'fringe';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "ethics": {
			if (data.player.color.includes('ethics') == false) {
				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
				data.player.color += 'ethics';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "welcome to ethics": {
			if (data.player.color.includes('ethics') == false) {
				goofMessage = "Code accepted. Forbidden artifact unlocked in the dark vault."
				data.player.color += 'ethics';
			}
			else {
				goofMessage = "You've already used this code."
			}
			break;
		}
		case "noodlemaster": {
			for (x = 0; x < galleryArray.length; x++) {
				if (galleryCheck(galleryArray[x].index)== false) {
					unlockScene(galleryArray[x].index);
				}
			}
			goofMessage = "Master code accepted. All scenes unlocked."
			break;
		}
		case "haa": {
			goofMessage = "Sorry. Nothing's here right now. Please keep this code in mind for later though."
			break;
		}
		case "human alteration app": {
			goofMessage = "Sorry. Nothing's here right now. Please keep this code in mind for later though."
			break;
		}
		case "rainy dayz": {
			goofMessage = "Sorry. Nothing's here right now. Please keep this code in mind for later though."
			break;
		}
		case "princess quest": {
			goofMessage = "Sorry. Nothing's here right now. Please keep this code in mind for later though."
			break;
		}
		case "bitch medicenter": {
			goofMessage = "Sorry. Nothing's here right now. Please keep this code in mind for later though."
			break;
		}
		case "hentai university": {
			goofMessage = "Sorry. Nothing's here right now. Please keep this code in mind for later though."
			break;
		}
	}
	sceneTransition(data.player.currentScene);
	writeText(goofMessage);
}

function listCheats() {
	if (data.player.color.includes('scp') == true) {
		document.getElementById('output').innerHTML +=`
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/doctor.jpg">
			<p class = "textName">'Plague' Doctor</p>
			<p class = "textName">Research Status: N/A</p>
			<p>
				<span class = "choiceText" onclick = "sceneTransition('doctorResearch')">Research</span>   
			</p>
			<p class = "textName">A mysterious woman dressed in a skimpy version of a medieval plague doctor's uniform. Very dangerous.</p>
		</div>
		<br>
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/talisman.jpg">
			<p class = "textName">Talisman</p>
			<p class = "textName">Research Status: N/A</p>
			<p>
				<span class = "choiceText" onclick = "sceneTransition('talismanResearch')">Research</span>
			</p>
			<p class = "textName">A possessed talisman. There's a sticky note on it saying 'DO NOT TOUCH'</p>
		</div>
		<br>
		`;
	}
	if (data.player.color.includes('lobotomy') == true) {
		document.getElementById('output').innerHTML +=`
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/magical.jpg">
			<p class = "textName">Magical Girl</p>
			<p class = "textName">Research Status: N/A</p>
			<p>
				<span class = "choiceText" onclick = "sceneTransition('magicalResearch')">Research</span>
			</p>
			<p class = "textName">A woman proclaiming herself to be a champion of justice. You're pretty sure she was fished up from a river somewhere.</p>
		</div>
		<br>
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/blue.jpg">
			<p class = "textName">Blue Star</p>
			<p class = "textName">Blue Star</p>
			<p>
				<span class = "choiceText" onclick = "sceneTransition('blueResearch')">Blue Star</span>
			</p>
			<p class = "textName">Blue Star</p>
		</div>
		<br>
		`;
	}
	if (data.player.color.includes('warehouse') == true) {
		document.getElementById('output').innerHTML +=`
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/kettle.jpg">
			<p class = "textName">Wish-granting Kettle</p>
			<p class = "textName">Research Status: N/A</p>
			<p>
				<span class = "choiceText" onclick = "sceneTransition('kettleResearch')">Research</span>
			</p>
			<p class = "textName">A rusty old kettle. It showed some promise at one point, but it's creators clearly had the wrong focus and it just isn't as shiny as everything else.</p>
		</div>
		<br>
		`;
	}
	if (data.player.color.includes('fringe') == true) {
		document.getElementById('output').innerHTML +=`
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/fringe.jpg">
			<p class = "textName">Ultra Top Secret Room</p>
			<p class = "textName">Research Status: N/A</p>
			<p>
				<span class = "choiceText" onclick = "sceneTransition('fringeResearch')">Research</span>
			</p>
			<p class = "textName">A super locked room, you aren't allowed to go in here. The end of the door's paint job is much, much more lazily done than the rest.</p>
		</div>
		<br>
		`;
	}
	if (data.player.color.includes('umbrella') == true) {
		document.getElementById('output').innerHTML +=`
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/umbrella.jpg">
			<p class = "textName">Zombie Virus</p>
			<p class = "textName">Research Status: N/A</p>
			<p>
				<span class = "choiceText" onclick = "sceneTransition('umbrellaResearch')">Research</span>
			</p>
			<p class = "textName">A vial containing a zombification virus. Hopefully it makes hot zombies, not gross ones.</p>
		</div>
		<br>
		`;
	}
	if (data.player.color.includes('silent') == true) {
		document.getElementById('output').innerHTML +=`
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/silent.jpg">
			<p class = "textName">Nurse's Room</p>
			<p class = "textName">Research Status: N/A</p>
			<p>
				<span class = "choiceText" onclick = "sceneTransition('silentResearch')">Research</span>
			</p>
			<p class = "textName">A room full of strange creatures, which probably symbolize a really deep message about sexuality or something.</p>
		</div>
		<br>
		`;
	}
	if (data.player.color.includes('ethics') == true) {
		document.getElementById('output').innerHTML +=`
		<div class = "textBox">
			<img class = "textThumb" src = "scripts/gamefiles/items/ethics.jpg">
			<p class = "textName">Ethics Rock</p>
			<p class = "textName">Research Status: N/A</p>
			<p>
				<span class = "choiceText" onclick = "sceneTransition('ethicsResearch')">Research</span>
			</p>
			<p class = "textName">A rock that dispenses lines of  ethical ramblings. It's a rock though, so it probably doesn't know what its talking about.</p>
		</div>
		<br>
		`;
	}
}

function kettleWish() {
	var goof = document.getElementById('kettleSubmission').value;
	sceneTransition(data.player.currentScene);
	if (goof == "ferret" || goof == "ferrets") {
		kettleCounter +=2;
		writeText("A good wish! For this, you get two ferrets. You have "+kettleCounter+" ferrets.");
	}
	else {
		kettleCounter +=1;
		writeText("Suddenly, out of nowhere, a ferret is here. You have "+kettleCounter+" ferret(s).");
	}
	switch (kettleCounter) {
		case 5:
			writeText("You have a dazzle of ferrets now, they're very cute.");
		break;
		case 7:
			writeText("You might be making too many ferrets. Maybe try wishing for something else?");
		break;
		case 9:
			writeText("Soon you will have too many ferrets.");
		break;
		case 10:
			writeText("You feel like if you keep making ferrets, nothing but ferrets will exist.");
		break;
		case 12:
			writeText("The kettle rumbles a little this time, as if saying 'If this many ferrets do not satisfy you, no wish will.'");
		break;
		case 13:
			writeText("The ferret making will continue forever. When you are satisfied, please scream the number to the heavens.");
		break;
	}
}

function writeWardrobe() {
	for (i = 0; i < data.bodytypes.length; i++) {
		writeMed("scripts/gamefiles/characters/"+data.bodytypes[i].index+".jpg", data.bodytypes[i].artist);
		writeFunction("changeBody('"+i+"')", data.bodytypes[i].name);
	}
}

function checkBody(n) {
	console.log("Now checking for bodytype " + n);
	for (i = 0; i < data.bodytypes.length; i++) {
		if (data.bodytypes[i].index.includes(n)) {
			return true;
			break;
		}
	}
	return false;
}

function changeBody(n) {
	data.player.character = data.bodytypes[n].index;
	data.player.characterArtist = data.bodytypes[n].artist;
	updateMenu();
}