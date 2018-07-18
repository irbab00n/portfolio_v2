module.exports = (nextYOffset, jumbotronHeight) => {
  let nav = document.getElementsByClassName('navigation')[0];
  let mobileNavToggle = document.getElementsByClassName('mobile-nav-toggle')[0];

  if (mobileNavToggle.classList.contains('is-active')) {
    return;
  }

  let toggled = nav.classList.contains('toggled');

  if (nextYOffset >= jumbotronHeight - nav.offsetHeight && nextYOffset !== 0) {
    toggled ? null : nav.classList.toggle('toggled');
  } else {
    toggled ? nav.classList.toggle('toggled') : null;
  }
}