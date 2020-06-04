const currNames = localStorage["names"];
let names = [];
if(currNames){
	names = JSON.parse(currNames);
}
const greetFunction = TheGreetFunction(names);
// get reference to elements
const greetButton = document.querySelector(".greetBtn");
const nameString = document.querySelector(".nameString");
const msg = document.getElementById("theGreet");
const count = document.getElementById("theCount");

function myFunction(){
	var inputVal = nameString.value;
	var valSelected = document.querySelector("input[name='lang']:checked").value;
	msg.innerHTML = greetFunction.langButton(valSelected, inputVal);
	greetFunction.namesStored(inputVal.toLowerCase());
	count.innerHTML = greetFunction.counter(); 
	nameString.value = "";
	localStorage["names"] = JSON.stringify(greetFunction.alreadyGreeted())
}
// button to clear localStorage
function deleteItems(){
	localStorage.clear();
	location.reload();
	count.innerHTML = 0;
}
greetButton.addEventListener("click", myFunction);
	