# CPE 1040 - Introduction to Computer Engineering
## Assignment: Final Project
### Microbit LEDs
#### Part 1: Original Guide
For this part of the project I simply followed the instructions given in the [guide.](https://learn.sparkfun.com/tutorials/microbit-breakout-board-hookup-guide#hardware-overview) The code can be found [here](original-guide.js) and its operations can be seen in this [video.](https://imgur.com/a/USeeEM2)
#### Part 2: Enable Matrix
For this part of the project I looked at the microbit pins [documentation](https://learn.sparkfun.com/tutorials/microbit-breakout-board-hookup-guide#hardware-overview) and saw that pins 8, 12 and 16 did not affect the 5x5 matrix. In order to enable the matrix I had to rewire the breadboard and edit the code so that it would use those pins for the led control. The code can be found [here](enable-matrix.js) and its new operations can be seen in this [video.](https://imgur.com/a/bm1HBoh)
#### Part 3: Twenty Eight
For this part of the project I choose to implement the leds in my snake screensaver. I changed it so that depending on the rows that the head of the snake was currently in, only one of the LEDs would be enabled. The code can be found [here](twenty-eight.js) and its operations can be seen in this [video.](https://imgur.com/a/Z7SXWyn)
### Soil Sensor
#### Part 1: Digital in
For this part of the project I used an if statement that checked for whether or not the button was pressed or not and depending on if it was on or not, the LED would be enabled. As for whether the configuration needs a [pullup resistor](https://www.google.com/search?q=pullup+pulldown+resistor&oq=pullup+pull) or not, I do not believe that it needs a pullup resistor because the button needs to start at a default state of 0 and the pullup resistor would put it at a state of 1. The code can be found [here](digital-in.js) and its operations can be seen in this video.
#### Part 2: Initial Soil Wiring
For this part of the project I followed the documentation for the circuit and an image of it can be seen here.
#### Part 3: Manual Calibration
For this part of the project I used a series of functions in a forever loop to take an analog reading of the soil sensor then map into onto the LED matrix. If there is no reading then none of the matrix will light up and if the reading is full then the entire matrix will be enabled with any reading in between lighting up anywhere from one to four rows. The code can be found [here](manual-calibration.js) and its operations can be seen in this video.
