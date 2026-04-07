const nav = document.querySelector('.menu');
const icon = document.querySelector('.icon');

icon.onclick = ()=>{
    nav.classList.toggle('active-nav');
    if(nav.classList.contains('active-nav')) {
        icon.src = "images/icons8-cancel-50.png";
        console.log('working');
    } else{
        icon.src = "images/icons8-hamburger-button-50.png";
        console.log('not working');
    }
}
window.onscroll = ()=>{
    nav.classList.remove('active-nav');
    icon.src = "images/icons8-hamburger-button-50.png";
}


// RENDERING PROJECTS TO THE PAGE FROM JS

const projectsArray = [
    {
        name: "Listing Hub",
        title: "Business Directory/Listing Website",
        description: "A Fully functional busines directory platform featuring categorized listings and custom dashboard. Built with HTML, CSS and Javascript, this project demostrates strong fundamentals in structuring scalable web applicatio and handling real-word user interactions.",
        links: {
            view: "https://directory-website-project.vercel.app/",
            code: "https://github.com/jamal-web-dev/Directory-Website-Project.git"
        },
        image: "images/directory-img.png"
    },
    {
        name: "Quiz Application",
        title: "Web Application",
        description: "An interactive quiz application with a built-intimer, automatic submission and real-time result display. It showcases my ability to build dynamic, user-focused web apps with logic-driven funtionality. Developed using HTML, CSS and Javascript",
        links: {
            view: "https://quiz-app-one-peach-62.vercel.app/",
            code: "https://github.com/jamal-web-dev/Quiz-App.git"
        },
        image: "images/quiz-img.png"
    },
    {
        name: "Teddy Helping Hands LLC",
        title: "Cleaning Services Website",
        description: "A Professional Commercial and Residiential Cleaning Service Webisite, built to generate more customers. The website is responsive and mobile friendly.",
        links: {
            view: "https://teddyhelpinghands.com/",
            code: "https://teddyhelpinghands.com/"
        },
        image: "images/teddy-img.jpg"
    },
    {
        name: "Parada Sabillon LLC",
        title: "Business Website",
        description: "A responsive user-friendly Website Built for a professional Cleaning Services with the goal of generating more customers.",
        links: {
            view: "https://paradasabillon.com/",
            code: "https://paradasabillon.com/"
        },
        image: "images/parad-img.jpg"
    },
    {
        name: "Business Hub",
        title: "Digital Presence for Entrepreneurs",
        description: "A professional business websitep age designed to help entrepreneurs establish a strong online presence.Built with HTML, CSS and JavaScript",
        links: {
            view: "https://jamal-digital.github.io/Business-Consultant-Website/",
            code: "https://github.com/Jamal-Digital/Business-Consultant-Website.git"
        },
        image: "images/bus-hub-img.png"
    }
];

const projectContainer = document.querySelector(".project-section");

projectContainer.innerHTML = "";
let className;
projectsArray.forEach((project, index) => {
    if(index % 2 === 0){
        className = "container";
    }else {
        className = "container container-two";
    }
    const projectHtml = `

        <div class="${className}">
                <div class="content">
                    <p class="title">
                        ${project.name}
                    </p>
                    <h2>${project.title}</h2>
                    <div class="main-content">
                        <p>${project.description}</p>
                    </div>
                    <ul>
                        <a href="${project.links.view}"><button class="visit-btn">Visit</button></a>

                        <a href="${project.links.code}"><button>Code</button></a>
                    </ul>
                </div>
                <div class="image">
                    <img src="${project.image}" alt="" class="Portfolio">
                </div>
        </div>
    `;
    projectContainer.innerHTML += projectHtml;
    console.log(projectContainer);
})