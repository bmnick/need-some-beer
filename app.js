$(function() {
  // Yelp search (GET http://api.yelp.com/v2/search)

  $.ajax({
      url: "http://api.yelp.com/v2/search",
      type: "GET",
      data:{
          "term":"beer",
          "cll":"43.161030,-77.610922",
          "location":"Rochester+NY",
      },
      headers:{
          "Authorization":"OAuth oauth_consumer_key=\"E4iphCZHIPU2MTJxVLvqPA\", oauth_nonce=\"xy8RcL5ti8fF1JqdL8KSBP4fxvklyih2\", oauth_signature=\"s5lPo0ItiIZiZrEUIsYnNhq44p0%3D\", oauth_signature_method=\"HMAC-SHA1\", oauth_timestamp=\"1427082480\", oauth_token=\"fc4ehK8I7Cyg9x2ZWX5875WG-YMvEAK2\", oauth_version=\"1.0\"",
      },
      success:function(data, textStatus, jqXHR){
          console.log("HTTP Request Succeeded: " + jqXHR.status);
          console.log(data);
      },
      error:function(jqXHR, textStatus, errorThrown){
          console.log("HTTP Request Failed");
      }
  });
});
