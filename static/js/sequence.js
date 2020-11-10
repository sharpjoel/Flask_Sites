$(document).ready(function(){

  // ****** OCCUPIED MODE ******

  $('input[id="Occupied Mode"]').click(function(){
    if($(this).prop("checked") == true){
      $("#occupied-mode").show();
      $("#occ-cool").show();
      $("#occ-heat").show();
    }
    else if($(this).prop("checked")==false){
      $("#occupied-mode").hide();
      $('input[id="Temporary Comfort Button"]').prop("checked",false);
      $('input[id="Presence Detection"]').prop("checked",false);
      $('input[id="Standby Ventilation/DCV"]').prop("checked", false);
      $(".standby-mode").hide();
      $(".temp-comfort-btn").hide();
      $('input[id="Occupied Ventilation/DCV"]').prop("checked", false);
      $("#occ-ventilation-mode").hide();
      $('input[id="Heat/Cool Determination"]').prop("checked", false);
      $('input[id="VAV Cooling Sequence"]').prop("checked", false);
      $('input[id="VAV Heating Sequence"]').prop("checked", false);
      $(".htcl").hide();
      $("#occ-cool").hide();
      $("#occ-heat").hide();
      $(".cool-mode").hide();
      $(".heat-mode").hide();
      $('input[id="Air Volume Tracking"]').prop("checked", false);
      $('input[id="VAV Dehumidification"]').prop("checked", false);
      $('input[id="Rapid Ventilation"]').prop("checked", false);
      $('input[id="Greenleaf"]').prop("checked", false);
      $("#vav-tracking").hide();
      $("#dehum").hide();
      $("#rapid-vent").hide();
      $("#greenleaf").hide();
    }
  });

  // ****** UNOCCUPIED MODE ******

  $('input[id="Unoccupied Mode"]').click(function(){
    if($(this).prop("checked") == true){
      $("#unoccupied-mode").show()
      $("#unocc-cool").show();
      $("#unocc-heat").show();
    }
    else if($(this).prop("checked")==false){
      $("#unoccupied-mode").hide();
      $('input[id="Warm-up Mode"]').prop("checked", false);
      $('input[id="Cool-down Mode"]').prop("checked", false);
      $('input[id="Night-Cooling Mode"]').prop("checked", false);
      $('input[id="Unoccupied Ventilation/DCV"]').prop("checked", false);
      $("#warmup-mode").hide();
      $("#cooldown-mode").hide();
      $("#nightcool-mode").hide();
      $(".unocc-ventilation-mode").hide();
      $("#unocc-cool").hide();
      $("#unocc-heat").hide();
    }
  });

  // ****** WARM-UP MODE ******

  $('input[id="Warm-up Mode"]').click(function(){
    if($('input[id="Unoccupied Mode"]').prop("checked") == true && $(this).prop("checked") == true){
      $("#warmup-mode").show()
    }
    else if($(this).prop("checked")==false){
      $("#warmup-mode").hide();
    }
    else{
      $(this).prop('checked', false);
    }
  });

  // ****** COOL-DOWN MODE ******

  $('input[id="Cool-down Mode"]').click(function(){
    if($('input[id="Unoccupied Mode"]').prop("checked") == true && $(this).prop("checked") == true){
      $("#cooldown-mode").show()
    }
    else if($(this).prop("checked")==false){
      $("#cooldown-mode").hide();
    }
    else{
      $(this).prop('checked', false);
    }
  });

  // ****** NIGHT-COOLING MODE ******

  $('input[id="Night-Cooling Mode"]').click(function(){
    if($('input[id="Unoccupied Mode"]').prop("checked") == true && $(this).prop("checked") == true){
      $("#nightcool-mode").show()
    }
    else if($(this).prop("checked")==false){
      $("#nightcool-mode").hide();
    }
    else{
      $(this).prop('checked', false);
    }
  });

  // ****** PRESENCE DETERMINATION ******

  $('input[id="Presence Detection"]').click(function(){
    if($('input[id="Occupied Mode"]').prop("checked") == true && $(this).prop("checked") == true){
      $('input[id="Temporary Comfort Button"]').prop("checked", false);
      $("#standby-cool").show();
      $("#standby-heat").show();
      $(".standby-mode").show();
      $(".temp-comfort-btn").hide();
      $("#standby-cool").show();
      $("#standby-heat").show();
    }
    else if($(this).prop("checked")==false){
      $(".standby-mode").hide();
      $('input[id="Standby Ventilation/DCV"]').prop("checked", false);
      $("#standby-ventilation-mode").hide();
      $("#standby-cool").hide();
      $("#standby-heat").hide();
    }
    else{
      $(this).prop('checked', false);
    }
  });

  // ****** TEMPORARY COMFORT BUTTON ******
  
  $('input[id="Temporary Comfort Button"]').click(function(){
    if($('input[id="Occupied Mode"]').prop("checked") == true && $(this).prop("checked") == true){
      $('input[id="Presence Detection"]').prop("checked", false);
      $(".temp-comfort-btn").show();
      $(".standby-mode").hide();
    }
    else if($(this).prop("checked")==false){
      $(".temp-comfort-btn").hide();
    }
    else{
      $(this).prop('checked', false);
    }
  });

  // ****** Occupied Ventilation/DCV ******
  
  $('input[id="Occupied Ventilation/DCV"]').click(function(){
    if($('input[id="Occupied Mode"]').prop("checked") == true && $(this).prop("checked") == true){
      $("#occ-ventilation-mode").show();
      $("#occ-ventilation-off").hide();
    }
    else if($(this).prop("checked")==false){
      $("#occ-ventilation-mode").hide();
      $("#occ-ventilation-off").show();
    }
    else{
      $(this).prop('checked', false);
    }
  });

  // ****** Standby Ventilation/DCV ******
  
  $('input[id="Standby Ventilation/DCV"]').click(function(){
    if($('input[id="Presence Detection"]').prop("checked") == true && $(this).prop("checked") == true){
      $("#standby-ventilation-mode").show();
      $("#standby-ventilation-off").hide();
    }
    else if($(this).prop("checked")==false){
      $("#standby-ventilation-mode").hide();
      $("#standby-ventilation-off").show();
    }
    else{
      $(this).prop('checked', false);
    }
  });

  // ****** Unoccupied Ventilation/DCV ******
  
  $('input[id="Unoccupied Ventilation/DCV"]').click(function(){
    if($('input[id="Unoccupied Mode"]').prop("checked") == true && $(this).prop("checked") == true){
      $(".unocc-ventilation-mode").show();
      $(".unocc-ventilation-off").hide();
    }
    else if($(this).prop("checked")==false){
      $(".unocc-ventilation-mode").hide();
      $(".unocc-ventilation-off").show();
    }
    else{
      $(this).prop('checked', false);
    }
  });

  // ****** HEAT/COOL DETERMINATION ******

  $('input[id="Heat/Cool Determination"]').click(function(){
    if($('input[id="Occupied Mode"]').prop("checked") == true && $(this).prop("checked") == true){
      $(".htcl").show();
    }
    else if($(this).prop("checked")==false){
      $(".htcl").hide();
      $('input[id="VAV Cooling Sequence"]').prop("checked",false);
      $('input[id="VAV Heating Sequence"]').prop("checked",false);
      $(".cool-mode").hide();
      $(".heat-mode").hide();
    }
    else{
      $(this).prop('checked', false);
    }
  });

  // ****** VAV COOLING SEQUENCE ******

  $('input[id="VAV Cooling Sequence"]').click(function(){
    if($('input[id="Occupied Mode"]').prop("checked") == true && $(this).prop("checked") == true && $('input[id="Heat/Cool Determination"]').prop("checked") == true){
      $(".cool-mode").show();
    }
    else if($(this).prop("checked")==false){
      $(".cool-mode").hide();
    }
    else{
      $(this).prop('checked', false);
    }
  });

  // ****** VAV HEATING SEQUENCE ******

  $('input[id="VAV Heating Sequence"]').click(function(){
    if($('input[id="Occupied Mode"]').prop("checked") == true && $(this).prop("checked") == true && $('input[id="Heat/Cool Determination"]').prop("checked") == true){
      $(".heat-mode").show();
    }
    else if($(this).prop("checked")==false){
      $(".heat-mode").hide();
    }
    else{
      $(this).prop('checked', false);
    }
  });

  // ****** VAV Airflow Tracking ******

  $('input[id="Air Volume Tracking"]').click(function(){
    if($('input[id="Occupied Mode"]').prop("checked") == true && $(this).prop("checked") == true){
      $("#vav-tracking").show();
    }
    else if($(this).prop("checked")==false){
      $("#vav-tracking").hide();
    }
    else{
      $(this).prop('checked', false);
    }
  });


  // ****** Dehumidification ******

  $('input[id="VAV Dehumidification"]').click(function(){
    if($('input[id="Occupied Mode"]').prop("checked") == true && $(this).prop("checked") == true){
      $("#dehum").show();
    }
    else if($(this).prop("checked")==false){
      $("#dehum").hide();
    }
    else{
      $(this).prop('checked', false);
    }
  });

  // ****** Rapid Ventilation ******

  $('input[id="Rapid Ventilation"]').click(function(){
    if($('input[id="Occupied Mode"]').prop("checked") == true && $(this).prop("checked") == true){
      $("#rapid-vent").show();
    }
    else if($(this).prop("checked")==false){
      $("#rapid-vent").hide();
    }
    else{
      $(this).prop('checked', false);
    }
  });

  // ****** Greenleaf ******

  $('input[id="Greenleaf"]').click(function(){
    if($('input[id="Occupied Mode"]').prop("checked") == true && $(this).prop("checked") == true){
      $("#greenleaf").show();
    }
    else if($(this).prop("checked")==false){
      $("#greenleaf").hide();
    }
    else{
      $(this).prop('checked', false);
    }
  });

});
