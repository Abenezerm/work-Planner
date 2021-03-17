const eight = $('#8-am');
const nine = $('#9-am');
const ten = $('#10-am');
const eleven = $('#11-am');
const noon = $('#12-pm');
const one = $('#1-pm');
const two = $('#2-pm');
const three = $('#3-pm');
const four = $('#4-pm');
const five = $('#5-pm');
const sv8 = $('#save8')
const sv9 = $('#save9')
const sv10 = $('#save10')
const sv11 = $('#save11')
const sv12 = $('#save12')
const sv1 = $('#save1')
const sv2 = $('#save2')
const sv3 = $('#save3')
const sv4 = $('#save4')
const sv5 = $('#save5')

var time = moment().format("dddd, MMMM Do YYYY");;
$("#currentDay").text(time);
var hour = moment().format('h a')
var beforeOrAfterNoon = moment().format('a')
var timeLeft = moment( '10 am', 'h a').diff(moment(), 'h')

function futureToPresent(current){
  current.removeClass('future past').addClass('present');
}

function presentToPast(current){
  current.removeClass('present future' ).addClass('past')
}

function newDay(current){
  current.removeClass('past present').addClass('future')
}





window.onload = function pastPresentFuture(){
    console.log(hour)
    if (hour == '8 am'){
      futureToPresent(eight)
      newDay(nine)
      newDay(ten)
      newDay(eleven)
      newDay(noon)
      newDay(one)
      newDay(two)
      newDay(three)
      newDay(four)
      newDay(five)
    } else if (hour == '9 am'){
      presentToPast(eight)
      futureToPresent(nine)
      newDay(ten)
      newDay(eleven)
      newDay(noon)
      newDay(one)
      newDay(two)
      newDay(three)
      newDay(four)
      newDay(five)
    }else if (hour == '10 am'){
      presentToPast(eight)
      presentToPast(nine)
      futureToPresent(ten)
      newDay(eleven)
      newDay(noon)
      newDay(one)
      newDay(two)
      newDay(three)
      newDay(four)
      newDay(five)
    }else if (hour == '11 am'){
      presentToPast(eight)
      presentToPast(nine)
      presentToPast(ten)
      futureToPresent(eleven)
      newDay(noon)
      newDay(one)
      newDay(two)
      newDay(three)
      newDay(four)
      newDay(five)
    }else if (hour == '12 pm'){
      presentToPast(eight)
      presentToPast(nine)
      presentToPast(ten)
      presentToPast(eleven)
      futureToPresent(noon)
      newDay(one)
      newDay(two)
      newDay(three)
      newDay(four)
      newDay(five)
    }else if (hour == '1 pm'){
      presentToPast(eight)
      presentToPast(nine)
      presentToPast(ten)
      presentToPast(eleven)
      presentToPast(noon)
      futureToPresent(one)
      newDay(two)
      newDay(three)
      newDay(four)
      newDay(five)
    }else if (hour == '2 pm'){
      presentToPast(eight)
      presentToPast(nine)
      presentToPast(ten)
      presentToPast(eleven)
      presentToPast(noon)
      presentToPast(one)
      futureToPresent(two)
      newDay(three)
      newDay(four)
      newDay(five)
    }else if (hour == '3 pm'){
      presentToPast(eight)
      presentToPast(nine)
      presentToPast(ten)
      presentToPast(eleven)
      presentToPast(noon)
      presentToPast(one)
      presentToPast(two)
      futureToPresent(three)
      newDay(four)
      newDay(five)
    }else if (hour == '4 pm'){
      presentToPast(eight)
      presentToPast(nine)
      presentToPast(ten)
      presentToPast(eleven)
      presentToPast(noon)
      presentToPast(one)
      presentToPast(two)
      presentToPast(three)
      futureToPresent(four)
      newDay(five)
    }else if (hour == '5 pm'){
      presentToPast(eight)
      presentToPast(nine)
      presentToPast(ten)
      presentToPast(eleven)
      presentToPast(noon)
      presentToPast(one)
      presentToPast(two)
      presentToPast(three)
      presentToPast(four)
      futureToPresent(five)
    }else if (hour == '6pm' || '7 pm' || '8 pm' || '9 pm' || '10 pm' || '11 pm'){
      presentToPast(eight)
      presentToPast(nine)
      presentToPast(ten)
      presentToPast(eleven)
      presentToPast(noon)
      presentToPast(one)
      presentToPast(two)
      presentToPast(three)
      presentToPast(four)
      presentToPast(five)
    } else if (hour == '12 am' || '1 am' || '2 am' || '3 am' || '4 am' || '5 am' || '6 am' || '7 am'){
      newDay(eight)
      newDay(nine)
      newDay(ten)
      newDay(eleven)
      newDay(noon)
      newDay(one)
      newDay(two)
      newDay(three)
      newDay(four)
      newDay(five)
    }



}
