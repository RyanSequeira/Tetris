const canvas = document.getElementById("tetris");
const context = canvas.getContext("2d");

context.fillStyle = "#000";
context.fillRec(0, 0, canvas.clientWidth, canvas.clientHeight);
