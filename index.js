window.onscroll = function () {
  var top = window.scrollY;
  console.log(top);
  if (top>=875 && top<=923) {
    document.getElementById("cent").classList.add("active");
  } else{
    document.getElementById("cent").classList.remove("active");
  }
};
