function responseObj(){
	this.question = "";
	this.answer = "";
}



function checkradio(questionNode,radionode){
	
	var grandchildren = radionode.childNodes;
	var questionString = questionNode.firstChild.data;
	var valid = false;
	var value = null;

	for(var i = 0 ; i < grandchildren.length ; i++){
		var map = grandchildren[i].attributes;
		if(grandchildren[i].checked){
			value = map.getNamedItem("value").nodeValue;
			valid = true;
		}
	}
	
	if(valid === true){
		return value;
	}else{
		alert("Please answer: "+questionString);
		return null;
	}
}

function checkCheckBox(questionNode,checkboxnode){
	
	var grandchildren = checkboxnode.childNodes;
	var questionString = questionNode.firstChild.data;
	var valid = false;
	var value = "";

	for(var i = 0 ; i < grandchildren.length ; i++){
		var map = grandchildren[i].attributes;
		if(grandchildren[i].checked){
			value += map.getNamedItem("value").nodeValue+"   ";
			valid = true;
		}
	}
	
	if(valid === true){
		//alert(value+"  was selected for"+questionString);
		return value;
	}else{
		alert("Please answer: "+questionString);
	}
}


function checkDropDown(questionNode,dropdownnode){
	
	var grandchildren = dropdownnode.childNodes;
	var questionString = questionNode.firstChild.data;
	var e = dropdownnode;
	var valueSelected = null;
	
	for(var i = 0; i<grandchildren.length;i++){
		
		var element = grandchildren[i];
		
		if(element.selected === true){
			valueSelected = element.attributes.getNamedItem("value").nodeValue;
			break;
		}
	}
	
	return valueSelected;
	
}

function checkText(questionNode,textnode){
	
	var questionString = questionNode.firstChild.data;
	
	if(textnode.value != null && textnode.value.length > 0){
		return textnode.value;
	}else{
		alert("Please Answer : "+questionString);
		return null;
	}
}