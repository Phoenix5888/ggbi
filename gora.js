
let t = prompt('ВВедите число');
let tree ="";
for (let i=1; i<=t; i++) {
  for (let j=1; j<=t-i; j++) {
    tree+=" "
  }
  for (let k =1; k<=i*2-1; k++){
tree+="*";
  }
if (i<t) tree+="\n"
  }
  
  console.log(tree)