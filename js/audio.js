$(document).ready(function() {

  $('.audio-thumbnail audio').on('play', function () {
    $(this).prev('a').find('.glyphicon').removeClass('glyphicon-play').addClass('glyphicon-stop');
  });

  var func_on_stop = function () {
    $(this).prev('a').find('.glyphicon').removeClass('glyphicon-stop').addClass('glyphicon-play');
  };
  $('.audio-thumbnail audio').on('pause', func_on_stop);
  $('.audio-thumbnail audio').on('ended', func_on_stop);


  $('.audio-thumbnail audio').removeAttr('controls');

  $('.audio-playback-control').click(function(e) {
    e.preventDefault();
    var audio_list = $('audio');
    var audio_cur  = $(this).next('audio').get(0);
    for (var x = 0; x < audio_list.length; x++) {
      var audio = audio_list[x];
      if (audio == audio_cur && audio.paused) {
        audio.currentTime = 0;
        audio.play();
      } else if (!audio.paused)
        audio.pause();
    }
  });
});
