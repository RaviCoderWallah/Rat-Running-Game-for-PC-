var mousePlayer = document.querySelector(".mouse-player");
var gameover = document.querySelector(".gameOver");
var moveCat = document.querySelector(".angry-cat");
var scoreContent = document.querySelector('#score');
var score = 0;
var cross = true;


const updateScore = (score) => {
 scoreContent.innerHTML = score;
}


const checkCollide = () => {
  setInterval(() => {
    let mouseX  = parseInt(window.getComputedStyle(mousePlayer, null).getPropertyValue("left"));
    let mouseY = parseInt(window.getComputedStyle(mousePlayer, null).getPropertyValue("top"));
  
    let catX = parseInt(window.getComputedStyle(moveCat, null).getPropertyValue("left"));
    let catY = parseInt(window.getComputedStyle(moveCat, null).getPropertyValue("top"));

    offsetX = Math.abs(mouseX - catX);
    offsetY = Math.abs(mouseY - catY);


    if(offsetX < 100 && offsetY < 80){
      gameover.classList.add("active");
      moveCat.classList.remove("angry-cat-animation");
    }else if(offsetX < 145 && cross){
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
          cross = true;
        }, 1000);
    }
  }, 100);
}


const angryCatAnimation = () => {
  moveCat.classList.add("angry-cat-animation");
}

document.addEventListener("keydown", (e) => {
  gameover.classList.remove("active");
  console.log("Key code is : ", e.keyCode);
  if(e.keyCode == 38 || e.keyCode == 32){
    mousePlayer.classList.add("animateMouse");
    setTimeout(() => {
      mousePlayer.classList.remove("animateMouse");
    }, 700);
  }

  if(e.keyCode == 39){
    ratX = parseInt(window.getComputedStyle(mousePlayer, null).getPropertyValue("left"));
    mousePlayer.style.left = ratX + 112 + "px";
  }

  if(e.keyCode == 37){
    ratX = parseInt(window.getComputedStyle(mousePlayer, null).getPropertyValue("left"));
    mousePlayer.style.left = (ratX - 112) + "px";
  }


  angryCatAnimation();
  checkCollide();
});






