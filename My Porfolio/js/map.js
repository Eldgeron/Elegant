  function initMap() {
        var uluru = {lat: 49.993462, lng: 36.23963709999998};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }