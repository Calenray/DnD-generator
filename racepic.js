//this original code is made by calen ray, and although there is no copywrite, 
//please be kind and credit. thx //
/*
pics?
Humans 			done
Elves 			placeholder
Halflings 		done

Tiefling		done 
Gnome 			done
Halfling 		done duplicate?
Triton 			done

Tabaxi 			done
Half-Elves 		done
Orc 			done
Goblin		Not done!

Genasi			done
Dwarf		Not done!
Firbolg			done
Kor			Not done!
-
Merfolk		Not done!
Hobgoblin		done
Kobold			done
Lizardfolk		done

Aasimar			done
Dragonborn		done
Half-Orc		done
Aarakocra	Not done!
Warforged	Not done!

Kenku			done
Yuan-Ti			done	
Revenant	Not done
Goliath			done
*/
// idea! '<img src="images/' + choice + '.jpg">'  //


function makeNewChar (){
	document.getElementById("picture").innerHTML = '<img src="images/' + choice + '.jpg">';
	document.getElementById("charfield").innerHTML = [
		"<br>Class: " + class0[randomclass] +
		"<br>Race: " + racepicked +
		"<br>--------------------------------- <br> Gender: " + gender[randomgender] +
		"<br>Sexuality: " + sexuality[randomsexuality] +
		"<br>Alignment: " + align[randomalignment] +
		"<br>Age: " + age[randomage] +
		"<br <br>--------------------------------- <br>Background: " + randomBackground +
		"<br> <br>Background: " + randomnumber(9) +
		"<br>Personality trait: " + randomnumber(7) +
		"<br>Bond: " + randomnumber(5) +
		"<br>Ideal: " + randomnumber(5) +
		"<br> <br>--------------------------------- <br> Stats list: <br>" +
		randomstat("<br>Stat one") + randomstat("<br>Stat two") + randomstat("<br>Stat three") + randomstat("<br>Stat four") + randomstat("<br>Stat five") + randomstat("<br>Stat six")
		
	]
};

function makePic () {

	if (racepicked == "Humans") {
		choice = "Humans";
	}

	else if (racepicked == "Elves") {
		choice = "Elve";
	}

	else if (racepicked == "Halflings") {
		choice = "Halflings";
	}
	
	else if (racepicked == "Tiefling") {
		choice = "Tiefling";
	}

	else if (racepicked == "Gnome") {
		choice = "Gnome";
	}

	else if (racepicked == "Halfling") {
		choice = "Halfling";
	}

	else if (racepicked == "Triton") {
		choice = "Triton";
	}

	else if (racepicked == "Tabaxi") {
		choice = "Tabaxi";
	}

	else if (racepicked == "Half-Elves") {
		choice = "HalfElves";
	}

	else if (racepicked == "Orc") {
		choice = "Orc";
	}

	else if (racepicked == "Goblin") {
		choice = "Goblin";
	}

	else if (racepicked == "Genasi") {
		choice = "Genasi";
	}

	else if (racepicked == "Dwarf") {
		choice = "Dwarf";
	}

	else if (racepicked == "Firbolg") {
		choice = "Firebolg";
	}
	else if (racepicked == "Kor") {
		choice = "Kor";
	}

	else if (racepicked == "Merfolk") {
		choice = "Merfolk";
	}

	else if (racepicked == "Hobgoblin") {
		choice = "Hobgoblin";
	}

	else if (racepicked == "Kobold") {
		choice = "Kobold";
	}

	else if (racepicked == "Lizardfolk") {
		choice = "Lizardfolk";
	}

	else if (racepicked == "Aasimar") {
		choice = "Aasimar";
	}

	else if (racepicked == "Dragonborn") {
		choice = "Dragonborn";
	}

	else if (racepicked == "Half-Orc") {
		choice = "HalfOrc";
	}

	else if (racepicked == "Aarakocra") {
		choice = "Aarakocra";
	}

	else if (racepicked == "Warforged") {
		choice = "Warforged";
	}

	else if (racepicked == "Kenku") {
		choice = "Kenku";
	}

	else if (racepicked == "Yuan-Ti") {
		choice = "YuanTi";
	}

	else if (racepicked == "Revenant") {
		choice = "Revenant";
	}

	else if (racepicked == "Goliath") {
		choice = "Goliath";
	}

	else {
		choice = "default";
	}
};




