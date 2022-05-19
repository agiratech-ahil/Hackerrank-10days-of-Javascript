function reverseString(s) {
  try {
    var arr1 = s.split("");
    var rev = arr1.reverse();
    var join = rev.join("");
    console.log(join);
  } catch (err) {
    console.log(err.message);
    console.log(s);
  }
}
