window.onload=function() {
    var button = document.getElementById("addMeme");
    button.onclick = addItem;
  }   
  
  
  function addItem() {
    var imgURL = document.getElementById("imgURL").value; 
  
    if(!isURL(imgURL)){
      alert("Please enter a valid image url!");
      return;
    }
  
    var textTop = document.getElementById("textTop").value; 
    var textBottom = document.getElementById("textBottom").value; 
  
    var main = document.getElementById("imgs");  
    
    var span = document.createElement("span")
    span.setAttribute("id", "img-span");
  
    var x = document.createElement("span");
    x.setAttribute("id", "img-overlay");
    x.innerHTML = "&times";
  
    
    var textOnTop = document.createElement("span")
    
    var textOnBottom = document.createElement("span")
  
    
    var image = document.createElement("IMG");  
    image.setAttribute("src", imgURL);
    image.setAttribute("id", "img");
    image.setAttribute("alt", "meme image");
  
    
    span.onclick = function() {this.parentNode.removeChild(this);}
  
    main.appendChild(span);
    span.appendChild(image);
    span.appendChild(x);

    if(textTop){
      textOnTop.setAttribute("id", "text-top");
      textOnTop.innerHTML = textTop;
      span.appendChild(textOnTop);
    }

    if(textBottom){
      textOnBottom.setAttribute("id", "text-bottom");
      textOnBottom.innerHTML = textBottom;
      span.appendChild(textOnBottom);
    }
  
    document.getElementById("imgURL").value = ""; 

    document.getElementById("textTop").value = "";
  

    document.getElementById("textBottom").value = "";
  }
  
  function isURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ 
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
    '((\\d{1,3}\\.){3}\\d{1,3}))'+
    '(\\:\\d+)?'+ 
    '(\\/[-a-z\\d%@_.~+&:]*)*'+ 
    '(\\?[;&a-z\\d%@_.,~+&:=-]*)?'+ 
    '(\\#[-a-z\\d_]*)?$','i'); 
    return pattern.test(str);
  }