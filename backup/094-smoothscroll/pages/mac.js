
window.addEventListener('click', function (e) {
	if (e.target.classList.contains('more-btn')) {
		e.target.nextElementSibling.style.display = 'block';
		e.target.style.display = 'none';
		e.preventDefault();
	}
});