$(document).ready(function(){
  var firstload = true;

  var controller = new ScrollMagic.Controller();

  var scene = new ScrollMagic.Scene({
    triggerHook: 'onLeave',
    duration: "150%",
  })
  .setPin("#wrapper")
  // .addIndicators({name: "test", colorTrigger: "white", colorStart: "white", colorEnd: "white"})
  .addTo(controller)
  .on("progress", function (data){
    if (data.scrollDirection == "FORWARD" && firstload){
      if (data.progress > 0.01){
        $("#void").removeClass("hidden");
        $("#void").addClass("animated fadeInLeft");
        $("#dotdot").addClass("hidden");
      }
      if (data.progress > 0.3){
        $("#space").removeClass("hidden");
        $("#space").addClass("animated fadeInLeft");
      }
      if (data.progress > 0.5){
        $("#creative").removeClass("hidden");
        $("#creative").addClass("animated fadeInLeft");
      }
      if (data.progress > 0.7){
        $("#emerge").removeClass("hidden");
        $("#emerge").addClass("animated fadeInLeft");
      }
    }
  })
  .on("leave", function (data){
      $("#downarrow").attr("class", "animated fadeOut");
      $("#void").attr("class", "splashtext animated fadeOut");
      $("#space").attr("class", "splashtext animated fadeOut");
      $("#creative").attr("class", "splashtext animated fadeOut");
      $("#emerge").attr("class", "splashtext animated fadeOut");
      firstload = false;
  })
  .on("enter", function (data){
    if (data.scrollDirection == "REVERSE"){
      $("#downarrow").attr("class", "animated fadeIn");
      $("#void").attr("class", "splashtext animated fadeIn");
      $("#space").attr("class", "splashtext animated fadeIn");
      $("#creative").attr("class", "splashtext animated fadeIn");
      $("#emerge").attr("class", "splashtext animated fadeIn");
    }
  })

  var timeline = new TimelineMax()
    .add(TweenMax.to("#candle", .5, {css:{opacity: 0}}))
    .add([
      TweenMax.to("body", 1, {backgroundColor: "rgb(201, 197, 185)"}),
      TweenMax.from("#noahleft", 1, {x:"-=700"}),
      TweenMax.from("#noahright", 1, {x:"+=1400"}),
      TweenMax.from(".intro", 1, {css:{opacity: 0}}),
      TweenMax.from(".titlesection", 1, {css:{opacity: 0}}),
      TweenMax.from("#noahart", 1, {rotationY:-360, scaleX:3, scaleY:3})
    ])
    .add([
      TweenMax.to(".noahvis", .05, {css:{opacity: 0}}),
      TweenMax.to("#noahfull", .05, {css:{opacity: 1}})
    ]);


  var scene2 = new ScrollMagic.Scene({
    duration: 500,
    offset: -700,
    triggerHook: 'onLeave',
    triggerElement: ".intro"
  })
  .setPin("#wrapper", {pushFollowers: false})
  .setTween(timeline)
  // .addIndicators({name: "test", colorTrigger: "white", colorStart: "white", colorEnd: "white"})
  .addTo(controller);


  var scene3 = new ScrollMagic.Scene({
    triggerElement: "#logocontainer",
    triggerHook: 0.02
  })
  .setPin("#logocontainer", {pushFollowers: false})
  // .addIndicators({name: "logo", colorTrigger: "black", colorStart: "black", colorEnd: "black"})
  .addTo(controller);

  var scene4 = new ScrollMagic.Scene({
    triggerElement: "#projecttitle",
    triggerHook: 0.75
    // duration: "10px"
  })
  // .setClassToggle(".logo", "fadeIn")
  .setTween(".firstFade", 0.4, {css:{opacity: 1}})
  // .addIndicators({name: "logofade", colorTrigger: "black", colorStart: "black", colorEnd: "black"})
  .addTo(controller);

})
