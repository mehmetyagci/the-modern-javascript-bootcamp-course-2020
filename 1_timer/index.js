class Timer {
  constructor (durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener ('click', this.start);
  }

  start = () => {
    //  console.log (this);
    //  console.log ('Time to start the timer!');
    this.importantMethodToCall ();
  };

  importantMethodToCall () {
    console.log ('IMPORTANT THING WAS DONE!!!');
  }
}

const durationInput = document.querySelector ('#duration');
const startButton = document.querySelector ('#start');
const pauseButton = document.querySelector ('#pause');

const timer = new Timer (durationInput, startButton, pauseButton);
// timer.start ();
