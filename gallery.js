function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function mplan(){
  document.getElementById("myModal4").style.display="block";
}

function closeMasterPlan(){
  document.getElementById("myModal4").style.display="none";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
  // document.getElementById("fixingthenav").style.display = "block";
}


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}



function openFloorPlan(){
  document.getElementById("myModal1").style.display= "block";
 
}

function closeModalFloor() {
  document.getElementById("myModal1").style.display = "none";
}


var slideIndex = 1;
showSlidesFloor(slideIndex);

// Next/previous controls
function plusSlidesFloor(n) {
  showSlidesFloor(slideIndex += n);
}

function showSlidesFloor(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesFloor");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}


function showinterior(){
  document.getElementById("myModal2").style.display= "block";
 
}

function closeModalInterior() {
  document.getElementById("myModal2").style.display = "none";
}


var slideIndex = 1;
showSlidesInterior(slideIndex);

// Next/previous controls
function plusSlidesInterior(n) {
  showSlidesInterior(slideIndex += n);
}

function showSlidesInterior(n) {
  var i;
  var slides = document.getElementsByClassName("myslidesInterior");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}


function exterior(){
  document.getElementById("myModal3").style.display= "block";
 
}

function closeModalExterior() {
  document.getElementById("myModal3").style.display = "none";
}


var slideIndex = 1;
showSlidesExterior(slideIndex);

// Next/previous controls
function plusSlidesExterior(n) {
  showSlidesExterior(slideIndex += n);
}

function showSlidesExterior(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesExterior");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}



let win = $(window).width();

if(win < 420){
  document.querySelector(".navbar-toggler").style.display= "none";
  document.querySelector(".navbar-brand").style.marginLeft = "142px";
}
else {

  $("#bc").click(function(){
    $("html, body" ).animate({scrollTop:600}, 'slow');
    return false;
  });
 
  $("#ij").click(function(){
    $("html, body" ).animate({scrollTop:1400}, 'slow');
    return false;
  });

  $("#ef").click(function(){
    $("html, body" ).animate({scrollTop:2000}, 'slow');
    return false;
  });

  $("#fg").click(function(){
    $("html, body" ).animate({scrollTop:2400}, 'slow');
    return false;
  });

  $("#gh").click(function(){
    $("html, body" ).animate({scrollTop:3150}, 'slow');
    return false;
  });

}


function validatebrouchere(){
  event.preventDefault();
  var x = document.forms["brouchereform"]["email"].value;
  var y =  document.forms["brouchereform"]["mobile"].value;
  if( x == "" || y == ""){
    alert("these values must be filled");
  }
  else{
    alert("you successfully have submitted the deatails");
  
    var name = "NA";
    var phone = y;
    var email = x;
    var desc = "NA";
    var data = {
       name : name,
       phone : phone,
       email : email,
       desc : desc
     };
   $.ajax({
    type: "POST",
    url : "https://3346ysw4wk.execute-api.us-east-2.amazonaws.com/Firstlive/first",
    dataType: "json",
    crossDomain: "true",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(data),
    success: function () {
      console.log(data);
      alert(data);
      window.open('./Assetz Marq 2.pdf');
    },
    error: function () {
      // show an error message
      alert("UnSuccessfull");
    }});
  

}
}
