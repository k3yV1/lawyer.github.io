function openForm() {
	var clickBtn = document.getElementById('myForm');

	if (clickBtn.style.display === "block") {
		clickBtn.style.display = "none";
	}else{
		clickBtn.style.display ="block";
	}
}