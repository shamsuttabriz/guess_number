
var heading = document.querySelector("h1");
var attemp = document.querySelector("h3");
var num = document.querySelector("input");
var start = document.querySelector(".start");
var check = document.querySelector(".check");
var list = document.querySelector("ul");
var mainNumber;
var count = 0;
var attempCount = 5;



start.addEventListener("click", function(){
    
    if(num.value == ""){
        heading.innerHTML = "Please enter a number: ";
    }
    else if(num.value > 9){
        heading.innerHTML = "Please enter a number less then 10";
    }
    else {
        heading.innerHTML = "Guess the Number: ";
        mainNumber = num.value;
        start.style.display = "none";
        check.style.display = "inline-block";
        num.value = "";
        num.setAttribute("type", "number");
        attemp.innerHTML = "Attemp Your Number: 5";
    }
});

check.addEventListener("click", function(){
    count++;
    attempCount--;
    if(mainNumber == num.value){
        heading.innerHTML = "Congratulation";
        num.style.display = "none";
        check.style.display = "none";
        list.innerHTML = "";
    }
    else{
        attemp.innerHTML = "Attemp Your Number: " + attempCount;
        list.innerHTML += "<li>" + num.value + "</li>";
        num.value = "";
    }


    if(count == 5){
        heading.innerHTML = "Game Over";
        num.style.display = "none";
        check.style.display = "none";
        list.innerHTML = "";
    }
});