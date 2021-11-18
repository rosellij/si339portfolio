window.addEventListener('DOMContentLoaded', () => {

    // var prefersreducedmotion = window.getComputedStyle(document.querySelector("#mainheader p")).display == 'block' ? true : false;

    document.querySelector(".footerformdiv a").addEventListener("click", function() {
        document.querySelector(".footerformdiv").classList.add("footerclicked");
    });

    document.querySelectorAll("main, header").forEach(item => {
        item.addEventListener("click", function() {
            document.querySelector(".footerformdiv").classList.remove("footerclicked");
        });
    });

    document.querySelector(".footerformdiv").addEventListener("focus", function() {
        document.querySelector(".footerformdiv").classList.add("footerclicked");
    });

    document.querySelectorAll(".skip, header *, main *").forEach(item => {
        item.addEventListener("focus", function() {
            document.querySelector(".footerformdiv").classList.remove("footerclicked");
        });
    });

    /* if (document.querySelector("main").classList.contains("page3grid")) {
        document.querySelector(".flip-card").addEventListener("click", function() {
            console.log("did a backflip!");
            document.querySelector(".flip-card").focus();
        });
    }; */

});