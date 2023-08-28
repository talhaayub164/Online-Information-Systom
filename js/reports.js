let listCoursesReport=()=>{
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
		//alert(id);
		if(id!=null && id!="")
		{
			//get id from globals
			let searchID1=parseInt(id);
			for(i=0;i<courses.length;i++)
						{
							//alert(searchID1);
			
							//if course id is same as search box id then display
						if(courses[i][0]==searchID1)
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
		}	
		else 
		{
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
	}
	return (str);
}

let Reports=(id)=>{
	//get id from app.js

	if(id==1)
	{
		return listCoursesReport();
	}
	/*
	else if(id==2)
	{
		return listStudents();
	}
	*/
}