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
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      dataType: 'text',
    }).done(function (responseData) {
      console.log(responseData);
      var responseText = document.createTextNode(responseData);
      section2.appendChild(responseText);
    }).fail(function () {
      var paragraph = document.createElement("p");
      var failText = document.createTextNode("I will try harder next time.")
      paragraph.appendChild(failText);
      section2.appendChild(paragraph);
    }).always(function () {
      console.log('The request is finished!');
    });
  });
});
