function TheGreetFunction(){

	  let arrayNames;
	
// Get input from user
		function langButton(valSelected, theName){
		if(theName === ""){
			return("enter name!") 
		}
		if(valSelected === "English"){
		 return ("Hello, " + theName);
		}
		else if(valSelected === "Español"){
		return ("Hola, " + theName);
		}
		else if(valSelected === "Japanese"){
		return ("Kon'nichiwa, " + theName);
		}
	}


	// to get stored items
	function namesStored(nameEntered){
		// getting item from localStorage and assigning it to arrayNames
		arrayNames = JSON.parse(localStorage.getItem("array")) || [];
		if(nameEntered === ""){
			JSON.parse(localStorage.getItem("array")).length - 1;
		}
		else if(arrayNames.includes(nameEntered)){
		
		}
		// else if(arrayNames.includes(nameEntered)){
		// 	alert("Name already entered")
		// }
		else {arrayNames.push(nameEntered)
		localStorage.setItem("array", JSON.stringify(arrayNames))
	};
		
}
   //getting the length of names entered 
	function getLength(){
		return JSON.parse(localStorage.getItem("array")).length;
	} 
	
	return{
		langButton,
		namesStored,
		getLength
	}
}