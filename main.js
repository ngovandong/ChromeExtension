function clickAll() {
  list = document.querySelectorAll("button");
  for (const ele of list) {
    if (ele.innerText == "Lưu") ele.click();
    console.log("click");
  }
}

function scrollDown() {
  for (let index = 0; index < 10; index++) {
    setTimeout(() => {
      window.scrollTo(0, 3000);
      console.log("hehe");
    }, index * 500);
  }
}

scrollDown();
setTimeout(() => {
  clickAll();
}, 3000);
