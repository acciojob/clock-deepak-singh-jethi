//your JS code here. If required.
const timer = document.querySelector("#timer");

setInterval(() => {
  let instance = new Date();

  const date = `${
    instance.getMonth() + 1
  }/${instance.getDate()}/${instance.getFullYear()}`;

  let hours = instance.getHours();
  let ampm = hours > 12 && hours != 24 ? "PM" : "AM";
  hours = hours <= 12 ? hours : hours - 12;

  const time = `${hours}:${instance.getMinutes()}:${instance.getSeconds()} ${ampm}`;

  timer.innerText = `${date}, ${time}`;
}, 1000);
