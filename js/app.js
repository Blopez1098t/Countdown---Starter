const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  /* ----------- PART 1 ----------- */
  // Create a variable called giveaway to hold the element with class 'giveaway' (1 line of code)
  const giveaway = document.querySelector('.giveaway');
  
  // Create a variable called deadline to hold the element with class 'deadline' (1 line of code)
  const deadline = document.querySelector('.deadline');
  
  // Create a variable called items to hold the h4 element within the element with class 'deadline-format' (1 line of code)
  const items = document.querySelectorAll('.deadline-format h4');
  
  /* ----------- END PART 1 ----------- */
  
  
  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();
  // months are ZERO index based;
  const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
  
  /* ----------- PART 2 ----------- */
  // Create a variable called year that holds the futureDate's full year(1 line of code)
  const year = futureDate.getFullYear();
  // Create a variable called hours that holds the futureDate's hours(1 line of code)
  const hours = futureDate.getHours();
  // Create a variable called minutes that holds the futureDate's minutes (1 line of code)
  const minutes = futureDate.getMinutes();
  
  /* ----------- END PART 2 ----------- */
  
  let month = futureDate.getMonth();
  month = months[month];
  const weekday = weekdays[futureDate.getDay()];
  const date = futureDate.getDate();
  giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;
  
  const futureTime = futureDate.getTime();
  
  function getRemainingTime() {
    const today = new Date().getTime();
  
    const t = futureTime - today;
  
      
  /* ----------- PART 3 ----------- */
      // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    // values in miliseconds
      
  // Create a variable called oneDay and set it equal to the math equation that figures out how many milliseconds are in 1 day (1 line of code)
  const oneDay = 1000 * 60 * 60 * 24;
  // Create a variable called oneHour and set it equal to the math equation that figures out how many milliseconds are in 1 hour (1 line of code)
  const oneHour = 1000 * 60 * 60;
  // Create a variable called oneMinute and set it equal to the math equation that figures out how many milliseconds are in 1 minute (1 line of code)
  const oneMinute = 1000 * 60;
  /* ----------- END PART 3 ----------- */
  
      let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);
  
      // set values array
        const values = [days, hours, minutes, seconds];
        function format(item) {
          if (item < 10) {
            return (item = `0${item}`);
          }
          return item;
        }
      
        items.forEach(function (item, index) {
          item.innerHTML = format(values[index]);
        });
      
        if (t < 0) {
          clearInterval(countdown);
          deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
        }
      }
  
  let countdown = setInterval(getRemainingTime, 1000);
  
  /* ----------- PART 4 ----------- */
  // Call the function getRemainingTime (1 line of code)
  getRemainingTime();
  /* ----------- END PART 4 ----------- */