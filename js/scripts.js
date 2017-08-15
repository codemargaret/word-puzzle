$(document).ready(function() {
  $(".sentence").submit(function(event) {
    event.preventDefault();
    var userInputInJs = $("input.userInput").val();

    // alert(userInputInJs);
      $("#sentence1").text(userInputInJs);
      $(".sentence").hide();
      $("#puzzle").show();
      newUserInputSlice1 = userInputInJs.slice();
      // alert(newUserInputSlice1.length);
      newUserInputSlice1.length;

      for (index=0; newUserInputSlice1.length > index; index +=1 ) {
        var letter = newUserInputSlice1.charAt(index);
        // alert(letter);
        if (letter === 'a') {
          letter = letter.replace(/A/i, '-');
          alert(letter);
          console.log(letter);
        }
      }

      newUserInputSlice1.charAt


    $("#return").click(function(){
      $("#puzzle").hide();
      $(".sentence").show();


    });
  });
});
