app.factory("views", function(){
    return {
        currentView: 'dash-home',
    };
});

app.factory("dashInstant", function(){
    return {
        jobName: '',
        vanType: '',
        porterQty: '',
        jobDate: Date.now(),
        fuelPrice: '',
        suggestedPrice: '',
        address: {
            "start_location": {
		        "name": '',
		        "lat": '',
		        "lng": ''
		    },
            "end_location": {
		        "name": '',
		        "lat": '',
		        "lng": ''
		    },
            "pickup1": {
		        "name": '',
		        "lat": '',
		        "lng": ''
		    },
            "dropoff1": {
		        "name": '',
		        "lat": '',
		        "lng": ''
		    },
            "pickup2": {
		        "name": '',
		        "lat": '',
		        "lng": ''
		    },
            "dropoff2": {
		        "name": '',
		        "lat": '',
		        "lng": ''
		    },
        },
        distance: 0,
        payment_method: 'cash',
    };
});

app.factory("dashPorters", function(){
    return {
        "0 Porter" : {
            porterQty: "0 Porters",
            //price: ,
        },
        "1 Porter" : {
            porterQty: "1 Porter",
            //price: ,
        },
        "2 Porters" : {
            porterQty: "2 Porters",
            //price: ,
        }
    };
});

app.factory("dashVans", function(){
    return {
        "Car": {
            vanType: 'Car',
            weight: '50kg',
            length: '100cm',
            width: '100cm',
            height: '75cm',
            hourlyPrice: ''
        },
        "Car Derived Van": {
            vanType: 'Car Derived Van',
            weight: '660kg',
            length: '1523m',
            width: '1473',
            height: '1181',
            MPG: '68.2',
            hourPriceDriver: '25',
            hourPricePorter: '10'
        },
        "Sub 1 Tonne": {
            vanType: 'Sub 1 Tonne',
            weight: '731kg',
            length: '2040',
            width: '1500',
            height: '1358',
            MPG: '53.3',
            hourPriceDriver: '25',
            hourPricePorter: '10'
        },
        "Short Wheel Base": {
            vanType: 'Short Wheel Base',
            weight: '1114kg',
            length: '2555',
            width: '1775',
            height: '1406',
            MPG: '40.4',
            hourPriceDriver: '30',
            hourPricePorter: '12'
        },
        "Long Wheel Base": {
            vanType: 'Long Wheel Base',
            weight: '1337kg',
            length: '3494',
            width: '1784',
            height: '2025',
            MPG: '33.2',
            hourPriceDriver: '35',
            hourPricePorter: '12'
        },
        "Hi-Top Long Wheel Base": {
            vanType: 'Hi-Top Long Wheel Base',
            weight: '1087kg',
            length: '4300',
            width: '1780',
            height: '1940',
            MPG: '33.6',
            hourPriceDriver: '35',
            hourPricePorter: '12'
        },
        "Luton Tail Lift": {
            vanType: 'Luton Tail Lift',
            weight: '1031kg',
            length: '4144',
            width: '1960',
            height: '2184',
            MPG: '33.6',
            hourPriceDriver: '35',
            hourPricePorter: '12'
        }
    };
});

app.factory("driver", function(){
    return {
        username: '',
        password: '',
        password2: '',
        email: '',
        firstname: '',
        lastname: '',
        mobile: '',
        day: '',
        month: '',
        year: '',
        address: '',
        city: '',
        postcode: '',
        vehicle: '',
        reg: '',
        porters: '',
        vehiclenumber: '',
        bank: '',
        acc: '',
        sc: '',
        };
});

app.factory("staff", function(){
    return {
        username: '',
        password: '',
        password2: '',
        email: '',
        firstname: '',
        lastname: '',
        };
});

app.service("authInter", function($location, views){
    if(views.type == 'dash') {
        /*$.ajax({
            url: "/api/login-auth",
            method:"POST"
        }).done(function(user){
            if (user !== '0') {
                // $rootScope.currentUser = user;
            } else {
                $location.path('/login');
            }
        });*/
    }
    if(views.type == 'admin') {
        // do someting else bredgin
    }
});


app.service('maps', function(dashInstant, $timeout, $window, dashInstant) {
    var maps = {};

    // Set Vars
    maps.init = function() {
        $timeout(function(){
            directionsService = new google.maps.DirectionsService(),
            directionsDisplay = new google.maps.DirectionsRenderer({
                draggable: true
            })
            var latlng = new google.maps.LatLng(51.3030, 0.0732);
            var myOptions = {
                zoom: 8,
                center: latlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
            directionsDisplay.setMap(map);

            google.maps.event.trigger(map, 'resize');
        }, 100);
    }

    // Render Directions
    maps.setDirections = function(address, callback) {
        //console.log(address);
        var tempWay = [];
        if(address.pickup1.name !== '') {
            tempWay.push({location: address.pickup1.name+', UK', stopover:false});
        }
        if(address.dropoff1.name !== '') {
            tempWay.push({location: address.dropoff1.name+', UK', stopover:false});
        }
        if(address.pickup2.name !== '') {
            tempWay.push({location: address.pickup2.name+', UK', stopover:false});
        }
        if(address.dropoff2.name !== '') {
            tempWay.push({location: address.dropoff2.name+', UK', stopover:false});
        }
        var waypointCount = Object.keys(tempWay).length || 0;

        /*if(waypointCount == 0) {
            var destination = address.dropoff1.name;
        } else {
            tempWay.push({location: address.dropoff1.name+', UK', stopover:false});
            var destination = tempWay[waypointCount-1]['location'];
        }*/

        request = {
            origin: address.start_location.name+', UK',
            destination: address.end_location.name+', UK',
            waypoints: tempWay,
            travelMode: 'DRIVING',
            provideRouteAlternatives: false,
            unitSystem: google.maps.UnitSystem.METRIC,
            optimizeWaypoints: false
        };

        directionsService.route(request, function (response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
                dashInstant.distance = response.routes[0].legs[0].distance.value;
                dashInstant.address.pickup1.lat = response.routes[0].legs[0].start_location.lat();
                dashInstant.address.dropoff1.lng = response.routes[0].legs[0].start_location.lng();
                dashInstant.address.pickup2.lat = response.routes[0].legs[0].end_location.lat();
                dashInstant.address.dropoff2.lng = response.routes[0].legs[0].end_location.lng();
            } else {
                console.log(status);
            }
            google.maps.event.trigger(map, 'resize');
        });
        callback(dashInstant.distance);
    }
    return maps;
})


app.service('tdispatch', function($http, dashInstant) {
    var tdispatch = {};
    dashInstant.authWindow = '';
    /*var url = 'http://api.tdispatch.org.uk/passenger/oauth2/auth';
    var clientID = 'iesgbqOcGs';
    var secret = 'PeYQRXDWWFAa3WQR7UwHJRs2DZD5eKsP';
    var apiKey = 'c5c13f4fe1aac89e417c879c0d8554ae';
    var params1 = {
        'code': 'Authorization code',
        'client_id': clientID,
        'client_secret': secret,
        'redirect_uri': '',
        'grant_type': 'authorization_code'
    }
    var params2 = {
        'key': apiKey,
        'response_type': clientID,
        'client_id': secret,
        'redirect_uri': '',
        'scope': ''
    }*/

    /*tdispatch.book = function() {
        $.ajax({
            url: "/api/tdispatch-book",
            method: 'GET'
        }).done(function(data) {
            dashInstant.authWindow = data.data;
            var new_window = window.open();
            $(new_window.document.body).append(dashInstant.authWindow);
            //window.open("http://api.tdispatch.org.uk/passenger/oauth2/auth","mywindow");
            //$('#o-auth-window').html(dashInstant.authWindow);
        });
    }*/

    return tdispatch;
})
