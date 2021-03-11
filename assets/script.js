var timeDisplayEl = $('#time-display');
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow)
}    

setInterval(displayTime, 1000);

// Text hour var
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");
var sixPm = $("#18pm");
var sevenPm = $("#19pm");

var hour = moment().hours();
var userInput;
var hourSpan;

function initPage() {

  console.log("Current Hour " + hour);
  var store9 = JSON.parse(localStorage.getItem("09:00 am"));
  nineAm.val(store9);

  var store10 = JSON.parse(localStorage.getItem("10:00 am"))
  tenAm.val(store10);
  
  var store11 = JSON.parse(localStorage.getItem("11:00 am"))
  elevenAm.val(store11);
  
  var store12 = JSON.parse(localStorage.getItem("12:00 pm"))
  twelvePm.val(store12);
  
  var store13 = JSON.parse(localStorage.getItem("01:00 pm"))
  onePm.val(store13);
  
  var store14 = JSON.parse(localStorage.getItem("02:00 pm"))
  twoPm.val(store14);
  
  var store15 = JSON.parse(localStorage.getItem("03:00 pm"))
  threePm.val(store15);
 
  var store16 = JSON.parse(localStorage.getItem("04:00 pm"))
  fourPm.val(store16);
  
  var store17 = JSON.parse(localStorage.getItem("05:00 pm"))
  fivePm.val(store17);
  
  var store18 = JSON.parse(localStorage.getItem("06:00 pm"))
  sixPm.val(store18);
  
  var store19 = JSON.parse(localStorage.getItem("07:00 pm"))
  sevenPm.val(store19);
} 

function background () {
      
  $(".form-control").each(function () {
      var timeTest = parseInt($(this).attr("id"));
      hour = parseInt(hour);
      console.log(timeTest);
      console.log(hour);
// had to use military time for this style to work... 
      if (hour > timeTest) {
          $(this).addClass("past");
      } else if (hour < timeTest) {
          $(this).addClass("future");
      } else {
          $(this).addClass("present");
      }
  });
}

$(document).ready(function(){
  initPage()
  background()

  // Buttons (save to Local Storage)
  $(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));

  })

});
