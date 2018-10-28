let maara, noppa, yht;

maara = +prompt("Anna noppien määrä");
yht = 0;

for (i=1; i<=maara; i++) {
  noppa = + Math.random() * (6 - 1) + 1;
  yht = parseInt(yht) + parseInt(noppa.toFixed());
}

document.write("Noppien summa on " + yht);