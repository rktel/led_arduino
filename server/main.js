let five = require("johnny-five");
let board = new five.Board();
led_status = false
led_slider_value = 0
board.on("ready", function () {
    // Create a standard `led` component instance
    // "blink" the led in 500ms
    // on-off phase periods
    let led = new five.Led(5);
    /*
    setInterval(ns => {
        led_status ?  led.fadeIn() : led.fadeOut()
    }, 1000)
    */
    setInterval(ns => {
        led.brightness(led_slider_value)
    }, 1)
});

Meteor.methods({
    toggleLed(flag) {
        flag ? led_status = true : led_status = false
    },
    changeSlider(value){
        led_slider_value = value
    }
});
/*
slider values : led.brightness(this.value); 0 - 255
>> led.stop() // to stop blinking
then
>> led.off()  // to shut it off (stop doesn't mean "off")
then
>> led.on()   // to turn on, but not blink
setTimeout(ns => {
    console.log("On timeout")
    led_status = false
}, 1000*10)
*/