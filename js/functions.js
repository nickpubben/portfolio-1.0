/* Cursor Animation */
let mouseCursor = document.querySelector('.cursor');
let links = document.querySelectorAll('a');;

window.addEventListener('mousemove',cursor);

function cursor(e){
    gsap.to(mouseCursor, 0.4, {
        x: e.clientX,
        y: e.clientY
    });
}

links.forEach(link => {
    link.addEventListener( "mouseleave", () => {
        mouseCursor.classList.remove( "link-grow" );
        gsap.to(mouseCursor, 0.4, {
            scale: 1
        });
    });

    link.addEventListener( "mouseover" , () => {
        mouseCursor.classList.add( "link-grow" );
        gsap.to(mouseCursor, 0.4, {
            scale: 1.5
        });
    });
});