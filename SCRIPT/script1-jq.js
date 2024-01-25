$("#religion_card").on("change", function () {
  console.log("sdshhd");
  // Check if any option is selected
  if ($(this).find("option:selected").length > 0) {
    // Get the selected value and log it
    var selectedValue = $(this).val();
    console.log("Selected Religion:", selectedValue);
  } else {
    console.log("No option is selected.");
  }
});

console.log("sdshhd");
