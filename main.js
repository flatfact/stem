$("#find").click(function(){
  $(".table-responsive").css("display","block");
  $("#step2").css("display","block");
var unix = Math.round(+new Date()/1000);
var day2 = unix+86400;
var day3 = day2+86400;
var day4 = day3+86400;
var day5 = day4+86400;
var day6 = day5+86400;
var day7 = day6+86400;
var day8 = day7+86400;
var day9 = day8+86400;
var day10 = day9+86400;
var day11 = day10+86400;
var day12 = day11+86400;
var day13 = day12+86400;
var day14 = day13+86400;
var avg_temp=0;
var avg_humid=0;
var avg_windspeed=0;
var postcode = $('#postcode').val();
var geocodingAPI = 'https://maps.googleapis.com/maps/api/geocode/json?address=ประเทศไทย'+ postcode;
$("#loc").css("display", "block");
$.getJSON(geocodingAPI, function (json) {
    var address = json.results[0].formatted_address;
    console.log('Address : ', address);

    var latitude = json.results[0].geometry.location.lat;
    console.log('Latitude : ', latitude);

    var longitude = json.results[0].geometry.location.lng;
    console.log('Longitude : ', longitude);


   $.ajax({
  async:false,
  'global': false,
  url: 'https://api.forecast.io/forecast/f896d6e000d9829a73497f5cf5818186/'+ latitude +','+ longitude +',' + unix + '?si',
  dataType: "jsonp",
  success: function (data) {
      console.log("Day 1 : ",unix);
      console.log("Tempurature : ",data["daily"]["data"][0]["apparentTemperatureMin"]);
      avg_temp=avg_temp+((data["daily"]["data"][0]["apparentTemperatureMin"])/14);
      avg_windspeed=avg_windspeed+((data["daily"]["data"][0]["windSpeed"])/14);
      avg_humid=avg_humid+((data["daily"]["data"][0]["humidity"])/14);
      $('#humid1').text(data["daily"]["data"][0]["humidity"]);
      $('#wind1').text(data["daily"]["data"][0]["windSpeed"]);
      $('#temp1').text(data["daily"]["data"][0]["apparentTemperatureMin"]);
      if(data["daily"]["data"][0]["icon"] == 'rain'){
        $('#icon1').html('<img src="weather/34.png" width="24px"> มีฝนตก');
      }
      else if (data["daily"]["data"][0]["icon"] == 'clear-day') {
        $('#icon1').html('<img src="weather/33.png" width="24px"> แจ่มใส');
      }
      else if (data["daily"]["data"][0]["icon"] == 'clear-night') {
        $('#icon1').html('<img src="weather/33.png" width="24px"> แจ่มใส');
      }
      else if (data["daily"]["data"][0]["icon"] == 'sleet') {
        $('#icon1').html('<img src="weather/36.png" width="24px"> มีฝนตกเล็กน้อย');
      }
      else if (data["daily"]["data"][0]["icon"] == 'wind') {
        $('#icon1').html('<img src="weather/31.png" width="24px"> ลมแรง');
      }
      else if (data["daily"]["data"][0]["icon"] == 'fog') {
        $('#icon1').html('<img src="weather/30.png" width="24px"> หมอกหนา');
      }
      else if (data["daily"]["data"][0]["icon"] == 'cloudy') {
        $('#icon1').html('<img src="weather/37.png" width="24px"> มีเมฆมาก');
      }
      else if (data["daily"]["data"][0]["icon"] == 'partly-cloudy-day') {
        $('#icon1').html('<img src="weather/37.png" width="24px"> มีเมฆบางส่วน');
      }
      else if (data["daily"]["data"][0]["icon"] == 'partly-cloudy-night') {
        $('#icon1').html('<img src="weather/37.png" width="24px"> มีเมฆบางส่วน');
      }
      else{
        $('#icon1').text('NOPE')
      }
  }
});

   $.ajax({
  async:false,
  'global': false,
  url: 'https://api.forecast.io/forecast/f896d6e000d9829a73497f5cf5818186/'+ latitude +','+ longitude +',' + day2 + '?si',
  dataType: "jsonp",
  success: function (data) {
      console.log("Day 2 : ",day2);
      console.log("Tempurature : ",data["daily"]["data"][0]["apparentTemperatureMin"]);
      avg_temp=avg_temp+((data["daily"]["data"][0]["apparentTemperatureMin"])/14);
      avg_humid=avg_humid+((data["daily"]["data"][0]["humidity"])/14);
      avg_windspeed=avg_windspeed+((data["daily"]["data"][0]["windSpeed"])/14);
      $('#humid2').text(data["daily"]["data"][0]["humidity"]);
      $('#wind2').text(data["daily"]["data"][0]["windSpeed"]);
      $('#temp2').text(data["daily"]["data"][0]["apparentTemperatureMin"]);
    if(data["daily"]["data"][0]["icon"] == 'rain'){
      $('#icon2').html('<img src="weather/34.png" width="24px"> มีฝนตก');
    }
    else if (data["daily"]["data"][0]["icon"] == 'clear-day') {
      $('#icon2').html('<img src="weather/33.png" width="24px"> แจ่มใส');
    }
    else if (data["daily"]["data"][0]["icon"] == 'clear-night') {
      $('#icon2').html('<img src="weather/33.png" width="24px"> แจ่มใส');
    }
    else if (data["daily"]["data"][0]["icon"] == 'sleet') {
      $('#icon2').html('<img src="weather/36.png" width="24px"> มีฝนตกเล็กน้อย');
    }
    else if (data["daily"]["data"][0]["icon"] == 'wind') {
      $('#icon2').html('<img src="weather/31.png" width="24px"> ลมแรง');
    }
    else if (data["daily"]["data"][0]["icon"] == 'fog') {
      $('#icon2').html('<img src="weather/30.png" width="24px"> หมอกหนา');
    }
    else if (data["daily"]["data"][0]["icon"] == 'cloudy') {
      $('#icon2').html('<img src="weather/37.png" width="24px"> มีเมฆมาก');
    }
    else if (data["daily"]["data"][0]["icon"] == 'partly-cloudy-day') {
      $('#icon2').html('<img src="weather/37.png" width="24px"> มีเมฆบางส่วน');
    }
    else if (data["daily"]["data"][0]["icon"] == 'partly-cloudy-night') {
      $('#icon2').html('<img src="weather/37.png" width="24px"> มีเมฆบางส่วน');
    }
    else{
      $('#icon2').text('NOPE')
    }
  }
});
   $.ajax({
  async:false,
  'global': false,
  url: 'https://api.forecast.io/forecast/f896d6e000d9829a73497f5cf5818186/'+ latitude +','+ longitude +',' + day3 + '?si',
  dataType: "jsonp",
  success: function (data) {
      console.log("Day 3 : ",day3);
      console.log("Tempurature : ",data["daily"]["data"][0]["apparentTemperatureMin"]);
      avg_temp=avg_temp+((data["daily"]["data"][0]["apparentTemperatureMin"])/14);
      avg_humid=avg_humid+((data["daily"]["data"][0]["humidity"])/14);
      avg_windspeed=avg_windspeed+((data["daily"]["data"][0]["windSpeed"])/14);
      $('#humid3').text(data["daily"]["data"][0]["humidity"]);
      $('#wind3').text(data["daily"]["data"][0]["windSpeed"]);
      $('#temp3').text(data["daily"]["data"][0]["apparentTemperatureMin"]);
      if(data["daily"]["data"][0]["icon"] == 'rain'){
        $('#icon3').html('<img src="weather/34.png" width="24px"> มีฝนตก');
      }
      else if (data["daily"]["data"][0]["icon"] == 'clear-day') {
        $('#icon3').html('<img src="weather/33.png" width="24px"> แจ่มใส');
      }
      else if (data["daily"]["data"][0]["icon"] == 'clear-night') {
        $('#icon3').html('<img src="weather/33.png" width="24px"> แจ่มใส');
      }
      else if (data["daily"]["data"][0]["icon"] == 'sleet') {
        $('#icon3').html('<img src="weather/36.png" width="24px"> มีฝนตกเล็กน้อย');
      }
      else if (data["daily"]["data"][0]["icon"] == 'wind') {
        $('#icon3').html('<img src="weather/31.png" width="24px"> ลมแรง');
      }
      else if (data["daily"]["data"][0]["icon"] == 'fog') {
        $('#icon3').html('<img src="weather/30.png" width="24px"> หมอกหนา');
      }
      else if (data["daily"]["data"][0]["icon"] == 'cloudy') {
        $('#icon3').html('<img src="weather/37.png" width="24px"> มีเมฆมาก');
      }
      else if (data["daily"]["data"][0]["icon"] == 'partly-cloudy-day') {
        $('#icon3').html('<img src="weather/37.png" width="24px"> มีเมฆบางส่วน');
      }
      else if (data["daily"]["data"][0]["icon"] == 'partly-cloudy-night') {
        $('#icon3').html('<img src="weather/37.png" width="24px"> มีเมฆบางส่วน');
      }
      else{
        $('#icon3').text('NOPE')
      }
  }
});
   $.ajax({
  async:false,
  'global': false,
  url: 'https://api.forecast.io/forecast/f896d6e000d9829a73497f5cf5818186/'+ latitude +','+ longitude +',' + day4 + '?si',
  dataType: "jsonp",
  success: function (data) {
      console.log("Day 4 : ",day4);
      console.log("Tempurature : ",data["daily"]["data"][0]["apparentTemperatureMin"]);
      avg_temp=avg_temp+((data["daily"]["data"][0]["apparentTemperatureMin"])/14);
      avg_humid=avg_humid+((data["daily"]["data"][0]["humidity"])/14);
      avg_windspeed=avg_windspeed+((data["daily"]["data"][0]["windSpeed"])/14);
      $('#humid4').text(data["daily"]["data"][0]["humidity"]);
      $('#wind4').text(data["daily"]["data"][0]["windSpeed"]);
      $('#temp4').text(data["daily"]["data"][0]["apparentTemperatureMin"]);
      if(data["daily"]["data"][0]["icon"] == 'rain'){
        $('#icon4').html('<img src="weather/34.png" width="24px"> มีฝนตก');
      }
      else if (data["daily"]["data"][0]["icon"] == 'clear-day') {
        $('#icon4').html('<img src="weather/33.png" width="24px"> แจ่มใส');
      }
      else if (data["daily"]["data"][0]["icon"] == 'clear-night') {
        $('#icon4').html('<img src="weather/33.png" width="24px"> แจ่มใส');
      }
      else if (data["daily"]["data"][0]["icon"] == 'sleet') {
        $('#icon4').html('<img src="weather/36.png" width="24px"> มีฝนตกเล็กน้อย');
      }
      else if (data["daily"]["data"][0]["icon"] == 'wind') {
        $('#icon4').html('<img src="weather/31.png" width="24px"> ลมแรง');
      }
      else if (data["daily"]["data"][0]["icon"] == 'fog') {
        $('#icon4').html('<img src="weather/30.png" width="24px"> หมอกหนา');
      }
      else if (data["daily"]["data"][0]["icon"] == 'cloudy') {
        $('#icon4').html('<img src="weather/37.png" width="24px"> มีเมฆมาก');
      }
      else if (data["daily"]["data"][0]["icon"] == 'partly-cloudy-day') {
        $('#icon4').html('<img src="weather/37.png" width="24px"> มีเมฆบางส่วน');
      }
      else if (data["daily"]["data"][0]["icon"] == 'partly-cloudy-night') {
        $('#icon4').html('<img src="weather/37.png" width="24px"> มีเมฆบางส่วน');
      }
      else{
        $('#icon4').text('NOPE')
      }
  }
});
   $.ajax({
  async:false,
  'global': false,
  url: 'https://api.forecast.io/forecast/f896d6e000d9829a73497f5cf5818186/'+ latitude +','+ longitude +',' + day5 + '?si',
  dataType: "jsonp",
  success: function (data) {
      console.log("Day 5 : ",day5);
      console.log("Tempurature : ",data["daily"]["data"][0]["apparentTemperatureMin"]);
      avg_temp=avg_temp+((data["daily"]["data"][0]["apparentTemperatureMin"])/14);
      avg_humid=avg_humid+((data["daily"]["data"][0]["humidity"])/14);
      avg_windspeed=avg_windspeed+((data["daily"]["data"][0]["windSpeed"])/14);
      $('#humid5').text(data["daily"]["data"][0]["humidity"]);
      $('#wind5').text(data["daily"]["data"][0]["windSpeed"]);
      $('#temp5').text(data["daily"]["data"][0]["apparentTemperatureMin"]);
      if(data["daily"]["data"][0]["icon"] == 'rain'){
        $('#icon5').html('<img src="weather/34.png" width="24px"> มีฝนตก');
      }
      else if (data["daily"]["data"][0]["icon"] == 'clear-day') {
        $('#icon5').html('<img src="weather/33.png" width="24px"> แจ่มใส');
      }
      else if (data["daily"]["data"][0]["icon"] == 'clear-night') {
        $('#icon5').html('<img src="weather/33.png" width="24px"> แจ่มใส');
      }
      else if (data["daily"]["data"][0]["icon"] == 'sleet') {
        $('#icon5').html('<img src="weather/36.png" width="24px"> มีฝนตกเล็กน้อย');
      }
      else if (data["daily"]["data"][0]["icon"] == 'wind') {
        $('#icon5').html('<img src="weather/31.png" width="24px"> ลมแรง');
      }
      else if (data["daily"]["data"][0]["icon"] == 'fog') {
        $('#icon5').html('<img src="weather/30.png" width="24px"> หมอกหนา');
      }
      else if (data["daily"]["data"][0]["icon"] == 'cloudy') {
        $('#icon5').html('<img src="weather/37.png" width="24px"> มีเมฆมาก');
      }
      else if (data["daily"]["data"][0]["icon"] == 'partly-cloudy-day') {
        $('#icon5').html('<img src="weather/37.png" width="24px"> มีเมฆบางส่วน');
      }
      else if (data["daily"]["data"][0]["icon"] == 'partly-cloudy-night') {
        $('#icon5').html('<img src="weather/37.png" width="24px"> มีเมฆบางส่วน');
      }
      else{
        $('#icon5').text('NOPE')
      }
  }
});
   $.ajax({
  async:false,
  'global': false,
  url: 'https://api.forecast.io/forecast/f896d6e000d9829a73497f5cf5818186/'+ latitude +','+ longitude +',' + day6 + '?si',
  dataType: "jsonp",
  success: function (data) {
      console.log("Day 6 : ",day6);
      console.log("Tempurature : ",data["daily"]["data"][0]["apparentTemperatureMin"]);
      avg_temp=avg_temp+((data["daily"]["data"][0]["apparentTemperatureMin"])/14);
      $('#humid6').text(data["daily"]["data"][0]["humidity"]);
      $('#wind6').text(data["daily"]["data"][0]["windSpeed"]);
      $('#temp6').text(data["daily"]["data"][0]["apparentTemperatureMin"]);
      avg_humid=avg_humid+((data["daily"]["data"][0]["humidity"])/14);
      avg_windspeed=avg_windspeed+((data["daily"]["data"][0]["windSpeed"])/14);
      if(data["daily"]["data"][0]["icon"] == 'rain'){
        $('#icon6').html('<img src="weather/34.png" width="24px"> มีฝนตก');
      }
      else if (data["daily"]["data"][0]["icon"] == 'clear-day') {
        $('#icon6').html('<img src="weather/33.png" width="24px"> แจ่มใส');
      }
      else if (data["daily"]["data"][0]["icon"] == 'clear-night') {
        $('#icon6').html('<img src="weather/33.png" width="24px"> แจ่มใส');
      }
      else if (data["daily"]["data"][0]["icon"] == 'sleet') {
        $('#icon6').html('<img src="weather/36.png" width="24px"> มีฝนตกเล็กน้อย');
      }
      else if (data["daily"]["data"][0]["icon"] == 'wind') {
        $('#icon6').html('<img src="weather/31.png" width="24px"> ลมแรง');
      }
      else if (data["daily"]["data"][0]["icon"] == 'fog') {
        $('#icon6').html('<img src="weather/30.png" width="24px"> หมอกหนา');
      }
      else if (data["daily"]["data"][0]["icon"] == 'cloudy') {
        $('#icon6').html('<img src="weather/37.png" width="24px"> มีเมฆมาก');
      }
      else if (data["daily"]["data"][0]["icon"] == 'partly-cloudy-day') {
        $('#icon6').html('<img src="weather/37.png" width="24px"> มีเมฆบางส่วน');
      }
      else if (data["daily"]["data"][0]["icon"] == 'partly-cloudy-night') {
        $('#icon6').html('<img src="weather/37.png" width="24px"> มีเมฆบางส่วน');
      }
      else{
        $('#icon6').text('NOPE')
      }
  }
});
   $.ajax({
  async:false,
  'global': false,
  url: 'https://api.forecast.io/forecast/f896d6e000d9829a73497f5cf5818186/'+ latitude +','+ longitude +',' + day7 + '?si',
  dataType: "jsonp",
  success: function (data) {
      console.log("Day 7 : ",day7);
      console.log("Tempurature : ",data["daily"]["data"][0]["apparentTemperatureMin"]);
      avg_temp=avg_temp+((data["daily"]["data"][0]["apparentTemperatureMin"])/14);
      avg_humid=avg_humid+((data["daily"]["data"][0]["humidity"])/14);
      avg_windspeed=avg_windspeed+((data["daily"]["data"][0]["windSpeed"])/14);
      avg_windspeed=avg_windspeed+((data["daily"]["data"][0]["windSpeed"])/14);
      $('#humid7').text(data["daily"]["data"][0]["humidity"]);
      $('#wind7').text(data["daily"]["data"][0]["windSpeed"]);
      $('#temp7').text(data["daily"]["data"][0]["apparentTemperatureMin"]);    
      if(data["daily"]["data"][0]["icon"] == 'rain'){
        $('#icon7').html('<img src="weather/34.png" width="24px"> มีฝนตก');
      }
      else if (data["daily"]["data"][0]["icon"] == 'clear-day') {
        $('#icon7').html('<img src="weather/33.png" width="24px"> แจ่มใส');
      }
      else if (data["daily"]["data"][0]["icon"] == 'clear-night') {
        $('#icon7').html('<img src="weather/33.png" width="24px"> แจ่มใส');
      }
      else if (data["daily"]["data"][0]["icon"] == 'sleet') {
        $('#icon7').html('<img src="weather/36.png" width="24px"> มีฝนตกเล็กน้อย');
      }
      else if (data["daily"]["data"][0]["icon"] == 'wind') {
        $('#icon7').html('<img src="weather/31.png" width="24px"> ลมแรง');
      }
      else if (data["daily"]["data"][0]["icon"] == 'fog') {
        $('#icon7').html('<img src="weather/30.png" width="24px"> หมอกหนา');
      }
      else if (data["daily"]["data"][0]["icon"] == 'cloudy') {
        $('#icon7').html('<img src="weather/37.png" width="24px"> มีเมฆมาก');
      }
      else if (data["daily"]["data"][0]["icon"] == 'partly-cloudy-day') {
        $('#icon7').html('<img src="weather/37.png" width="24px"> มีเมฆบางส่วน');
      }
      else if (data["daily"]["data"][0]["icon"] == 'partly-cloudy-night') {
        $('#icon7').html('<img src="weather/37.png" width="24px"> มีเมฆบางส่วน');
      }
      else{
        $('#icon7').text('NOPE')
      }
  }
});
   $.ajax({
  async:false,
  'global': false,
  url: 'https://api.forecast.io/forecast/f896d6e000d9829a73497f5cf5818186/'+ latitude +','+ longitude +',' + day8 + '?si',
  dataType: "jsonp",
  success: function (data) {
      console.log("Day 8 : ",day8);
      console.log("Tempurature : ",data["daily"]["data"][0]["apparentTemperatureMin"]);
      avg_temp=avg_temp+((data["daily"]["data"][0]["apparentTemperatureMin"])/14);
      avg_humid=avg_humid+((data["daily"]["data"][0]["humidity"])/14);
      avg_windspeed=avg_windspeed+((data["daily"]["data"][0]["windSpeed"])/14);
      $('#humid8').text(data["daily"]["data"][0]["humidity"]);
      $('#wind8').text(data["daily"]["data"][0]["windSpeed"]);
      $('#temp8').text(data["daily"]["data"][0]["apparentTemperatureMin"]);      
      if(data["daily"]["data"][0]["icon"] == 'rain'){
        $('#icon8').html('<img src="weather/34.png" width="24px"> มีฝนตก');
      }
      else if (data["daily"]["data"][0]["icon"] == 'clear-day') {
        $('#icon8').html('<img src="weather/33.png" width="24px"> แจ่มใส');
      }
      else if (data["daily"]["data"][0]["icon"] == 'clear-night') {
        $('#icon8').html('<img src="weather/33.png" width="24px"> แจ่มใส');
      }
      else if (data["daily"]["data"][0]["icon"] == 'sleet') {
        $('#icon8').html('<img src="weather/36.png" width="24px"> มีฝนตกเล็กน้อย');
      }
      else if (data["daily"]["data"][0]["icon"] == 'wind') {
        $('#icon8').html('<img src="weather/31.png" width="24px"> ลมแรง');
      }
      else if (data["daily"]["data"][0]["icon"] == 'fog') {
        $('#icon8').html('<img src="weather/30.png" width="24px"> หมอกหนา');
      }
      else if (data["daily"]["data"][0]["icon"] == 'cloudy') {
        $('#icon8').html('<img src="weather/37.png" width="24px"> มีเมฆมาก');
      }
      else if (data["daily"]["data"][0]["icon"] == 'partly-cloudy-day') {
        $('#icon8').html('<img src="weather/37.png" width="24px"> มีเมฆบางส่วน');
      }
      else if (data["daily"]["data"][0]["icon"] == 'partly-cloudy-night') {
        $('#icon8').html('<img src="weather/37.png" width="24px"> มีเมฆบางส่วน');
      }
      else{
        $('#icon8').text('NOPE')
      }
  }
});
   $.ajax({
  async:false,
  'global': false,
  url: 'https://api.forecast.io/forecast/f896d6e000d9829a73497f5cf5818186/'+ latitude +','+ longitude +',' + day9 + '?si',
  dataType: "jsonp",
  success: function (data) {
      console.log("Day 9 : ",day9);
      console.log("Tempurature : ",data["daily"]["data"][0]["apparentTemperatureMin"]);
      avg_temp=avg_temp+((data["daily"]["data"][0]["apparentTemperatureMin"])/14);
      $('#humid9').text(data["daily"]["data"][0]["humidity"]);
      $('#wind9').text(data["daily"]["data"][0]["windSpeed"]);
      $('#temp9').text(data["daily"]["data"][0]["apparentTemperatureMin"]);        
        avg_humid=avg_humid+((data["daily"]["data"][0]["humidity"])/14);
        avg_windspeed=avg_windspeed+((data["daily"]["data"][0]["windSpeed"])/14);
      if(data["daily"]["data"][0]["icon"] == 'rain'){
        $('#icon9').html('<img src="weather/34.png" width="24px"> มีฝนตก');
      }
      else if (data["daily"]["data"][0]["icon"] == 'clear-day') {
        $('#icon9').html('<img src="weather/33.png" width="24px"> แจ่มใส');
      }
      else if (data["daily"]["data"][0]["icon"] == 'clear-night') {
        $('#icon9').html('<img src="weather/33.png" width="24px"> แจ่มใส');
      }
      else if (data["daily"]["data"][0]["icon"] == 'sleet') {
        $('#icon9').html('<img src="weather/36.png" width="24px"> มีฝนตกเล็กน้อย');
      }
      else if (data["daily"]["data"][0]["icon"] == 'wind') {
        $('#icon9').html('<img src="weather/31.png" width="24px"> ลมแรง');
      }
      else if (data["daily"]["data"][0]["icon"] == 'fog') {
        $('#icon9').html('<img src="weather/30.png" width="24px"> หมอกหนา');
      }
      else if (data["daily"]["data"][0]["icon"] == 'cloudy') {
        $('#icon9').html('<img src="weather/37.png" width="24px"> มีเมฆมาก');
      }
      else if (data["daily"]["data"][0]["icon"] == 'partly-cloudy-day') {
        $('#icon9').html('<img src="weather/37.png" width="24px"> มีเมฆบางส่วน');
      }
      else if (data["daily"]["data"][0]["icon"] == 'partly-cloudy-night') {
        $('#icon9').html('<img src="weather/37.png" width="24px"> มีเมฆบางส่วน');
      }
      else{
        $('#icon9').text('NOPE')
      }
  }
});
   $.ajax({
  async:false,
  'global': false,
  url: 'https://api.forecast.io/forecast/f896d6e000d9829a73497f5cf5818186/'+ latitude +','+ longitude +',' + day10 + '?si',
  dataType: "jsonp",
  success: function (data) {
      console.log("Day 10 : ",day10);
      console.log("Tempurature : ",data["daily"]["data"][0]["apparentTemperatureMin"]);
      avg_temp=avg_temp+((data["daily"]["data"][0]["apparentTemperatureMin"])/14);
      avg_humid=avg_humid+((data["daily"]["data"][0]["humidity"])/14);
      avg_windspeed=avg_windspeed+((data["daily"]["data"][0]["windSpeed"])/14);
      $('#humid10').text(data["daily"]["data"][0]["humidity"]);
      $('#wind10').text(data["daily"]["data"][0]["windSpeed"]);
      $('#temp10').text(data["daily"]["data"][0]["apparentTemperatureMin"]);
      if(data["daily"]["data"][0]["icon"] == 'rain'){
        $('#icon10').html('<img src="weather/34.png" width="24px"> มีฝนตก');
      }
      else if (data["daily"]["data"][0]["icon"] == 'clear-day') {
        $('#icon10').html('<img src="weather/33.png" width="24px"> แจ่มใส');
      }
      else if (data["daily"]["data"][0]["icon"] == 'clear-night') {
        $('#icon10').html('<img src="weather/33.png" width="24px"> แจ่มใส');
      }
      else if (data["daily"]["data"][0]["icon"] == 'sleet') {
        $('#icon10').html('<img src="weather/36.png" width="24px"> มีฝนตกเล็กน้อย');
      }
      else if (data["daily"]["data"][0]["icon"] == 'wind') {
        $('#icon10').html('<img src="weather/31.png" width="24px"> ลมแรง');
      }
      else if (data["daily"]["data"][0]["icon"] == 'fog') {
        $('#icon10').html('<img src="weather/30.png" width="24px"> หมอกหนา');
      }
      else if (data["daily"]["data"][0]["icon"] == 'cloudy') {
        $('#icon10').html('<img src="weather/37.png" width="24px"> มีเมฆมาก');
      }
      else if (data["daily"]["data"][0]["icon"] == 'partly-cloudy-day') {
        $('#icon10').html('<img src="weather/37.png" width="24px"> มีเมฆบางส่วน');
      }
      else if (data["daily"]["data"][0]["icon"] == 'partly-cloudy-night') {
        $('#icon10').html('<img src="weather/37.png" width="24px"> มีเมฆบางส่วน');
      }
      else{
        $('#icon10').text('NOPE')
      }
  }
});
   $.ajax({
  async:false,
  'global': false,
  url: 'https://api.forecast.io/forecast/f896d6e000d9829a73497f5cf5818186/'+ latitude +','+ longitude +',' + day11 + '?si',
  dataType: "jsonp",
  success: function (data) {
      console.log("Day 11 : ",day11);
      console.log("Tempurature : ",data["daily"]["data"][0]["apparentTemperatureMin"]);
      avg_temp=avg_temp+((data["daily"]["data"][0]["apparentTemperatureMin"])/14);
      avg_humid=avg_humid+((data["daily"]["data"][0]["humidity"])/14);
      avg_windspeed=avg_windspeed+((data["daily"]["data"][0]["windSpeed"])/14);
      $('#humid11').text(data["daily"]["data"][0]["humidity"]);
      $('#wind11').text(data["daily"]["data"][0]["windSpeed"]);
      $('#temp11').text(data["daily"]["data"][0]["apparentTemperatureMin"]);      
      if(data["daily"]["data"][0]["icon"] == 'rain'){
        $('#icon11').html('<img src="weather/34.png" width="24px"> มีฝนตก');
      }
      else if (data["daily"]["data"][0]["icon"] == 'clear-day') {
        $('#icon11').html('<img src="weather/33.png" width="24px"> แจ่มใส');
      }
      else if (data["daily"]["data"][0]["icon"] == 'clear-night') {
        $('#icon11').html('<img src="weather/33.png" width="24px"> แจ่มใส');
      }
      else if (data["daily"]["data"][0]["icon"] == 'sleet') {
        $('#icon11').html('<img src="weather/36.png" width="24px"> มีฝนตกเล็กน้อย');
      }
      else if (data["daily"]["data"][0]["icon"] == 'wind') {
        $('#icon11').html('<img src="weather/31.png" width="24px"> ลมแรง');
      }
      else if (data["daily"]["data"][0]["icon"] == 'fog') {
        $('#icon11').html('<img src="weather/30.png" width="24px"> หมอกหนา');
      }
      else if (data["daily"]["data"][0]["icon"] == 'cloudy') {
        $('#icon11').html('<img src="weather/37.png" width="24px"> มีเมฆมาก');
      }
      else if (data["daily"]["data"][0]["icon"] == 'partly-cloudy-day') {
        $('#icon11').html('<img src="weather/37.png" width="24px"> มีเมฆบางส่วน');
      }
      else if (data["daily"]["data"][0]["icon"] == 'partly-cloudy-night') {
        $('#icon11').html('<img src="weather/37.png" width="24px"> มีเมฆบางส่วน');
      }
      else{
        $('#icon11').text('NOPE')
      }
  }
});
   $.ajax({
  async:false,
  'global': false,
  url: 'https://api.forecast.io/forecast/f896d6e000d9829a73497f5cf5818186/'+ latitude +','+ longitude +',' + day12 + '?si',
  dataType: "jsonp",
  success: function (data) {
      console.log("Day 12 : ",day12);
      console.log("Tempurature : ",data["daily"]["data"][0]["apparentTemperatureMin"]);
      avg_humid=avg_humid+((data["daily"]["data"][0]["humidity"])/14);
      avg_temp=avg_temp+((data["daily"]["data"][0]["apparentTemperatureMin"])/14);
      avg_windspeed=avg_windspeed+((data["daily"]["data"][0]["windSpeed"])/14);
      $('#humid12').text(data["daily"]["data"][0]["humidity"]);
      $('#wind12').text(data["daily"]["data"][0]["windSpeed"]);
      $('#temp12').text(data["daily"]["data"][0]["apparentTemperatureMin"]);
      if(data["daily"]["data"][0]["icon"] == 'rain'){
        $('#icon12').html('<img src="weather/34.png" width="24px"> มีฝนตก');
      }
      else if (data["daily"]["data"][0]["icon"] == 'clear-day') {
        $('#icon12').html('<img src="weather/33.png" width="24px"> แจ่มใส');
      }
      else if (data["daily"]["data"][0]["icon"] == 'clear-night') {
        $('#icon12').html('<img src="weather/33.png" width="24px"> แจ่มใส');
      }
      else if (data["daily"]["data"][0]["icon"] == 'sleet') {
        $('#icon12').html('<img src="weather/36.png" width="24px"> มีฝนตกเล็กน้อย');
      }
      else if (data["daily"]["data"][0]["icon"] == 'wind') {
        $('#icon12').html('<img src="weather/31.png" width="24px"> ลมแรง');
      }
      else if (data["daily"]["data"][0]["icon"] == 'fog') {
        $('#icon12').html('<img src="weather/30.png" width="24px"> หมอกหนา');
      }
      else if (data["daily"]["data"][0]["icon"] == 'cloudy') {
        $('#icon12').html('<img src="weather/37.png" width="24px"> มีเมฆมาก');
      }
      else if (data["daily"]["data"][0]["icon"] == 'partly-cloudy-day') {
        $('#icon12').html('<img src="weather/37.png" width="24px"> มีเมฆบางส่วน');
      }
      else if (data["daily"]["data"][0]["icon"] == 'partly-cloudy-night') {
        $('#icon12').html('<img src="weather/37.png" width="24px"> มีเมฆบางส่วน');
      }
      else{
        $('#icon12').text('NOPE')
      }
  }
});
   $.ajax({
  async:false,
  'global': false,
  url: 'https://api.forecast.io/forecast/f896d6e000d9829a73497f5cf5818186/'+ latitude +','+ longitude +',' + day13 + '?si',
  dataType: "jsonp",
  success: function (data) {
      console.log("Day 13 : ",day13);
      console.log("Tempurature : ",data["daily"]["data"][0]["apparentTemperatureMin"]);
      avg_temp=avg_temp+((data["daily"]["data"][0]["apparentTemperatureMin"])/14);
      avg_humid=avg_humid+((data["daily"]["data"][0]["humidity"])/14);
      avg_windspeed=avg_windspeed+((data["daily"]["data"][0]["windSpeed"])/14);
      $('#humid13').text(data["daily"]["data"][0]["humidity"]);
      $('#wind13').text(data["daily"]["data"][0]["windSpeed"]);
      $('#temp13').text(data["daily"]["data"][0]["apparentTemperatureMin"]);
      if(data["daily"]["data"][0]["icon"] == 'rain'){
        $('#icon13').html('<img src="weather/34.png" width="24px"> มีฝนตก');
      }
      else if (data["daily"]["data"][0]["icon"] == 'clear-day') {
        $('#icon13').html('<img src="weather/33.png" width="24px"> แจ่มใส');
      }
      else if (data["daily"]["data"][0]["icon"] == 'clear-night') {
        $('#icon13').html('<img src="weather/33.png" width="24px"> แจ่มใส');
      }
      else if (data["daily"]["data"][0]["icon"] == 'sleet') {
        $('#icon13').html('<img src="weather/36.png" width="24px"> มีฝนตกเล็กน้อย');
      }
      else if (data["daily"]["data"][0]["icon"] == 'wind') {
        $('#icon13').html('<img src="weather/31.png" width="24px"> ลมแรง');
      }
      else if (data["daily"]["data"][0]["icon"] == 'fog') {
        $('#icon13').html('<img src="weather/30.png" width="24px"> หมอกหนา');
      }
      else if (data["daily"]["data"][0]["icon"] == 'cloudy') {
        $('#icon13').html('<img src="weather/37.png" width="24px"> มีเมฆมาก');
      }
      else if (data["daily"]["data"][0]["icon"] == 'partly-cloudy-day') {
        $('#icon13').html('<img src="weather/37.png" width="24px"> มีเมฆบางส่วน');
      }
      else if (data["daily"]["data"][0]["icon"] == 'partly-cloudy-night') {
        $('#icon13').html('<img src="weather/37.png" width="24px"> มีเมฆบางส่วน');
      }
      else{
        $('#icon13').text('NOPE')
      }
  }
});
   $.ajax({
  async:false,
  'global': false,
  url: 'https://api.forecast.io/forecast/f896d6e000d9829a73497f5cf5818186/'+ latitude +','+ longitude +',' + day14 + '?si',
  dataType: "jsonp",
  success: function (data) {
      console.log("Day 14 : ",day14);
      console.log("Tempurature : ",data["daily"]["data"][0]["apparentTemperatureMin"]);
      avg_humid=avg_humid+((data["daily"]["data"][0]["humidity"])/14);
      avg_temp=avg_temp+((data["daily"]["data"][0]["apparentTemperatureMin"])/14);
      avg_windspeed=avg_windspeed+((data["daily"]["data"][0]["windSpeed"])/14);
      $('#humid14').text(data["daily"]["data"][0]["humidity"]);
      $('#wind14').text(data["daily"]["data"][0]["windSpeed"]);
      $('#temp14').text(data["daily"]["data"][0]["apparentTemperatureMin"]);      
      if(data["daily"]["data"][0]["icon"] == 'rain'){
        $('#icon14').html('<img src="weather/34.png" width="24px"> มีฝนตก');
      }
      else if (data["daily"]["data"][0]["icon"] == 'clear-day') {
        $('#icon14').html('<img src="weather/33.png" width="24px"> แจ่มใส');
      }
      else if (data["daily"]["data"][0]["icon"] == 'clear-night') {
        $('#icon14').html('<img src="weather/33.png" width="24px"> แจ่มใส');
      }
      else if (data["daily"]["data"][0]["icon"] == 'sleet') {
        $('#icon14').html('<img src="weather/36.png" width="24px"> มีฝนตกเล็กน้อย');
      }
      else if (data["daily"]["data"][0]["icon"] == 'wind') {
        $('#icon14').html('<img src="weather/31.png" width="24px"> ลมแรง');
      }
      else if (data["daily"]["data"][0]["icon"] == 'fog') {
        $('#icon14').html('<img src="weather/30.png" width="24px"> หมอกหนา');
      }
      else if (data["daily"]["data"][0]["icon"] == 'cloudy') {
        $('#icon14').html('<img src="weather/37.png" width="24px"> มีเมฆมาก');
      }
      else if (data["daily"]["data"][0]["icon"] == 'partly-cloudy-day') {
        $('#icon14').html('<img src="weather/37.png" width="24px"> มีเมฆบางส่วน');
      }
      else if (data["daily"]["data"][0]["icon"] == 'partly-cloudy-night') {
        $('#icon14').html('<img src="weather/37.png" width="24px"> มีเมฆบางส่วน');
      }
      else{
        $('#icon14').text('NOPE')
      }

  }

});
}); //get JSON function

$("#calculate").click(function(){

  $("#resultcard").css("display","block");
      var nook_constant = 6.877;
      var algho1 = (math.eval('(((5336/'+avg_temp+'^2))e^(21.07-(5336/'+avg_temp+')))*1343*('+nook_constant+')'));
      var algho2 = (math.eval('(0.000665*6.43(1-(-0.536*'+avg_windspeed+'))(1-'+avg_humid+')(5.624))'));
      var algho3 = (math.eval('0.0437*(1000/18)*(((5336/'+avg_temp+'^2))e^(21.07-(5336/'+avg_temp+')))+0.665*10^(-3)'));
      var algho4 = (math.eval((algho1+algho1+algho2)/2));
      var result = (math.eval(algho4/algho3));
      var waterlevel = (math.eval($('#waterlevel').val())*0.6);
      if($('#waterlevel').val() < 1){
        $("#output").text('Error');
      }
      else{
      var output = (math.eval(waterlevel/(result)));    
      console.log("avg_temp =",avg_temp);
      console.log("avg_humid =",avg_humid)
      console.log("avg_windspeed =",avg_windspeed);
      console.log(math.eval(output+'*20'));          
      $("#output").text('เวลาที่ใช้ '+parseInt(math.eval(output+'*20'))+' วัน');
      }
});//calculate onclick

});//onclick function
