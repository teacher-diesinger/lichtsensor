basic.forever(function () {
    basic.showNumber(input.lightLevel())
    if (input.lightLevel() < 50) {
        basic.showIcon(IconNames.Asleep)
        basic.setLedColors(0x007fff, 0x007fff, 0x007fff)
        basic.pause(5000)
    }
    basic.turnRgbLedOff()
})
