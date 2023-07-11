num1 = prompt ("Enter your table number")
num2 = prompt ("Enter your count rows")

for(i=0; i<num2; i++){

document.write(`<h3 style ="text-align:center">${num1} x ${i+1} = ${num1*(i+1)} </br></h3>` )

}