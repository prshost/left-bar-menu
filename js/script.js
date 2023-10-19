let bar = document.querySelector('.left-bar');
let btn = document.querySelector('.btn');

btn.onclick = () => {
    bar.classList.toggle('active');
    btn.classList.toggle('active');
}