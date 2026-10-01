// ==============================
// АНИМАЦИЯ КУРСОРА
// ==============================

const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");


document.addEventListener("mousemove", function (event) {

    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";

    cursorDot.style.left = event.clientX + "px";
    cursorDot.style.top = event.clientY + "px";

});



// Увеличение курсора при наведении на ссылки

const links = document.querySelectorAll("a");


links.forEach(function (link) {

    link.addEventListener("mouseenter", function () {

        cursor.classList.add("active");

    });


    link.addEventListener("mouseleave", function () {

        cursor.classList.remove("active");

    });

});




// ==============================
// ПОЯВЛЕНИЕ БЛОКОВ ПРИ СКРОЛЛЕ
// ==============================

const revealElements = document.querySelectorAll(".reveal");


function revealBlocks() {

    const windowHeight = window.innerHeight;


    revealElements.forEach(function (element) {

        const elementTop =
            element.getBoundingClientRect().top;


        const showPoint = 100;


        if (elementTop < windowHeight - showPoint) {

            element.classList.add("active");

        }

    });

}


window.addEventListener("scroll", revealBlocks);


// Запускаем функцию сразу после открытия страницы

revealBlocks();




// ==============================
// ПЛАВНЫЙ СКРОЛЛ
// ==============================

const anchorLinks =
    document.querySelectorAll('a[href^="#"]');


anchorLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();


        const targetId =
            this.getAttribute("href");


        const targetElement =
            document.querySelector(targetId);


        if (targetElement) {

            targetElement.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});