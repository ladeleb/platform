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
content.layers[0] =  L.mapbox.tileLayer('kamicut.voter_trends');

content.el = 'map';

content.templates = [
" <div id='tloc'>fnasdklfja ksldfjaslkdfjalsd</div>",
" <div id='tloc'>{{District}}</div> <div id='tnum'>{{blank_vote}}</div>",
""
];

var options = {};

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

newMap = new M.Map(content, options);

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

var prefix = "data/voter_trends/";
var names = {
	"total"		: prefix + "total.csv",
	"Akkar"		: prefix + "akkar.csv",
	"Saida"		: prefix + "saida.csv",
	"Aley"		: prefix + "aley.csv",
	"Jbeil"		: prefix + "jbeil.csv",
	"Baabda"	: prefix + "baabda.csv",
	"Jezzine"	: prefix + "jezzine.csv",
	"Baalbek"	: prefix + "baalbek.csv",           
	"Kesrwan"	: prefix + "kesrwan.csv ",          
	"Tripoli"	: prefix + "tripoli.csv",
	"Batroun"	: prefix + "batroun.csv",           
	"Koura"		: prefix + "koura.csv",           
	"Tyr"		: prefix + "tyr.csv",
	"Bcharry"	: prefix + "bcharry.csv ",          
	"Beirut"	: prefix + "beirut.csv",           
	"Matn"		: prefix + "matn.csv",   
	"WestBekaa-Rachaya": prefix + "westbekaa.rachaya.csv",
	"Bent-Jbel"	: prefix + "bent.jbel.csv         ",
	"Minniye-Danniyeh":	prefix + "minniye.danniyeh.csv",  
	"Marjayoun-Hasbaya": prefix + "marjayoun.hasbaya.csv",
	"Zahle"		:prefix + "zahle.csv",
	"Chouf"		: prefix + "chouf.csv",             
	"Nabatiyeh"	: prefix + "nabatiyeh.csv",         
	"Zgharta"	: prefix + "zgharta.csv"
};

var curr_confession = "alawite"; 
//Setup storyboard
var storyboard;



function loader(name) {
	d3.selectAll("svg").remove();
	var svg = dimple.newSvg("#chart");
	var svg2 = dimple.newSvg("#chart2");
	d3.csv(name, function(data) {
		console.log(data);
		var myChart = new dimple.chart(svg, data);
		var myChart2 = new dimple.chart(svg2, data);
		console.log(myChart2);
		function bounds() {
			myChart.setBounds("20%", "10%", "60%", "70%");
			myChart2.setBounds("20%", "10%", "80%", "50%");
		}
		bounds();
		$( window ).resize(bounds);
		myChart.addMeasureAxis("y", "Population");
		myChart.addCategoryAxis("x", "Year").addOrderRule("Population");
		myChart.addSeries("Year", dimple.plot.bar);
		storyboard = myChart.setStoryboard("Confession");
		storyboard.autoplay = false;

		myChart2.addMeasureAxis("y", "Population");
		myChart2.addCategoryAxis("x", "Confession").addOrderRule("Population");
		myChart2.addSeries(null, dimple.plot.bar);
		myChart2.setStoryboard("Year");

		myChart.draw();
		myChart2.draw();
	});
}


$('document').ready(function(){

	loader("data/voter_trends/total.csv");
	newMap.init();
	newMap.current_district='';

	for (var obj in confessions) {
		$("#confessions").append('<option value='+ obj +'>' + confessions[obj]+ '</option>');
	}
	$("select").change(function() {
		curr_confession = $("select option:selected").attr('value');
		console.log(curr_confession);
		storyboard.goToFrame(confessions[curr_confession]);
	});
});

