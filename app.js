/*
Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

*/

let triangle = "#";

for (let i = 0; i < 7; i++) {
  if (triangle.length === 1) {
    console.log(triangle);
    triangle = triangle + "#";
  } else {
    console.log(triangle);
    triangle = triangle + "#";
  }
}