let xCoord: number = 0
let yCoord: number = 0
pins.analogWritePin(AnalogPin.P8, 0)
pins.analogWritePin(AnalogPin.P12, 0)
pins.analogWritePin(AnalogPin.P16, 0)
//starts the LEDs at an off state
basic.forever(function () {
    snake()
})
function snake() {
    if (yCoord == 0 || yCoord == 2 || yCoord == 4) {
        for (let i = 0; i < 5; i++) {
            led.toggle(i, yCoord)
            led.toggle(4 - i, yCoord - 1)
            basic.pause(100)
            xCoord = i
        }
        yCoord++
    }
    //the following if statements change which LED is enabled based on yCoord value
    if (yCoord >= 0 && yCoord <= 1) {
        pins.analogWritePin(AnalogPin.P8, 0)
        pins.analogWritePin(AnalogPin.P12, 1023)
        pins.analogWritePin(AnalogPin.P16, 0)
    }
    if (yCoord > 1 && yCoord <= 3) {
        pins.analogWritePin(AnalogPin.P8, 1023)
        pins.analogWritePin(AnalogPin.P12, 0)
        pins.analogWritePin(AnalogPin.P16, 0)
    }
    if (yCoord > 3) {
        pins.analogWritePin(AnalogPin.P8, 0)
        pins.analogWritePin(AnalogPin.P12, 0)
        pins.analogWritePin(AnalogPin.P16, 1023)
    }
    if (yCoord == 1 || yCoord == 3 || yCoord == 5) {
        for (let i = 4; i > -1; i--) {
            led.toggle(i, yCoord)
            led.toggle(4 - i, yCoord - 1)
            basic.pause(100)
            xCoord = i
        }
        yCoord++
    }
    else {
        yCoord = 0
        basic.clearScreen()
        basic.pause(50)
    }
}
