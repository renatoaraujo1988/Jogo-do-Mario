const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".spipe-game");

const jump = () => {
    mario.classList.add("jump-mario");
    
    setTimeout(() => {
        mario.classList.remove("jump-mario");
    }, 500);       
};

document.addEventListener("keydown", jump);