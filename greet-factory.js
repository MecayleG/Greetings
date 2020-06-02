function TheGreetFunction(){


	 // Get input from user and greet in language selected
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
	function namesStored(nameEntered, arrayNames){
	// if user input(name) has never been entered and user input is not empty push to localStorage
		if(!arrayNames.array.includes(nameEntered) && nameEntered !== ""){
			arrayNames.array.push(nameEntered)
			
			
		}
		return arrayNames;
	} 
	return{
		langButton,
		namesStored,
	}
}