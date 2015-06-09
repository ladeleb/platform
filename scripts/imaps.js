$("#ar").on("click", function() {
  $(".en").hide();
  $(".ar").show();
  $("#ar").hide();
  $("#en").show();
  changelayer('affiliated', 'a', 'a');
});
$("#en").on("click", function() {
  $(".ar").hide();
  $(".en").show();
  $("#en").hide();
  $("#ar").show();
  changelayer('affiliated', 'a', 'a');
});
$(document).ready(function() {
  $("#en").hide();
  $(".ar").hide();
  changelayer('affiliated', 'a', 'a');
});
$(function() {
  $(".btn-group .btn").click(function(e) {
    setTimeout(function() {
      affiliation = $("#affiliation-group input:checked").val()
      gender = $("#gender-group input:checked").val()
      age = $("#age-group input:checked").val()
      changelayer(affiliation, gender, age);
    }, 100);
  });
})
L.mapbox.accessToken = 'pk.eyJ1IjoidHVuaXNpYSIsImEiOiJwelVyLW1JIn0.mBhvyh8Ui8NzOq8Bpzl83g';
var map = L.map('map', {
  zoomControl: false
}).setView([33.894286, 35.37371], 9);
L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' + '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery  &copy; <a href="http://mapbox.com">Mapbox</a>, ' + 'Poll data  &copy; <a href="www.lade.org.lb">Lade</a>',
  id: 'mayakreidieh.map-dfh9esrb'
}).addTo(map);
new L.Control.Zoom({
  position: 'topright'
}).addTo(map);
var layers = [{
    name: 'affiliatedaa',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.iq24_a_a'),
L.mapbox.gridLayer('tunisia.iq24_a_a')])
},
  {
    name: 'affiliatedfa',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.iq24_f_a'),
L.mapbox.gridLayer('tunisia.iq24_f_a')])
},
  {
    name: 'affiliatedma',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.iq24_m_a'),
L.mapbox.gridLayer('tunisia.iq24_m_a')]),
},
  {
    name: 'affiliatedau25',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.iq24_a_u25'),
L.mapbox.gridLayer('tunisia.iq24_a_u25')]),
},
  {
    name: 'affiliatedfu25',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.iq24_f_u25'),
L.mapbox.gridLayer('tunisia.iq24_f_u25')]),
},
  {
    name: 'affiliatedmu25',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.i24_m_u25'),
L.mapbox.gridLayer('tunisia.i24_m_u25')]),
},
  {
    name: 'affiliateda2564',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.iq24_a_2564'),
L.mapbox.gridLayer('tunisia.iq24_a_2564')]),
},
  {
    name: 'affiliatedf2564',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.iq24_f_2564'),
L.mapbox.gridLayer('tunisia.iq24_f_2564')]),
},
  {
    name: 'affiliatedm2564',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.iq24_m_2564'),
L.mapbox.gridLayer('tunisia.iq24_m_2564')]),
},
  {
    name: 'affiliatedao64',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.iq24_a_a65'),
L.mapbox.gridLayer('tunisia.iq24_a_a65')]),
},
  {
    name: 'affiliatedfo64',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.iq24_f_a65'),
L.mapbox.gridLayer('tunisia.iq24_f_a65')]),
},
  {
    name: 'affiliatedmo64',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.iq24_m_a65'),
L.mapbox.gridLayer('tunisia.iq24_m_a65')]),
},
// cat2
  {
    name: 'activistaa',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.aq24_a_a'),
L.mapbox.gridLayer('tunisia.aq24_a_a')])
},
  {
    name: 'activistfa',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.aq24_f_a'),
L.mapbox.gridLayer('tunisia.aq24_f_a')])
},
  {
    name: 'activistma',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.aq24_m_a'),
L.mapbox.gridLayer('tunisia.aq24_m_a')]),
},
  {
    name: 'activistau25',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.aq24_a_u25'),
L.mapbox.gridLayer('tunisia.aq24_a_u25')]),
},
  {
    name: 'activistfu25',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.aq24_f_u25'),
L.mapbox.gridLayer('tunisia.aq24_f_u25')]),
},
  {
    name: 'activistmu25',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.aq24_m_u25'),
L.mapbox.gridLayer('tunisia.aq24_m_u25')]),
},
  {
    name: 'activista2564',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.aq24_a_2564'),
L.mapbox.gridLayer('tunisia.aq24_a_2564')]),
},
  {
    name: 'activistf2564',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.aq24_f_2564'),
L.mapbox.gridLayer('tunisia.aq24_f_2564')]),
},
  {
    name: 'activistm2564',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.aq24_m_2564'),
L.mapbox.gridLayer('tunisia.aq24_m_2564')]),
},
  {
    name: 'activistao64',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.aq24_a_a65'),
L.mapbox.gridLayer('tunisia.aq24_a_a65')]),
},
  {
    name: 'activistfo64',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.aq24_f_a65'),
L.mapbox.gridLayer('tunisia.aq24_f_a65')]),
},
  {
    name: 'activistmo64',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.aq24_m_a65'),
L.mapbox.gridLayer('tunisia.aq24_m_a65')]),
},
  {
    name: 'ninterestedaa',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.nq24_a_a'),
L.mapbox.gridLayer('tunisia.nq24_a_a')])
},
  {
    name: 'ninterestedfa',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.nq24_f_a'),
L.mapbox.gridLayer('tunisia.nq24_f_a')])
},
  {
    name: 'ninterestedma',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.nq24_m_a'),
L.mapbox.gridLayer('tunisia.nq24_m_a')]),
},
  {
    name: 'ninterestedau25',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.nq24_a_u25'),
L.mapbox.gridLayer('tunisia.nq24_a_u25')]),
},
  {
    name: 'ninterestedfu25',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.nq24_f_u25'),
L.mapbox.gridLayer('tunisia.nq24_f_u25')]),
},
  {
    name: 'ninterestedmu25',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.nq24_m_u25'),
L.mapbox.gridLayer('tunisia.nq24_m_u25')]),
},
  {
    name: 'ninteresteda2564',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.nq24_a_2564'),
L.mapbox.gridLayer('tunisia.nq24_a_2564')]),
},
  {
    name: 'ninterestedf2564',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.nq24_f_2564'),
L.mapbox.gridLayer('tunisia.nq24_f_2564')]),
},
  {
    name: 'ninterestedm2564',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.nq24_m_2564'),
L.mapbox.gridLayer('tunisia.nq24_m_2564')]),
},
  {
    name: 'ninterestedao64',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.nq24_a_a65'),
L.mapbox.gridLayer('tunisia.nq24_a_a65')]),
},
  {
    name: 'ninterestedfo64',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.nq24_f_a65'),
L.mapbox.gridLayer('tunisia.nq24_f_a65')]),
},
  {
    name: 'ninterestedmo64',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.nq24_m_a65'),
L.mapbox.gridLayer('tunisia.nq24_m_a65')]),
}
];

function changelayer(s, g, a) {
  if (s == 'affiliated') {
    $('#l2').hide();
    $('#l3').hide();
    $('#l1').show();
  }
  if (s == 'activist') {
    $('#l1').hide();
    $('#l3').hide();
    $('#l2').show();
  }
  if (s == 'ninterested') {
    $('#l1').hide();
    $('#l2').hide();
    $('#l3').show();
  }
  var mapname = s + g + a;
  var gridControl;
  $.each(layers, function(i, layer) {
    if (layer.name == mapname) {
      $.each(layers, function(i, l) {
        if (l.layer !== layer.layer && map.hasLayer(l.layer)) {
          map.removeLayer(l.layer);
          $('.leaflet-control-grid').remove();
        }
      });
      setTimeout(function() {
        if (gridControl) map.removeControl(gridControl);
        layer.control = L.mapbox.gridControl(layer.layer.getLayers()[1]);
        layer.layer.addTo(map);
        if (!gridControl) {
          gridControl = layer.control.addTo(map);
        }
      }, 100);
    }
  });
}
$("#home-btn").on('click', function() {
  var s = window.location.href;
  var a = s.split('/');
  a.pop();
  window.location.href = a.join('/');
});
$("#about-btn").on('click', function() {
  window.location.href = 'about.html';
});
