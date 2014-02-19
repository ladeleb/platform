content = {};

content.baseMap = 'mayakreidieh.map-dfh9esrb';
content.textTemplateId = '#rv_text_overlay_template';

/* EN */
content.textEn =  {
	title: 'Voter Power',
	desc : ''
};
/* AR */
content.textAr = {
	title : 'قوة <fh>الاقتراع بيضاء</fh>',
	desc : 'الاقتراع الأبيض يرمز إلى رفض قوي من النظام السياسي ونظام الحكم والقانون الانتخابي. أنه ليس لديه اعتراف الدينية وصوت الثابت الوحيد في لبنان.'
};

content.layers = [];
content.layers[0] =  L.mapbox.tileLayer('mayakreidieh.voter_power');

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
options.setTooltip = function( that ){
	var gridLayer = L.mapbox.gridLayer('mayakreidieh.voter_power');
	that.map.addLayer(gridLayer);
	var template = $( '#tooltip-template' ).html();
	
	gridLayer.on('mousemove',function(o) {
		if (o.data!== undefined){
			var color;
			var index = (o.data['Seat Perce']/o.data['Voter Perc']);
			for (var i = 0;i<that.options.legend.colors.length-1;i++){
				if (index < Number(that.options.legend.colors[i].label) && index >= Number(that.options.legend.colors[i+1].label) ){
					color = that.options.legend.colors[i].color;
				}
				if (index >= Number(that.options.legend.colors[0].label))
					color = that.options.legend.colors[0].color;
				if (index <= Number(that.options.legend.colors[i].label))
					color = that.options.legend.colors[i].color;

				//Updates for yellow
				if (index < 1.1 && index > 0.95) {
					color = 'rgb(66,66,66)';
				}
			}
			document.getElementById('tooltip-overlay').innerHTML = (o.data && _.template( template,  {
				'color':color,
				'district':o.data.DISTRICT,
				'voters_perc': o.data['Voter Perc'],
				'voters_total': o.data.Registered,
				'seats_perc': o.data['Seat Perce'],
				'seats_total': o.data.Total
			}) || '');
		}
    }).on('mouseout', function(o) {
        document.getElementById('tooltip-overlay').innerHTML = '';
    });
};

voterPower = new M.Map(content, options);

$('document').ready(function(){
	voterPower.init();
});