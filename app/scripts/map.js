Map = function( content, options ){
	this.content = content;
	this.options = options || {};
	this.control = options.control || function(){};
};

/* @desc 	Renders the text of the page using the templates and the corresponding text
 * 			Call this function to translate the text to another language
 * @param	lang 	An language, ar or en, defines which text object to display and how to 
 *					style the content (ex. left vs right alignment)
 */
Map.prototype._renderMap = function(  layerIndex  ){

	// init Map object, bind it to #map div
	if (this.content.mapCenter != undefined ){
		this.map = L.map(this.content.el).setView( this.content.mapCenter , 9);
	} else 
		this.map = L.map(this.content.el).setView([33.894286, 35.59071], 9);
	// this.map.scrollWheelZoom.disable();

	// load each layer and add it to the map
	// note that the layer order matters, they overlay each other
	this.map.addLayer( L.mapbox.tileLayer(this.content.baseMap));	

	this.map.addLayer( this.content.layers[0] );

	
	if (this.options.setTooltip != undefined)
		this.options.setTooltip(this);
	// var template = $( '#tooltip-template' ).html();
	// var that = this;
	// gridLayer.on('mousemove',function(o) {
 //    	if (o.data!= undefined){
	//     	var color;
	//     	var index = (o.data['Seat Perce']/o.data['Voter Perc']);
	//     	for (var i = 0;i<that.options.legend.colors.length-1;i++){
	//     		if (index < Number(that.options.legend.colors[i].label) && index >= Number(that.options.legend.colors[i+1].label) ){
	//     			color = that.options.legend.colors[i].color;
	//     		}
	//     		if (index >= Number(that.options.legend.colors[0].label))
	//     			color = that.options.legend.colors[0].color;
	//     		if (index <= Number(that.options.legend.colors[i].label))
	//     			color = that.options.legend.colors[i].color;
	//     	}
	//         document.getElementById('tooltip-overlay').innerHTML = (o.data && _.template( template,  {
	//         	'color':color,
	//         	'district':o.data['DISTRICT'], 
	//         	'voters_perc': o.data['Voter Perc'],
	//         	'voters_total': o.data['Registered'],
	//         	'seats_perc': o.data['Seat Perce'],
	//         	'seats_total': o.data['Total']
	//         }) || '');
 //    	}
 //    }).on('mouseout', function(o) {
 //        document.getElementById('tooltip-overlay').innerHTML = '';
 //    });
	
}

/* @desc 	Renders the text of the page using the templates and the corresponding text
 * 			Call this function to translate the text to another language
 * 			Calls an optional control() after rendering to add any control to the text overlay
 * @param	lang 	An language, ar or en, defines which text object to display and how to 
 *					style the content (ex. left vs right alignment)
 */
Map.prototype._renderText = function( lang ){

	$('.text_overlay').html('');
	$('.text_overlay.ar').css({'display':'none'});
    var template = $( this.content.textTemplateId ).html();

	if (lang == undefined)
		lang = 'en';
	$(".text_overlay.en").html(_.template( template,  this.content.textEn));
	$(".text_overlay.ar").html(_.template( template,  this.content.textAr));

	this.control();

}

Map.prototype._renderLegend = function(){
	if (this.options.legend != undefined){
	    var template = $( '#legend_template' ).html();

		for (var i = 0;i<this.options.legend.colors.length;i++){
			$('.legend.inner').append(_.template( template,  this.options.legend.colors[i]));
		}
	}
}

/* 
 * @desc 	Renders the contents of the HTML page by first
 *			displaying the map
 *			then loading the proper content (by lang) and dispalying it
 * @param	lang 	The language of the rendered content, 'en' renders English
 * 					'ar' renders arabic. Default language is English
 */
Map.prototype.renderContents = function( lang ){
	
	if (lang == undefined)
		lang = 'en';
	this._renderMap();
	this._renderText(lang);
	this._renderLegend();
}

/* 
 * @desc 	Translates the text content
 * @param	lang 	The language of the rendered content, 'en' translates to English
 * 					'ar' translates to arabic. Default is English
 */
Map.prototype.transText = function(lang){
	if (lang == 'ar'){
		$('#ar').html('EN');
		$('#ar').attr('id', 'en');
		$('.text_overlay.ar').fadeIn('10');
		$('.text_overlay.en').fadeOut('10');
	} else {
		$('#en').html('ع');
		$('#en').attr('id', 'ar');

		$('.text_overlay.ar').fadeOut('10');
		$('.text_overlay.en').fadeIn('10');
	}
}

Map.prototype.init = function(){
	this.renderContents('en');
	var that = this;

	$('.langbtn').on('click', function(e){
		that.transText($(e.toElement).attr('id'));
	});
	$('#download-data').on('click', function(){
		if ($('#toolbar-download').is(':visible'))
			$('#toolbar-download').fadeOut(75);
		else
			$('#toolbar-download').fadeIn(75);

	});
	$('.download-li').on('click', function(){
		$('#toolbar-download').fadeOut(75);
	});
}

