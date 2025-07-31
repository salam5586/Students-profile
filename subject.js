const Subject = ["Physics " , "Chemistry","Biology", "Maths", "English"];
const difficulties = ["Easy", "Medium", "Hard"];
const Subjects = document.getElementById("subject-list")

Subject.forEach(Subject=> {
    const level = difficulties[Math.floor(Math.random()* difficulties.length)];
    const li = document.createElement("li")
    li.textContent = `${Subject} - difficulties: ${level}`;
    li.style.color= "white"
    li.style.backgroundColor = "#2f7979"
    li.style.padding = "20px";
    li.style.margin = "10px 0";
    li.style.borderRadius = "8px";
    Subjects.appendChild(li);
})