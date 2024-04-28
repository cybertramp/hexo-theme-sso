$(document).ready(function () {
  // when page loading..
  console.log("[DBG] load main js");

  pjaxLoad();
  scrollGoTop();
});

function scrollGoTop() {
  console.log("[DBG] load scroll to top");
  $("#go-top-toggle").on("click", function (e) {
    $("html").animate({ scrollTop: 0 }, 200);
  });
}

function pjaxLoad() {
  /*
    For pjax
  */
}
