const greetFunction = TheGreetFunction();
const greetButton = document.querySelector(".greetBtn");
const nameString = document.querySelector(".nameString");
const msg = document.getElementById("theGreet");
const count = document.getElementById("theCount");

// count.innerHTML = greetFunction.getLength();




// var counter = 0;
// count.innerHTML = counter;

function myFunction(){
	 var valSelected =  document.querySelector("input[name='lang']:checked").value;
	 msg.innerHTML = greetFunction.langButton(valSelected, nameString.value);
	 greetFunction.namesStored(nameString.value);
	 count.innerHTML = greetFunction.getLength();
	 nameString.value = "";
	 
	// check diagrams of how dom and local storage
	 

	//  if(greetString.value !== ""){
	// 	counter ++;
	//  var valSelected =  document.querySelector("input[name='lang']:checked").value;
	//  msg.innerHTML = valSelected
	// if(valSelected === "English"){
	// 	msg.innerHTML = "Hello, " + greetString.value;
	// }
	// if(valSelected === "Espanol"){
	// 	msg.innerHTML = "Hola, " + greetString.value;
	// }
	// if(valSelected === "Japanese"){
	// 	msg.innerHTML = "Kon'nichiwa, " + greetString.value;
	// }
	// };
	//  greetString.value = "";
	//  // count how many times button is pressed
	//  count.innerHTML = counter;
}
function deleteItems(){
	localStorage.clear();
	count.innerHTML = 0;
}
greetButton.addEventListener("click", myFunction);
	