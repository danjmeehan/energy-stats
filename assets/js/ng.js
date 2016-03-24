$(document).ready(function(){
  
// Get Henry Hub Natural Gas Spot Price, Monthly
  
  $.get('https://api.eia.gov/series/?api_key=79B09BD8C61785B1E8AC2898378E9855&series_id=NG.RNGWHHD.M', function(response){
    var data = response.series[0].data;

    //Construct an array of months and an array of prices 
    var months = Array();
    var prices = Array();

      for(var i=0; i<24; i++){
            
          var dataArray = data[i];
          var months = months.concat(dataArray[0]);
          var prices = prices.concat(dataArray[1]);
  
        }  

      months.reverse();
      prices.reverse();

      var chartData = {
        labels: months, //Insert labels
        datasets: [
          {
            fillColor: "green",
            strokeColor: "#d4d8d4",
            pointColor: "rgba(0,127,255,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(0,127,255,1)",
            data: prices //Insert prices per month
          }
        ]
      };
      timeContext = $(".oil canvas").get(0).getContext("2d");
      new Chart(timeContext).Line(chartData, {
          scaleLabel: function (valuePayload) {
          return '$' + Number(valuePayload.value);
          },
          scaleBeginAtZero: true,
          pointDot: false,
          showToolTips: false
      });
  }); 

// Get Natural Gas Futures Contract 1, Monthly

$.get('https://api.eia.gov/series/?api_key=79B09BD8C61785B1E8AC2898378E9855&series_id=NG.RNGC1.M', function(response){
    var data = response.series[0].data;
      
    //Construct an array of months and an array of prices 
    var months = Array();
    var prices = Array();

      for(var i=0; i<24; i++){
            
          var dataArray = data[i];
          var months = months.concat(dataArray[0]);
          var prices = prices.concat(dataArray[1]);
  
         }   

      months.reverse();
      prices.reverse();   

      var chartData = {
        labels: months, //Insert labels
        datasets: [
          {
            fillColor: "green",
            strokeColor: "#d4d8d4",
            pointColor: "rgba(0,127,255,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(0,127,255,1)",
            data: prices //Insert prices per month
          }
        ]
      };
      timeContext = $(".natural-gas canvas").get(0).getContext("2d");
      new Chart(timeContext).Line(chartData, {
          scaleLabel: function (valuePayload) {
          return '$' + Number(valuePayload.value);
          },
          scaleBeginAtZero: true,
          pointDot: false,
          showToolTips: false
      });
  }); 

// Get Natural Gas Futures Contract 1, Monthly

$.get('https://api.eia.gov/series/?api_key=79B09BD8C61785B1E8AC2898378E9855&series_id=NG.RNGC1.M', function(response){
    var data = response.series[0].data;
      
    //Construct an array of months and an array of prices 
    var months = Array();
    var prices = Array();

      for(var i=0; i<24; i++){
            
          var dataArray = data[i];
          var months = months.concat(dataArray[0]);
          var prices = prices.concat(dataArray[1]);
  
         }  

      months.reverse();
      prices.reverse();     

      var chartData = {
        labels: months, //Insert labels
        datasets: [
          {
            fillColor: "green",
            strokeColor: "#d4d8d4",
            pointColor: "rgba(0,127,255,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(0,127,255,1)",
            data: prices //Insert prices per month
          }
        ]
      };
      timeContext = $(".electricity canvas").get(0).getContext("2d");
      new Chart(timeContext).Line(chartData, {
          scaleLabel: function (valuePayload) {
          return '$' + Number(valuePayload.value);
          },
          scaleBeginAtZero: true,
          pointDot: false,
          showToolTips: false
      });
  }); 

// Get Natural Gas Futures Contract 2, Monthly

$.get('https://api.eia.gov/series/?api_key=79B09BD8C61785B1E8AC2898378E9855&series_id=NG.RNGC2.M', function(response){
    var data = response.series[0].data;
      
    //Construct an array of months and an array of prices 
    var months = Array();
    var prices = Array();

      for(var i=0; i<24; i++){
            
          var dataArray = data[i];
          var months = months.concat(dataArray[0]);
          var prices = prices.concat(dataArray[1]);
  
         } 

      months.reverse();
      prices.reverse();      

      var chartData = {
        labels: months, //Insert labels
        datasets: [
          {
            fillColor: "green",
            strokeColor: "#d4d8d4",
            pointColor: "rgba(0,127,255,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(0,127,255,1)",
            data: prices //Insert prices per month
          }
        ]
      };
      timeContext = $(".hydro canvas").get(0).getContext("2d");
      new Chart(timeContext).Line(chartData, {
          scaleLabel: function (valuePayload) {
          return Number(valuePayload.value);
          },
          scaleBeginAtZero: true,
          pointDot: false,
          showToolTips: false
      });
  });


});
