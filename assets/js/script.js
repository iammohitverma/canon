var scene = document.getElementById("scene");
var parallax = new Parallax(scene);
$(document).ready(function () {
  $("#test").click(function (e) {
    $(".quiz-sec").addClass("active");
  });
  $("#test2").click(function (e) {
    $(".quiz-sec").removeClass("active");
  });
  setTimeout(() => {
    classAddQuiz();
  }, 500);
  function classAddQuiz() {
    $(".quiz-sec").addClass("active");
  }

  $('.living input[type="radio"]').click(function () {
    var livingVal = $("input[name='questionOne']:checked").val();
    if (livingVal) {
      if (livingVal == "Forests") {
        $(".happy").show("slow");
      } else {
        $(".happy").hide("slow");
        $(".sad").show("slow");
      }
      console.log("You selected - " + livingVal);
      setTimeout(() => {
        $(".quiz-sec").removeClass("active");
        $(".emotion").hide("slow");
      }, 1700);
      setTimeout(() => {
        $(".living").hide();
        $(".food").show();
        $(".quiz-sec").addClass("active");
      }, 2500);
    }
  });

  $('.food input[type="radio"]').click(function () {
    var foodVal = $("input[name='questionTwo']:checked").val();
    if (foodVal) {
      if (foodVal == "Herbivores") {
        $(".happy").show("slow");
      } else {
        $(".happy").hide("slow");
        $(".sad").show("slow");
      }
      console.log("You selected - " + foodVal);
      setTimeout(() => {
        $(".quiz-sec").removeClass("active");
        $(".emotion").hide("slow");
      }, 1700);
      setTimeout(() => {
        $(".food").hide();
        $(".species").show();
        $(".quiz-sec").addClass("active");
      }, 2500);
    }
  });

  $('.species input[type="radio"]').click(function () {
    var speciesVal = $("input[name='questionThree']:checked").val();
    if (speciesVal) {
      if (speciesVal == "Four") {
        $(".happy").show("slow");
      } else {
        $(".happy").hide("slow");
        $(".sad").show("slow");
      }
      console.log("You selected - " + speciesVal);
      setTimeout(() => {
        $(".quiz-sec").removeClass("active");
        $(".emotion").hide("slow");
      }, 1700);
      setTimeout(() => {
        $(".lw, .lbw").hide();
        $(".species").hide();
        $(".final").show();
        $(".quiz-sec").addClass("active");
      }, 2500);
    }
  });
});
