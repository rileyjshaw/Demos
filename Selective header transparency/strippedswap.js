function setActiveStyleSheet(grad) {
  alert("Oops! Haven't fully implemented this yet...")
   var i, a, main;
   for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
     if(a.getAttribute("rel").indexOf("style") != -1
        && a.getAttribute("grad")) {
       a.disabled = true;
       if(a.getAttribute("grad") == grad) a.disabled = false;
     }
   }
}