/* eslint-disable no-undef */
$(function () {
  // toggle
  var flag = true;
  $(".switch-button").on("click", function (e) {
    e.preventDefault();
    $("h1").hide();
    if (flag) {
      flag = false;
      $(".Auth-signin").show("slow");
      $(".Auth-login").hide();
    } else {
      flag = true;
      $(".Auth-login").show("slow");
      $(".Auth-signin").hide();
    }
  });
});
/* eslint-enable no-undef */
