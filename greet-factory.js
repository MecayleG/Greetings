function TheGreetFunction(){

	 
	
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

	
	return{
		langButton,
	}
}