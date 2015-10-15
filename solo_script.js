var objectAtticus = {
  name : "Atticus",
  employeeNumber : "2405",
  baseSalary : "47000",
  reviewScore : 3
};
//["Atticus", "2405", "47000", 3]

var objectJem = {
  name : "Jem",
  employeeNumber : "62347",
  baseSalary : "63500",
  reviewScore : 4
};
//["Jem", "62347", "63500", 4];

var objectBoo = {
  name : "Boo",
  employeeNumber : "11435",
  baseSalary : "54000",
  reviewScore : 3
};
//["Boo", "11435", "54000", 3];

var objectScout = {
  name : "Scout",
  employeeNumber : "6243",
  baseSalary : "74750",
  reviewScore : 5
};
//["Scout", "6243", "74750", 5];

var array = [objectAtticus, objectJem, objectBoo, objectScout];


$(document).ready(function(){
  $("#container").on('click', '.employeeButton', function(){
      console.log($(this).siblings().text());
      // for(var i = 0; i < array.length; i++){
      //   console.log(array[i].name, array[i].STI, array[i].adjustedCompensation, array[i].bonus);
      // }
    });

  for(var i = 0; i < array.length; i++){
    array[i] = calculateSTI(array[i]);
    $("#container").append("<div class='employeeContainer'></div>");
    var $el = $("#container").children().last();

    $el.append("<p>" + array[i].name + "</p>");
    $el.append("<p>" + array[i].STI + "</p>");
    $el.append("<p>" + array[i].adjustedCompensation + "</p>");
    $el.append("<p>" + array[i].bonus + "</p>");
    $el.append("<button class='employeeButton'>" + array[i].name + "</button>");
  }
});  



function calculateSTI(object){
  var newObject = {};
  newObject.name = object.name;

  var employeeNumber = object.employeeNumber;
  var baseSalary = object.baseSalary;
  var reviewScore = object.reviewScore;

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newObject.STI = bonus;
  newObject.adjustedCompensation = Math.round(baseSalary * (1.0 + bonus));
  newObject.bonus = baseSalary * bonus;
  
  
  //console.log(newObject.name + " " + newObject.STI + " " + newObject.adjustedCompensation + " " + newObject.bonus);
  return newObject;
}


function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}