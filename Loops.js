function vowelsAndConsonants(s) {
  let c, d;
  for (let i = 0; i <= s.length - 1; i++) {
    c = s[i];
    if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u") {
      console.log(c);
    }
  }
  for (let j = 0; j <= s.length - 1; j++) {
    d = s[j];
    if (!(d == "a" || d == "e" || d == "i" || d == "o" || d == "u")) {
      console.log(d);
    }
  }
}
