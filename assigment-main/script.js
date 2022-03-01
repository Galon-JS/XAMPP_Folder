const deg = 6;
const hr = document.querySelector("#h");
const mn = document.querySelector("#m");
const sc = document.querySelector("#s");

// *** SetInterval method allows us to refresh the function every second
setInterval(() => {
  // Getting the time from the Date module
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
});
