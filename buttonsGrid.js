 var btn5 = document.getElementById("btn5")
let pattern = [1, 2, 3, 6, 9, 8, 7, 4];
let ids = [1, 2, 3, 6, 9, 8, 7, 4];

btn5.addEventListener("click", function() {

  pattern = [pattern.pop(), ...pattern.slice(0, 7)];

for (let i = 0; i < ids.length; i++) {
      document.getElementById("btn" + ids[i]).innerHTML = pattern[i];
  }
});
