function result(){
	var children = document.getElementById("surveybody").childNodes;
	var responseArray = new Array();
	var questionNode = null;
	var validSubmission = true;
	
	
	for(var i = 0 ; i < children.length ; i++){
		var element = children[i];

		if(element.nodeName == "P"){
			questionNode = element;
		}
		if(element.nodeName === "#text"){
			continue;
		}else{
			if(element.nodeName === "DIV"){
				var child = element.firstChild;
				var map = child.attributes;
				var respObj = new responseObj();
				if(child.nodeName === "SELECT"){
					respObj.question = questionNode.firstChild.data;
					respObj.answer = checkDropDown(questionNode,child);
				}
				else if(map != null && map.getNamedItem("type").nodeValue === "radio"){
					respObj.question = questionNode.firstChild.data;
					respObj.answer = checkradio(questionNode,element);
				}
				else if(map != null && map.getNamedItem("type").nodeValue === "checkbox"){
					respObj.question = questionNode.firstChild.data;
					respObj.answer = checkCheckBox(questionNode,element);
				}
				else if(child.nodeName == "INPUT"){
					respObj.question = questionNode.firstChild.data;
					respObj.answer = checkText(questionNode,child);
				}
				
				if(respObj.answer == null){
					validSubmission = false;
				}
				responseArray.push(respObj);
			}
		}
	}
	
	render(validSubmission,responseArray);
	
}

/*
 * Rendering result after form validation
 */
function render(validity,responseArray){
	 if(validity === true){
		 document.getElementById("surveybody").style.display = 'none';
		 document.getElementById("subbuttondiv").style.display = 'none';
		 
		 var parentDiv = document.getElementById("surveyresult");
		 for(var i = 0 ; i < responseArray.length ; i++){
			 var content = "Question - "+responseArray[i].question;
			 var contentAnswer = "Answer - "+responseArray[i].answer;
			 var newDiv = document.createElement("div");
			 var newContent = document.createTextNode(content);
			 var newContentAnswer = document.createTextNode(contentAnswer);
			 newDiv.appendChild(newContent);
			 newDiv.appendChild(document.createElement("br"));
			 newDiv.appendChild(newContentAnswer);
			 parentDiv.appendChild(newDiv);
		 
		 }
	 }
	
}
