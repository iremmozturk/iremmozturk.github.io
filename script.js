
function updateClock() {
    var now = new Date();
    var timeString = now.toLocaleTimeString('tr-TR');
    var dateString = now.toLocaleDateString('tr-TR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });  
    document.getElementById('clock').textContent = timeString + ' | ' + dateString;
}

setInterval(updateClock, 1000);

updateClock();

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var errorMessage = document.getElementById('error-message');

    // Form doldurulmalı
    if (!name || !email || !message) {
        errorMessage.style.display = 'block';
        return false;
    }
    // E-posta 
    if (!email.includes('@')) {
        errorMessage.textContent = 'Geçerli bir e-posta adresi girin.';
        errorMessage.style.display = 'block';
        return false;
    }
    errorMessage.style.display = 'none';
    return true; 
}
/* HAKKINDA KISMI BUTON*/
function toggleBio() {
    const fullBio = document.getElementById("fullBio");
    const toggleButton = document.getElementById("toggleButton");

    if (fullBio.style.display === "none" || fullBio.style.display === "") {
        fullBio.style.display = "block";
        toggleButton.textContent = "Daha Az Gör";
    } else {
        fullBio.style.display = "none";
        toggleButton.textContent = "Daha Fazla Gör";
    }
}
/*HAKKIMDA KISMI DAHA FAZLA GÖR*/
function toggleBio() {
    var bioText = document.getElementById("bio-text");
    var btn = document.getElementById("toggle-btn");

    if (bioText.style.display === "none") {
        bioText.style.display = "block";  
        btn.innerHTML = "Daha Az Gör";   
    } else {
        bioText.style.display = "none";   
        btn.innerHTML = "Daha Fazla Gör"; 
    }
}    
/* PROJE FİLTRELEME KISMI*/
function filterProjects() {
    const filterValue = document.getElementById('filter').value;
    const projects = document.querySelectorAll('.project-box');

    projects.forEach(project => {
        if (filterValue === "newest" && project.getAttribute("data-type") === "newest") {
            project.style.display = "block";  
        } else if (filterValue === "popular" && project.getAttribute("data-type") === "popular") {
            project.style.display = "block";  
        } else {
            project.style.display = "none";   
        }
    });
}





