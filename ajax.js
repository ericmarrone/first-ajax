document.addEventListener("DOMContentLoaded", function() {
  var button1 = document.querySelector('#button1');
  var button2 = document.querySelector('#button2');
  var section2 = document.querySelector('#step3456');


  button1.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'text',
    });
  });
  button2.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text',
    }).done(function (responseData) {
      console.log(responseData);
      var responseText = document.createTextNode(responseData);
      section2.appendChild(responseText);
    });
  });
});
