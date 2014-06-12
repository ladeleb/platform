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
		var spl = $(this).attr('id').split('-');
		content.layers[0] = changeLayer(spl[0], spl[1]);
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
			feature.properties.total = Number(feature.properties.voter_turnout);
			feature.properties.num_male = Number(feature.properties.voter_turnout_male);
			feature.properties.num_female = Number(feature.properties.voter_turnout_female);
			feature.properties.perc_male = Number(feature.properties.voter_turnout_male_pct);
			feature.properties.perc_female = Number(feature.properties.voter_turnout_female_pct);
		} else {
			feature.properties.diff_name = 'registered';
            feature.properties.diff_label = 'Registered - تسجيل';
			feature.properties.total = Number(feature.properties.total_registered);
			feature.properties.num_male = Number(feature.properties.registered_male);
			feature.properties.num_female = Number(feature.properties.registered_female);
			feature.properties.perc_male = Number(feature.properties.registered_male_pct);
			feature.properties.perc_female = Number(feature.properties.registered_female_pct);
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

var years = {
	"2009": genderData2009,
	"2013": genderData2013,
	"2014": genderData2014,
};

function changeLayer(datalayer, year) {
	diff = 'diff_'+datalayer;
	console.log(datalayer + ", " + year);
	if (typeof(geojson) !== "undefined") {
		gender.map.removeLayer(geojson);
	}
	console.log(years[year]);
	geojson = L.geoJson(years[year], {
		style: style(diff),
		onEachFeature: onEachFeature(datalayer)
	});
	if (gender && typeof(gender.map) !== "undefined") {
		gender.map.addLayer(geojson);
	}
	return geojson;
}	

$('document').ready(function(){
	content.layers[0] = changeLayer(datalayer, "2009");
	gender = new M.Map(content, options);
	gender.init();
	$("li#"+datalayer+"-2009").click();
});

