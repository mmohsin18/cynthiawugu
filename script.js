const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function firstpage(){
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        ease: Expo.easeInOut,
        duration:1.5
    })
    .to(".boundingelem", {
        y:0,
        delay: -1,
        ease: Expo.easeInOut,
        duration: 2,
        stagger: 0.2
    })
    .from("#herofooter", {
        y: '-10',
        opacity: 0,
        delay: -1.2,
        ease: Expo.easeInOut,
        duration: 1.5
    })
}

// gsap.from("#botbor",{
//     width: 0%
// })


// document.querySelectorAll(".elem").forEach(function (elem) {
//     elem.addEventListener("mousemove", function(details) {
//         console.log(details)
//     })
// });

document.querySelectorAll(".elem").forEach(function(elem) {
    elem.addEventListener("mousemove", function(event) {
        console.log("Mouse moved inside .elem", event);
    });
});


// function circleMouseFollower(){
//     window.addEventListener("mousemove", function() {
//         console.log(dets);
//     })
// }

// circleMouseFollower();

firstpage()