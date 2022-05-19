function isPositive(a) {
  if (a > 0) {
    throw { message: "YES" };
  } else if (a < 0) {
    throw { message: "Negative Error" };
  } else if (a == 0) {
    throw { message: "Zero Error" };
  }
}
