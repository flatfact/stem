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
var postcode = $('#postcode').val();
var geocodingAPI = 'https://maps.googleapis.com/maps/api/geocode/json?address=ประเทศไทย'+ postcode +'&key=AIzaSyBQ9ygmgT3k-Jc6ZQujcFl1ls90oBu7F7s';
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
      $('#temp6').text(data["daily"]["data"][0]["apparentTemperatureMin"]);
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
      } if(data["daily"]["data"][0]["icon"] == 'rain'){
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
  url: 'https://api.forecast.io/forecast/f896d6e000d9829a73497f5cf5818186/'+ latitude +','+ longitude +',' + day7 + '?si',
  dataType: "jsonp",
  success: function (data) {
      console.log("Day 7 : ",day7);
      console.log("Tempurature : ",data["daily"]["data"][0]["apparentTemperatureMin"]);
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
        $('#temp9').text(data["daily"]["data"][0]["apparentTemperatureMin"]);
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
});//onclick function
