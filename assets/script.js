var timeleft = 120;
var score = 0;
var x = setInterval(function () {
    if (timeleft <= 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = 0;
        complete(true);
    } else {
        document.getElementById("countdown").innerHTML = timeleft;
    }
    timeleft -= 1;
}, 1000);


var div = document.createElement("div");
div.setAttribute("class", "card-body card-style");
div.setAttribute("id", "contentSection");

var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var listEl = document.createElement("ul");
listEl.setAttribute("class", "gap-3 list-group list-group-flush no-bullets");

var question = document.createElement("p");
question.setAttribute("id","ques1");
question.setAttribute("class","label-text text-wrap");

var input = document.createElement("input");
input.setAttribute("type", "text");

var submit = document.createElement("a");
submit.setAttribute("href", "#");
submit.setAttribute("class", "btn btn-primary input-text");

var a1 = document.createElement("a");
a1.setAttribute("href", "#");
a1.setAttribute("class", "btn btn-primary");

var a2 = document.createElement("a");
a2.setAttribute("href", "#");
a2.setAttribute("class", "btn btn-primary");

var a3 = document.createElement("a");
a3.setAttribute("href", "#");
a3.setAttribute("class", "btn btn-primary");

var a4 = document.createElement("a");
a4.setAttribute("href", "#");
a4.setAttribute("class", "btn btn-primary");

var para = document.createElement("p");
para.setAttribute("id","card-footer");
para.setAttribute("class","footer-text");

var footer = document.createElement("div");
footer.setAttribute("class", "card-footer ");
footer.appendChild(para);


function question1() {
    document.getElementById("intro1").remove();
    question.innerHTML = "What does HTML stand for?"
    
    a1.innerHTML = "1. Hyper Text Preprocessor";
    a1.setAttribute("id","link1");
    a1.addEventListener("click", function () {
        timeleft=timeleft - 10;
        document.getElementById("card-footer").innerHTML = "Wrong";
         question2(); 
    });
    li1.appendChild(a1);

    a2.innerHTML = "2. Hyper Text Markup Language";
    a2.setAttribute("id","link2");
    a2.addEventListener("click", function () { 
        score++;
        document.getElementById("card-footer").innerHTML = "Correct";
        question2(); 
    });
    li2.appendChild(a2);

    a3.innerHTML = "3. Hyper Text Multiple Language";
    a3.setAttribute("id","link3");
    a3.addEventListener("click", function () {
        timeleft-=10;
        document.getElementById("card-footer").innerHTML = "Wrong";
         question2(); 
    });
    li3.appendChild(a3);

    a4.innerHTML = "4. Hyper Tool Multi Language";
    a4.setAttribute("id","link4");
    a4.addEventListener("click", function () {
        timeleft-=10;
        document.getElementById("card-footer").innerHTML = "Wrong";
         question2(); 
    });
    li4.appendChild(a4);

    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    div.appendChild(question);
    div.appendChild(listEl);
    document.getElementById("intro").setAttribute("class","card mx-auto")
    document.getElementById("intro").appendChild(div);
    document.getElementById("intro").appendChild(footer);
    
}
function question2() {
    var q = document.getElementById("ques1");
    var ans1 = document.getElementById("link1");
    var ans2 = document.getElementById("link2");
    var ans3 = document.getElementById("link3");
    var ans4 = document.getElementById("link4");
    q.textContent = "What does CSS stand for?";
    newFunction(ans1,"1. Color Style Style",false,question3);
    newFunction(ans2,"2. Colorful Style Sheet",false,question3);
    newFunction(ans3,"3. Computer Style Sheet",false,question3);
    newFunction(ans4,"4. Cascading Style Sheet",true,question3);
    
}
function newFunction(anchor, answer,iscorrect,question) {
    let newClonedElem = anchor.cloneNode(true);

    newClonedElem.innerHTML = answer;
    newClonedElem.addEventListener("click", function () {
        if(!iscorrect){
            timeleft -= 10;
            document.getElementById("card-footer").innerHTML = "Wrong";
        }else{
            score++;
            console.log("inter  ", score);
            document.getElementById("card-footer").innerHTML = "Correct";
        }
        question();
    });
    anchor.parentNode.replaceChild(newClonedElem, anchor);
}

 var question3 = function question3() {
    var q = document.getElementById("ques1");
    var ans1 = document.getElementById("link1");
    var ans2 = document.getElementById("link2");
    var ans3 = document.getElementById("link3");
    var ans4 = document.getElementById("link4");
    q.textContent = "Inside which HTML element do we put the JavaScript?";
    newFunction(ans1,"1. scripting",false,question4);
    newFunction(ans2,"2. script",true,question4);
    newFunction(ans3,"3. javascript",false,question4);
    newFunction(ans4,"4. js",false,question4);

}
var question4 = function question4() {

    var q = document.getElementById("ques1");
    var ans1 = document.getElementById("link1");
    var ans2 = document.getElementById("link2");
    var ans3 = document.getElementById("link3");
    var ans4 = document.getElementById("link4");
    q.textContent = "What are variables used for in JavaScript Programs?";
    newFunction(ans1,"1. Storing numbers, dates, or other values",true,question5);
    newFunction(ans2,"2. Varying randomly",false,question5);
    newFunction(ans3,"3. Causing high-school algebra flashbacks",false,question5);
    newFunction(ans4,"4. one of the above",false,question5);

}
var question5 = function question5() {
    var q = document.getElementById("ques1");
    var ans1 = document.getElementById("link1");
    var ans2 = document.getElementById("link2");
    var ans3 = document.getElementById("link3");
    var ans4 = document.getElementById("link4");
    q.textContent = "Which of the following best describes JavaScript?";
    newFunction(ans1,"1. a low-level programming language.",false,question6);
    newFunction(ans2,"2. a scripting language precompiled in the browser.",false,question6);
    newFunction(ans3,"3. a compiled scripting language.",false,question6);
    newFunction(ans4,"4. an object-oriented scripting language.",true,question6);
}
var question6 = function question6() {
    var q = document.getElementById("ques1");
    var ans1 = document.getElementById("link1");
    var ans2 = document.getElementById("link2");
    var ans3 = document.getElementById("link3");
    var ans4 = document.getElementById("link4");
    q.textContent = "Using _______ statement is how you test for a specific condition";
    newFunction(ans1,"1. Select",false,question7);
    newFunction(ans2,"2. if",true,question7);
    newFunction(ans3,"3. switch",false,question7);
    newFunction(ans4,"4. for",false,question7);

}
var question7 = function question7() {
    var q = document.getElementById("ques1");
    var ans1 = document.getElementById("link1");
    var ans2 = document.getElementById("link2");
    var ans3 = document.getElementById("link3");
    var ans4 = document.getElementById("link4");
    q.textContent = "Choose the client-side JavaScript object";
    newFunction(ans1,"1. Database",false,question8);
    newFunction(ans2,"2. Cursor",false,question8);
    newFunction(ans3,"3. Client",false,question8);
    newFunction(ans4,"4. fileUpload",true,question8);
}
var question8 = function question8() {
    var q = document.getElementById("ques1");
    var ans1 = document.getElementById("link1");
    var ans2 = document.getElementById("link2");
    var ans3 = document.getElementById("link3");
    var ans4 = document.getElementById("link4");
    q.textContent = " In JavaScript, _________ is an object of the target language data type that encloses an object of the source language"
    newFunction(ans1,"1. A Wrapper",true,question9);
    newFunction(ans2,"2. A Link",false,question9);
    newFunction(ans3,"3. A Cursor",false,question9);
    newFunction(ans4,"4. A Form",false,question9);

}
var question9 = function question9() {
    var q = document.getElementById("ques1");
    var ans1 = document.getElementById("link1");
    var ans2 = document.getElementById("link2");
    var ans3 = document.getElementById("link3");
    var ans4 = document.getElementById("link4");
    q.textContent = "The _______ method of an Array object adds and/or removes elements from an array.";
    newFunction(ans1,"1. Reverse",false,question10);
    newFunction(ans2,"2. Shift",false,question10);
    newFunction(ans3,"3. Slice",false,question10);
    newFunction(ans4,"4. Splice",true,question10);
}
var question10 = function question10() {
    var q = document.getElementById("ques1");
    var ans1 = document.getElementById("link1");
    var ans2 = document.getElementById("link2");
    var ans3 = document.getElementById("link3");
    var ans4 = document.getElementById("link4");
    q.textContent = "JavaScript is interpreted by _________";
    newFunction(ans1,"1. Client",true,complete);
    newFunction(ans2,"2. Server",false,complete);
    newFunction(ans3,"3. Object",false,complete);
    newFunction(ans4,"4.  None of the above",false,complete);

}

var complete = function completed(isExpired){
    document.getElementById("card-footer").innerHTML = "";
    var q = document.getElementById("ques1");
    if(isExpired){
        q.textContent = "Time Expired";
    }else{
        q.textContent = "All Done!";
    }
    
    var label = document.createElement("LABEL");
    label.textContent = "Enter Your Initials";
    label.setAttribute("for", "intials");
    label.setAttribute("class","label-text");

    input.setAttribute("id","initials");
    submit.innerHTML = "Submit";
    submit.addEventListener("click", function () {
        highScore();
    });
    var domSection = document.getElementById("contentSection");
    domSection.removeChild(domSection.childNodes[1]);
    document.getElementById("contentSection").appendChild(label);
    document.getElementById("contentSection").appendChild(input);
    document.getElementById("contentSection").appendChild(submit);

}
var highScore = function highScore(){
    var q = document.getElementById("ques1");
    var domSection = document.getElementById("contentSection");
    domSection.removeChild(domSection.childNodes[1]);
    domSection.removeChild(domSection.childNodes[1]);
    q.textContent = "High Score is :  "  + score;
    submit.innerHTML = "Go back";
    submit.addEventListener("click", function () {
        location.reload();
    });
}