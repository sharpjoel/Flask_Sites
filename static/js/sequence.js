$(document).ready(function(){
  $('input[id="Heat/Cool Determination"]').click(function(){
    if($(this).prop("checked") == true){
      $("#occ-starting-p").after("<p class='seq-font htcl'>On a rise of room temperature above the cooling setpoint +2°F, terminal unit will enter cooling mode.</p>");
      $(".htcl").after("<p class='seq-font htcl'>On a fall of room temperature below the heating setpoint -2°F, terminal unit will enter heating mode.</p>");
    }
    else if($(this).prop("checked")==false){
      $(".htcl").remove();
    }
  });
});
