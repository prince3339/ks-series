(function(window) {
  console.log("LANDED!!!");
  document.getElementById("ks-body").addEventListener("mousewheel", (e) => {
    console.log(e);
    e.preventDefault();
    return null;
  });
})(window);