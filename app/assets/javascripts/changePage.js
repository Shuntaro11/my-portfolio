$(function(){

  function displayProfile(){

    $("#profileContainer").css("display", "block");
    $("#worksContainer").css("display", "none");
    $("#skillsContainer").css("display", "none");
    $("#contactContainer").css("display", "none");

    $("#profile").css("background", "#003a00");
    $("#works").css("background", "white");
    $("#skills").css("background", "white");
    $("#contact").css("background", "white");

    $("#profile").css("color", "white");
    $("#works").css("color", "#003a00");
    $("#skills").css("color", "#003a00");
    $("#contact").css("color", "#003a00");

  }

  function displayWorks(){

    $("#profileContainer").css("display", "none");
    $("#worksContainer").css("display", "block");
    $("#skillsContainer").css("display", "none");
    $("#contactContainer").css("display", "none");

    $("#profile").css("background", "white");
    $("#works").css("background", "#003a00");
    $("#skills").css("background", "white");
    $("#contact").css("background", "white");

    $("#profile").css("color", "#003a00");
    $("#works").css("color", "white");
    $("#skills").css("color", "#003a00");
    $("#contact").css("color", "#003a00");

  }

  function displaySkills(){

    $("#profileContainer").css("display", "none");
    $("#worksContainer").css("display", "none");
    $("#skillsContainer").css("display", "block");
    $("#contactContainer").css("display", "none");

    $("#profile").css("background", "white");
    $("#works").css("background", "white");
    $("#skills").css("background", "#003a00");
    $("#contact").css("background", "white");

    $("#profile").css("color", "#003a00");
    $("#works").css("color", "#003a00");
    $("#skills").css("color", "white");
    $("#contact").css("color", "#003a00");

  }

  function displayContact(){

    $("#profileContainer").css("display", "none");
    $("#worksContainer").css("display", "none");
    $("#skillsContainer").css("display", "none");
    $("#contactContainer").css("display", "block");

    $("#profile").css("background", "white");
    $("#works").css("background", "white");
    $("#skills").css("background", "white");
    $("#contact").css("background", "#003a00");

    $("#profile").css("color", "#003a00");
    $("#works").css("color", "#003a00");
    $("#skills").css("color", "#003a00");
    $("#contact").css("color", "white");

  }


  $("#profile").on('click', function(e) {
    displayProfile();
  });
  $("#works").on('click', function(e) {
    displayWorks();
  });
  $("#skills").on('click', function(e) {
    displaySkills();
  });
  $("#contact").on('click', function(e) {
    displayContact();
  });
  
});