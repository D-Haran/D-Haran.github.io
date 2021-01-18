var resultsContainer = document.querySelector("#results");
var accessToken = "";





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





