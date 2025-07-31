const student = [
    { name: "Abdul Salam", age: 20, course: "Computer Science", favSubject: "Computer Science",image: "Abdul\ Salam.jpeg"},
    { name: "Ihtisham Ul Haq", age: 23, course: "Medical", favSubject: "Radiology", image:"my\ pictuer.jpeg"},
    { name: "Musa", age: 20, course: "Eng", favSubject: "Maths", image: "musa.jpeg"},
    { name: "Idrees Khan", age: 21, course: "Physics", favSubject: "Physics",image:"Idrees.jpeg"},
    { name: "Nasir Hussain", age: 23, course: "Nursing", favSubject: "Nursing",image: "nasir.jpeg"},
]

const containe = document.getElementById("student-list");
student.forEach ((student) => {
    containe.innerHTML +=`
    <div class ="student-card">
    <img src="${student.image}" alt="${student.name}" class="profile-img">
    <h3>Name: ${student.name}</h3>
    <p>age: ${student.age}</p>
    <p>course: ${student.course}</p>
    <p>Favorite Subject: ${student.favSubject}</p>
    </div>
    `;
})