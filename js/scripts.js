var gInputID = ["#user-number"]
$(document).ready(function(){
  $("#submit-button").click(function() {
    var userNumber = []
    var userNumber = parseInt($("#user-number").val());
      // userNumber.push($(id).val())
      // $(gInputID.forEach(function(id)
      // alert(userNumber)
      if (userNumber === 0) {
      $("#zero").show();
    }
      if (userNumber === 1) {
      $("#one").show();
    }
    event.preventDefault();

  ;
  });
});
