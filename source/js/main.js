$(document).ready(function () {
  // when page loading..
  console.log("[DBG] load main js");

  pjaxLoad();
  scrollGoTop();
});

function scrollGoTop() {
  $("#go-top-toggle-feat").on("click", function (e) {
    $("html").animate({ scrollTop: 0 }, 200);
  });
}

function pjaxLoad() {
  /*
    For pjax
  */
}
