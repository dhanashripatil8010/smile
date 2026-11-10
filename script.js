
function nextPage(pageNumber) {

  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  // Show selected page
  document.getElementById('page' + pageNumber)
    .classList.add('active');

  // Start page from top
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}