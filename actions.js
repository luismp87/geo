var fn = {
                ready: function(){                    
                  document.addEventListener("deviceready",fn.init,false);  
                },
                init: function(){
                //fn.dibujarMapa(19.060679, -98.201306);
                    navigator.geolocation.getCurrentPosition(fn.posicionObtenida,fn.error);
                    },
                    posicionObtenida: function(p){
                  fn.dibujarMapa(p.coords.latitude,p.coords.latitude);      
                    },
                error: function(err){
                  alert(err.message)  
                    
                },
               dibujarMapa: function(lat,lng){
				//Posición del mapa
				var latlng = new google.maps.LatLng(lat,lng);
				var myOptions = {
					zoom: 8,
					center: latlng,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
				var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
				//Marcador
				var marker = new google.maps.Marker({
					position: latlng, 
					map: map, 
					title:"Mi posición"
				});
			}
};
$(fn.ready);
