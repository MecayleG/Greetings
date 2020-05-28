// get reference to elements
const greetFunction = TheGreetFunction();
const greetButton = document.querySelector(".greetBtn");
const nameString = document.querySelector(".nameString");
const msg = document.getElementById("theGreet");
const count = document.getElementById("theCount");
let arrayNames;

function myFunction(){
	var inputVal = nameString.value;
	// all names will go into localStorage as lower case
	namesStored(inputVal.toLowerCase());
	 var valSelected =  document.querySelector("input[name='lang']:checked").value;
	 msg.innerHTML = greetFunction.langButton(valSelected, inputVal);
	 count.innerHTML = JSON.parse(localStorage.getItem("names")).length;

	 nameString.value = "";
	 
	 
	
}
function namesStored(nameEntered){
	// if localStorage is undefined set default to empty array
		arrayNames = JSON.parse(localStorage.getItem("names")) || [];
		// if user input(name) has never been entered and user input is not empty push to localStorage
		if(!arrayNames.includes(nameEntered) && nameEntered !== ""){
			arrayNames.push(nameEntered)
			// convert a list to string
			localStorage.setItem("names", JSON.stringify(arrayNames))
		}
	} 
	// button to clear localStorage
function deleteItems(){
	localStorage.clear();
	count.innerHTML = 0;
}
greetButton.addEventListener("click", myFunction);
	