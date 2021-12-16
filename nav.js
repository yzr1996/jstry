$(document).ready(function() {
  $(".navbar .container-fluid .navbar-nav .dropdown .dropdown-menu").each(function(index) {
    const num = index + 1;
    $( this ).addClass("dropdown-menu-" + num);
  });
  
  $(".dropdown-menu-1").append('<li><a href="https://bccandataanalytics.shinyapps.io/IncidenceCounts" target="_blank">BC: New Cancer Diagnoses</a></li>');
  $(".dropdown-menu-1").append('<li><a href="https://bccandataanalytics.shinyapps.io/IncidenceCrudeRates" target="_blank">BC: Crude Rates</a></li>');
  $(".dropdown-menu-1").append('<li><a href="https://bccandataanalytics.shinyapps.io/IncidenceAgeAdjRates/" target="_blank">BC: Age-standardized Cancer Incidence Rates</a></li>');
  $(".dropdown-menu-1").append('<li><a href="https://bccandataanalytics.shinyapps.io/RegionalIncidenceCounts/" target="_blank">BC/Regional: New Cancer Diagnoses</a></li>');
  $(".dropdown-menu-2").append('<li><a href="https://bccandataanalytics.shinyapps.io/MortalityCounts" target="_blank">BC: Cancer Deaths</a></li>');
  $(".dropdown-menu-2").append('<li><a href="https://bccandataanalytics.shinyapps.io/MortalityCrudeRates" target="_blank">BC: Crude Rates</a></li>');
  $(".dropdown-menu-3").append('<li><a href="https://bccandataanalytics.shinyapps.io/PrevalenceCounts" target="_blank">BC: Number of Prevalent Cases</a></li>');
  $(".dropdown-menu-3").append('<li><a href="https://bccandataanalytics.shinyapps.io/RegionalPrevalenceCounts/" target="_blank">Regional Prevalence</a></li>');
  $(".dropdown-menu-4").append('<li><a href="https://bccandataanalytics.shinyapps.io/IncidenceProjections/" target="_blank">Estimated New Cancer Diagnoses</a></li>');
  /*$(".dropdown-menu-4").append('<li><a href="https://bccandataanalytics.shinyapps.io/CreateTableMortalityCounts" target="_blank">Cancer Deaths</a></li>');*/
});
