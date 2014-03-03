content = {};

content.baseMap = 'mayakreidieh.map-dfh9esrb';
content.textTemplateId = '#rv_text_overlay_template';

/* EN */
content.textEn =  {
	title: 'Voters by Gender',
	desc : ''
};

/* AR */
content.textAr = {
	title : 'قوة <fh>الاقتراع بيضاء</fh>',
	desc : 'الاقتراع الأبيض يرمز إلى رفض قوي من النظام السياسي ونظام الحكم والقانون الانتخابي. أنه ليس لديه اعتراف الدينية وصوت الثابت الوحيد في لبنان.'
};

content.layers = [];

content.el = 'map';
var gender;

var options = {};
var info = L.control();
var datalayer = 'voter_turnout';

options.control = function() {
	var that = this;
	$('.select1').on('click', function() {
		$('.select1').removeClass('selected');
		content.layers[0] = changeLayer($(this).attr('id'));
		$(this).addClass('selected');
	});
};

options.setTooltip = function( that ){
	var that = this;

	var template = $( '#tooltip-template' ).html();
	info.update = function (props) {
		document.getElementById('tooltip-overlay').innerHTML = (props && _.template( template,  {
			'district':props.district,
			'diff': Math.abs(props.diff),
			'diff_name': props.diff_name,
			'diff_label': props.diff_name.charAt(0).toUpperCase() + props.diff_name.slice(1),
			'num_male': props.num_male,
			'num_female':props.num_female,
			'total': props.total,
			'perc_male': props.perc_male,
			'perc_female': props.perc_female,
			'color': getColor(props.diff)
		}) || '');
	};
};

function getColor(d) {
	return d > 1 ? '#e66101' :
	d >= 0   ? '#fdb863' :
	d > -2   ? '#b2abd2' :
	'#5e3c99';
}
function getColorAlternate(d) {
	return d > 1 ? '#0571b0' :
	d >= 0   ? '#92c5de' :
	d > -2   ? '#f1b6da' :
	'#d01c8b';
}
function getTooltipColor(d) {
	return d > 1.5 ? '#b2182b' :
	d > 0.3  ? '#ef8a62' :
	d > -0.05   ? '#0000' :
	d > -1   ? '#67a9cf' :
	'#2166ac';
}

function style(diff) {
	return function(feature) {
		return {
			fillColor: getColor(feature.properties[diff]),
			weight: 2,
			opacity: 1,
			color: 'white',
			dashArray: '3',
			fillOpacity: 0.7
		};
	};
}

function highlightFeature(e) {
	var layer = e.target;
	info.update(layer.feature.properties);
	layer.setStyle({
		weight: 5,
		color: '#666',
		dashArray: '',
		fillOpacity: 0.7
	});

	if (!L.Browser.ie && !L.Browser.opera) {
		layer.bringToFront();
	}
}

function onEachFeature(datalayer) {
	diff = 'diff_'+datalayer;

	return function(feature,layer) {
		if (datalayer == 'voter_turnout') {
			feature.properties.diff_name = 'turnout';
			feature.properties.total = feature.properties.voter_turnout;
			feature.properties.num_male = feature.properties.voter_turnout_male;
			feature.properties.num_female = feature.properties.voter_turnout_female;
			feature.properties.perc_male = feature.properties.voter_turnout_male_pct;
			feature.properties.perc_female = feature.properties.voter_turnout_female_pct;
		} else {
			feature.properties.diff_name = 'registered';
			feature.properties.total = feature.properties.total_registered;
			feature.properties.num_male = feature.properties.registered_male;
			feature.properties.num_female = feature.properties.registered_female;
			feature.properties.perc_male = feature.properties.registered_male_pct;
			feature.properties.perc_female = feature.properties.registered_female_pct;
		}
		feature.properties.diff = feature.properties[diff];
		feature.properties.datalayer = datalayer;
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		});
	};
}

var geojson;

function resetHighlight(e) {
	geojson.resetStyle(e.target);
	info.update();
}
function zoomToFeature(e) {
	map.fitBounds(e.target.getBounds());
}

function changeLayer(datalayer) {
	diff = 'diff_'+datalayer;
	if (typeof(geojson) !== "undefined") {
		gender.map.removeLayer(geojson);
	}
	geojson = L.geoJson(genderData, {
		style: style(diff),
		onEachFeature: onEachFeature(datalayer)
	});
	if (gender && typeof(gender.map) !== "undefined") {
		gender.map.addLayer(geojson);
	}
	return geojson;
}	

$('document').ready(function(){
	content.layers[0] = changeLayer(datalayer);
	gender = new M.Map(content, options);
	gender.init();
	$("li#"+datalayer).click();
});

