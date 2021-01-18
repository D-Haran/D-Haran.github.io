var resultsContainer = document.querySelector("#results");
var accessToken = "";
var spotify = true;




window.onload = function() {
  var inputField = document.getElementById("gsc-i-id1");
  inputField.setAttribute("placeholder", "What Lyrics do You Have in Mind?");

  if (/#access_token\=.+/.test(location.href)) {
    document.getElementById("connect-container").style.display = "none";
    accessToken = location.href.toString().match(/(?:\#access_token\=).+?(?=\&)/)[0].replace("#access_token=", "");
  }
  document.querySelector(".gsc-search-button .gsc-search-button-v2").onclick = function() {
    if (inputField.value !== "" && !!inputField.value.trim()) {
      resultsContainer.innerHTML = "Loading...";
      window.setTimeout(function(){
        updateResults();
      },3000)
    }
  }
  
  inputField.onkeyup = function(e) {
    if (e.key === "Enter" && inputField.value !== "" && !!inputField.value.trim()) {
      resultsContainer.innerHTML = "Loading...";
      window.setTimeout(function(){
        updateResults();
      },3000)
    }
  }
}

function connectSpotify() {
  window.open("https://accounts.spotify.com/authorize?client_id=1ef967355e974276ac8b3c14ef511e36&redirect_uri=http%3A%2F%2F127.0.0.1:5500/LyricFind_ThetaHacks/SPEECH2Text.html&scope=user-read-private%20user-read-email&response_type=token&show_dialog=true","_blank");
}

function continueWithoutSpotify() {
  document.getElementById("connect-container").style.display = "none";
  spotify = false;
}





