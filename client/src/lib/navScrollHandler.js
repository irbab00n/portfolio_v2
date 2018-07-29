module.exports = (nextYOffset, jumbotronHeight) => {
  let navContainer = document.getElementsByClassName('navigation')[0];
  let navEl = document.getElementsByTagName('nav')[0];
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

  let containerHasToggled = navContainer.classList.contains('toggled');
  let elHasToggled = navEl.classList.contains('toggled');

  if (nextYOffset >= jumbotronHeight - navContainer.offsetHeight && nextYOffset !== 0) {
    containerHasToggled ? null : navContainer.classList.toggle('toggled');
    elHasToggled ? null : navEl.classList.toggle('toggled');
  } else {
    containerHasToggled ? navContainer.classList.toggle('toggled') : null;
    elHasToggled ? navEl.classList.toggle('toggled') : null;
  }
}