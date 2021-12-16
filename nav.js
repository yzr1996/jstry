$(document).ready(function() {
  $(".navbar .container-fluid .navbar-nav .dropdown .dropdown-menu").each(function(index) {
    const num = index + 1;
    $( this ).addClass("dropdown-menu-" + num);
  });
  
  $(".dropdown-menu-1").append('<li><a href="https://bccandataanalytics.shinyapps.io/IncidenceCounts" target="_blank">BC: New Cancer Dia</a></li>');
  $(".dropdown-menu-1").append('<li><a href="https://bccandataanalytics.shinyapps.io/IncidenceCrudeRates" target="_blank">BC: Crude Rates</a></li>');
  
