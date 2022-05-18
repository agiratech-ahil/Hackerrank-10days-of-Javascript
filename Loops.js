function vowelsAndConsonants(s) {
  const vow = "aeiou";

  var sec = "";

  for (var i = 0; i < s.length; i++) {
    if (vow.includes(s[i])) {
      console.log(s[i]);
    } else {
      sec += s[i] + "\n";
    }
  }

  console.log(sec);
}
