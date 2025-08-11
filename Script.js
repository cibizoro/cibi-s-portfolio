function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}
const roles = [
  "Full Stack Developer",
  "Computer Vision Engineer",
  "Freelancer",
  "Web Designer",
  "AI Model Trainer"
];

let roleIndex = 0;
const roleElement = document.getElementById("changing-text");

function updateRole() {
  roleElement.textContent = roles[roleIndex];
  roleIndex = (roleIndex + 1) % roles.length;
}

updateRole(); 
setInterval(updateRole, 2000);
function showProjects(type, event) {
   
    document.querySelectorAll('.project-content').forEach(content => {
        content.classList.add('hidden');
    });

   
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

  
    document.getElementById(type).classList.remove('hidden');
    event.target.classList.add('active');
}
function showSkills(category, event) {
  document.querySelectorAll(".skills-content").forEach(c => c.classList.add("hidden"));
  document.getElementById(category).classList.remove("hidden");

  document.querySelectorAll(".tab-btn-skill").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");
}



