let temps = 0
input.onButtonPressed(Button.A, function () {
    temps = -1
})
basic.forever(function () {
    basic.showNumber(temps)
    temps+=1
})
