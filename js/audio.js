$(document).ready(function() {
  var audios = document.getElementsByTagName('audio');
  for (var x = 0; x < audios.length; x++) {
    var audio = audios[x];
    if (audio.className == 'audio-control') {
      audio.addEventListener('playing', function (audio_list) {
        return function () {
          for (var x = 0; x < audio_list.length; x++) {
            var audio_item = audio_list[x];
            if (audio_item != this) {
              audio_item.pause();
            }
          }
          //this.className = 'audio-control-playing';
        };
      }(audios), false);
      audio.addEventListener('pause', function () {
        //this.className = 'audio-control';
        //this.currentTime = 0;
      }, false);
    }
  }
});
