function Calculator(n, op, m) {
  if (op == "+") {
    console.log(n + m);
  } else if (op == "*") {
    console.log(n * m);
  } else if (op == "/") {
    console.log(n / m);
  } else {
    console.log(n - m);
  }

  if (m == 0) {
    console.log("Cant Divide by zero!");
  }
}
Calculator(9, "/", 4);
