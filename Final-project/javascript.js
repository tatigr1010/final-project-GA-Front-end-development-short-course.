function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  function validateForm() {
    let x = document.forms["contactDane"]["name"].value;
    if (x == " ") {
      alert("Name must be filled out");
      return false;
    }
  }