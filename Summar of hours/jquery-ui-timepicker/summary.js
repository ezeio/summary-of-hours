var summaryOfHoursArray = [];
var employeeArray;

function createEmployeeVariableName( firstName, lastName ){
  var first = firstName.toLowerCase();
  var last = lastName.toLowerCase();
  var firstChar = lastName.charAt(0).toUpperCase();
  last = firstChar.concat(last.substr(1,lastName.length));
  var fullName = first.concat(last);
  return fullName;
}

function isEmployee(firstName, lastName){
  var result = false;
  var employeeVariable = createEmployeeVariableName( firstName, lastName );
  result = employeeArray.includes(employeeVariable);
}






function Employee (shiftDate, timeIn, timeOut){
  summaryOfHours = [[shiftDate, timeIn, timeOut]];
};




function saveDetails(){
};

$(document).ready(
  function(){
    $("#shiftDate").datepicker();
    $("#timeIn").timepicker();
    $("#timeOut").timepicker();
  }
);


$(document).ready(
  function(){
    $("#submit").click(function(){
      //console.log("The submit button was clicked");
      //alert("The submit button was clicked");
      var result = createEmployee($("#firstName").val(), $("#lastName").val());
     console.log( result );
    });
  }
);
