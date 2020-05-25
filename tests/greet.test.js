describe("The Greetings exercise", function(){
	it("should greet Mecayle in English", function(){
		let greetFunction = TheGreetFunction();
		var valSelected = "English";
		var theName = "Mecayle";
		assert.equal(greetFunction.langButton(valSelected, theName), "Hello, Mecayle");
	});
});