window.onscroll = function() {

    let scrollPercent = getScrollPercentage();

    // just a visual debugger aid
    document.getElementById("scroll").innerHTML = getScrollPercentage() + "   " + getScrollPercentageRounded();


    
}

function getScrollPercentage() {

    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = (scrollTop /(docHeight - winHeight));

    if(scrollPercent > 1) {
        scrollPercent = 1;
    }

    return scrollPercent;

}

function getScrollPercentageRounded() {

    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = (scrollTop /(docHeight - winHeight))*100;
    let scrollPercentRounded = Math.round(scrollPercent);

    if(scrollPercentRounded > 100) {
        scrollPercentRounded = 100;
    }

    return scrollPercentRounded;

}