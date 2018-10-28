let aloitus, lopetus;

aloitus = +prompt("Anna aloitus vuosi");
lopetus = +prompt("Anna lopetus vuosi");

document.write("<ul>");

while (aloitus<=lopetus) {

  if (aloitus%4!=0) {
    aloitus++;
  }
  else if (aloitus%400==0) {
    document.write("<li>" + aloitus + "</li>");
    aloitus+=4;
  }
  else if (aloitus%100==0){
    aloitus++;
  }
  else {
    document.write("<li>" + aloitus + "</li>");
    aloitus+=4;
  }

}

document.write("</ul>");