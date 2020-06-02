// get reference to elements

const greetFunction = TheGreetFunction();
const greetButton = document.querySelector(".greetBtn");
const nameString = document.querySelector(".nameString");
const msg = document.getElementById("theGreet");
const count = document.getElementById("theCount");
// if localStorage is undefined set default to empty array
const arrayNames = JSON.parse(localStorage.getItem("data")) || {array : []};


function myFunction(){
	var inputVal = nameString.value;
	// all names will go into localStorage as lower case.
	// convert a list to string
	//list returned from greetFunction.namesStored is saved in localStorage
	localStorage.setItem("data", JSON.stringify(greetFunction.namesStored(inputVal.toLowerCase(), arrayNames)));
	var valSelected =  document.querySelector("input[name='lang']:checked").value;
	 msg.innerHTML = greetFunction.langButton(valSelected, inputVal);
	 count.innerHTML = JSON.parse(localStorage.getItem("data")).array.length //getting list of names from localStorage and displaying.
	nameString.value = "";
	 
	 
	
}
	// button to clear localStorage
function deleteItems(){
	localStorage.clear();
	location.reload();
	count.innerHTML = 0;
}
greetButton.addEventListener("click", myFunction);
	