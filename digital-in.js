pins.analogWritePin(AnalogPin.P8, 0)
//pin 8 used for LED
//pin 12 used for the button

basic.forever(function () {
//button gives a digital 0 reading by default
    if (pins.digitalReadPin(DigitalPin.P12) == 1) {
        pins.analogWritePin(AnalogPin.P8, 1023)
    }
    else {
        pins.analogWritePin(AnalogPin.P8, 0)
    }
})
