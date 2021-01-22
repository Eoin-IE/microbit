def on_button_pressed_a():
    basic.show_string("SDG3")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_number(randint(1, 17))
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    basic.show_icon(IconNames.GHOST)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
