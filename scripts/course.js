const coursesContainer = document.querySelector(".courses");
const buttonAll = document.querySelector(".btn-all");
const buttonCse = document.querySelector(".btn-cse");
const buttonWdd = document.querySelector(".btn-wdd");
const courseDetails = document.querySelector("#course-details");
const closeModal = document.querySelector("#close-button");


const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

function createCourseCard(courses){
	coursesContainer.innerHTML = "";
	courses.forEach(course => {
		//creating elements
		let card = document.createElement('div');
		let subject = document.createElement('h3');
		let number = document.createElement('p');
        

		//adding content to elements
		subject.innerHTML = `${course.subject} <span>${course.number}</span>`;
		//adding elements to card
		card.appendChild(subject);
		
        if (course.completed){
            card.style.backgroundColor = "green";
            card.style.color = "white";
        }
// add event listeners to each division on the page 
        card.addEventListener('click', ()=> displayCourseDetails(course));
        
    

        
        //adding card to main grid
		coursesContainer.appendChild(card);


	});


  }

  createCourseCard(courses);

//display all courses
  buttonAll.addEventListener("click",()=>{
    createCourseCard(courses);
  })
//display CSE courses
  buttonCse.addEventListener("click", ()=>{
	let cseCourses = courses.filter(course => course.subject === "CSE");
	createCourseCard(cseCourses);
  })
//display CSE courses
  buttonWdd.addEventListener("click", ()=>{
	let wddCourses = courses.filter(course => course.subject.toLocaleLowerCase() === "wdd");
	createCourseCard(wddCourses);
  })


  //   Modal
function displayCourseDetails(data){
    courseDetails.innerHTML = "";
    courseDetails.innerHTML = `
    <button id="closeModal>❌</buuton>
    <h2>${data.subject} ${data.number}</h2>
    <h3>${data.title}</h3>
    <p><strong>Credits</strong>: ${data.credits}</p>
    <p><strong>Certificate</strong>: ${data.certificate}</p>
    <p>${data.description}</p>
    <p><strong>Technologies</strong>: ${data.technology}</p>`;

    courseDetails.showModal();

    closeModal.addEventListener("click", ()=>{
        courseDetails.close();
    });
        
}


    
		