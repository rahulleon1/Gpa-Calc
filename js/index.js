  $(document).ready(function() {
  var totGpa = 0;
  var totCred = 0;
  var gpa;
  var i;

  setTimeout(function () {
    $(".screen-overlay").css("visibility", "hidden");
  }, 5000);

  var selectedGrade;
  var selectedCredit;

  // To create extra rows for new subjects
  // $(".new-code").click(function() {
  //   $('#clone_wrapper div:first').clone().appendTo($('#clone_wrapper'));
  //
  // });

  $(".add-code").click(function () {

    for (i = 1; i < 11; i++) {
      selectedGrade = $(".grade" + i).val();
      selectedCredit = $(".credit" + i).val();

      totGpa = totGpa + ((parseInt(selectedGrade)) * (parseInt(selectedCredit)));
      totCred = totCred + (parseInt(selectedCredit));

    }

    if (totCred == 0) {
      totCred = 1;
      totGpa = 0;
    }

    gpa = totGpa / totCred;
    gpa = gpa.toFixed(4);

    if (gpa > 0) {
      $(".boxer").css("visibility", "hidden");
      $(".add-code").css("visibility", "hidden");
      $(".just4Fun").attr("src", "images/pass.png");
      $(".result-box").css("visibility", "visible");
      $(".result-gpa").html("Your GPA is " + gpa);
    } else {
      $(".boxer").css("visibility", "hidden");
      $(".add-code").css("visibility", "hidden");
      $(".just4Fun").attr("src", "images/error.png");
      $(".result-box").css("color", "#ff0000");
      $(".result-box").css("visibility", "visible");
      $(".result-gpa").text("Something is wrong");
      $(".result-gpa2").text("Reload the site and try again");
    }

  });

  });
