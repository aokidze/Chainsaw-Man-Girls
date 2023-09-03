let PlayMusic = document.getElementById('playButton')
let audio = document.getElementById('audio')
let SvgMusic = document.getElementById('Svg-music')
let isPlaying = false;

PlayMusic.addEventListener('click', function () {
    if (!isPlaying) {
        audio.play();
        isPlaying = true; 
        SvgMusic.innerHTML = '<svg width="30px" height="30px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 19L14 5C14 3.89543 14.8954 3 16 3L17 3C18.1046 3 19 3.89543 19 5L19 19C19 20.1046 18.1046 21 17 21L16 21C14.8954 21 14 20.1046 14 19Z" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10 19L10 5C10 3.89543 9.10457 3 8 3L7 3C5.89543 3 5 3.89543 5 5L5 19C5 20.1046 5.89543 21 7 21L8 21C9.10457 21 10 20.1046 10 19Z" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>';
    } else {
        if (audio.paused) {
            audio.play();
            SvgMusic.innerHTML = '<svg width="30px" height="30px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 19L14 5C14 3.89543 14.8954 3 16 3L17 3C18.1046 3 19 3.89543 19 5L19 19C19 20.1046 18.1046 21 17 21L16 21C14.8954 21 14 20.1046 14 19Z" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10 19L10 5C10 3.89543 9.10457 3 8 3L7 3C5.89543 3 5 3.89543 5 5L5 19C5 20.1046 5.89543 21 7 21L8 21C9.10457 21 10 20.1046 10 19Z" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>';
        } else {
            audio.pause();
            SvgMusic.innerHTML = '<svg id="SVG-music" fill="#fff" width="30px" height="30px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <path d="M4.993,2.496C4.516,2.223,4,2.45,4,3v26c0,0.55,0.516,0.777,0.993,0.504l22.826-13.008 c0.478-0.273,0.446-0.719-0.031-0.992L4.993,2.496z"/><path d="M4.585,30.62L4.585,30.62C3.681,30.62,3,29.923,3,29V3c0-0.923,0.681-1.62,1.585-1.62c0.309,0,0.621,0.085,0.904,0.248 l22.794,13.007c0.559,0.319,0.878,0.823,0.878,1.382c0,0.548-0.309,1.039-0.847,1.347L5.488,30.373 C5.206,30.534,4.894,30.62,4.585,30.62z M5,3.651v24.698l21.655-12.34L5,3.651z"/></svg>';
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('selectstart', function(e) {
        e.preventDefault();
    });
});

let video = document.getElementById('fon');
        video.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });