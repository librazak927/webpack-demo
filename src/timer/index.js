
  function padLeft(value) {
    return value < 10 ? "0" + value : value;
}

function showTime() {
    let element = document.getElementById("app");
    let date = new Date();
    let year = date.getFullYear();
    let month = padLeft(date.getMonth() + 1)
    let day = padLeft(date.getDate());
    let hour = padLeft(date.getHours());
    let minute = padLeft(date.getMinutes());
    let second = padLeft(date.getSeconds());
    let res = year + "-" + month + "-" + day + "  " + hour + ":" + minute + ":" + second;
    element.innerHTML = res;
}

let id

function startTimer() {
  if (id) {
    return
  }
  id =  setInterval(showTime, 1000);
}

startTimer()