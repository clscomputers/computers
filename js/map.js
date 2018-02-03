function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: {lat: -17.4033953, lng: -66.1560913}
        });

        var image = '';
        var beachMarker = new google.maps.Marker({
          position: {lat: -17.4033953, lng: -66.1560913},
          map: map,
          icon: image
        });
      }