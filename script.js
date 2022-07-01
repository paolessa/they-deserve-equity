
var clickCount = 0;
var displayName = document.getElementById("term");
var click1 = document.getElementById("clickMe");

var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

var displayScript2 = document.getElementById("scriptReturned2");
var scriptBtn2 = document.getElementById("scriptBtn2");

var displayScript3 = document.getElementById("scriptReturned3");
var scriptBtn3 = document.getElementById("scriptBtn3");

var hide3 = document.getElementById("hide3");

click1.addEventListener("click", displayTerm);

scriptBtn.addEventListener("click", generateScript);

scriptBtn2.addEventListener("click", generateScript2);

scriptBtn3.addEventListener("click", generateScript3);

hide3.addEventListener("click", blockscript3);


function displayTerm () {
   clickCount += 1;
   if (clickCount == 1){
     displayTerm1(); 
   }
   if (clickCount == 2){
     displayTerm2(); 
   }
   if (clickCount == 3){
     displayTerm3(); 
   }
   if (clickCount == 4){
     displayTerm4(); 
   }
    if (clickCount == 5){
     displayTerm5(); 
   }
   if (clickCount == 6){
     displayTerm6();
   }
     if (clickCount == 7){
     displayTerm7(); 
   }
   if (clickCount == 8){
     displayTerm8(); 
   }
   if (clickCount == 9){
     displayTerm9(); 
   }
   if (clickCount == 10){
     displayTerm10(); 
   }
    if (clickCount == 11){
     displayTerm11(); 
     resetClickCount();
   }
}

 function displayTerm1(){
   displayName.innerHTML = "BIPOC: Black, Indigenous, and people of color.";
 }

 function displayTerm2(){
   displayName.innerHTML = "Non-binary: A person that doesn’t identify with being a girl or a boy.";
 }

 function displayTerm3(){
   displayName.innerHTML = "AFAB or AMAB: A person assigned biologically female or male at birth. (Remember that sex does not equal gender.)";
 }

 function displayTerm4(){
   displayName.innerHTML = "Transgender: A term used to describe people with gender identities that are different than their biological sex.";
 }

 function displayTerm5(){
   displayName.innerHTML = "Contraception: A form of preventing pregnancy or birth control, such as: condoms, IUDs, pills, and more.";
 }

 function displayTermn6(){
   displayName.innerHTML = "People First Language: A way of referring to someone with a disability that acknowledges the person above all. This is also based on preference, but you can’t really go wrong with this syntax.";
 }

 function displayTerm7(){
   displayName.innerHTML = "Pro-life: An ideology that believes in preserving life contrary to abortion. (This term is also being reclaimed to represent a Pro-choice ideology, since it is life-saving for AFAB peoples to have access to abortion.)";
 }

 function displayTerm8(){
   displayName.innerHTML = "Roe v. Wade: A court case that permitted people to choose whether they wanted to get an abortion or not in the US. (Currently overturned as of June 24, 2022)";
 }

 function displayTermn9(){
   displayName.innerHTML = "POC: Person of color; anyone who is not caucasian or white. (Related: BIPOC)";
 }

 function displayTerm10(){
   displayName.innerHTML = "Pro-choice: An ideology that believes in a person’s ability to decide to get an abortion.";
 }

 function displayTerm11(){
   displayName.innerHTML = "Pronouns: Terms that people use to refer to themselves as such. Ask for these when you meet someone new! (Examples: she/her, they/them, he/him, ze/zhey)";
 }

 function resetClickCount(){
   clickCount = 0; 
}

function generateScript() {
  var them = document.getElementById("them").value;
  var disclosure = document.getElementById("disclosure").value;
  var AT = document.getElementById("AT").value;

  displayScript.innerHTML = "Hi "+ them +", I wanted to talk to you about a new feeling / term I’ve liked recently. I feel as if my sexual orientation / gender identity best aligns with / is "+ disclosure +". <br><br> If they ask why: <br><br> I feel attracted to " + AT + " / I best identify with being "+ disclosure +". <br><br><br><br> If they don't understand gender identity: <br><br> It’s different than my biologically assigned sex. I know I was assigned male/female at birth, but my gender is more complex, so I like the idea of being "+ disclosure +". <br><br><br><br> If they react in a not-so positive way: <br><br>I hope this doesn’t change our friendship/relationship, but if it does, I’ll respect you and your boundaries and I hope you do the same. Thanks for hearing me out, though. Remember this doesn’t justify a lack of respect towards me. Thanks for listening to me, but I don’t want to be around someone who won’t treat me with respect / accept me as I am.";
}

function generateScript2() {
  var provider = document.getElementById("provider").value;
  var uncomfy = document.getElementById("uncomfy").value;

  displayScript.innerHTML = "Hi "+ provider +", I’d like to inform you that I’m not comfortable with "+ uncomfy +" and I do not consent to it being done today. I am / am not open to alternatives, and I would / would not like to further discuss the matter.";
}

function generateScript3() {
  var provider2 = document.getElementById("provider2").value;
  var concern = document.getElementById("concern").value;
  var symptoms = document.getElementById("symptoms").value;

  displayScript.innerHTML = "Hi "+ provider2 +", I’m concerned about "+ concern +". I’m currently experiencing these symptoms: "+ symptoms +". I know my body well, and I would like these symptoms to be validated, as well as my concerns. <br><br>If the healthcare provider continues to be ineffective:<br><br> I need [my] "+ symptoms+" to be addressed today and if you cannot do so, I will remove you from my care team for being ineffective.";
}

function blockscript3 () {
 var fc3 = document.getElementById("fc3"); 
  if (fc3.style.display === "none") {
    fc3.style.display = "block";
  } else {
    fc3.style.display = "none";
  }
}
