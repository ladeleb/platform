content = {};

content.baseMap = 'mayakreidieh.map-dfh9esrb';
content.textTemplateId = '#rv_text_overlay_template';

/* EN */
content.textEn =  expatText.textEn;

/* AR */
content.textAr = expatText.textAr;

content.layers = [];

content.el = 'map';
var expat;

var options = {};
var info = L.control();

options.control = function() {
};

options.setTooltip = function( that ){
	var that = this;

	var template = $( '#tooltip-template' ).html();
	info.update = function (props) {
		document.getElementById('tooltip-overlay').innerHTML = (props && _.template( template,  {
			'district':props.district,
      'reg_place': props.expat_location,
			'num_male': props.num_male,
			'num_female':props.num_female,
			'total': props.total,
			'perc_male': props.perc_male.toFixed(2),
			'perc_female': props.perc_female.toFixed(2),
			'maronite': props.total == 0 ? '' : props.maronite + ' (' + props.maronite_perc.toFixed(2) + '%)',
			'color': getTooltipColor(props.total),
			'confession' : props.total == 0 ? '' : "Maronite (ماروني)"
		}) || '');
	};
};

function getColor(d) {
	return d > 0 ? '#2ca25f' :
	'#636363';
}
function getColorAlternate(d) {
  return d > 0 ? '#b8e186' :
	'#636363';
}
function getTooltipColor(d) {
	return d > 0 ? '#b8e186' :
	'#636363';
}

function style() {
	return function(feature) {
		return {
			fillColor: getColor(feature.properties['expat_total']),
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

function onEachFeature() {

	return function(feature,layer) {
			feature.properties.total = Number(feature.properties.expat_total);
			feature.properties.num_male = Number(feature.properties.expat_male);
			feature.properties.num_female = Number(feature.properties.expat_female);
			feature.properties.perc_male = Number(feature.properties.expat_male_perc.toString().replace(',','.'));
			feature.properties.perc_female = Number(feature.properties.expat_female_perc.toString().replace(',','.'));
			feature.properties.maronite = Number(feature.properties.expat_maronite);
			feature.properties.maronite_perc = Number(feature.properties.expat_maronite_perc.toString().replace(',','.'));

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



function changeLayer() {

	if (typeof(geojson) !== "undefined") {
		expat.map.removeLayer(geojson);
	}
	geojson = L.geoJson(expatData, {
		style: style(),
		onEachFeature: onEachFeature()
	});
	if (expat && typeof(expat.map) !== "undefined") {
		expat.map.addLayer(geojson);
	}
	return geojson;
}

$('document').ready(function(){
	content.layers[0] = changeLayer();
	expat = new M.Map(content, options);
	expat.init();

});
