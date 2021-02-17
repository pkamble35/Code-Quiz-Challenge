var timeleft = 120;
var x = setInterval(function () {
    if (timeleft <= 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = 0;
    } else {
        document.getElementById("countdown").innerHTML = timeleft;
    }
    timeleft -= 1;
}, 1000);


var div = document.createElement("div");
div.setAttribute("class", "card-body");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var listEl = document.createElement("ul");
listEl.setAttribute("class", "list-group list-group-flush");

var question = document.createElement("h3");

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

var correct = document.createElement("p");
correct.setAttribute("id","card-footer");

var footer = document.createElement("div");
footer.setAttribute("class", "card-footer");
footer.appendChild(correct);
function question1() {
    document.getElementById("intro1").remove();
    question.innerHTML = "What does HTML stand for?"

    a1.innerHTML = "1. Hyper Text Preprocessor";
    a1.addEventListener("click", function () {
        timeleft-=10;
        document.getElementById("card-footer").innerHTML = "Wrong";
         question2(); 
    });
    li1.appendChild(a1);

    a2.innerHTML = "2. Hyper Text Markup Language";
    a2.addEventListener("click", function () { 
        document.getElementById("card-footer").innerHTML = "Correct";
        question2(); 
    });
    li2.appendChild(a2);

    a3.innerHTML = "3. Hyper Text Multiple Language";
    a3.addEventListener("click", function () {
        timeleft-=10;
        document.getElementById("card-footer").innerHTML = "Wrong";
         question2(); 
    });
    li3.appendChild(a3);

    a4.innerHTML = "4. Hyper Tool Multi Language";
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
    
    document.getElementById("intro").appendChild(div);
    document.getElementById("intro").appendChild(footer);
    
}
function question2() {
    question.textContent = "What does CSS stand for?"
    a1.innerHTML = "1. Common Style Sheet";
    a1.addEventListener("click", function () {
        timeleft-=10;
        document.getElementById("card-footer").innerHTML = "Wrong";
         question3(); 
    });
    li1.appendChild(a1);

    a2.innerHTML = "2. Colorful Style Sheet";
    a2.addEventListener("click", function () {
        timeleft-=10;
        document.getElementById("card-footer").innerHTML = "Wrong";
         question3(); 
    });
    li2.appendChild(a2);

    a3.innerHTML = "3. Computer Style Sheet";
    a3.addEventListener("click", function () {
        timeleft-=10;
        document.getElementById("card-footer").innerHTML = "Wrong";
         question3(); 
    });
    li3.appendChild(a3);

    a4.innerHTML = "4. Cascading Style Sheet";
    a4.addEventListener("click", function () { 
        document.getElementById("card-footer").innerHTML = "Correct";
        question3(); 
    });
    li4.appendChild(a4);

    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    div.appendChild(question);
    div.appendChild(listEl);

    
    document.getElementById("intro").appendChild(div);
}
function question3() {
    question.textContent = "What does PHP stand for?";
    li1.textContent = "Hypertext Preprocessor ";
    li2.textContent = "Hyper Text Markup Language";
    li3.textContent = "Hyper Text Multiple Language";
    li4.textContent = "Hyper Tool Multi Language";

}
function question4() {

    question.textContent = "What does PHP stand for?";
    li1.textContent = "Hyper Text Preprocessor ";
    li2.textContent = "Hyper Text Markup Language";
    li3.textContent = "Hyper Text Multiple Language";
    li4.textContent = "Hyper Tool Multi Language";

}
function question5() {
    question.textContent = "What does PHP stand for?";
    li1.textContent = "Hyper Text Preprocessor ";
    li2.textContent = "Hyper Text Markup Language";
    li3.textContent = "Hyper Text Multiple Language";
    li4.textContent = "Hyper Tool Multi Language";

}
function question6() {
    question.textContent = "What does PHP stand for?";
    li1.textContent = "Hyper Text Preprocessor ";
    li2.textContent = "Hyper Text Markup Language";
    li3.textContent = "Hyper Text Multiple Language";
    li4.textContent = "Hyper Tool Multi Language";

}
function question7() {
    question.textContent = "What does PHP stand for?";
    li1.textContent = "Hyper Text Preprocessor ";
    li2.textContent = "Hyper Text Markup Language";
    li3.textContent = "Hyper Text Multiple Language";
    li4.textContent = "Hyper Tool Multi Language";

}
function question8() {
    question.textContent = "What does PHP stand for?";
    li1.textContent = "Hyper Text Preprocessor ";
    li2.textContent = "Hyper Text Markup Language";
    li3.textContent = "Hyper Text Multiple Language";
    li4.textContent = "Hyper Tool Multi Language";

}
function question9() {
    question.textContent = "What does PHP stand for?";
    li1.textContent = "Hyper Text Preprocessor ";
    li2.textContent = "Hyper Text Markup Language";
    li3.textContent = "Hyper Text Multiple Language";
    li4.textContent = "Hyper Tool Multi Language";

}
function question10() {
    question.textContent = "What does PHP stand for?";
    li1.textContent = "Hyper Text Preprocessor ";
    li2.textContent = "Hyper Text Markup Language";
    li3.textContent = "Hyper Text Multiple Language";
    li4.textContent = "Hyper Tool Multi Language";

}

