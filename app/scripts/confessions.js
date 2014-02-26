content = {};

content.baseMap = 'mayakreidieh.map-dfh9esrb';
content.textTemplateId = '#rv_text_overlay_template';

/* EN */
content.textEn =  {
	title: 'Voter Trends',
	desc : 'Click on a district to see the change in population.'
};

/* AR */
content.textAr = {
	title : 'قوة <fh>الاقتراع بيضاء</fh>',
	desc : 'الاقتراع الأبيض يرمز إلى رفض قوي من النظام السياسي ونظام الحكم والقانون الانتخابي. أنه ليس لديه اعتراف الدينية وصوت الثابت الوحيد في لبنان.'
};

content.layers = [];

content.el = 'map';

var options = {};

options.control = function() {
	var that = this;
}

options.setTooltip = function( that ){
	foo = function( str ){
		$("#chart-current").text("You are viewing: " + str);
		console.log(str);
		console.log(names[str]);
		loader(names[str]);
	};
	var gridLayer = L.mapbox.gridLayer('kamicut.voter_trends');
	that.map.addLayer(gridLayer);

	var template = $( '#tooltip-template' ).html();
	gridLayer.on('click',function(o) {
		if ( o.data !== undefined && that.current_district !== o.data.district){
			that.current_district = o.data.district;
			foo(that.current_district);
		}
	});
};

confessions = new M.Map(content, options);

var confessions = {
	alawite: "Alawite", 
	armcath: "Armenian Catholic", 
	sunni: "Sunni", 
	shia: "Shia", 
	maronite: "Maronite", 
	greekorth: "Greek Orthodox", 
	druze: "Druze",
	greekcath: "Greek Catholic", 
	armorth: "Armenian Orthodox", 
	minorities: "Minorities",
	evangelical: "Evangelical"
};

	'use strict';
	// var L = L || {};
	// var statesData = statesData || {};
	var map, info, legend;
	map = L.map('map', {center: [33.894286, 35.59071], zoom: 9});
	map.addLayer(L.mapbox.tileLayer('mayakreidieh.map-dfh9esrb'));

	function getColor(d) {
		return d > 1.5 ? '#b2182b' :
		d > 1  ? '#ef8a62' :
		d > 0.2  ? '#fddbc7' :
		d > 0   ? '#f7f7f7' :
		d > -0.2   ? '#d1e5f0' :
		d > -1   ? '#67a9cf' :
		'#2166ac';
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

	function onEachFeature(denom) {
		return function(feature,layer) {
			feature.properties.diff = feature.properties[denom];
			layer.on({
				mouseover: highlightFeature,
				mouseout: resetHighlight,
				click: zoomToFeature
			});
		}
	}

	var geojson;

	function resetHighlight(e) {
		geojson.resetStyle(e.target);
		info.update();
	}
	function zoomToFeature(e) {
		map.fitBounds(e.target.getBounds());
	}

	// // INFO BOX
	info = L.control();

	info.onAdd = function () {
	    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
	    this.update();
	    return this._div;
	};

	// method that we will use to update the control based on feature properties passed
	info.update = function (props) {
		this._div.innerHTML = '<h4>Voter Trends</h4>' +  (props ?
			'<b>' + props.district + '</b><br />' + Number(props.diff).toFixed(2) + '% Change'
			: 'Hover over a state');
	};

	info.addTo(map);

	//BOTTOM RIGHT LEGEND
	legend = L.control({position: 'bottomright'});

	legend.onAdd = function () {

		var div = L.DomUtil.create('div', 'info legend');
		var grades = [0, 10, 20, 50, 100, 200, 500, 1000];
		// labels = [];

	    // loop through our density intervals and generate a label with a colored square for each interval
	    for (var i = 0; i < grades.length; i++) {
			div.innerHTML +=
			'<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
			grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
	    }

	    return div;
	};

	legend.addTo(map);

function changeLayer(denom) {
	if (typeof(geojson) !== "undefined") {
		map.removeLayer(geojson);
	}
	geojson = L.geoJson(confessionData, {
		style: style(denom),
		onEachFeature: onEachFeature(denom)
	}).addTo(map);
}



$('document').ready(function(){

});

