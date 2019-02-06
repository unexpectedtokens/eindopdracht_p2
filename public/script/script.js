$(document).ready(function() {
  $(".dropdown").click(function() {
    $(".dropdown-content").fadeToggle(300);
  });
  $(".hamburger").click(function() {
    $(".hamburger-dropdown").fadeToggle(300);
  });
  $(".contact-nav").click(function() {
    $(".main-second").hide(100);
    $(".main").fadeOut(100);
    $(".contact-section").fadeIn(300);
    $(".product-info").hide(100);
  });
  $(".home").click(function() {
    $(".main").fadeIn(200);
    $(".contact-section").hide(100);
    $(".product-info").hide(100);
    $(".main-second").hide(100);
  });
  $(".aaa").click(function() {
    $(".main-second").fadeIn(200);
    $(".main").hide(100);
    $(".contact-section").hide(100);
    $(".product-info").hide(100);
  });
  $(".product-container").click(() => {
    $(".main-second").fadeOut(200);
    $(".main").hide(100);
    $(".contact-section").hide(100);
    $(".product-info").show(100);
  });
  $(".submit-btn").click(() => {
    $(".formsec").fadeIn(300);
    $(".main-second").hide(200);
    $(".main").hide(100);
    $(".contact-section").hide(100);
    $(".product-info").hide(100);
  });
});
