(function($) {
  $(function() {
    $('li.nav-item').on('click', function() {
      $(this)
        .addClass('active').siblings().removeClass('active');
    });
  });
})(jQuery);

function initMap() {
  var markerParam = {lat: 52.427282, lng: 16.937192};
  var center = {lat: 52.425975, lng: 16.956126};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: center
  });

  var marker = new google.maps.Marker({
    position: markerParam,
    map: map,
    title: 'Hello World!'
  });
}