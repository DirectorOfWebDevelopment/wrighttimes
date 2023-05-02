
// navigation animations

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

// Section animations
const observer = new IntersectionObserver((entires)=> {
    entires.forEach((entry)=> {
        console.log
        if (entry.isIntersecting){
            entry.target.classList.add('show');

        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
