let maara, summa, nopsum, noppa, yht, kerta;

maara = prompt("Noppien määrä");
summa = prompt("Noppien summa");
kerta = 10000;
nopsum = 0;
yht = 0;

for (i=1; i<kerta; i++) {
  for (j=1; j<=maara; j++) {
    noppa = (Math.random() * (6 - 1) + 1).toFixed();
    nopsum = parseInt(nopsum) + parseInt(noppa)
  }
  if (nopsum==summa) {
    yht++;
  }
  nopsum = 0;
}

alert("Todennäköisyys on " + ((yht/kerta)*100).toFixed(3)+ "%");