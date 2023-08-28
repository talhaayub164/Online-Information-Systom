//get variables from globals.js
option=parseInt(option);
if(option==1){
	content.innerHTML=home();
}
else if(option==3){
	col_left.innerHTML=addCourseForm();
	col_right.innerHTML=listCourses();
}
if(option==6){
	//alert(id);
	content.innerHTML=Reports(1);
}
else if(option==7){
	content.innerHTML=Reports(2);
}


