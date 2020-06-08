function TheGreetFunction(greetedNames){

	const TheGreetedNames = greetedNames || [];

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
	function namesStored(nameEntered){
	// if user input(name) has never been entered and user input is not empty push to localStorage
		if(!TheGreetedNames.includes(nameEntered) && nameEntered !== ""){
			TheGreetedNames.push(nameEntered)
		}
      }
     function lettersOnly(inputTxt){
     	var letters =/[^A-Za-z]/g;
     	if(inputTxt !== ""){
     		var allLetters = inputTxt.replace(letters, "");
     		var allSmall = allLetters.toLowerCase();
     		return allSmall;
     	}
     	return "";
     } 
	function counter(){
		return TheGreetedNames.length
	}
	function alreadyGreeted(){
		console.log(TheGreetedNames)
		return TheGreetedNames;
	}
	

	return{
		langButton,
		namesStored,
		lettersOnly,
		counter,
		alreadyGreeted
	}
}