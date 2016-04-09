var sumarryOfHours;

sumarryOfHours = {"2016,07,2":["2016,07,2","Sadick Muyingo",]}

var summaryOfHours;

function saveDetails(){

}

$(document).ready(
  function(){
    $("#shiftDate").datepicker();
    $("#timeIn").timepicker();
    $("#timeOut").timepicker();
    $("#submit").click(function(){
      console.log("The submit button was clicked");
      alert("The submit button was clicked");
    });
  }
);
/*|*
$(document).ready(
  function(){
    $("#submit").click(function(){
      console.log("The submit button was clicked");
      alert("The submit button was clicked");
    });
  });
**/
