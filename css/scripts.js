$(document).ready(function() {
  $("#subscribe").click(function(event) {
    alert("You have succesfully subscribed");
    var email = $("input#email").val();
    event.preventDefault();
    console.log(email);
  });
});
