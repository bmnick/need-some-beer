$(function() {
  // Yelp search (GET http://api.yelp.com/v2/search)

  // $.ajax({
  //     url: "http://api.yelp.com/v2/search",
  //     type: "GET",
  //     dataType: "jsonp",
  //     crossDomain: true,
  //     data:{
  //         "term":"beer",
  //         "cll":"43.161030,-77.610922",
  //         "location":"Rochester+NY",
  //         "callback": "JSON_CALLBACK"
  //     },
  //     headers:{
  //         "Authorization":"OAuth oauth_consumer_key=\"E4iphCZHIPU2MTJxVLvqPA\", oauth_nonce=\"xy8RcL5ti8fF1JqdL8KSBP4fxvklyih2\", oauth_signature=\"s5lPo0ItiIZiZrEUIsYnNhq44p0%3D\", oauth_signature_method=\"HMAC-SHA1\", oauth_timestamp=\"1427082480\", oauth_token=\"fc4ehK8I7Cyg9x2ZWX5875WG-YMvEAK2\", oauth_version=\"1.0\"",
  //     },
  //     success:function(data, textStatus, jqXHR){
  //         console.log("HTTP Request Succeeded: " + jqXHR.status);
  //         console.log(data);
  //     },
  //     error:function(jqXHR, textStatus, errorThrown){
  //         console.log("HTTP Request Failed");
  //     }
  // });

  // Yelp search (GET http://api.yelp.com/v2/search)

  $.ajax({
      url: "http://api.yelp.com/v2/search",
      type: "GET",
      dataType: "jsonp",
      crossDomain: true,
      data:{
          "term":"beer",
          "cll":"43.161030,-77.610922",
          "location":"Rochester+NY",
          "callback":"JSON_CALLBACK",
      },
      headers:{
          "Authorization":"OAuth oauth_consumer_key=\"E4iphCZHIPU2MTJxVLvqPA\", oauth_nonce=\"lti2MpS4quNvcP2Mp16xlD2BIYMonJ1a\", oauth_signature=\"%2FPPxBECGjkYo6XxMYHW3pkSdTOY%3D\", oauth_signature_method=\"HMAC-SHA1\", oauth_timestamp=\"1427083521\", oauth_token=\"fc4ehK8I7Cyg9x2ZWX5875WG-YMvEAK2\", oauth_version=\"1.0\"",
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
