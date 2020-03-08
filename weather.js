
		
		function f(){
		var strin;
		var loc;
		var des;
		var t;
        //strin = document.getElementById("textid").value;
        strin = 'Vellore';
		console.log('strin');
		
		//  var weatheri = new XMLHttpRequest();
		//  weatheri.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=42887748873fe90166f5c7d3bea86697", false);
		//  weatheri.send(null); 
		
		//  var s; 
		//  s = JSON.parse(weatheri.response); 
		
		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/weather",
			dataType: "json",
			type: "GET",
			data: {q: strin, APPID: "42887748873fe90166f5c7d3bea86697", units: "metric"},
			success: function(data){
			
			$.each(data.weather, function(index, val){
			loc="City:&nbsp;"+data.name+"<br/>Latitude:&nbsp;"+data.coord.lon+"<br/>Longitude:&nbsp;"+data.coord.lat;
			des=""+val.main+"<br/>Description:&nbsp;"+val.description;
			t="Current:&nbsp;"+data.main.temp+"&deg;C<br/>"+"Max:&nbsp;"+data.main.temp_max+"<br/>Min:&nbsp;"+data.main.temp_max;
			//console.log('hello');
	})
		
		document.getElementById("home").innerHTML = loc;
		document.getElementById("profile").innerHTML = des;
		//document.getElementById("contact").innerHTML = t;
		}
		})
		
		
		
		
		}
	
	
