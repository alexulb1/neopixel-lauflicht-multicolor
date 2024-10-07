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
        strip.showBarGraph(input.lightLevel(), 255)
    }
})
