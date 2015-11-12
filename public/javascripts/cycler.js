$(".wrapper img:gt(0)").hide();

window.setInterval(function() {
  $(".wrapper :nth-child(2)").fadeIn(4000, function() {
    $(".wrapper :first-child").hide()
      .appendTo(".wrapper");
  });
}, 6000);