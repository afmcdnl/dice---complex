let Number2 = 0
input.onGesture(Gesture.Shake, function () {
    Number2 = randint(1, 6)
})
basic.forever(function () {
    if (Number2 == 1) {
        basic.showNumber(1)
    } else if (Number2 == 2) {
        basic.showNumber(2)
    } else if (Number2 == 3) {
        basic.showLeds(`
            . # # # .
            . . . . #
            . . # # .
            . . . . #
            . # # # .
            `)
    } else if (Number2 == 4) {
        basic.showNumber(4)
    } else if (Number2 == 5) {
        basic.showNumber(5)
    } else if (Number2 == 6) {
        basic.showNumber(6)
    }
})
