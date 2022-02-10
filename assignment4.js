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
    document.getElementById("compoundWord").innerHTML =
    text.replace ("click here for compound word", function (x) {
        return compoundWord});
}

function upperCase () {
    document.getElementById("upperCase").innerHTML = 
    caps.replace ("click here for upper case", compoundWord.toUpperCase ());
}

function lowerCase () {
    document.getElementById("lowerCase").innerHTML = 
    lowers.replace ("click here for lower case", compoundWord.toLowerCase ());
}
/*
create a concatenated string variable that includes other
embedded variables concatenated together. output to page or consol
"if" conditional statement
switch statement
string method
number method
*/