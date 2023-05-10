document.addEventListener("DOMContentLoaded", function() {
  AOS.init();
});
$(document).ready(function() {
  // Show all items
  $("#mobile-btn").click(function() {
    $(".hideDiv").show();
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");
  });
  // Show only database-btn items
  $("#database-btn").click(function() {
    $(".hideDiv").hide();
    $(".mobile").show();
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");
  });

  // Show only fullStack-btn items
  $("#fullStack-btn").click(function() {
    $(".hideDiv").hide();
    $(".fullStack").show();
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");
  });

  // Show only database-btn items
  $("#database-btn").click(function() {
    $(".hideDiv").hide();
    $(".swift").show();
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");
  });
  // Show only backend-btn items
  $("#backend-btn").click(function() {
    $(".backEnd").hide();
    $(".tablet").show();
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");
  });

  // Show only blockchain-btn items
  $("#blockchain-btn").click(function() {
    $(".hideDiv").hide();
    $(".blockChain").show();
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");
  });

  
});