(function(window) {
  console.log("Project booted!!!");
  const headerHeight = document.getElementById("ks-header").clientHeight
  function init() {
    document.getElementById("ks-content").style.height = "100vh";
    document.getElementById("ks-section1").style.marginTop = headerHeight + 30 + 'px';
  }
  function gotoSection(targetId, currentId, ignoreOffset) {
    const header = document.getElementById('ks-header');
    const targetSection = document.getElementById(targetId);
    const currentSection = document.getElementById(currentId);
    // if(targetId === 'ks-section2' || targetId === 'ks-section3') {
    //   document.getElementById(targetId).style.marginTop =  headerHeight + 'px';
    // }
    if(
      targetId === 'ks-section4' ||
      targetId === 'ks-section5' ||
      targetId === 'ks-section6' ||
      targetId === 'ks-section7'
    ) {
      const footerHeight = document.querySelector('#'+targetId + '> .ks-actions').clientHeight;
      
      document.querySelector(`#${targetId} svg`).style.height = `calc(100vh - ${footerHeight + headerHeight + 80}px)`;
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

  window.addEventListener("resize", () => {
    init();
  });
  window.gotoSection = gotoSection;
})(window);