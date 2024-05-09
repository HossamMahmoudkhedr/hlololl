const form = document.querySelector('form');
const searchBtn = document.getElementById('searchBtn');
const downloadBtn = document.getElementById('downloadBtn');
const downloadAlert = document.getElementById('downloadAlert');
const showBook = document.getElementById('showBook');
const book = document.getElementById('book');
const sections = document.querySelectorAll('.section');
const pics = document.querySelectorAll('.pic');
const black = document.querySelector('.black');
const closeIcon = document.querySelectorAll('.closeIcon');

const showItem = () => {
	console.log('clicked');
	form.classList.toggle('showItem');
};

const hidePopUp = (e) => {
	sections.forEach((section) => {
		if (section.classList.contains('showSummary')) {
			section.classList.remove('showSummary');
		}
	});
	black.classList.remove('showBlack');
};

pics.forEach((pic) => {
	pic.onclick = () => {
		pic.parentElement.classList.add('showSummary');
		black.classList.add('showBlack');
	};
});

if (downloadBtn && downloadAlert) {
	downloadBtn.addEventListener('click', () => {
		console.log('clicked');
		downloadAlert.classList.add('showItem');
		setTimeout(() => {
			downloadAlert.classList.remove('showItem');
		}, 3000);
	});
}

const showBookContent = () => {
	book.classList.add('viewBook');
};

if (showBook && book) {
	showBook.addEventListener('click', showBookContent);
}

closeIcon.forEach((icon) => {
	icon.addEventListener('click', hidePopUp);
});

black ? black.addEventListener('click', hidePopUp) : '';
searchBtn ? searchBtn.addEventListener('click', showItem) : '';
