var args = arguments[0] || {};

var data = [
	{ title: 'Row 1' },
	{ title: 'Row 2' },
	{ title: 'Row 3' },
	{ title: 'Row 4' },
	{ title: 'Row 5' },
];
	
$.tblView.setData(data);
//$.win2.rightNavButton = $.closeBtn;
$.closeBtn.addEventListener('click', function() {
		$.win2.close();
});

function doSomething(_event) {
	Ti.API.info('event fired');
	$.table.setData(_event.data);
		$.someLabel.text = _event.label;
}

Ti.App.addEventListener('bad:idea', doSomething);

/*
$.win2.addEventListener('close', function() {
	// This solution works on both iOS6 or 7, as well as Android
	Ti.App.removeEventListener('bad:idea', doSomething);
});
*/