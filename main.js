function confettistart(){
 for(i=0; i<100; i++) {
    // Random rotation
    var randomRotation = Math.floor(Math.random() * 360);
      // Random Scale
    var randomScale = Math.random() * 1;
    // Random width & height between 0 and viewport
    var randomWidth = Math.floor(Math.random() * Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
    var randomHeight =  Math.floor(Math.random() * Math.max(document.documentElement.clientHeight, window.innerHeight || 500));
    
    // Random animation-delay
    var randomAnimationDelay = Math.floor(Math.random() * 15);

  
    // Random colors
    var colors = ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#FFC61C', '#8497B0']
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
  
    // Create confetti piece
    var confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.top=randomHeight + 'px';
    confetti.style.right=randomWidth + 'px';
    confetti.style.backgroundColor=randomColor;
    // confetti.style.transform='scale(' + randomScale + ')';
    confetti.style.obacity=randomScale;
    confetti.style.transform='skew(15deg) rotate(' + randomRotation + 'deg)';
    confetti.style.animationDelay=randomAnimationDelay + 's';
    document.getElementById("confetti-wrapper").appendChild(confetti);
  }};
 
  (function timerstart() {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let foxyland = "Sep 28, 2021 05:17:00",
        countDown = new Date(foxyland).getTime(),
        x = setInterval(function() {    
          let now = new Date().getTime(),
              distance = countDown - now;
  
            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          if (distance < 0) {
            let headline = document.getElementById("headline"),
                countdown = document.getElementById("countdown"),
                content = document.getElementById("content");
            
            confettistart()
            headline.innerText = "Começou!";
            
            countdown.style.display = "none";
            content.style.display = "block";

            //setTimeout(() => { window.location.href = "/FoxyLand"}, 10000);
  
            clearInterval(x);
          }
          //segundos
        }, 0)
    }());
    function AdvancedCopy() {
      var theText = 'mine.foxyb.live';

      var hiddenCopy = document.createElement('div');
      hiddenCopy.innerHTML = theText;
      hiddenCopy.style.position = 'absolute';
      hiddenCopy.style.left = '-9999px';

      var currentRange;
      if (document.getSelection().rangeCount > 0) {
          currentRange = document.getSelection().getRangeAt(0);
          window.getSelection().removeRange(currentRange);
      } else {
          currentRange = false;
      }

      document.body.appendChild(hiddenCopy);
      var CopyRange = document.createRange();
      CopyRange.selectNode(hiddenCopy);
      window.getSelection().addRange(CopyRange);

      try {
          document.execCommand('copy');
      } catch (err) {
          window.alert("Seu navegador não suporta isso! Erro : " + err);
      }
      window.getSelection().removeRange(CopyRange);
      document.body.removeChild(hiddenCopy);

      if (currentRange) {
          window.getSelection().addRange(currentRange);
      }
  };
    
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log(' ');
  console.log('%c Oie, eu sei que você está vendo o codigo do site, mas é tão simples que qualquer um pode fazer! o codigo do site está em    https://github.com/Sty13/FoxyLand-Counter have fun! ', 'background: #ff0000; color: #ffe000; font-size: 24px')
