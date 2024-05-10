function run(){
    var button = document.getElementById('nao');

    var windowwidth = window.innerWidth;
    var windowheight = window.innerHeight;

    var maxX = windowwidth - button.offsetWidth;
    var maxY = windowheight - button.offsetHeight;

    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}