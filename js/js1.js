let num, vast;

vast = 1;
num = prompt("Anna numero");

if (num == 1 || num == 0) {
  alert("Numeron kertoma on 1");
}

for (i=1; i<=num; i++) {
  vast = i * vast;
}

alert("Numeron kertoma on " + vast);