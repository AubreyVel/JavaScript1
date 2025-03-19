//display alert good after
//window.alert("Good afternoon.");
//declare the variable to hold the div element
let container = document.getElementById("container");
//getElementByID i sth emethod to locate the element by the ID
//container is an HTML lement, it is a div in this case
//set th econtent of element


container.innerHTML = "<p>This is the container place</p>";
//change the color style into red color
container.style.color = "red";
//declare variable o hold the h1
document.write("<p>This is a new paragraph</p>");


//declare variable o hold the header
let header = document.getElementsByTagName("h1")[0];

let footer = document.getElementsByTagName("h1")[1];


// declare a variable to hold button element
let btnClickMe = document.getElementById("btnClickMe");
//handle the click event by associate with an function
btnClickMe.onclick = function() 
{
    window.alert("Colored!");
    //onclick="window.alert('Hello')"
    header.style.color = "red";

    footer.style.color = "blue";

    container.style.visibility = "hidden";

    btnClickMe.style.visibility = "hidden";
    btnClickMeTwo.style.visibility = "visible";
    
}



let btnClickMeTwo = document.getElementById("btnClickMeTwo");
btnClickMeTwo.style.visibility = "hidden";

btnClickMeTwo.onclick = function() 
{
    window.alert("Switched!");
    //onclick="window.alert('Hello')"
    header.style.color = "blue";

    footer.style.color = "red";

    container.style.visibility = "hidden";

    btnClickMe.style.visibility = "visible";

    btnClickMeTwo.style.visibility = "Hidden";
}

let btnClickMeThree = document.getElementById("btnClickMeThree");
btnClickMeThree.onclick = function() 
{
    window.alert("Boring!");
    //onclick="window.alert('Hello')"
    header.style.color = "black";

    footer.style.color = "black";

    container.style.visibility = "visible";

    btnClickMe.style.visibility = "visible";

    btnClickMeTwo.style.visibility = "Hidden";
}

//handle the mouse movement over the header
header.onmouseover = function() {
    header.style.color = "red";
}

//handle the mous eout event the header
header.onmouseout = function() {
    header.style.color = "black";
}


//add new element p into yhe page


//ctrl + k + f = format
//ctrl + s = dave
// ctrl + / = turn on/ off comments

//declare a variable to work on the text input username
let username = document.getElementById("username");
username.onchange = function() {
    container.innerHTML = username.value;
}



