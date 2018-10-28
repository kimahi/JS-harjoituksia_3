let num;

num = prompt("Anna luku");

for (i=2; i<=num; i++) {
  if (num==i){
    alert("Luku on alkuluku");
  }
  else if (num!=i && num%i==0) {
    alert("Luku ei ole alkuluku");
    break;
  }
}