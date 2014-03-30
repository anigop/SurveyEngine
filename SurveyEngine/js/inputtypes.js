function withradiobutton(inputs){
	
	var base = new baseinput();
	var radiobuttonmodule = new multiInput(inputs);
	
	var oArray = radiobuttonmodule.oArray;

	createMultiButtonElement(oArray,"radio");
	
}


function withcheckbox(inputs){
	
	var base = new baseinput();
	var checkboxmodule = new multiInput(inputs);
	
	var oArray = checkboxmodule.oArray;
	createMultiButtonElement(oArray,"checkbox");
}

function withdropdown(inputs){

	var base = new baseinput();
	var checkboxmodule = new multiInput(inputs);
	
	var oArray = checkboxmodule.oArray;
	createDropDownElement(oArray,"dropdown");
}


function withtxtinput(inputs){
	
	var base = new baseinput();
	var single = new singleInput();
	
	createSingleElement("text",single.options);
}

