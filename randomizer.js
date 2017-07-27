//this original code is made by calen ray, and although there is no copywrite, 
//please be kind and credit. thx //
 

//- Race Generator ----------//
var race1 = ["Humans", "Elves", "Halflings"]; // very common
var race2 = ["Tiefling", "Gnome", "Halfling", "Triton"];//common
var race3 = ["Tabaxi", "Half-Elves", "Orc", "Goblin"]; // uncomon
var race4 = ["Genasi", "Dwarf", "Firbolg", "Kor", "Merfolk", "Hobgoblin", "Kobold", "Lizardfolk"]; //rare
var race5 = ["Aasimar", "Dragonborn", "Half-Orc", "Aarakocra", "Warforged"]; //ultra rare
var race6 = ["Kenku", "Yuan-Ti", "Revenant", "Goliath"]; //fucking unicorns
// NEED STATISTICS TO BE FILLED OUT BELOW //
var race = [    
    race1[Math.floor(Math.random()*race1.length)], race1[Math.floor(Math.random()*race1.length)], race1[Math.floor(Math.random()*race1.length)], race1[Math.floor(Math.random()*race1.length)], race1[Math.floor(Math.random()*race1.length)], race1[Math.floor(Math.random()*race1.length)], race1[Math.floor(Math.random()*race1.length)], race1[Math.floor(Math.random()*race1.length)], race1[Math.floor(Math.random()*race1.length)],
    race2[Math.floor(Math.random()*race2.length)], race2[Math.floor(Math.random()*race2.length)], race2[Math.floor(Math.random()*race2.length)], race2[Math.floor(Math.random()*race2.length)], race2[Math.floor(Math.random()*race2.length)], race2[Math.floor(Math.random()*race2.length)],
    race3[Math.floor(Math.random()*race3.length)], race3[Math.floor(Math.random()*race3.length)], race3[Math.floor(Math.random()*race3.length)], race3[Math.floor(Math.random()*race3.length)],
    race4[Math.floor(Math.random()*race4.length)], race4[Math.floor(Math.random()*race4.length)], race4[Math.floor(Math.random()*race4.length)], 
    race5[Math.floor(Math.random()*race5.length)], race5[Math.floor(Math.random()*race5.length)], 
    race6[Math.floor(Math.random()*race6.length)], 
];
var randomrace = Math.floor(Math.random()*race.length);



//--Random Class generator-------------------------------------//
var class1 = ["Fighter", "Ranger", "BARBARIAAAAAAN"]; // very common
var class2 = ["Bard", "Paladin", "Rogue"]; // Common 
var class3 = ["Cleric", "Wizard", "Monk"]; // Uncommon
var class4 = ["Warlock", "Druid", "Sorcerer"]; // Rare
 // NEED STATISTICS TO BE FILLED OUT BELOW //
var class0 = [ //awaiting the statistics from admin.
    class1[Math.floor(Math.random()*class1.length)], 
    
    class2[Math.floor(Math.random()*class2.length)], 
    
    class3[Math.floor(Math.random()*class3.length)], 
    
    class4[Math.floor(Math.random()*class4.length)], 
];
 
var randomclass =Math.floor(Math.random()*class0.length);
 
//---//

//---This is the stats statical array holder. please ignore//------------
var roll1 = [8, 9] ; //50% 25
var roll2 = [10, 11]; //18% 9
var roll3 = [12, 13];//12% 6
var roll4 = [14, 15];//10% 5
var roll5 = [16, 17];//5% 2
var roll6 = [18, 19];//3% 2
var roll7 = 20; //2%             1
 
//-array to hold all the roll types based on statistics-----------------//
// all statistics are drawn from a pool of 50 total possabilities, making it complex... to be simple.lol--//
var roll = [
roll1[Math.floor(Math.random()*2)], roll1[Math.floor(Math.random()*2)], roll1[Math.floor(Math.random()*2)], roll1[Math.floor(Math.random()*2)], roll1[Math.floor(Math.random()*2)], roll1[Math.floor(Math.random()*2)], roll1[Math.floor(Math.random()*2)], roll1[Math.floor(Math.random()*2)], roll1[Math.floor(Math.random()*2)], roll1[Math.floor(Math.random()*2)], roll1[Math.floor(Math.random()*2)], roll1[Math.floor(Math.random()*2)], roll1[Math.floor(Math.random()*2)], roll1[Math.floor(Math.random()*2)], roll1[Math.floor(Math.random()*2)], roll1[Math.floor(Math.random()*2)], roll1[Math.floor(Math.random()*2)], roll1[Math.floor(Math.random()*2)], roll1[Math.floor(Math.random()*2)], roll1[Math.floor(Math.random()*2)], roll1[Math.floor(Math.random()*2)], roll1[Math.floor(Math.random()*2)], roll1[Math.floor(Math.random()*2)], roll1[Math.floor(Math.random()*2)], roll1[Math.floor(Math.random()*2)],
            
roll2[Math.floor(Math.random()*2)], roll2[Math.floor(Math.random()*2)], roll2[Math.floor(Math.random()*2)], roll2[Math.floor(Math.random()*2)], roll2[Math.floor(Math.random()*2)], roll2[Math.floor(Math.random()*2)], roll2[Math.floor(Math.random()*2)], roll2[Math.floor(Math.random()*2)], roll2[Math.floor(Math.random()*2)],
            
roll3[Math.floor(Math.random()*2)],  roll3[Math.floor(Math.random()*2)],  roll3[Math.floor(Math.random()*2)],  roll3[Math.floor(Math.random()*2)],  roll3[Math.floor(Math.random()*2)],  roll3[Math.floor(Math.random()*2)],
 
roll4[Math.floor(Math.random()*2)], roll4[Math.floor(Math.random()*2)], roll4[Math.floor(Math.random()*2)], roll4[Math.floor(Math.random()*2)], roll4[Math.floor(Math.random()*2)],
 
roll5[Math.floor(Math.random()*2)], roll5[Math.floor(Math.random()*2)],
            
roll6[Math.floor(Math.random()*2)], roll6[Math.floor(Math.random()*2)],
            
roll7];

//------------------------------end of stats builder----------------------------------//
 
 
//-- Age generator--------------------------------------------------------------------//
//-  Baby & Toddler, (8%) 4 - Child, (10%) 5 - Teen, (20%) 10 - Young Adult & Adult, (50%) 25 
//- Old & Elderly, (10%) 5  - GONNA DIE TOMORROW BITCH (2%) 1 - //
var age1 = ["Baby", "Toddler"];
var age2 = ["Child", "Old", "Elderly"];
var age3 = ["Teen"];
var age4 = ["Young Adult", "Adult"];
var age5 = ["Gonna Die Tomorrow Bitch"];
 
var age = [
    //8% likely     4 count
    age1[Math.floor(Math.random()*age1.length)], age1[Math.floor(Math.random()*age1.length)], age1[Math.floor(Math.random()*age1.length)], age1[Math.floor(Math.random()*age1.length)], 
    // 10%ish likely, 5count
   age2[Math.floor(Math.random()*age2.length)], age2[Math.floor(Math.random()*age2.length)], age2[Math.floor(Math.random()*age2.length)], age2[Math.floor(Math.random()*age2.length)], age2[Math.floor(Math.random()*age2.length)],
    //20%ish likely, 10count
 age3[Math.floor(Math.random()*age3.length)],  age3[Math.floor(Math.random()*age3.length)], age3[Math.floor(Math.random()*age3.length)], age3[Math.floor(Math.random()*age3.length)], age3[Math.floor(Math.random()*age3.length)], age3[Math.floor(Math.random()*age3.length)], age3[Math.floor(Math.random()*age3.length)], age3[Math.floor(Math.random()*age3.length)], age3[Math.floor(Math.random()*age3.length)], age3[Math.floor(Math.random()*age3.length)],
    //50%ish likely, 25 count
age4[Math.floor(Math.random()*age4.length)], age4[Math.floor(Math.random()*age4.length)], age4[Math.floor(Math.random()*age4.length)], age4[Math.floor(Math.random()*age4.length)], age4[Math.floor(Math.random()*age4.length)], age4[Math.floor(Math.random()*age4.length)], age4[Math.floor(Math.random()*age4.length)], age4[Math.floor(Math.random()*age4.length)], age4[Math.floor(Math.random()*age4.length)], age4[Math.floor(Math.random()*age4.length)], age4[Math.floor(Math.random()*age4.length)], age4[Math.floor(Math.random()*age4.length)], age4[Math.floor(Math.random()*age4.length)], age4[Math.floor(Math.random()*age4.length)], age4[Math.floor(Math.random()*age4.length)], age4[Math.floor(Math.random()*age4.length)], age4[Math.floor(Math.random()*age4.length)], age4[Math.floor(Math.random()*age4.length)], age4[Math.floor(Math.random()*age4.length)], age4[Math.floor(Math.random()*age4.length)], age4[Math.floor(Math.random()*age4.length)], age4[Math.floor(Math.random()*age4.length)], age4[Math.floor(Math.random()*age4.length)], age4[Math.floor(Math.random()*age4.length)], age4[Math.floor(Math.random()*age4.length)], 
    //2%ish likely    1 count
age5[Math.floor(Math.random()*age5.length)], 
];
 
 
var randomage = Math.floor(Math.random()*age.length);
 
//------------------------------------------------------------------------------------//
 
//--Background generator --------------------------------------//
 
/* how it works! 
Function will call on an array that holds the integers based on statistical likelihood, then it will randomly select a single integer from the array that is chosen. Keeping it both random and statistically stacked. */
 
var background1 = ["waterdhavian noble", "Folk Hero", "Inheritor", "Facton Agent"]; // 2% extremely rare.
var background2 = ["Uthgard Tribe Member", "Guild Artisan", "Noble", "Knight of the Order", "Mercenary Veteran"]; // 4% very rare
var background3 = ["Charlatan", "Criminal", "Hermit"]; //8% rare
var background4 = ["Far traveler", "Urban Bounty Hunter", "City Watcher", "Cloistered Scholar", "Courtier"]; // 10% exotic
var background5 = ["Acolyte", "Entertainer", "Urchin"]; //14% uncommon
var background6 = ["Sailor", "Soldier"];// 18% common
var background7 = ["Outlander", "Sage", "Clan Crafter"]; //46% very common
//
// 1 bg1 - 2bg2 - 4 bg3 - 5 bg4 - 7 bg5 - 8 bg6 - 23 bg7 = 50 (* 2) = 100%
var background = [ 
  //extremely rare
background1[Math.floor(Math.random()*background1.length)],
  //very rare
background2[Math.floor(Math.random()*background2.length)], background2[Math.floor(Math.random()*background2.length)],
  //rare
background3[Math.floor(Math.random()*background3.length)], background3[Math.floor(Math.random()*background3.length)], background3[Math.floor(Math.random()*background3.length)], background3[Math.floor(Math.random()*background3.length)],
  // exotic
background4[Math.floor(Math.random()*background4.length)], background4[Math.floor(Math.random()*background4.length)], background4[Math.floor(Math.random()*background4.length)], background4[Math.floor(Math.random()*background4.length)], background4[Math.floor(Math.random()*background4.length)],
  //uncommon
background5[Math.floor(Math.random()*background5.length)], background5[Math.floor(Math.random()*background5.length)], background5[Math.floor(Math.random()*background5.length)], background5[Math.floor(Math.random()*background5.length)], background5[Math.floor(Math.random()*background5.length)], background5[Math.floor(Math.random()*background5.length)], background5[Math.floor(Math.random()*background5.length)],
  //common
background6[Math.floor(Math.random()*background6.length)], background6[Math.floor(Math.random()*background6.length)], background6[Math.floor(Math.random()*background6.length)], background6[Math.floor(Math.random()*background6.length)], background6[Math.floor(Math.random()*background6.length)], background6[Math.floor(Math.random()*background6.length)], background6[Math.floor(Math.random()*background6.length)], background6[Math.floor(Math.random()*background6.length)],
  //very common
background7[Math.floor(Math.random()*background7.length)], background7[Math.floor(Math.random()*background7.length)], background7[Math.floor(Math.random()*background7.length)], background7[Math.floor(Math.random()*background7.length)], background7[Math.floor(Math.random()*background7.length)], background7[Math.floor(Math.random()*background7.length)], background7[Math.floor(Math.random()*background7.length)], background7[Math.floor(Math.random()*background7.length)], background7[Math.floor(Math.random()*background7.length)], background7[Math.floor(Math.random()*background7.length)], background7[Math.floor(Math.random()*background7.length)], background7[Math.floor(Math.random()*background7.length)], background7[Math.floor(Math.random()*background7.length)], background7[Math.floor(Math.random()*background7.length)], background7[Math.floor(Math.random()*background7.length)], background7[Math.floor(Math.random()*background7.length)], background7[Math.floor(Math.random()*background7.length)], background7[Math.floor(Math.random()*background7.length)], background7[Math.floor(Math.random()*background7.length)], background7[Math.floor(Math.random()*background7.length)], background7[Math.floor(Math.random()*background7.length)], background7[Math.floor(Math.random()*background7.length)], background7[Math.floor(Math.random()*background7.length)]];
 
var randomBackground = background[Math.floor(Math.random()*background.length)];
//--------------------------------------------------------------//
 
// ALIGNMENT DESIGNATOR // ---------------------------------------------
 var align = ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"];
 
var randomalignment = Math.floor(Math.random()*align.length);
//-----------------------------------------------------------------------
 
 
//-gender selection Gender:----------------------------------------------
// -------------------------Female (40%), Male (40%), Cant Tell (20%) //
var gender = ["Female", "Female", "Male",  "Male", "Cant tell"];
var randomgender = Math.floor(Math.random()*gender.length);
//-----------------------------------------------------------------------
 
 
//-Sexuality selector ---------------------------------------------------
//------------------Pan(20%),Hetero(30%),Bi(14%),Homo(30%),Ace(6%)-------
var sexuality = ["Pan", "Pan", "Hetero", "Hetero", "Hetero", "Bisexual", "Homosexual", "Homosexual", "Homosexual", "Ace"];
var randomsexuality = Math.floor(Math.random()*sexuality.length);
 
//-----------------------------------------------------------------------//
 
 
//stat generator //------described as a function for simplicity----------//.

function randomstat(stattype){
 var statnumber =  roll[Math.floor(Math.random()*roll.length)];
return(stattype + ":  " + statnumber); 
}
//-------------------------------------------------------------------------//

 
 
//--- Space function for making gaps in text---------------------------//
function space(){ return("<br>"); };
 
 
//--Will build  random number, x will decide the maxiumum number // 
// +1 to keep it out of zero, always set x to one less then you want due to zero base count//
function randomnumber(x){ 
return (Math.floor(Math.random()*x) + 1);
}
//--------------------------------------------------------------------//



//This was all moved to HTML and java script linked to another page.
/*
function makechar(){
//Console logging//------------------------------------------------//
//document.write("---------------------------------------------");
//document.write("<br><h2>The All-Powerful DND Character Maker-O-Matic</h2>");
//document.write("---------------------------------------------");
//space();
//----------------------------------------------------------------//
document.write("<br>Class: " + class0[randomclass]);
document.write("<br>Race: " + race[randomrace]);
document.write("<br>---------------------------------");
document.write("<br>Gender: " + gender[randomgender]);
document.write("<br>Sexuality: " + sexuality[randomsexuality]);
document.write("<br>Alignment: " + align[randomalignment]);
document.write("<br>Age: " + age[randomage]);
space();
document.write("<br>---------------------------------");
document.write("<br>Background: " + randomBackground);
space();
document.write("<br>Background: " + randomnumber(9));
document.write("<br>Personality trait: " + randomnumber(7));
document.write("<br>Bond: " + randomnumber(5));
document.write("<br>Ideal: " + randomnumber(5));
space();
document.write("<br>---------------------------------");
document.write("<br>Stats list: ");
space();
randomstat("<br>Stat one");
randomstat("<br>Stat two");
randomstat("<br>Stat three");
randomstat("<br>Stat four");
randomstat("<br>Stat five");
randomstat("<br>Stat six");
};
//makechar();
*/



