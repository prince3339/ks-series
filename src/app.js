(function(window) {
  console.log("Project booted!!!");
  //initialize wow
  //It's for detect if element is inside viewport or not

  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();
  const headerHeight = document.getElementById("ks-header").clientHeight
  const sections = Array.from(document.getElementsByClassName("ks-section"));
  sections.forEach((section) => {
    section.style.marginTop = headerHeight + 30 + 'px';
    console.log(section);
  });
  console.log(sections);

  function gotoSection(targetId, currentId, ignoreOffset) {
    sections.forEach((section) => {
      if (!section.classList.contains(targetId) && !section.classList.contains(currentId)) {
        section.style.visibility = 'hidden';
        if (targetId === 'ks-section1') {
          section.style.marginTop = 0;
          // section.style.height = '20vh';
        } else {
          section.style.height = '50vh';
        }
      } else {
        section.style.visibility = 'visible';
        section.style.height = '100vh';
        section.style.marginTop = headerHeight + 30 + 'px';
      }
      if(section.classList.contains(currentId)) {
        setTimeout(() => (
          section.style.visibility = 'hidden'
        ), 200);
      }
      
      console.log(section);
    });
    console.log(ignoreOffset);
    const offsetIgnored = ignoreOffset ? ignoreOffset : 0;
    const offset = targetId === 'ks-section1' ? 0 : document.getElementById(targetId).offsetTop - offsetIgnored;
    window.scroll({
      top: offset,
      left: 0, 
      behavior: 'smooth'
    })
  }
  window.gotoSection = gotoSection;
})(window);