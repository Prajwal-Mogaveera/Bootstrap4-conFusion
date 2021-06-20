$(document).ready(function () {
  $("#mycarousel").carousel({ interval: 2000 })

  $("#carouselButton").click(function () {
    if ($("#carouselButton").children("span").hasClass("fa-pause")) {
      $("#mycarousel").carousel("pause")
      $("#carouselButton").children("span").removeClass("fa-pause")
      $("#carouselButton").children("span").addClass("fa-play")
    } else if ($("#carouselButton").children("span").hasClass("fa-play")) {
      $("#mycarousel").carousel("cycle")
      $("#carouselButton").children("span").removeClass("fa-play")
      $("#carouselButton").children("span").addClass("fa-pause")
    }
  })

  // $('#carousel-pause').click(function () {
  //   $('#mycarousel').carousel('pause');
  // });

  // $('#carousel-play').click(function () {
  //   $('#mycarousel').carousel('cycle');
  // });
})

$(document).ready(function () {
  $("#reserve-button").click(function () {
    $("#reserveModal").modal("show")
  })

  $(".close").click(function () {
    $("#reserveModal").modal("hide")
    $("#loginModal").modal("hide")
  })

  $("#login-button").click(function () {
    $("#loginModal").modal("show")
  })

  // $(".close").click(function() {
  //   $("#loginModal").modal('hide')
  // })
})
