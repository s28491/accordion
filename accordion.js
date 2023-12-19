$(document).ready(function () {
  $(".accordion-button").on("change", function () {
    $(".accordion-button").not(this).prop("checked", false);
    const isChecked = $(this).prop("checked");
    const content = $(this).closest(".accordion-item").find(".content");

    $(".content").removeClass("show");
    if (isChecked) {
      content.addClass("show");
    } else {
      content.removeClass("show");
    }
  });
});
