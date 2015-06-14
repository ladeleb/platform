$("#ar").on("click", function() {
  $(".en").hide();
  $(".ar").show();
  $("#ar").hide();
  $("#en").show();
  $(".en").css('dislpay','none');
  $(".ar").css('dislpay','block');

});
$("#en").on("click", function() {
  $(".ar").hide();
  $(".en").show();
  $("#en").hide();
  $("#ar").show();
  $(".ar").css('dislpay','none');
  $(".en").css('dislpay','block');
});
$(document).ready(function() {
  $("#en").hide()
  $(".ar").hide()
  changelayer('proportional', 'a', 'a');
});
$(function() {
  $(".btn-group .btn").click(function(e) {
    setTimeout(function() {
      system = $("#system-group input:checked").val()
      gender = $("#gender-group input:checked").val()
      age = $("#age-group input:checked").val()
      changelayer(system, gender, age);
    }, 100);
  });
})
L.mapbox.accessToken = 'pk.eyJ1IjoidHVuaXNpYSIsImEiOiJwelVyLW1JIn0.mBhvyh8Ui8NzOq8Bpzl83g';
var map = L.map('map', {
  zoomControl: false
}).setView([33.894286, 35.37371], 9);
var baseLayer = L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' + '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery  &copy; <a href="http://mapbox.com">Mapbox</a>, ' + 'Poll data  &copy; <a href="http://www.lade.org.lb">Lade</a>',
  id: 'mayakreidieh.map-dfh9esrb'
}).addTo(map);


new L.Control.Zoom({
  position: 'topright'
}).addTo(map);
var layers = [{
    name: 'proportionalaa',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.pq37_a_a'),
L.mapbox.gridLayer('tunisia.pq37_a_a')])
},
  {
    name: 'proportionalfa',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.pq37_f_a'),
L.mapbox.gridLayer('tunisia.pq37_f_a')])
},
  {
    name: 'proportionalma',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.pq37_m_a'),
L.mapbox.gridLayer('tunisia.pq37_m_a')]),
},
  {
    name: 'proportionalau25',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.pq37_a_u25'),
L.mapbox.gridLayer('tunisia.pq37_a_u25')]),
},
  {
    name: 'proportionalfu25',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.pq37_f_u25'),
L.mapbox.gridLayer('tunisia.pq37_f_u25')]),
},
  {
    name: 'proportionalmu25',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.pq37_m_u25'),
L.mapbox.gridLayer('tunisia.pq37_m_u25')]),
},
  {
    name: 'proportionala2564',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.pq37_a_2564'),
L.mapbox.gridLayer('tunisia.pq37_a_2564')]),
},
  {
    name: 'proportionalf2564',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.pq37_f_2564'),
L.mapbox.gridLayer('tunisia.pq37_f_2564')]),
},
  {
    name: 'proportionalm2564',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.pq37_m_2564'),
L.mapbox.gridLayer('tunisia.pq37_m_2564')]),
},
  {
    name: 'proportionalao64',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.pq37_a_a65'),
L.mapbox.gridLayer('tunisia.pq37_a_a65')]),
},
  {
    name: 'proportionalfo64',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.pq37_f_a65'),
L.mapbox.gridLayer('tunisia.pq37_f_a65')]),
},
  {
    name: 'proportionalmo64',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.pq37_m_a65'),
L.mapbox.gridLayer('tunisia.pq37_m_a65')]),
},
// cat2
  {
    name: 'mixedaa',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.mq37_a_a'),
L.mapbox.gridLayer('tunisia.mq37_a_a')])
},
  {
    name: 'mixedfa',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.mq37_f_a'),
L.mapbox.gridLayer('tunisia.mq37_f_a')])
},
  {
    name: 'mixedma',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.mq37_m_a'),
L.mapbox.gridLayer('tunisia.mq37_m_a')]),
},
  {
    name: 'mixedau25',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.mq37_a_u25'),
L.mapbox.gridLayer('tunisia.mq37_a_u25')]),
},
  {
    name: 'mixedfu25',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.mq37_f_u25'),
L.mapbox.gridLayer('tunisia.mq37_f_u25')]),
},
  {
    name: 'mixedmu25',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.mq37_m_u25'),
L.mapbox.gridLayer('tunisia.mq37_m_u25')]),
},
  {
    name: 'mixeda2564',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.mq37_a_2564'),
L.mapbox.gridLayer('tunisia.mq37_a_2564')]),
},
  {
    name: 'mixedf2564',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.mq37_f_2564'),
L.mapbox.gridLayer('tunisia.mq37_f_2564')]),
},
  {
    name: 'mixedm2564',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.mq37_m_2564'),
L.mapbox.gridLayer('tunisia.mq37_m_2564')]),
},
  {
    name: 'mixedao64',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.mq37_a_a65'),
L.mapbox.gridLayer('tunisia.mq37_a_a65')]),
},
  {
    name: 'mixedfo64',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.mq37_f_a65'),
L.mapbox.gridLayer('tunisia.mq37_f_a65')]),
},
  {
    name: 'mixedmo64',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.mq37_m_a65'),
L.mapbox.gridLayer('tunisia.mq37_m_a65')]),
},
  {
    name: 'otheraa',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.oq37_a_a'),
L.mapbox.gridLayer('tunisia.oq37_a_a')])
},
  {
    name: 'otherfa',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.oq37_f_a'),
L.mapbox.gridLayer('tunisia.oq37_f_a')])
},
  {
    name: 'otherma',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.oq37_m_a'),
L.mapbox.gridLayer('tunisia.oq37_m_a')]),
},
  {
    name: 'otherau25',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.oq37_a_u25'),
L.mapbox.gridLayer('tunisia.oq37_a_u25')]),
},
  {
    name: 'otherfu25',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.oq37_f_u25'),
L.mapbox.gridLayer('tunisia.oq37_f_u25')]),
},
  {
    name: 'othermu25',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.oq37_m_u25'),
L.mapbox.gridLayer('tunisia.oq37_m_u25')]),
},
  {
    name: 'othera2564',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.oq37_a_2564'),
L.mapbox.gridLayer('tunisia.oq37_a_2564')]),
},
  {
    name: 'otherf2564',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.oq37_f_2564'),
L.mapbox.gridLayer('tunisia.oq37_f_2564')]),
},
  {
    name: 'otherm2564',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.oq37_m_2564'),
L.mapbox.gridLayer('tunisia.oq37_m_2564')]),
},
  {
    name: 'otherao64',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.oq37_a_a65'),
L.mapbox.gridLayer('tunisia.oq37_a_a65')]),
},
  {
    name: 'otherfo64',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.oq37_f_a65'),
L.mapbox.gridLayer('tunisia.oq37_f_a65')]),
},
  {
    name: 'othermo64',
    layer: L.layerGroup([
L.mapbox.tileLayer('tunisia.oq37_m_a65'),
L.mapbox.gridLayer('tunisia.oq37_m_a65')]),
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
                                '<div class="t-label">النظام النسبي</div>'+
                                '<div class="t-value">'+ wrap_indef(d.n_proportional_p) +'%</div>'+
                            '</div>' +
                            '<div class="t-line">'+
                               '<div class="t-label">النظام المختلط</div>'+
                                '<div class="t-value">'+ wrap_indef(d.n_mixed_p) +'%</div>'+
                           ' </div>' +
                            '<div class="t-line">'+
                               '<div class="t-label">غيره</div>'+
                               '<div class="t-value">'+ wrap_indef(d.n_other_p) +'%</div>'+
                             '</div>'+
                      '</div>';
  }
  else{
 teaser = teaser + '<div class="gov"> '+ d.name_en+'</div><div class="t-line"><div class="t-label">Proportional sytstem</div> <div class="t-value">'+ wrap_indef(d.n_proportional_p) +'%</div></div>' +
               '<div class="t-line"><div class="t-label">Mixed system</div> <div class="t-value">'+ wrap_indef(d.n_mixed_p) +'%</div></div>' +
               '<div class="t-line"><div class="t-label">Other</div> <div class="t-value">'+ wrap_indef(d.n_other_p) +'%</div></div>';

  }
  $('#tooltip-overlay').html(teaser);

}
 


function changelayer(s, g, a) {
  if (s == 'proportional') {
    $('#l2').hide();
    $('#l3').hide();
    $('#l1').show();
  }
  if (s == 'mixed') {
    $('#l1').hide();
    $('#l3').hide();
    $('#l2').show();
  }
  if (s == 'other') {
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
