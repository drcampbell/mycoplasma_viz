function colors(){
var options = {
	valueElement: null,
	width: 300,
	height: 120,
	sliderSize: 20,
	position: 'top',
	borderColor: '#CCC',
	insetColor: '#CCC',
	backgroundColor: '#202020'
};

var pickers = {};

pickers.bgcolor = new jscolor('bgcolor-button', options);
pickers.bgcolor.onFineChange = "update('bgcolor')";
pickers.bgcolor.fromString('AB2567');

pickers.fgcolor = new jscolor('fgcolor-button', options);
pickers.fgcolor.onFineChange = "update('fgcolor')";
pickers.fgcolor.fromString('FFFFFF');

function update_color (id) {
	document.getElementById('preview').style.backgroundColor =
		pickers.bgcolor.toHEXString();

	document.getElementById('preview').style.color =
	document.getElementById('preview').style.borderColor =
		pickers.fgcolor.toHEXString();

	// document.getElementById(id + '-rgb').value = pickers[id].toRGBString();
	// document.getElementById(id + '-hex').value = pickers[id].toHEXString();

	// document.getElementById(id + '-hue').value = Math.round(pickers[id].hsv[0]);
	// document.getElementById(id + '-sat').value = Math.round(pickers[id].hsv[1]);
	// document.getElementById(id + '-val').value = Math.round(pickers[id].hsv[2]);

	// document.getElementById(id + '-red').value = Math.round(pickers[id].rgb[0]);
	// document.getElementById(id + '-grn').value = Math.round(pickers[id].rgb[1]);
	// document.getElementById(id + '-blu').value = Math.round(pickers[id].rgb[2]);
}

function setHSV (id, h, s, v) {
	pickers[id].fromHSV(h, s, v);
	update_color(id);
}

function setRGB (id, r, g, b) {
	pickers[id].fromRGB(r, g, b);
	update_color(id);
}

function setString (id, str) {
	pickers[id].fromString(str);
	update_color(id);
}

update_color('bgcolor');
update_color('fgcolor');
return [pickers.bgcolor.toRGBString(), pickers.fgcolor.toRGBString()];
}