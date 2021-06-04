//single line comment 

/*
This is a multiple line comment
This means you can type as many lines
as you want with no limit*/

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }