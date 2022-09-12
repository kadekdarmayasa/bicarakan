window.addEventListener('load', function () {
	const hamburgerMenu = this.document.querySelector('.hamburger-menu');
	hamburgerMenu.addEventListener('click', function () {
		hamburgerMenu.classList.toggle('nav-menu');
	});
});

window.addEventListener('scroll', function () {
	if (Math.floor(this.document.documentElement.scrollTop) > 152) {
		this.document.querySelector('.navbar').classList.add('bg-white/90', 'backdrop-blur-sm');
	} else {
		this.document.querySelector('.navbar').classList.remove('bg-white/90', 'backdrop-blur-sm');
	}
});
