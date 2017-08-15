$(document).ready(function() {
  $(".sentence").submit(function(event) {
    var userInputInJs = $("input.userInput").val();
    var finalPuzzle =[];
    event.preventDefault();

      // $("#sentence1").text(userInputInJs);
      $(".sentence").hide();
      $("#puzzle").show();
      // newUserInputSlice1 = userInputInJs.slice();


      for (var index=0; userInputInJs.length > index; index +=1 ) {
        var place = userInputInJs[index];
        if (place=== 'a' || place === 'e' || place === 'i' ||  place === 'o' || place === 'u') {
          finalPuzzle[index]='-';

        }  else {
            finalPuzzle[index]=place;
        } if (index === userInputInJs.length-1)  {
          $("#sentence1").text(finalPuzzle.join(''));
        }
      }


      // alert(newUserInputSlice1);

    $("#return").click(function(){
      $("#puzzle").hide();
      $(".sentence").show();


    });
  });
});
