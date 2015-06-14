$("#ar").on("click", function() {
  $(".en").hide();
  $(".ar").show();
  $("#ar").hide();
  $("#en").show();
});
$("#en").on("click", function() {
  $(".ar").hide();
  $(".en").show();
  $("#en").hide();
  $("#ar").show();
});
$(document).ready(function() {
  $("#en").hide()
  $(".ar").hide()
  changelayer('satisfied', 'a', 'a');
});
$(function() {
  $(".btn-group .btn").click(function(e) {
    setTimeout(function() {
      satisfaction = $("#satisfaction-group input:checked").val()
      gender = $("#gender-group input:checked").val()
      age = $("#age-group input:checked").val()
      changelayer(satisfaction, gender, age);
    }, 100);
  });
})
L.mapbox.accessToken = 'pk.eyJ1IjoidHVuaXNpYSIsImEiOiJwelVyLW1JIn0.mBhvyh8Ui8NzOq8Bpzl83g';
var map = L.map('map', {
  zoomControl: false
}).setView([33.894286, 35.37371], 9);
L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' + '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery  &copy; <a href="http://mapbox.com">Mapbox</a>, ' + 'Poll data  &copy; <a href="http://www.lade.org.lb">Lade</a>',
  id: 'mayakreidieh.map-dfh9esrb'
}).addTo(map);
new L.Control.Zoom({
  position: 'topright'
}).addTo(map);
var layers = [{
    name: 'satisfiedaa',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.sq20_a_a'),
L.mapbox.gridLayer('tunisia.sq20_a_a')])
},
  {
    name: 'satisfiedfa',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.sq20_f_a'),
L.mapbox.gridLayer('tunisia.sq20_f_a')])
},
  {
    name: 'satisfiedma',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.sq20_m_a'),
L.mapbox.gridLayer('tunisia.sq20_m_a')]),
},
  {
    name: 'satisfiedau25',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.sq20_a_u25'),
L.mapbox.gridLayer('tunisia.sq20_a_u25')]),
},
  {
    name: 'satisfiedfu25',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.sq20_f_u25'),
L.mapbox.gridLayer('tunisia.sq20_f_u25')]),
},
  {
    name: 'satisfiedmu25',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.sq20_m_u25'),
L.mapbox.gridLayer('tunisia.sq20_m_u25')]),
},
  {
    name: 'satisfieda2564',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.sq20_a_2564'),
L.mapbox.gridLayer('tunisia.sq20_a_2564')]),
},
  {
    name: 'satisfiedf2564',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.sq20_f_2564'),
L.mapbox.gridLayer('tunisia.sq20_f_2564')]),
},
  {
    name: 'satisfiedm2564',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.sq20_m_2564'),
L.mapbox.gridLayer('tunisia.sq20_m_2564')]),
},
  {
    name: 'satisfiedao64',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.sq20_a_a65'),
L.mapbox.gridLayer('tunisia.sq20_a_a65')]),
},
  {
    name: 'satisfiedfo64',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.sq20_f_a65'),
L.mapbox.gridLayer('tunisia.sq20_f_a65')]),
},
  {
    name: 'satisfiedmo64',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.sq20_m_a65'),
L.mapbox.gridLayer('tunisia.sq20_m_a65')]),
},
// cat2
  {
    name: 'shsatisfiedaa',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.shq20_a_a'),
L.mapbox.gridLayer('tunisia.shq20_a_a')])
},
  {
    name: 'shsatisfiedfa',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.shq20_f_a'),
L.mapbox.gridLayer('tunisia.shq20_f_a')])
},
  {
    name: 'shsatisfiedma',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.shq20_m_a'),
L.mapbox.gridLayer('tunisia.shq20_m_a')]),
},
  {
    name: 'shsatisfiedau25',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.shq20_a_u25'),
L.mapbox.gridLayer('tunisia.shq20_a_u25')]),
},
  {
    name: 'shsatisfiedfu25',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.shq20_f_u25'),
L.mapbox.gridLayer('tunisia.shq20_f_u25')]),
},
  {
    name: 'shsatisfiedmu25',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.shq20_m_u25'),
L.mapbox.gridLayer('tunisia.shq20_m_u25')]),
},
  {
    name: 'shsatisfieda2564',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.shq20_a_2564'),
L.mapbox.gridLayer('tunisia.shq20_a_2564')]),
},
  {
    name: 'shsatisfiedf2564',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.shq20_f_2564'),
L.mapbox.gridLayer('tunisia.shq20_f_2564')]),
},
  {
    name: 'shsatisfiedm2564',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.shq20_m_2564'),
L.mapbox.gridLayer('tunisia.shq20_m_2564')]),
},
  {
    name: 'shsatisfiedao64',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.shq20_a_a65'),
L.mapbox.gridLayer('tunisia.shq20_a_a65')]),
},
  {
    name: 'shsatisfiedfo64',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.shq20_f_a65'),
L.mapbox.gridLayer('tunisia.shq20_f_a65')]),
},
  {
    name: 'shsatisfiedmo64',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.shq20_m_a65'),
L.mapbox.gridLayer('tunisia.shq20_m_a65')]),
},
  {
    name: 'nsatisfiedaa',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.nq20_a_a'),
L.mapbox.gridLayer('tunisia.nq20_a_a')])
},
  {
    name: 'nsatisfiedfa',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.nq20_f_a'),
L.mapbox.gridLayer('tunisia.nq20_f_a')])
},
  {
    name: 'nsatisfiedma',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.nq20_m_a'),
L.mapbox.gridLayer('tunisia.nq20_m_a')]),
},
  {
    name: 'nsatisfiedau25',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.nq20_a_u25'),
L.mapbox.gridLayer('tunisia.nq20_a_u25')]),
},
  {
    name: 'nsatisfiedfu25',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.nq20_f_u25'),
L.mapbox.gridLayer('tunisia.nq20_f_u25')]),
},
  {
    name: 'nsatisfiedmu25',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.nq20_m_u25'),
L.mapbox.gridLayer('tunisia.nq20_m_u25')]),
},
  {
    name: 'nsatisfieda2564',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.nq20_a_2564'),
L.mapbox.gridLayer('tunisia.nq20_a_2564')]),
},
  {
    name: 'nsatisfiedf2564',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.nq20_f_2564'),
L.mapbox.gridLayer('tunisia.nq20_f_2564')]),
},
  {
    name: 'nsatisfiedm2564',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.nq20_m_2564'),
L.mapbox.gridLayer('tunisia.nq20_m_2564')]),
},
  {
    name: 'nsatisfiedao64',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.nq20_a_a65'),
L.mapbox.gridLayer('tunisia.nq20_a_a65')]),
},
  {
    name: 'nsatisfiedfo64',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.nq20_f_a65'),
L.mapbox.gridLayer('tunisia.nq20_f_a65')]),
},
  {
    name: 'nsatisfiedmo64',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.nq20_m_a65'),
L.mapbox.gridLayer('tunisia.nq20_m_a65')]),
}
];

function wrap_indef(x){
  if (x == undefined)
    return 0 ;
  return x;
}
function makeTeaser(d){

  var teaser ='';
  if ($('#ar').css('display') =='none'){
    teaser = teaser + '<div class="ar">'+
                            '<div class="gov"> '+ d.name_ar+'</div>'+
                            '<div class="t-line">'+
                                '<div class="t-label">ا راضٍ (ية) تماما</div>'+
                                '<div class="t-value">'+wrap_indef(d.n_satisfied_p)+'%</div>'+
                            '</div>' +
                            '<div class="t-line">'+
                               '<div class="t-label">راضٍ (ية) الى حد ما</div>'+
                                '<div class="t-value">'+ wrap_indef(d.n_shsatisfied_p)+'%</div>'+
                           ' </div>' +
                            '<div class="t-line">'+
                               '<div class="t-label">غير راضٍ (ية)</div>'+
                               '<div class="t-value">'+ wrap_indef(d.n_nsatisfied_p) +'%</div>'+
                             '</div>'+
                      '</div>';
  }
  else{
 teaser = teaser + '<div class="gov"> '+ d.name_en+'</div><div class="t-line"><div class="t-label">Very satisfied</div> <div class="t-value">'+wrap_indef(d.n_satisfied_p)+'%</div></div>' +
               '<div class="t-line"><div class="t-label">To some extent </div> <div class="t-value">'+ wrap_indef(d.n_shsatisfied_p) +'%</div></div>' +
               '<div class="t-line"><div class="t-label">Not satisfied</div> <div class="t-value">'+wrap_indef(d.n_nsatisfied_p) +'%</div></div>';

  }
  $('#tooltip-overlay').html(teaser);

}
 


function changelayer(s, g, a) {
  if (s == 'satisfied') {
    $('#l2').hide();
    $('#l3').hide();
    $('#l1').show();
  }
  if (s == 'shsatisfied') {
    $('#l1').hide();
    $('#l3').hide();
    $('#l2').show();
  }
  if (s == 'nsatisfied') {
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
        layer.layer.getLayers()[1].on('mouseover', function(e) {
          if (e.data){
          makeTeaser(e.data);
          $('#tooltip-overlay').show();}
        });
        
         layer.layer.getLayers()[1].on('mouseout', function(e) {

          $('#tooltip-overlay').empty();
          $('#tooltip-overlay').hide();

          });
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
