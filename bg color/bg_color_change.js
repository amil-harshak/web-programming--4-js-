document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("changeBgColorButton");
  
    // Function to change background color to red
    function changeToRed() {
      document.body.style.backgroundColor = "red";
    }
  
    // Function to change background color to green
    function changeToGreen() {
      document.body.style.backgroundColor = "green";
    }
  
    // Add event listeners for single click and double click
    button.addEventListener("click", changeToRed);
    button.addEventListener("dblclick", changeToGreen);
  });
  

