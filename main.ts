input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 B A G F E D C ", 120)
    music.playMelody("C D E F G A B C5 ", 120)
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.OnceInBackground)
})
input.onGesture(Gesture.Shake, function () {
	
})
music.setTempo(120)
