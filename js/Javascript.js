window.onload = function () {
  document.querySelector('.btnTue').focus();
};
function showTue() {
    document.getElementById('AgendaTuesday').style.display = "block";
    document.getElementById('AgendaWednesday').style.display = "none";
    document.getElementById('AgendaThursday').style.display = "none";
  }
  
  function showWed() {
    document.getElementById('AgendaTuesday').style.display = "none";
    document.getElementById('AgendaWednesday').style.display = "block";
    document.getElementById('AgendaThursday').style.display = "none";
  }
  
  function showThu() {
    document.getElementById('AgendaTuesday').style.display = "none";
    document.getElementById('AgendaWednesday').style.display = "none";
    document.getElementById('AgendaThursday').style.display = "block";
  }
  