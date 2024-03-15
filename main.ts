input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 1000000000000; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showString("MUSTAFA")
        music.setVolume(200)
        music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        . . . . .
        `)
    basic.showString("HEJ")
})
