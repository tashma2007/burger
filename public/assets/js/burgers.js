$(function() {
    $(".eat-burger").on("click", function(event) {
      var id = $(this).data("id");
      var eatenburger = $(this).data("eatenburger");
      var eatenBurgerState = {
        devoured: true,
      };
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: eatenBurgerState
      }).then(
        function() {
          console.log("changed burger to", eatenburger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      var newBurger = {
        burger_name: $("#addBurger").val().trim(),
        devoured: 0,
      };
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
   
  });

  


