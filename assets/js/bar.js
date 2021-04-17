var barBox = document.getElementById("bar-box");
var barMenu = document.getElementById("bar-menu");
var barItems = document.getElementsByClassName("bar");
let flag = false;

function specifyAction(listOfClasses, className, valueOfAction) {
	if (valueOfAction == "add")
		for (elem of listOfClasses)
			elem.classList.add(className)
	else if (valueOfAction == "remove")
			for (elem of listOfClasses)
				elem.classList.remove(className);
}

window.addEventListener("resize", function() {
	if (window.matchMedia("(min-width: 767px)").matches) {
		barMenu.style.display = "none";
		barBox.classList.remove("cross");
	}
})

barBox.addEventListener("click", function () {
	if (!flag) {
		barMenu.style.display = "flex";
		barBox.classList.add("cross");
		flag = true;
	} else {
		barMenu.style.display = "none";
		barBox.classList.remove("cross");
		flag = false;
	}
});