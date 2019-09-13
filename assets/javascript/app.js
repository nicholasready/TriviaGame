var number = 20;
var intervalId;

function run() {
   
    intervalId = setInterval(decrement, 1000);
  }

  //  The decrement function.
  function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #timer tag.
    $("#timer").html(number);

    //  Once number hits zero...
    if (number === 0) {

        //Stops the function
        stop();
        alert("Time Up!");
      }
    }

    //  The stop function
    function stop() {
      clearInterval(intervalId);
    }

    

    //  Execute the run function.
    run();


    