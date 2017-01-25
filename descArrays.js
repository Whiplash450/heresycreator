var backgroundBonusArray = [
['Master of Paperwork', 'An Adeptus Administratum character counts the Availability of all items as one level &#10;more available (Very Rare items count as Rare, Average items count as Common, etc.).'],
['The Face of the Law', 'An Arbitrator can re-roll any Intimidation and Interrogation test, and can &#10;substitute his Willpower bonus for his degrees of success on these tests.'],
['The Constant Threat', 'When the character or an ally within 10 metres triggers a roll on Table 6&#045;2: Psychic Phenomenon (see page 196), &#10;the Adeptus Astra Telepathica character can increase or decrease the result by amount equal to his Willpower bonus.'],
['Replace the Weak Flesh', 'An Adeptus Mechanicus character counts the Availability of all cybernetics as two &#10;levels more available (Rare items count as Average, Very Rare items count as Scarce, etc.).'],
['Faith is All', 'When spending a Fate point to gain a +10 bonus to any one test, &#10;an Adeptus Ministorum character gains a +20 bonus instead.'],
['Hammer of the Emperor', 'When attacking a target that an ally attacked since the end of the Guardsman&#39;s &#10;last turn, the Guardsman can re-roll any results of 1 or 2 on damage rolls.'],
['Never Quit', 'An Outcast character counts his Toughness bonus as &#10;two higher for purposes of determining Fatigue.']];

var homeworldBonusArray = [
['The Old Ways', 'In the hands of a feral world character,any Low-Tech weapon loses &#10;the Primitive quality (if it had it) and gains the Proven (3) quality.'],
['Omnissiah&#39;s Chosen', 'A forge world character starts with either the &#10;&#39;Technical Knock&#39; or &#39;Weapon-Tech&#39; talent.'],
['Breeding Counts', 'Any time a highborn character would reduce his Influence, &#10;he reduces it by 1 less (to a minimum reduction of 1).'],
['Teeming Masses in Metal Mountains', 'A hive world character ignores crowds for purposes of movement, treating them as open &#10;terrain. When in enclosed spaces, he also gains a +20 bonus to Navigate (Surface) tests.'],
['Faith in the Creed', 'Whenever a shrine world character spends a Fate point, he rolls 1d10. &#10;On a result of 1, the character&#39;s total number of Fate points is not reduced.'],
['Child of the Dark', 'A voidborn character starts with the &#39;Strong Minded&#39; talent, and gains &#10;a +30 bonus to tests for moving in a zero gravity environment.'],
];

var roleBonusArray = [
['Sure Kill', 'In addition to the normal uses of Fate points (page 293), when an Assassin successfully hits with an attack, he may spend &#10;a Fate point to inflict additional damage equal to his degrees of success on the attack roll on the first hit the attack inflicts.'],
['Dedicated Healer', 'In addition to the normal uses of Fate points (see page 293), when a Chirurgeon character fails a test to provide First Aid,&#10;he can spend a Fate point to automatically succeed instead with the degrees of success equal to his Intelligence bonus.'],
['Move and Shoot', 'Once per round, after performing a Move action, a Desperado character may perform a &#10;single Standard Attack with a Pistol weapon he is currently wielding as a Free Action.'],
['Sway the Masses', 'In addition to the normal uses of Fate points (see page 293), a Hierophant character may spend a Fate point to automatically&#10; succeed at a Charm, Command, or Intimidate skill test with a number of degrees of success equal to his Willpower bonus.'],
['Stare into the Warp', 'A Mystic character starts the game with the Psyker elite advance (see page 90). It is recommended &#10;that a character who wishes to be a Mystic have a Willpower of at least 35.'],
['Quest for Knowledge', 'In addition to the normal uses of Fate points (see page 293), a Sage character may spend a Fate point to automatically &#10;succeed at a Logic or any Lore skill test with a number of degrees of success equal to his Intelligence bonus.'],
['Nothing Escapes my Sight', 'In addition to the normal uses of Fate points (see page 293), a Seeker character may spend a Fate point to automatically &#10;succeed at an Awareness or Inquiry skill test with a number of degrees of success equal to his Perception bonus.'],
['Expert at Violence','In addition to the normal uses of Fate points (see page 293), after making a successful attack test, &#10;but before determining hits, a Warrior character may spend a Fate point to substitute his Weapon Skill &#10;(for melee) or Ballistic Skill (for ranged) bonus for the degrees of success scored on the attack test.'],
];

var divinationArray = [
['Mutation Without, Corruption Within','Roll once on Table 8&#45;15: Malignancies (see page 290) and apply the result.'],
['Trust in your Fear','Increase this character&#39;s Perception by 5, He also gains the Phobia Mental Disorder (see page 288).'],
['Humans must die so that Humanity can endure','This character gains the Jaded talent. If he already possesses this talent, increase his Willpower characteristic by 2 instead.'],
['The pain of the bullet is ecstasy compared to damnation','Reduce this character&#39;s Agility characteristic by 3. The first time this character suffers Critical damage each session, roll 1d10. On a result of 10, he does not suffer any Critical Effects, though the damage still counts as Critical damage.'],
['Be a boon to your allies and the bane of your enemies','This character gains the Hatred (choose any one) talent. If he already possessed this talent, increase his Strength characteristic by 2 instead.'],
['The wise learn from the deaths of others','Increase this character&#39;s Agility or Intelligence Characteristic by 3. Reduce his Weapon Skill or Ballistic Skill characteristic by 3.'],
['Kill the alien before it can speak its lies','This character gains the Quick Draw talent. If he already possesses this talent, increase his Agility characteristic by 2 instead.'],
['Truth is subjective','Increase this character&#39;s Perception characteristic by 3. The first time he would gain 1 or more Corruption points each session, he gains that amount plus 1 instead.'],
['Thought begets Heresy','Reduce this character&#39;s Intelligence characteristic by 3. The first time he would gain 1 or more Corruption points each session, he reduces that amount by 1 (to a minimum of 0) instead.'],
['Heresy begets Retribution','Increase this character&#39;s Fellowship or Strength characteristic by 3. Reduce his Toughness or Willpower characteristic by 3.'],
['A mind without puropse wanders in dark places','When gaining Mental Disorders (see page 287), the character may choose to gain a new Disorder instead of increasing the severity of an existing Disorder.'],
['If a job is worth doing it is worth dying for','Increase this character&#39;s Toughness or Willpower characteristic by 3. Reduce his Fellowship or Strength characteristic by 3.'],
['Dark dreams lie upon the heart','Whenever this character would roll on Table 8&#45;15: Malignancies (see page 290), he may instead select any one result and gain that Malignancy.'],
['Violence solves everything','Increase this character&#39;s Weapon Skill or Ballistic Skill characteristic by 3. Reduce his Agility or Intelligence characteristic by 3.'],
['Ignorance is a wisdom of its own','Reduce this character&#39;s Perception characteristic by 3. The first time he would gain 1 or more Insanity points each session, he reduces that amount by 1 (to a minimum of 0) instead.'],
['Only the insane have strength enough to prosper','Increase this character&#39;s Willpower characteristic by 3. The first time he would gain 1 or more Insanity points each session, he gains that amount plus 1 instead.'],
['A suspicious mind is a healthy mind','Increase this character&#39;s Perception characteristic by 2. Additionally, he may re-roll Awareness tests to avoid being Surprised.'],
['Suffering is an unrelenting instructor','Reduce this character&#39;s Toughness characteristic by 3. The first time that this character suffers any damage each session, he gains a +20 bonus to the next test he makes before the end of his next turn.'],
['The only true fear is dying without your duty done','This character gains the Resistance (Cold, Heat, or Fear) talent. If he already possesses this talent, increase his Toughness characteristic by 2 instead.'],
['Only in death does duty end','The first time this character would suffer Fatigue each session, he suffers that amount of Fatigue minus 1 (to a minimum of 0) instead.'],
['Innocence is an illusion','This character gains the Keen Intuition talent. If he already possesses this talent, increase his Intelligence characteristic by 2 instead.'],
['To war is human','This character gains the Dodge skill as a Known skill (rank 1). If he already possesses this skill, increase his Agility characteristic by 2 instead.'],
['There is no substitute for zeal','This character gains the Clues from the Crowds talent. If he already possesses &#10;this talent, increase his Fellowship characteristic by 2 instead.'],
['Even one who has nothing can still offer his life','When this character burns Fate threshold to survive a lethal injury, roll 1d10. &#10;On a result of 10, he survives whatever grievous wound would have killed him but does not reduce his Fate threshold.'],
['Do not ask why you serve. Only ask how','Increase this character&#39;s Fate threshold by 1.'],
];

var backgroundAptitudesArray = [
[13, 16],
[10, 11],
[11, 15],
[13, 17],
[18, 16],
[14, 18],
[14, 16]];

var backgroundRecRolesArray = [
['Chirurgeon', 'Hierophant', 'Sage', 'Seeker'],
['Assassin', 'Desperado', 'Seeker', 'Warrior'],
['Chirurgeon', 'Mystic', 'Sage', 'Seeker'],
['Chirurgeon', 'Hierophant', 'Sage', 'Seeker'],
['Chirurgeon', 'Hierophant', 'Seeker', 'Warrior'],
['Assassin', 'Desperado', 'Hierophant', 'Warrior'],
['Assassin', 'Desperado', 'Seeker']];

var backgroundRecRolesIndexArray = [
[1, 3, 5, 6],
[0, 2, 6, 7],
[1, 4, 5, 6],
[1, 3, 5, 6],
[1, 3, 6, 7],
[0, 2, 3, 7],
[0, 2, 6]];

var rolesListArray = [
'Assassin',   //0
'Chirurgeon', //1
'Desperado',  //2
'Hierophant', //3
'Mystic',     //4
'Sage',       //5
'Seeker',     //6
'Warrior'     //7
];

function RollDivination(){
  var index = RandomNumberPlz(1, 100);
  var divIndex = 0;
  var oldDivIndex = parseInt($("#td_divination").data("div_index"));
  if(oldDivIndex == divinationArray.length-1) {
    var value = parseInt($("#box_stat_fate_base").val());
    $("#box_stat_fate_base").val(value-1);
    ReCalcStats();
  }

  if(index == 1){
    divIndex = 0;
  }
  else if(index >= 2 && index <=5){
     divIndex = 1;
  }
  else if(index >= 6 && index <=9){
     divIndex = 2;
  }
  else if(index >= 10 && index <=13){
     divIndex = 3;
  }
  else if(index >= 14 && index <=17){
     divIndex = 4;
  }
  else if(index >= 18 && index <=21){
     divIndex = 5;
  }
  else if(index >= 22 && index <=25){
     divIndex = 6;
  }
  else if(index >= 26 && index <=29){
     divIndex = 7;
  }
  else if(index >= 30 && index <=33){
     divIndex = 8;
  }
  else if(index >= 34 && index <=38){
     divIndex = 9;
  }
  else if(index >= 39 && index <=43){
     divIndex = 10;
  }
  else if(index >= 44 && index <=49){
     divIndex = 11;
  }
  else if(index >= 50 && index <=54){
     divIndex = 12;
  }
  else if(index >= 55 && index <=59){
     divIndex = 13;
  }
  else if(index >= 60 && index <=63){
     divIndex = 14;
  }
  else if(index >= 64 && index <=67){
     divIndex = 15;
  }
  else if(index >= 68 && index <=71){
     divIndex = 16;
  }
  else if(index >= 72 && index <=75){
     divIndex = 17;
  }
  else if(index >= 76 && index <=79){
     divIndex = 18;
  }
  else if(index >= 80 && index <=83){
     divIndex = 19;
  }
  else if(index >= 84 && index <=87){
     divIndex = 20;
  }
  else if(index >= 88 && index <=91){
     divIndex = 21;
  }
  else if(index >= 92 && index <=95){
     divIndex = 22;
  }
  else if(index >= 96 && index <=99){
     divIndex = 23;
  }  
  else if(index == 100)  {
    divIndex = 24;
    var value = parseInt($("#box_stat_fate_base").val());
    $("#box_stat_fate_base").val(value+1);
    ReCalcStats();
  }

  $("#tbody_divination").append("<tr><td id=\"td_divination\" data-div_index=\"" + divIndex + "\"><i title='" + divinationArray[divIndex][1] + "'>" + divinationArray[divIndex][0] + "</i></td></tr>");
}

function RandomNumberPlz(botLimit, topLimit){
  return Math.floor(Math.random() * topLimit + botLimit);
};
  
var css_Green = "#7FD12D";
var css_Red = "#DA5C5C";

function resetBgColours(){
  for(var i = 0; i < statsArray.length; i++){
    $("#box_stat_" + statsArray[i] + "_roll1").css("background-color", "white");
    $("#box_stat_" + statsArray[i] + "_roll2").css("background-color", "white");
  }
};

var homeworldArray = [
['s', 't', 'infl', 9, ["s", "t", "infl"], 4, 2, 3],     //Feral
['t', 'int', 'fel', 8, ["fel", "t", "int"], 6, 3, 8],   //Forge
['fel', 'infl', 't', 9, ["fel", "t", "infl"], 9, 4, 10], //High
['ag', 'per', 'wp', 8, ["ag", "per", "wp"], 7, 2, 6],   //Hive
['wp', 'fel', 'per', 7, ["wp", "fel", "per"], 8, 3, 6], //Shrine
['int', 'wp', 's', 7, ["int", "wp", "s"], 6, 3, 5],     //Void
]; 

function setHomeworld(index) {
	var homeworld = homeworldArray[parseInt(index)];
	upWorldStat(homeworld[0]);
	upWorldStat(homeworld[1]);
	downWorldStat(homeworld[2]);
	setWounds(homeworld[3]);
	getNormalWorldStat(homeworld[4][0], homeworld[4][1], homeworld[4][2]);
	addHomeworldAptitude(aptitudeArray[homeworld[5]]);
	setFatePoints(homeworld[6], homeworld[7]);
}

function rollStats(worldType){
  $("#tbody_worldtalents").empty();
  setHomeworld(worldType);
  switch (worldType)
  {           
    case "1":
		$("#tbody_worldtalents").append("<tr><td><i>Technical Knock OR Weapon-Tech</i></td></tr>");    
		break;    
          
    case "5": //Void
      $("#tbody_worldtalents").append("<tr><td><i>Strong Minded</i></td></tr>");
      break;
  };  
};

function addHomeworldAptitude(apt) {
	$("#aptitude_td_world").html("<i id='aptitude_i_world'>" + apt + "</i>");
}

function getNormalWorldStat(stat1, stat2, stat3){
  for(var i = 0; i < statsArray.length; i++){
    if(statsArray[i] != stat1 && statsArray[i] != stat2 && statsArray[i] != stat3) {
      $("#box_stat_" + statsArray[i] + "_roll1").css("background-color", "white");
      $("#box_stat_" + statsArray[i] + "_roll2").css("background-color", "white");
      var num1 = RandomNumberPlz(1,10);
      var num2 = RandomNumberPlz(1,10);
      $("#box_stat_" + statsArray[i] + "_roll1").val(num1);
      $("#box_stat_" + statsArray[i] + "_roll2").val(num2);
      var baseValue = parseInt($("#box_stat_" + statsArray[i] + "_base").val());
      $("#box_stat_" + statsArray[i] + "_total").val(baseValue+num1+num2);
    }
  }
  var woundsRoll = RandomNumberPlz(1,5);
  $("#box_stat_wounds_roll1").val(woundsRoll);
  $("#box_stat_wounds_total").val(woundsRoll+parseInt($("#box_stat_wounds_base").val()));
};

function upWorldStat(stat) {
  $("#box_stat_" + stat + "_roll1").css("background-color", css_Green);
  $("#box_stat_" + stat + "_roll2").css("background-color", css_Green);
  var num1 = RandomNumberPlz(1,10);
  var num2 = RandomNumberPlz(1,10);
  var num3 = RandomNumberPlz(1,10);
  //console.log("stat(" + stat + ")1: " + num1 + "    2: " + num2 + "    3: " + num3);
  var top1 = (num1 > num2 && num1 >= num3)? num1:num2;
  var top2 = 0;
  if(top1 == num1) {
    top2 = (num3 >= num2)? num3:num2;
  }
  else {
    top2 = num3;
  }
  $("#box_stat_" + stat + "_roll1").val(top1);
  $("#box_stat_" + stat + "_roll2").val(top2);
  var baseValue = parseInt($("#box_stat_" + stat + "_base").val());
  $("#box_stat_" + stat + "_total").val(baseValue+top1+top2);
};

function downWorldStat(stat) {
  $("#box_stat_" + stat + "_roll1").css("background-color", css_Red);
  $("#box_stat_" + stat + "_roll2").css("background-color", css_Red);
  var num1 = RandomNumberPlz(1,10);
  var num2 = RandomNumberPlz(1,10);
  var num3 = RandomNumberPlz(1,10);
  //console.log("stat(" + stat + ")1: " + num1 + "    2: " + num2 + "    3: " + num3);
  var bot1 = (num1 < num2 && num1 <= num3)? num1:num2;
  var bot2 = 0;
  if(bot1 == num1) {
    bot2 = (num3 <= num2)? num3:num2;
  }
  else {
    if(num1 < num3) bot2 = num1;
    else bot2 = num3;
  }
  $("#box_stat_" + stat + "_roll1").val(bot1);
  $("#box_stat_" + stat + "_roll2").val(bot2);
  var baseValue = parseInt($("#box_stat_" + stat + "_base").val());
  $("#box_stat_" + stat + "_total").val(baseValue+bot1+bot2);
  
};

function setWounds(value) {
  $("#box_stat_wounds_base").val(value);
};

function setFatePoints(value, empBless) {
  $("#fate_title").html("Fate Points (Emperor's Blessing " + empBless + "+)");
  $("#box_stat_fate_base").val(value);
  var fateRoll = RandomNumberPlz(1,10);
  var fatePointsToAdd = 0;
  if(fateRoll >= empBless) {
    fatePointsToAdd = 1;
    $("#fate_result").html("&emsp;Success!");
    $("#fate_result").css("color", "green");
  }
  else {
    $("#fate_result").html("&emsp;Failure!");
    $("#fate_result").css("color", "red");
  }
  $("#box_stat_fate_roll1").val(fateRoll);
  $("#box_stat_fate_total").val(value + fatePointsToAdd);
};

function ReCalcStats(){
  for(var i = 0; i < statsArray.length; i++){
    var base = parseInt($("#box_stat_" + statsArray[i] + "_base").val());
    var roll1 = parseInt($("#box_stat_" + statsArray[i] + "_roll1").val());
    var roll2 = parseInt($("#box_stat_" + statsArray[i] + "_roll2").val());
    $("#box_stat_" + statsArray[i] + "_total").val(base + roll1 + roll2);
  }
  var w_base = parseInt($("#box_stat_wounds_base").val());
  var w_roll1 = parseInt($("#box_stat_wounds_roll1").val());
  $("#box_stat_wounds_total").val(w_base + w_roll1);
  var f_base = parseInt($("#box_stat_fate_base").val());
  var f_roll1 = parseInt($("#box_stat_fate_roll1").val());
  var worldIndex = parseInt($("#select_world").val());
  var points = 0;    
  if(f_roll1 >= homeworldArray[worldIndex][7]) {
    points = 1;
    $("#fate_result").html("&emsp;Success!");
    $("#fate_result").css("color", "green");
  }
  else {
    $("#fate_result").html("&emsp;Failure!");
    $("#fate_result").css("color", "red");
  }
  $("#box_stat_fate_total").val(f_base + points);
}