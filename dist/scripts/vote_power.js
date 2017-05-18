content = {};

content.baseMap = 'mayakreidieh.map-dfh9esrb';
content.textTemplateId = '#rv_text_overlay_template';

/* EN */
content.textEn =  powerText.textEn;
/* AR */
content.textAr = powerText.textAr;

content.layers = [];
var year = 2013;

content.el = 'map';

content.templates = [
		" <div id='tloc'>fnasdklfja ksldfjaslkdfjalsd</div>",
		" <div id='tloc'>{{District}}</div> <div id='tnum'>{{blank_vote}}</div>",
		""
	];

var options = {};
options.legend = {
	template : '#legend_template',
	colors : [
		{color: 'rgb(158,1,66)', label : '1.5'},
		{color: 'rgb(213,62,79)', label : '1.4'},
		{color: 'rgb(244,109,67)', label : '1.3'},
		{color: 'rgb(253,174,97)', label : '1.2'},
		{color: 'rgb(254,224,139)', label : '1.1'},
		{color: 'rgb(255,255,200)', label : '1.05'},
		{color: 'rgb(230,245,152)', label : '0.95'},
		{color: 'rgb(171,221,164)', label : '0.8'},
		{color: 'rgb(102,194,165)', label : '0.7'},
		{color: 'rgb(50,136,189)', label : '0.6'},
	]

};

var population = {
	"2009": "3.2M",
	"2013": "3.45M",
	"2014": "3.5M",
	"2015": "3.5M"
};

options.control = function() {
	var that = this;
	$('.select').each(function() {
		console.log(this);
		$(this).on('click', function() {
			console.log(this);
			$('.select.selected').removeClass('selected');
			year = $(this).attr('id');
			content.layers[0] = changeYear(Number(year));
			$("message").html("<p>You are viewing the "+"</p>");
			$(this).addClass('selected');
		});
	})
}

options.setTooltip = function( that ){
	var gridLayer = L.mapbox.gridLayer('kamicut.vote_power');
	that.map.addLayer(gridLayer);
	var template = $( '#tooltip-template' ).html();

	gridLayer.on('mousemove',function(o) {
		if (o.data!== undefined){
			var color;
			var index = o.data['Index'];
			for (var i = that.options.legend.colors.length-1;i>0;i--){
				if (index >= Number(that.options.legend.colors[i].label)) {
					color = that.options.legend.colors[i].color;
				}
				//Updates for yellow
				if (Number(index) < 1.1 && Number(index) > 0.9) {
					color = 'rgb(66,66,66)';
				}
			}
			district_data = vote_power[o.data.DISTRICT];
			document.getElementById('tooltip-overlay').innerHTML = (o.data && _.template( template,  {
				'color':color,
				'district':o.data.DISTRICT,
				'voters_perc': district_data[year + "_ratio"],
				'voters_total': district_data[year + "_registered"],
				'seats_perc': o.data['Seat Perce'],
				'seats_total': o.data.Total,
				'voters': population[year]
			}) || '');
		}
    }).on('mouseout', function(o) {
        document.getElementById('tooltip-overlay').innerHTML = '';
    });
};

voterPower = new M.Map(content, options);
var currentLayer = L.mapbox.tileLayer('kamicut.vote_power_2009');
content.layers[0] = currentLayer;
function changeYear(new_year) {
	year = new_year;
	voterPower.map.removeLayer(currentLayer);
	if (parseInt(year) > 2014 ) // same distribution for 2015 2016 and 2017 so keep one map
		currentLayer = L.mapbox.tileLayer('tunisia.vp');
	else
		currentLayer = L.mapbox.tileLayer('kamicut.vote_power_' + year);
	voterPower.map.addLayer(currentLayer);
	return currentLayer;
}
$('document').ready(function(){
	voterPower.init();
	$("#"+year+".select").click();
});
