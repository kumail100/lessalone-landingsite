
    // COUNTER NUMBERS
   $(function() {
    var header = $('.chatbot-section');
    var backgrounds = new Array(
        'url(images/chatbackground/slide1.jpg)',
        'url(images/chatbackground/slide2.jpg)',
        'url(images/chatbackground/slide3.jpg)',
        'url(images/chatbackground/slide4.jpg)'
    );
    var current = 0;

    function nextBackground() {
        header.css('background-image',backgrounds[current = ++current % backgrounds.length]);
    }

    setInterval(nextBackground, 10000);
    header.css('background-image', backgrounds[0]);
  });