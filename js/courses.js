let addFormObj=null;
addCourseForm=()=>{
	return (
		`
		<div id="AddForm">
		<h1 class="mt-3 px-5">Add New Course</h1>
		
		  <div class="mb-3">
		    <label for="exampleInputEmail1" class="form-label">Course ID</label>
		    <input type="text" id="courseID" class="form-control"  aria-describedby="emailHelp">
		    <div id="emailHelp" class="form-text">Name of course</div>
		  </div>
		  <div class="mb-3">
		    <label for="exampleInputPassword1" class="form-label">Course Name</label>
		    <input type="text" class="form-control" id="courseName">
		  </div>
		  <div class="mb-3">
		    <label for="exampleInputPassword1" class="form-label">Course Fee</label>
		    <input type="text" class="form-control" id="courseFee">
		  </div>
		  
		  <button onClick="addCourse();" class="btn btn-primary">Add Course</button>
		</div>
		`
	);	
}
updateCourseForm=(index)=>{
	return (
		`
		<div id="UpdateForm">
		<h1 class="mt-3 px-5">Update A Course</h1>
			<input type='hidden' id='recordID' value='${index}'/>	
		  <div class="mb-3">
		    <label for="exampleInputEmail1" class="form-label">Course ID</label>
		    <input type="text" value='${courses[index][0]}' id="courseID" class="form-control"  aria-describedby="emailHelp">
		    <div id="emailHelp" class="form-text">Name of course</div>
		  </div>
		  <div class="mb-3">
		    <label for="exampleInputPassword1" class="form-label">Course Name</label>
		    <input type="text" class="form-control"  value='${courses[index][1]}' id="courseName">
		  </div>
		  <div class="mb-3">
		    <label for="exampleInputPassword1" class="form-label">Course Fee</label>
		    <input type="text" class="form-control" id="courseFee"  value='${courses[index][2]}' >
		  </div>
		  
		  <button onClick="updateCourse();" class="btn btn-primary">Update Course</button>
		</div>
		`
	);	
}

/////////////////////////////
//Add a new course
////////////////////////////
let addCourse=()=>{
	courses.push([courseID.value,courseName.value,courseFee.value]);
	col_right.innerHTML=listCourses();
}	
/////////////////////////////
//Show list of courses
////////////////////////////
let listCourses=()=>{
	let str=`
			<div class="container py-5" > 
				<div class="row">
					<div class="col-sm-12">
						<div class="row py-2">
							<div class="col-sm-2 fw-bold">
								
									Course ID
								
							</div>
							<div class="col-sm-4 fw-bold">
								Course Name
							</div>
							<div class="col-sm-2 fw-bold">
								Course Fee
							</div>
							<div class="col-sm-2 fw-bold">
								Edit
							</div>
							<div class="col-sm-2 fw-bold">
								Delete
							</div>
							
						</div>
				
			
		`;
			
		for(i=0;i<courses.length;i++)
		{
			//let c=[];
			//console.log(c);
			str=str+`
				<div class="row py-2">
					<div class="col-sm-2">
						<div class="font-weight-bold">
						
						${courses[i][0]}
						</div>
					</div>
					<div class="col-sm-4">
						${courses[i][1]}
					</div>
					<div class="col-sm-2">
						${courses[i][2]}
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onclick="editCourse(${i})">Edit</button>
					</div>
					<div class="col-sm-2">
						<button class="btn btn-primary" onclick="deleteCourse(${i})">Delete</button>
				
					</div>
					
				</div>
	`;
		}
		str=str+"</div></div>"
	return (str);
}

let editCourse=(index)=>{
	addFormObj=AddForm;
	//load update form in left column
	col_left.innerHTML=updateCourseForm(index);
	//save or set id of record to be edited in recordID hidden field

	recordID.value=index;//id will be saved, we will use it in updateCourse()
}

let updateCourse=()=>{
	//get values of input boxes and put in local variables
	let id=courseID.value;
	let name=courseName.value;
	let fee=courseFee.value;

	//Now update the courses array, get the id from hidden field
	courses[recordID.value][0]=id;
	courses[recordID.value][1]=name;
	courses[recordID.value][2]=fee;
	//show add form
	col_left.innerHTML=addCourseForm();

	
	
	//load courses in right column again
	col_right.innerHTML=listCourses();
	//hide update form
	UpdateForm.style.display='none';
	

}

let deleteCourse=(index)=>{
	courses.splice(index,1);
	//load course list again in right column
	col_right.innerHTML=listCourses();
}
