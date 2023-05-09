
function typeWriter(str, time = 50){
  let delay = 0;
  for (const char of str) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += time;
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, str.length * time);
}

typeWriter("hello there from lighthouse labs", 100);
