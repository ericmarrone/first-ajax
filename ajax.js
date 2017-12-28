document.addEventListener("DOMContentLoaded", function() {
  var button1 = document.querySelector('#button1');
  var button2 = document.querySelector('#button2');
  var section2 = document.querySelector('#step3456');
  var section7 = document.querySelector('#step7');
  var section8 = document.querySelector('#step8');
  var section9 = document.querySelector('#step9');
  var section9ul = document.querySelector('#cars');


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
    }).fail(function (jqXHR, textStatus, errorThrown ) {
      console.log(jqXHR.responseText);
      var paragraph = document.createElement("p");
      var failText = document.createTextNode("I will try harder next time.")
      paragraph.appendChild(failText);
      section2.appendChild(paragraph);
    }).always(function () {
      console.log('The request is finished!');
    });
  });

  button3.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      data: {'amount':5},
      dataType: 'text',
    }).done(function (responseData) {
      var responseText = document.createTextNode(responseData);
      section7.appendChild(responseText);
    });
  });

  button4.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data:  {timezone: 'Pacific/Honolulu'},
      dataType: 'text',
    }).done(function (responseData) {
      var responseText = document.createTextNode(responseData);
      section8.appendChild(responseText);
    });
  });

  button5.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      dataType: 'html',
    }).done(function (responseData) {
      var car = document.createElement("li");
      car.innerHTML = responseData;
      section9ul.appendChild(car);
    });
  });
});
