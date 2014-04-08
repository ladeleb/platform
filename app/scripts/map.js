var M = {};

M.Map = function( content, options ){
	this.content = content;
	this.options = options || {};
	this.control = options.control || function(){};
};

/* @desc	Renders the text of the page using the templates and the corresponding text
 *			Call this function to translate the text to another language
 * @param	lang	An language, ar or en, defines which text object to display and how to 
 *					style the content (ex. left vs right alignment)
 */
M.Map.prototype._renderMap = function(  layerIndex  ){
	// init Map object, bind it to #map div
	if (this.content.mapCenter !== undefined ){
		this.map = L.map(this.content.el, { zoomControl:false })
		.setView( this.content.mapCenter, 9);
	} else {
		this.map = L.map(this.content.el,{ zoomControl:false })
		.setView([33.894286, 35.47371], 9);
	}
	new L.Control.Zoom({ position: 'topright' }).addTo(this.map);
	// load each layer and add it to the map
	// note that the layer order matters, they overlap each other
	this.map.addLayer( L.mapbox.tileLayer(this.content.baseMap));	
	this.map.addLayer( this.content.layers[0] );

	if (this.options.setTooltip !== undefined) {
		this.options.setTooltip(this);
	}

};

/* @desc	Renders the text of the page using the templates and the corresponding text
 *			Call this function to translate the text to another language
 *			Calls an optional control() after rendering to add any control to the text overlay
 * @param	lang	An language, ar or en, defines which text object to display and how to 
 *					style the content (ex. left vs right alignment)
 */
M.Map.prototype._renderText = function( lang ){

	$('.text_overlay').html('');
	$('.text_overlay.ar').css({'display':'none'});
    var template = $( this.content.textTemplateId ).html();

	if (lang === undefined)
		lang = 'en';
	$(".text_overlay.en").html(_.template( template,  this.content.textEn));
	$(".text_overlay.ar").html(_.template( template,  this.content.textAr));

	if (typeof(this.control) === 'function') this.control();
};

M.Map.prototype._renderLegend = function(){
	if (this.options.legend !== undefined){
		var template = $( '#legend_template' ).html();

		for (var i = 0;i<this.options.legend.colors.length;i++){
			$('.legend.inner').append(_.template( template,  this.options.legend.colors[i]));
		}
	}
};

/* 
 * @desc	Renders the contents of the HTML page by first
 *			displaying the map
 *			then loading the proper content (by lang) and dispalying it
 * @param	lang	The language of the rendered content, 'en' renders English
 *					'ar' renders arabic. Default language is English
 */
M.Map.prototype.renderContents = function( lang ){
	
	if (lang === undefined) {
		lang = 'en';
	}
	this._renderMap();
	this._renderText(lang);
	this._renderLegend();
};

/* 
 * @desc	Translates the text content
 * @param	lang	The language of the rendered content, 'en' translates to English
 *					'ar' translates to arabic. Default is English
 */
M.Map.prototype.transText = function(lang){
	var that = this;
	if (lang === 'ar'){
		$("#ar").unbind("click");
		$('#ar').html('EN');
		$('#ar').attr('id', 'en');
		$('.text_overlay.ar').fadeIn('10');
		$('.text_overlay.en').fadeOut('10');
		$('#en').on('click', function(e) {
			that.transText('en');
		});
	} else {
		$("#en").unbind("click");
		$('#en').html('عربي');
		$('#en').attr('id', 'ar');
		$('.text_overlay.ar').fadeOut('10');
		$('.text_overlay.en').fadeIn('10');
		$('#ar').on('click', function(e){
			that.transText('ar');
		});
	}
};

M.Map.prototype.init = function(){
	this.renderContents('en');
	$('#ar').on('click', function(e){
		that.transText('ar');
	});
	var that = this;

	$('.tweet').click(function(e){
		e.preventDefault();
		var loc = $(this).attr('href');
		var title  = escape($(this).attr('title'));
		window.open('http://twitter.com/share?url=' + loc + '&text=' + title + '&', 'twitterwindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
	});

	$('.fb').click(function(e) {
		e.preventDefault();
		var loc = $(this).attr('href');
		var title = escape($(this).attr('title'));
		window.open('http://www.facebook.com/sharer.php?s=100&p[url]=' + loc ,  'sharer', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
    });

    $("#share-data").on('click', function() {
		if ($('#toolbar-share').is(':visible')) {
			$('#toolbar-share').fadeOut(75);
		}
		else {
			$('#toolbar-share').fadeIn(75);
		}
	});
	$('.share-li').on('click', function(){
		$('#toolbar-share').fadeOut(75);
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

	$("#home-btn").on('click', function() {
		var s = window.location.href;
		var a = s.split('/');
		a.pop();
		window.location.href = a.join('/');
	});

	$("#about-btn").on('click', function() {
		window.location.href = 'about.html';
	});
};

