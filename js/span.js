$(document).ready(function(){
  $(".beijing").mouseover(function(){
    $(".list").show();
    $(".beijing").css("background-color","white");
  });
  $(".beijing").mouseout(function(){
    $(".list").hide();
    $(".beijing").css("background-color","#e3e4e5");
  });
});