(function(window) {
  console.log("Project booted!!!");
  var headerHeight = document.getElementById("ks-header").clientHeight
  function init() {
    document.getElementById("ks-content").style.height = "100vh";
    document.getElementById("ks-section1").style.marginTop = headerHeight + 30 + 'px';
  }
  function gotoSection(targetId, currentId, ignoreOffset) {
    var header = document.getElementById('ks-header');
    var targetSection = document.getElementById(targetId);
    var currentSection = document.getElementById(currentId);
    // if(targetId === 'ks-section2' || targetId === 'ks-section3') {
    //   document.getElementById(targetId).style.marginTop =  headerHeight + 'px';
    // }
    if(
      targetId === 'ks-section4' ||
      targetId === 'ks-section5' ||
      targetId === 'ks-section6' ||
      targetId === 'ks-section7'
    ) {
      var footerHeight = document.querySelector('#'+targetId + '> .ks-section--desktop .ks-actions').clientHeight;
      var totalHeight = footerHeight + headerHeight + 80;
      document.querySelector('#' + targetId + ' ' + '.ks-section--desktop svg').style.height = "calc(100vh - " + totalHeight + "px)";
    }
    if (targetId !== 'ks-section1') {
      document.getElementById('ks-header').classList.add('ks-header--notitle');
    } else {
      header.classList.remove('ks-header--notitle');
    }
    targetSection.style.display = 'block';
    targetSection.classList.remove('fadeOut');
    targetSection.classList.add('fadeIn');

    currentSection.classList.remove('fadeIn');
    currentSection.classList.add('fadeOut');
    currentSection.style.display = 'none';
  }
  init();

  window.addEventListener("resize", function() {
    init();
  });
  window.gotoSection = gotoSection;
})(window);