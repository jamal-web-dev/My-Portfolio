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
        name: "Consultant Machine",
        title: "Machine Helping Company",
        description: "A Professional Commercial and Residiential Cleaning Service Webisite, built to generate more customers. The website is responsive and mobile friendly.",
        links: {
            view: "https//www.machine.com.ng",
            code: "https//github/mahine.com.ng.git"
        },
        image: "images/work-one.png"
    },
    {
        name: "Consultant Machine",
        title: "Machine Helping Company",
        description: "A Professional Commercial and Residiential Cleaning Service Webisite, built to generate more customers. The website is responsive and mobile friendly.",
        links: {
            view: "https//www.machine.com.ng",
            code: "https//github/mahine.com.ng.git"
        },
        image: "images/work-one.png"
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