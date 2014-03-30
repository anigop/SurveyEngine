function createMultiButtonElement(oArray,type){
	var newDiv = document.createElement("div");
	for(var i = 0 ; i < oArray.length ; i++){
		var newinput = document.createElement("input");
		newinput.setAttribute("type", type);
		newinput.setAttribute("name", type+"-"+oArray[i]);
		newinput.setAttribute("value", oArray[i]);
		
		var newContent = document.createTextNode(" "+oArray[i]+" ");
		
		newDiv.appendChild(newinput);
		newDiv.appendChild(newContent);
	}
	
	var mydiv = document.getElementById("surveybody");
	mydiv.appendChild(newDiv);
}

function createDropDownElement(oArray,type){
	
	var orgDiv = document.createElement("div");
	var newDiv = document.createElement("select");

	for(var i = 0 ; i< oArray.length ; i++){
		var newinput = document.createElement("option");
		newinput.setAttribute("name", type+"-"+oArray[i]);
		newinput.setAttribute("value",oArray[i]);
		var newContent = document.createTextNode(" "+oArray[i]+" ");
		newinput.appendChild(newContent);
		newDiv.appendChild(newinput);
	}
	
	orgDiv.appendChild(newDiv);
	var mydiv = document.getElementById("surveybody");
	mydiv.appendChild(orgDiv);
}


function createSingleElement(type,inputString){
	
	var newDiv = document.createElement("div");
	var newinput = document.createElement("input");
	newinput.setAttribute("type", type);
	newinput.setAttribute("placeholder", inputString);
	
	newDiv.appendChild(newinput);
	
	var mydiv = document.getElementById("surveybody");
	mydiv.appendChild(newDiv);
}