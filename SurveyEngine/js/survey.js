
function main(){

	baseval = new baseinput();
	
	var val = document.getElementById("textinput").value;
	var type =  document.getElementById("selectbasic").value;
	var inputforms = document.getElementById("optionsinput").value;
	
	var newDiv = document.createElement("p");
	var newContent = document.createTextNode(val);
	
	
	newDiv.appendChild(newContent);
	
	
	var mydiv = document.getElementById("surveybody");
	mydiv.appendChild(newDiv);
	
	inputtype(type,inputforms);
	
}

function inputtype(type,forms){
	
	switch(type){
		
		case "rdbtn":
			document.getElementById("subbuttondiv").style.display = 'block';
			withradiobutton(forms);
			break;
		case "chkbox":
			document.getElementById("subbuttondiv").style.display = 'block';
			withcheckbox(forms);
			break;
		case "ddwn":
			document.getElementById("subbuttondiv").style.display = 'block';
			withdropdown(forms);
			break;
	    case "txtinput":
	    	document.getElementById("subbuttondiv").style.display = 'block';
			withtxtinput(forms);		
			break;
		
		}
}