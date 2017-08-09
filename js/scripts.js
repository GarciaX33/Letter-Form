$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name1").val();

    $(".name1").text(nameInput);

    $("#letter").show();

    event.preventDefault();
  });
});
