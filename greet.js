const greetFunction = TheGreetFunction();
const greetButton = document.querySelector(".greetBtn");
const nameString = document.querySelector(".nameString");
const msg = document.getElementById("theGreet");
const count = document.getElementById("theCount");
let arrayNames;




function myFunction(){
	var inputVal = nameString.value;
	namesStored(inputVal.toLowerCase());
	 var valSelected =  document.querySelector("input[name='lang']:checked").value;
	 msg.innerHTML = greetFunction.langButton(valSelected, inputVal);
	 count.innerHTML = JSON.parse(localStorage.getItem("names")).length;

	 nameString.value = "";
	 
	 
	
}
function namesStored(nameEntered){
		arrayNames = JSON.parse(localStorage.getItem("names")) || [];
		if(!arrayNames.includes(nameEntered) && nameEntered !== ""){
			arrayNames.push(nameEntered)
			localStorage.setItem("names", JSON.stringify(arrayNames))
		}
	} 
function deleteItems(){
	localStorage.clear();
	count.innerHTML = 0;
}
greetButton.addEventListener("click", myFunction);
	