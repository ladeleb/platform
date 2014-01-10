
var content = {};

content.baseMap = 'mayakreidieh.map-dfh9esrb';
content.mapCenter = [33.894286, 35.00];

content.textEn = whiteBallotText.textEn;
content.textAr = whiteBallotText.textAr;
content.el = 'map';
getLayers();
content.textTemplateId = '#wb_text_overlay_template';

var options = {};

options.control = function(){
    var that = this;
    $('#invalid_2005.control').on('click', function(){
    	that.map.removeLayer(that.content.layers[1]);
    	that.map.removeLayer(that.content.layers[2]);
    	that.map.addLayer(that.content.layers[0]);
    })    
    $('#invalid_2009.control').on('click', function(){
    	that.map.removeLayer(that.content.layers[0]);
    	that.map.removeLayer(that.content.layers[2]);
    	that.map.addLayer(that.content.layers[1]);
    })
    $('#white_2009.control').on('click', function(){
    	that.map.removeLayer(that.content.layers[0]);
    	that.map.removeLayer(that.content.layers[1]);
    	that.map.addLayer(that.content.layers[2]);
    	//console.log('clicked');
    })
};

options.setTooltip = function(that){
		var gridLayer = L.mapbox.gridLayer('mayakreidieh.voter_power');
	that.map.addLayer(gridLayer);

	// var template = $( '#tooltip-template' ).html();
	gridLayer.on('mousemove',function(o) {
    	
	        document.getElementById('tooltip-overlay').innerHTML = (o.data && o.data['DISTRICT'] || '');
	    });
	
}

whiteBallots = new Map(content, options);

function getLayers() {

var featuresToMarkerLayer = function(features, category){

   var max = 1700;
   var min = features[0].properties[category];

  
	for (var i=0;i<features.length;i++){
		if (features[i].properties[category] > max)
			max = features[i].properties[category];
		if (features[i].properties[category] < min)
			min = features[i].properties[category];
	}

	markers = new L.markerClusterGroup(({
	
	iconCreateFunction: function(cluster) {
		//console.log(cluster.getAllChildMarkers()[0].data );
		var total = 0;
		for(var i=0;i<cluster.getAllChildMarkers().length;i++){
			total += Number(cluster.getAllChildMarkers()[i].data);
		}
		var col = ((total-min)/(max-min)*-1*(66-0)+66);
		if (col < 0 )col = 0;
    	return new L.DivIcon({ html: '<p style ="background-color:hsla('+ col +',75%,45%,0.7);border-color:hsla('+ col +',40%,35%,0.6)" ><span>' + total + '</span></p>' , className:'my-div-icon2'});
	}
	}));

	for (var i=0;i<features.length;i++){
		geojsonFeature = features[i];
		var myIcon =  L.divIcon({
			className: 'my-div-icon',
			html: '<p style="background-color:hsla('+ ((features[i].properties[category]-min)/(max-min)*-1*(66-0)+66) +',75%,45%,0.6)"><span>'+features[i].properties[category]+'</span></p>'
		});

		var marker = new L.marker(new  L.latLng( [geojsonFeature.geometry.coordinates[1],geojsonFeature.geometry.coordinates[0]]), {icon:myIcon});
		marker.data = features[i].properties[category];
		markers.addLayer(marker);
	}
	return markers;
};

content.layers = [];

// Get 2005 invalid votes, set marker layer  0
// And display marker layer
$.getJSON('data/white_ballots/2005_white_ballots.geojson', function(response){
	content.layers[0] = featuresToMarkerLayer(response.features, "invalid_votes");
	// whiteBallots.map.addLayer(content.layers[0]);
});

// Get 2009 white votes, set marker layer 1
$.getJSON('data/white_ballots/2009_white_ballots.geojson', function(response){
	content.layers[1] = featuresToMarkerLayer(response.features, "blank_vote");
});

// Get 2009 invalid votes, set marker layer 2
$.getJSON('data/white_ballots/2009_white_ballots.geojson', function(response){
	content.layers[2] = featuresToMarkerLayer(response.features, "invalid_vote");
});

}


$('document').ready(function(){
	whiteBallots.init();
});

