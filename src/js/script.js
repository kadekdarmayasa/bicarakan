const removeNavBg = () => document.querySelector('.navbar').classList.remove('bg-[#fbebf6e6]', 'backdrop-blur-lg', 'shadow-sm');
const addNavBg = () => document.querySelector('.navbar').classList.add('bg-[#fbebf6e6]', 'backdrop-blur-lg', 'shadow-sm');

window.addEventListener('scroll', function () {
	Math.floor(this.document.documentElement.scrollTop) > 80 ? addNavBg() : removeNavBg();

	const hamburgerMenu = document.querySelector('.hamburger-menu');
	hamburgerMenu.addEventListener('click', function () {
		hamburgerMenu.classList.toggle('nav-menu');
	});

	const navItem = document.querySelectorAll('.nav-item');
	navItem.forEach((item) => {
		item.addEventListener('click', function () {
			hamburgerMenu.classList.remove('nav-menu');
		});
	});

	activeLink();
});

const navLinkContents = document.querySelectorAll('.nav-link-content');
function activeLink() {
	let current = '';

	navLinkContents.forEach((content) => {
		const sectionTop = content.offsetTop;
		if (scrollY >= sectionTop - 250) {
			current = content.getAttribute('id');
		}
	});

	const navLinkItems = document.querySelectorAll('.nav-item a');
	navLinkItems.forEach((item) => {
		item.classList.remove('active');
		if (item.classList.contains(current)) {
			item.classList.add('active');
		}
	});
}
