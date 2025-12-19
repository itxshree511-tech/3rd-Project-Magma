gsap.registerPlugin(ScrollTrigger);

// INIT LOCOMOTIVE SCROLL
const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});

// SCROLLER PROXY
ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length
            ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
            : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// UPDATE ON SCROLL
locoScroll.on("scroll", ScrollTrigger.update);

// REFRESH
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// TEST ANIMATION
gsap.from("#page2", {
    y: 200,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
        // markers: true
    }
});
