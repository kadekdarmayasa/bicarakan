window.addEventListener('load', function () {
	const hamburgerMenu = this.document.querySelector('.hamburger-menu');
	hamburgerMenu.addEventListener('click', function () {
		hamburgerMenu.classList.toggle('nav-menu');
	});
});

window.addEventListener('scroll', function () {
	if (Math.floor(this.document.documentElement.scrollTop) > 152) {
		this.document.querySelector('.navbar').classList.add('bg-[#fbebf6e6]', 'backdrop-blur-lg', 'shadow-sm');
	} else {
		this.document.querySelector('.navbar').classList.remove('bg-[#fbebf6e6]', 'backdrop-blur-lg', 'shadow-sm');
	}
});
