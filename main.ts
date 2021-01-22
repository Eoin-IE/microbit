input.onButtonPressed(Button.A, function () {
    basic.showString("SDG3")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(randint(1, 17))
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.Target)
        basic.showIcon(IconNames.Square)
        basic.pause(2000)
    }
})
