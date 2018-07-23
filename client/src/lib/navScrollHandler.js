module.exports = (nextYOffset, jumbotronHeight) => {
  let nav = document.getElementsByClassName('navigation')[0];
  let mobileNavToggle = document.getElementsByClassName('mobile-nav-toggle')[0];
  let jstEl = document.getElementById('jumbotron-scroll-target');

  let jstTrigger = (jumbotronHeight * 0.7) - jstEl.offsetHeight;

  if (mobileNavToggle.classList.contains('is-active')) {
    return;
  }
  let targetHasToggled = jstEl.classList.contains('toggled');

  if (nextYOffset >= jstTrigger) {
    targetHasToggled ? null : jstEl.classList.toggle('toggled');
  } else if (nextYOffset < jstTrigger && nextYOffset >= 0) {
    targetHasToggled ? jstEl.classList.toggle('toggled') : null;
  }

  let hasToggled = nav.classList.contains('toggled');

  if (nextYOffset >= jumbotronHeight - nav.offsetHeight && nextYOffset !== 0) {
    hasToggled ? null : nav.classList.toggle('toggled');
  } else {
    hasToggled ? nav.classList.toggle('toggled') : null;
  }
}