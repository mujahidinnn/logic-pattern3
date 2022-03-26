var n = 9;

for (x = 0; x < n; x++) {
  for (y = 0; y < n; y++) {
    if (x == y) {
      document.write(x * 2 + 1 + " &nbsp ");
    } else if (n - x - 1 == y) {
      document.write(y * 2 + " &nbsp ");
    } else {
      document.write(" - " + " &nbsp");
    }
  }
  document.write("<br>");
}
