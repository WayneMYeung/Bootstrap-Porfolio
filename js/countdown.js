const countdown = () => {
    const releaseDate = new Date("March 15, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = releaseDate - now;
  
    const day = 1000 * 60 * 60 * 24;
    const hour = 1000 * 60 * 60;
    const minute = 1000 * 60;
    const second = 1000;
  
    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);
  
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  
    if (gap < 0) {
      clearInterval(timer);
      document.querySelector(".countdown").innerText = "Project Released!";
    }
  };
  
  const timer = setInterval(countdown, 1000);
  countdown();
  