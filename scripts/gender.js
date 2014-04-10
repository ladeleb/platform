content = {};

content.baseMap = 'mayakreidieh.map-dfh9esrb';
content.textTemplateId = '#rv_text_overlay_template';

/* EN */
content.textEn =  genderText.textEn;

/* AR */
content.textAr = genderText.textAr;

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
			'diff': Math.abs(props.diff).toFixed(2),
			'diff_name': props.diff_name,
			'diff_label': props.diff_label,
			'num_male': props.num_male,
			'num_female':props.num_female,
			'total': props.total,
			'perc_male': props.perc_male.toFixed(2),
			'perc_female': props.perc_female.toFixed(2),
			'color': getTooltipColor(props.diff),
		}) || '');
	};
};

function getColor(d) {
	return d > 1 ? '#b8e186' :
	d >= 0   ? '#e6f5d0' :
	d > -2   ? '#fde0ef' :
	d > -3   ? '#f1b6da' :
	d > -5   ? '#de77ae' :
	'#c51b7d';
}
function getColorAlternate(d) {
	return d > 1 ? '#0571b0' :
	d >= 0   ? '#92c5de' :
	d > -2   ? '#f1b6da' :
	'#d01c8b';
}
function getTooltipColor(d) {
	return d > 1.5 ? '#b8e186' :
	d > 0.3  ? '#e6f5d0' :
	d > -0.05   ? '#0000' :
	d > -1   ? '#de77ae' :
	'#c51b7d';
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
            feature.properties.diff_label = 'Turnout - مشاركة';
			feature.properties.total = feature.properties.voter_turnout;
			feature.properties.num_male = feature.properties.voter_turnout_male;
			feature.properties.num_female = feature.properties.voter_turnout_female;
			feature.properties.perc_male = feature.properties.voter_turnout_male_pct;
			feature.properties.perc_female = feature.properties.voter_turnout_female_pct;
		} else {
			feature.properties.diff_name = 'registered';
            feature.properties.diff_label = 'Registered - تسجيل';
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

