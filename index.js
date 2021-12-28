//window.onload = function () {                                         // When the window loads run the following anonymous function.  This function does nothing except set up other functions to be run when objects on the page are interacted with.  I suppose this is like the window.onload is like the mainApp.  It doesn't no much itself except set up the application.  We currently don't need to use this.  I think it is bad practice.

  var seconds = 00;
  var tens = 00;
  var appendTens = document.getElementById("tens");                   // This will get the element that has the id tens from the document and assign it the variable called appendTens.
  var appendSeconds = document.getElementById("seconds");
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval;                                                       // Is there any reason why this variable has a capital letter?
  
  buttonStart.onclick = function () {                                 // Create an anonyous function that will run every time the buttonStart element is clicked.
    clearInterval(Interval);                                          // Call the clearInterval method on the Interval to stop the interval
    Interval = setInterval(startTimer, 10);                           // Set an interval to call the startTimer method every 10 miliseconds and assign it to the variable called Interval.  This will call the the method every 100th of a second.  This will only stop when the clearInterval method is called on it or the window is closed.
  }

  buttonStop.onclick = function () {
    clearInterval(Interval);                                          // Clear the interval when the stop button is clicked.  This will not erase the time gone by it will only stop the timer from continuing.
  }

  buttonReset.onclick = function () {                                 // This will clear the Interval and also reset all of the variables output '00:00' to the screen.
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  }

  function startTimer() {                                             // The startTimer method will increase the last value of the '00:00' by 1 and then adjust the other number values if needed.  So if one of the digets goes from 9 to 0 then the next highest number will need to be updated too.
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
//}
