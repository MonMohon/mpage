jQuery(window).load(function() {
    $(".sk-folding-cube").fadeOut();
    $(".preloader").delay(1000).fadeOut("slow");
});
jQuery(document).ready(function($){
    $('.m-headline .letters').each(function(){
      $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });
    anime.timeline({loop: false})
        .add({
            targets: '.m-headline .letter',
            scale: [0.3,1],
            opacity: [0,1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 600,
            delay: function(el, i) {
                return 70 * (i+10)
            }
        });
    var sw=window.screen.availWidth;
    var d = new Date();
    var countdown=Cookies.get('countdown');
    var randomNumber = randomNumberFromRange(60, 120);
    var finalDate='';
    if(sw<='700'){
        $('#Layer_2').attr("viewBox","0 0 881.8 700")
    }
    function randomNumberFromRange(min,max)
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    if (typeof countdown === "undefined"){
        finalDate = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes()+randomNumber, d.getSeconds()).toUTCString();    
        Cookies.set('countdown', { datetime: finalDate});
    }else{
        countdown=$.parseJSON(countdown);
        finalDate = countdown.datetime;    
    }

    const timer = new TimezZ("#countdown", {
      date: finalDate,
      text: {
        hours: " hours",
        minutes: " minutes",
        seconds: " seconds"
      },
      canContinue: false,
      template: '<span class="datenum">NUMBER</span><span class="datetxt">LETTER</span>',
      finished() {
        randomNumber = randomNumberFromRange(30, 70);
        finalDate = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes()+randomNumber, d.getSeconds()).toUTCString();    
        Cookies.set('countdown', { datetime: finalDate});      
        location.reload();
      }
    });
});