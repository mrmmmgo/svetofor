let rounds = document.querySelectorAll(".round1");
let yellow = document.querySelector(".yellow");
let i = 0;
let times = 9;
function time() {
  rounds.item(i).classList.remove("opacity");
  rounds.item(i).classList.add("transparrent");
  i = (i + 1) % rounds.length;
  rounds.item(i).classList.add("opacity");
  rounds.item(i).classList.remove("transparrent");
}
rounds.item(i).classList.add("opacity");
rounds.item(1).classList.add("transparrent");
setInterval(time, 10000);

function yellowTime() {
  rounds[0].innerHTML = times;
  rounds[1].innerHTML = times;
  if (times >= 1 && times <= 3) {
    yellow.classList.add("opacity");
  } else {
    yellow.classList.remove("opacity");
  }
  times--;
  if (times == 0) {
    times = 10;
  }
}
setInterval(yellowTime, 1000);