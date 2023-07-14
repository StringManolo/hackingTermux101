document.addEventListener("DOMContentLoaded", function() {
  var paragraphs = document.getElementsByTagName("p");
  
  for (var i = 0; i < paragraphs.length; i++) {
    var paragraph = paragraphs[i];
    var text = paragraph.textContent;
    
    if (text.includes("miFoto_729272927282729172917291919372919172728191928372891.jpg")) {
      var filename = "miFoto_729272927282729172917291919372919172728191928372891.jpg";
      
      var span = document.createElement("span");
      span.textContent = filename;
      span.classList.add("long-filename");
      
      paragraph.innerHTML = paragraph.innerHTML.replace(filename, span.outerHTML);
      
      break;
    } else if (text.includes(`echo "$(clear)\n\n\n\n\n\n\n\n\n\nHola, te encuentras en el directorio\n$(pwd)\nNo es genial\n?\n\n"`)) {
      var filename2 = `echo "$(clear)\n\n\n\n\n\n\n\n\n\nHola, te encuentras en el directorio\n$(pwd)\nNo es genial\n?\n\n"`;
      var span2 = document.createElement("span");
      span2.textContent = filename2;
      span2.classList.add("long-filename");

      paragraph.innerHTML = paragraph.innerHTML.replace(filename2, span2.outerHTML);
    }
  }
});
