function explode(s) {
  console.log(s.split("").map((e) => e.repeat(e)).join(""));
}

explode('32')