$(function(){

  function displayProfile(){

    $("#profileContainer").css("display", "flex");
    $("#worksContainer").css("display", "none");
    $("#skillsContainer").css("display", "none");
    $("#contactContainer").css("display", "none");

    $("#profile").css("height", "55px");
    $("#works").css("height", "50px");
    $("#skills").css("height", "50px");
    $("#contact").css("height", "50px");

    $("#profile").css("top", "-55px");
    $("#works").css("top", "-50px");
    $("#skills").css("top", "-50px");
    $("#contact").css("top", "-50px");

  }

  function displayWorks(){

    $("#profileContainer").css("display", "none");
    $("#worksContainer").css("display", "block");
    $("#skillsContainer").css("display", "none");
    $("#contactContainer").css("display", "none");

    $("#profile").css("height", "50px");
    $("#works").css("height", "55px");
    $("#skills").css("height", "50px");
    $("#contact").css("height", "50px");

    $("#profile").css("top", "-50px");
    $("#works").css("top", "-55px");
    $("#skills").css("top", "-50px");
    $("#contact").css("top", "-50px");

  }

  function displaySkills(){

    $("#profileContainer").css("display", "none");
    $("#worksContainer").css("display", "none");
    $("#skillsContainer").css("display", "block");
    $("#contactContainer").css("display", "none");

    $("#profile").css("height", "50px");
    $("#works").css("height", "50px");
    $("#skills").css("height", "55px");
    $("#contact").css("height", "50px");

    $("#profile").css("top", "-50px");
    $("#works").css("top", "-50px");
    $("#skills").css("top", "-55px");
    $("#contact").css("top", "-50px");

  }

  function displayContact(){

    $("#profileContainer").css("display", "none");
    $("#worksContainer").css("display", "none");
    $("#skillsContainer").css("display", "none");
    $("#contactContainer").css("display", "block");

    $("#profile").css("height", "50px");
    $("#works").css("height", "50px");
    $("#skills").css("height", "50px");
    $("#contact").css("height", "55px");

    $("#profile").css("top", "-50px");
    $("#works").css("top", "-50px");
    $("#skills").css("top", "-50px");
    $("#contact").css("top", "-55px");

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