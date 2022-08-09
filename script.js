const menuToggle = document.querySelector('.menu-toggle input');
const navbar = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('slide')
})


const navList = document.querySelectorAll('.nav-link');
navList.forEach(list => {
    list.addEventListener('click', function () {
        navList.forEach(nav => {
            console.log(nav);
            nav.classList.remove("active");
            this.classList.add("active");
        })
    })
})
