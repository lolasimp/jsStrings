//Challenge #1

var numOfSandwhiches = 4 * 2 ;
console.log("numOfSandwhiches", numOfSandwhiches);

//Challenge 2
var name = "Lola";

var string = "Hello, " + name + " how are you today?";

console.log("string", string); 

//Challenge #3
var DNA = "GCAT";

var RNA = DNA.replace('T', 'U');

console.log("RNA", RNA);

// Challenge #4

var animal = 'Goat'; 
var animal = 'alligator';
if(animal === 'alligator'){
    // debugger; 
    animal.toLowerCase()=== 'alligator'
        // console.log("small");
}else{
     console.log("wide");
}

if(animal === 'Goat'){
    console.log('wide');
}else{
    console.log('wide');
}


var yarn = "the better string";
var domString = "<h4>" + yarn + "<h4>";

var myDiv =document.getElementById('yarn-holder');
myDiv.innerHTML = domString;


//Challenge 5
var str = 'IBMWLOVEbmcatsbmw';
var love =str.replace (/[BMWbmw]/g,'');

console.log(love);
var loveStr = '<h1>' + love + '<h1>';
var loveElement = document.getElementById('love-holder');
loveElement.innerHTML = loveStr;
