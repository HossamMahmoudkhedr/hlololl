// const sections = document.querySelectorAll('.section');
// console.log(sections);
// sections.forEach((section) => {
// 	section.onclick = (e) => {
// 		const target = e.target;
// 		if (
// 			target.classList.contains('pic') ||
// 			target.classList.contains('img-responsive') ||
// 			target.classList.contains('c_name')
// 		) {
// 			sections.forEach((section) => {
// 				section.classList.remove('show');
// 			});
// 			section.classList.toggle('show');
// 		}
// 	};
// });

const form = document.querySelector('form');
const searchBtn = document.getElementById('searchBtn');
const downloadBtn = document.getElementById('downloadBtn');
const downloadAlert = document.getElementById('downloadAlert');
const showBook = document.getElementById('showBook');
const viewBook = document.getElementById('viewBook');
const sections = document.querySelectorAll('.section');
const summaries = document.querySelectorAll('.summary');

const showItem = () => {
	console.log('clicked');
	form.classList.toggle('showItem');
};

sections.forEach((section, i) => {
	section.onclick = (e) => {
		const target = e.target;

		if (
			target.classList.contains('pic') ||
			target.classList.contains('img-responsive') ||
			target.classList.contains('c_name')
		) {
			sections.forEach((section, index) => {
				if (i !== index) {
					section.classList.remove('showItem');
				}
			});
			section.classList.toggle('showItem');
			summaries.forEach((summary, i) => {
				if (
					summary.getAttribute('data-id') === section.getAttribute('data-id')
				) {
					summaries.forEach((summary, index) => {
						if (i !== index) {
							summary.classList.remove('showItem');
						}
					});
					summary.classList.toggle('showItem');
				}
			});
		}
	};
});

searchBtn ? searchBtn.addEventListener('click', showItem) : '';
if (downloadBtn && downloadAlert) {
	downloadBtn.addEventListener('click', () => {
		console.log('clicked');
		downloadAlert.classList.add('showItem');
		setTimeout(() => {
			downloadAlert.classList.remove('showItem');
		}, 3000);
	});
}

if (showBook && viewBook) {
	let curr = viewBook.innerHTML;
	let content = `
		<embed
						src="./books/The_React__Axios_Cheatsheet.pdf"
						type="application/pdf"
						frameBorder="0"
						scrolling="auto"
						height="100%"
						width="100%" />
	`;
	showBook.addEventListener('click', () => {
		if (viewBook.innerHTML === curr) {
			viewBook.innerHTML = content;
		}
	});
}
