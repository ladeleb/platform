content = {};

content.baseMap = 'mayakreidieh.map-dfh9esrb';
content.textTemplateId = '#rv_text_overlay_template';

content.textEn =  confessions.textEn;
content.textAr = confessions.textAr;

content.layers = [];

var confessionsReverse = {
    sunni: "Sunni",
	shia: "Shia",
    maronite: "Maronite",
    druze: "Druze",
    grkorth: "Greek Orthodox",
    grkcth: "Greek Catholic",
	alawite: "Alawite",
	armcth: "Armenian Catholic",
	armorth: "Armenian Orthodox",
    evangelical: "Evangelical",
	minorities: "Minorities",
};

var confessionsArabic = {
	alawite: "علوية",
    armorth: "ارمن الارثوذكس",
    armcth: "ارمن الكاثوليك ",
    evang: "بروتستانتية ",
    minorities: "الأقليات",
    sunni: "سني",
    shia: "شيعة",
    maronite: "موارنة",
    druze: "دروز",
    grkorth: "روم الارثوذكس",
    grkcth: "روم الكاثوليك",
}

content.el = 'map';
var confessions;

var options = {};
var info = L.control();
var year = 2, denom = "minorities";

options.control = function() {
	var that = this;
	$('.select1').each(function() {
		$(this).on('click', function() {
			$('.select1.selected').removeClass('selected');
			year = $(this).attr('id');
			content.layers[0] = changeLayer(denom,year);
			$("message").html("<p>You are viewing the "+"</p>");
			$(this).addClass('selected');
		});
	})
	$('.select2').each(function() {
		$(this).on('click', function() {
			$('.select2.selected').removeClass('selected');
			denom = $(this).attr('id');
			content.layers[0] = changeLayer(denom,year);
			$(this).addClass('selected');
		});
	})
};

options.setTooltip = function( that ){
	var that = this;

	var template = $( '#tooltip-template' ).html();
	info.update = function (props) {
		document.getElementById('tooltip-overlay').innerHTML = (props && _.template( template,  {
				'district':props.district_n,
				'denom': confessionsReverse[props.denom],
                'denom_ar': confessionsArabic[props.denom],
				'voters_diff': Number(props.diff).toFixed(2) > 0? '+' + Number(props.diff).toFixed(2): Number(props.diff).toFixed(2),
				'voters_1': props.num_1,
				'voters_2': props.num_2,
				'year_1': props.year_1,
				'year_2': props.year_2,
				'total_1': props.total_1,
				'total_2': props.total_2,
				'perc_1': Number(100*Number(props.num_1)/Number(props.total_1)).toFixed(2),
				'perc_2': Number(100*Number(props.num_2)/Number(props.total_2)).toFixed(2),
				'color': getTooltipColor(Number(props.diff).toFixed(2))
		}) || '');
	};
};
//Blue is decrease, red increase
// function getColor(d) {
// 	return d > 1.5 ? '#b2182b' :
// 	d > 1  ? '#ef8a62' :
// 	d > 0.3  ? '#fddbc7' :
// 	d >= -0.05   ? '#f7f7f7' :
// 	d > -0.3   ? '#d1e5f0' :
// 	d > -1   ? '#67a9cf' :
// 	'#2166ac';
// }

//Red increase, blue decrease
function getColor(d) {
	return d > 1.5 ? '#1a9850' :
	d > 1  ? '#91cf60' :
	d > 0.3  ? '#d9ef8b' :
	d >= -0.05   ? '#ffffbf' :
	d > -0.3   ? '#fddbc7' :
	d > -1   ? '#ef8a62' :
	'#b2182b';
}

function getTooltipColor(d) {
	return d > 1.5 ? '#1a9850' :
	d > 0.3  ?  '#91cf60':
	d > -0.05   ? '#0000' :
	d > -1   ? '#ef8a62' :
	'#b2182b';
}

function style(denom) {
	return function(feature) {
		return {
			fillColor: getColor(feature.properties[denom]),
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

function onEachFeature(denom, year) {
	diff = denom + '_diff_' + year;
	return function(feature,layer) {
		feature.properties.diff = feature.properties[diff];
		feature.properties.denom = denom
		if (year == 1) {
			feature.properties.year_1 = 2005;
			feature.properties.year_2 = 2009;
			feature.properties.num_1 = feature.properties[denom+'_2005'];
			feature.properties.num_2 = feature.properties[denom+'_2009'];
			feature.properties.total_1 = feature.properties.total_2005;
			feature.properties.total_2 = feature.properties.total_2009;
		} else if (year == 2) {
			feature.properties.year_1 = 2009;
			feature.properties.year_2 = 2013;
			feature.properties.num_1 = feature.properties[denom+'_2009'];
			feature.properties.num_2 = feature.properties[denom+'_2013'];
			feature.properties.total_1 = feature.properties.total_2009;
			feature.properties.total_2 = feature.properties.total_2013;
		} else if (year == 3) {
			feature.properties.year_1 = 2013;
			feature.properties.year_2 = 2014;
			feature.properties.num_1 = feature.properties[denom+'_2013'];
			feature.properties.num_2 = feature.properties[denom+'_2014'];
			feature.properties.total_1 = feature.properties.total_2013;
			feature.properties.total_2 = feature.properties.total_2014;
		} else if (year == 4)  {
			feature.properties.year_1 = 2014;
			feature.properties.year_2 = 2015;
			feature.properties.num_1 = feature.properties[denom+'_2014'];
			feature.properties.num_2 = feature.properties[denom+'_2015'];
			feature.properties.total_1 = feature.properties.total_2014;
			feature.properties.total_2 = feature.properties.total_2015;
    } else if (year == 5) {
			feature.properties.year_1 = 2015;
			feature.properties.year_2 = 2016;
			feature.properties.num_1 = feature.properties[denom+'_2015'];
			feature.properties.num_2 = feature.properties[denom+'_2016'];
			feature.properties.total_1 = feature.properties.total_2015;
			feature.properties.total_2 = feature.properties.total_2016;
    } else if (year == 6){
      feature.properties.year_1 = 2016;
      feature.properties.year_2 = 2017;
      feature.properties.num_1 = feature.properties[denom+'_2016'];
      feature.properties.num_2 = feature.properties[denom+'_2017'];
      feature.properties.total_1 = feature.properties.total_2016;
      feature.properties.total_2 = feature.properties.total_2017;
  }
  else {
      feature.properties.year_1 = 2013;
      feature.properties.year_2 = 2017;
      feature.properties.num_1 = feature.properties[denom+'_2013'];
      feature.properties.num_2 = feature.properties[denom+'_2017'];
      feature.properties.total_1 = feature.properties.total_2013;
      feature.properties.total_2 = feature.properties.total_2017;
  }

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

function changeLayer(denom, year) {
	diff = denom + '_diff_' + year;
	if (typeof(geojson) !== "undefined") {
		confessions.map.removeLayer(geojson);
	}
	geojson = L.geoJson(confessionData, {
		style: style(diff),
		onEachFeature: onEachFeature(denom, year)
	});
	if (confessions && typeof(confessions.map) !== "undefined") {
		confessions.map.addLayer(geojson);
	}
	return geojson;
}

$('document').ready(function(){
	content.layers[0] = changeLayer(denom, year);
	confessions = new M.Map(content, options);
	confessions.init();
	$(".select2#"+denom).click();
	$("#"+year+".select1").click();
});
