module.exports = () => {
  return window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
};