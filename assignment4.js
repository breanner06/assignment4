/*let header = "templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
    html+= `<li>${x}</li>`;
}

html += '</ul>';
document.getElementById("demo").innerHTML = html;
*/
let word1= "Match";
let word2= "Box";
let text= document.getElementById("compoundWord").innerHTML;
let compoundWord = word1.concat ("", word2);
let caps= document.getElementById("upperCase").innerHTML;
let lowers= document.getElementById("lowerCase").innerHTML;

document.getElementById("word1").innerHTML = word1;
document.getElementById("word2").innerHTML = word2;


function addWords () {
    document.getElementById("compoundWord").innerHTML = compoundWord;
}

function upperCase () {
    document.getElementById("upperCase").innerHTML = 
    caps.replace (caps, compoundWord.toUpperCase());
}

function lowerCase () {
    document.getElementById("lowerCase").innerHTML = 
    lowers.replace (lowers, compoundWord.toLowerCase ());
}

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
let str = document.getElementById("today").innerHTML; 
let res = str.replace(/today/g, day);
document.getElementById("today").innerHTML = res;
/*
create a concatenated string variable that includes other
embedded variables concatenated together. output to page or consol
"if" conditional statement

number method
*/