let ball = document.querySelector(`.ball`);
let field = document.querySelector(`.field`);

field.onclick = function(event) {
    ball = event.clientX;
    ball = event.clientY;
}