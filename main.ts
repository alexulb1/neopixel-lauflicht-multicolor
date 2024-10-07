input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    status = 1
    basic.showNumber(status)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    status = 0
    basic.showNumber(status)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
let status = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 32, NeoPixelMode.RGB)
strip.setBrightness(50)
status = 0
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.forever(function () {
    if (status == 1) {
        for (let Index = 0; Index <= 32; Index++) {
            strip.setPixelColor(Index, neopixel.rgb(randint(0, 150), randint(0, 150), randint(0, 150)))
            strip.show()
            basic.pause(100)
            strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Black))
        }
    }
})
