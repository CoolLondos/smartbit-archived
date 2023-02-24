input.onButtonPressed(Button.A, function () {
    if (App_Selected == 0) {
        if (App_That_Will_Be_Selected > 0) {
            Full_Clear()
            App_That_Will_Be_Selected = App_That_Will_Be_Selected - 1
        } else {
            App_That_Will_Be_Selected = 0
        }
    }
})
function Full_Clear () {
    led.stopAnimation()
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    if (App_Selected == 0) {
        if (App_That_Will_Be_Selected < 1) {
            Full_Clear()
            App_That_Will_Be_Selected = App_That_Will_Be_Selected + 1
        } else {
            App_That_Will_Be_Selected = 1
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (App_Selected == 0) {
        App_Selected = App_That_Will_Be_Selected
        App_That_Will_Be_Selected = -1
    } else if (App_Selected != 0) {
        Full_Clear()
        App_That_Will_Be_Selected = 0
        App_Selected = 0
    }
})
let Degrees = 0
let App_That_Will_Be_Selected = 0
let App_Selected = 0
App_Selected = 0
basic.showString("Select App")
basic.forever(function () {
    Degrees = input.compassHeading()
    if (App_Selected == 1) {
        Full_Clear()
        if (Degrees < 45) {
            basic.showString("N")
        } else if (Degrees < 135) {
            basic.showString("E")
        } else if (Degrees < 255) {
            basic.showString("S")
        } else if (Degrees < 315) {
            basic.showString("W")
        } else {
            basic.showString("N")
        }
    }
})
basic.forever(function () {
    if (App_That_Will_Be_Selected == 0) {
        basic.showString("Tutorial")
    } else if (App_That_Will_Be_Selected == 1) {
        basic.showString("Compass")
    }
})
