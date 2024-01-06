function waitForElementToAppear() {
  const element = document.getElementsByClassName("rup__animation");

  if (element.length > 0) {
    element[0].remove();
  }
}

const interval = setInterval(waitForElementToAppear, 2222);