const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 200);
});

const menuIcon = document.getElementById("menu-icon");
const navList = document.querySelector(".navlist");

menuIcon.addEventListener("click", () => {
    navList.classList.toggle("active");
    menuIcon.classList.toggle("bx-x");
});

const typingText = document.querySelector('.typing-text span');
let textIndex = 0;
let letterIndex = 0;

function type() {
    if (letterIndex < textArray[textIndex].length) {
        typingText.textContent += textArray[textIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (letterIndex > 0) {
        typingText.textContent = textArray[textIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(erase, 100);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});
