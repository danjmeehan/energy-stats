$(document).ready(function(){
  
// Get my Twitter followers' data
  
  $.get('https://api.twitter.com/1.1/followers/list.json', function(response){
    /*var data = response.series[0].data;*/

    console.log(response);

  });
   
});
