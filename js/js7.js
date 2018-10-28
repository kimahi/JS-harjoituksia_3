let num, yht;
yht = 1;

for (i=1; i<=5; i++) {
  for(j=1; j<=5; j++) {
    num = + Math.random() * ((4*yht+1) - (4*yht-3)) + (4*yht-3);
    yht++;
    document.write(parseInt(num).toFixed() + " ");
  }
  document.write("<br>")
}