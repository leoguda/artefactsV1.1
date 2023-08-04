// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  console.log("YouTube is Ready!")
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.

function stopVideo() {
  player.stopVideo();
}

let player;
function playThisVideo(vidid){
    if(player) {
        player.destroy();
    }

    player = new YT.Player('player', {
        height: '720',
        width: '1280',
        videoId: vidid,
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
  });
  var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 0);
    done = true;
  }
}
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const currentVideos = document.getElementsByClassName("buttons");

function showCurrentVideo(){
    for(currentVideo of currentVideos){
        currentVideo.classList.remove("hoverColor")
    }
    event.currentTarget.classList.add("hoverColor");
}







var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
      var panel = this.nextElementSibling;
      var activeAccordions = document.querySelectorAll(".div-accordion-container .accordion.active");
      for (var j = 0; j < activeAccordions.length; j++) {
          activeAccordions[j].classList.remove("active");
          activeAccordions[j].nextElementSibling.style.maxHeight = null;
      }

      this.classList.toggle("active");
      panel.style.maxHeight = panel.scrollHeight + "px";
  });
}


