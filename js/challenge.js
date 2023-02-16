// select necessary elements
const counter = document.getElementById('counter');
const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const heartBtn = document.getElementById('heart');
const pauseBtn = document.getElementById('pause');
const likesList = document.querySelector('.likes');
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('list');

let count = 0;
let isPaused = false;
let timer;

// increment timer and update counter every second
function startCounter() {
timer = setInterval(() => {
count++;
counter.innerText = count;
}, 1000);
}

// manually increment counter on plus button click
plusBtn.addEventListener('click', () => {
count++;
counter.innerText = count;
});

// manually decrement counter on minus button click
minusBtn.addEventListener('click', () => {
count--;
counter.innerText = count;
});

// add like on heart button click and display count of likes for current number
heartBtn.addEventListener('click', () => {
const newLike = document.createElement('li');
newLike.innerText = `${count} has been liked`;
likesList.appendChild(newLike);
});

// pause and resume timer on pause button click
pauseBtn.addEventListener('click', () => {
if (isPaused) {
startCounter();
pauseBtn.innerText = 'pause';
minusBtn.disabled = false;
plusBtn.disabled = false;
heartBtn.disabled = false;
commentInput.disabled = false;
} else {
clearInterval(timer);
pauseBtn.innerText = 'resume';
minusBtn.disabled = true;
plusBtn.disabled = true;
heartBtn.disabled = true;
commentInput.disabled = true;
}
isPaused = !isPaused;
});

// restart timer and reset counter on restart button click
document.addEventListener('DOMContentLoaded', () => {
startCounter();
});

// add comment on submit button click
commentForm.addEventListener('submit', (e) => {
e.preventDefault();
const newComment = document.createElement('li');
newComment.innerText = commentInput.value;
commentList.appendChild(newComment);
commentInput.value = '';
});