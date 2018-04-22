var header = document.getElementById('#header');
var body = document.querySelector('body');
var scrollTop = body.scrollTop();

window.onload = function() {
    if(scrollTop > 100) {
        header.style.marginTop = 91 + 'px';
    }
}