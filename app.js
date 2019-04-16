let theNumber = Number(prompt("Pick a Number"));

if (!Number.isNaN(theNumber)) {
  console.log(`Your number is the square root of ${theNumber * theNumber}`);
} else {
  console.log(`Please Enter a Number`);
}