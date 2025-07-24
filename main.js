console.log("JavaScript terhubung!");
window.onload = () => {
  const bars = document.querySelectorAll('.progress-bar');
  bars.forEach(bar => {
    const fill = bar.querySelector('.fill');
    const percent = bar.getAttribute('data-percent');
    if (fill && percent) {
      fill.style.width = percent;
    }
  });
};
