var args = arguments[0] || {};

$.aSwitch.addEventListener('change', function(e) {
	$.values.text = 'Switch is ' + ((e.value) ? 'on' : 'off');
    Ti.API.info('Switch is ' + ((e.value) ? 'on' : 'off'));
});

$.aSlider.addEventListener('stop', function(e) {
	// you can also listen for the "change" event
    $.values.text = 'Slider value is ' + e.value;
    Ti.API.info('Slider value is ' + e.value);
});

$.aPicker.addEventListener('change', function(e) {
	$.values.text = 'Picker value is ' + e.selectedValue;
    Ti.API.info('Picker value is ' + e.selectedValue);
});