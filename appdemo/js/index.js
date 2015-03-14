var mainStage=document.getElementById("stage");

//auto start animation
function startAni() {
	mainStage.classList.add("go");
}
window.setTimeout(startAni, 800);

// Function to change the content of t2
function playPause() {
	mainStage.classList.toggle("go");
}


// add event listener to stage
mainStage.addEventListener("click", playPause, false);



