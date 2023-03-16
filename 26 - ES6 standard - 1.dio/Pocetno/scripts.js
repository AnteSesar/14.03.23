function getX() {
	return Math.random() >= 0.5;
}

// var getX = () => Math.random() >= 0.5;  === drugi način (bolji???) pisanja ovoga iznad

console.log(getX());

var wait = new Promise((resolve, reject) => {
	const x = getX();
	if (x) {
		return setTimeout(resolve, 0);
	}
	return setTimeout(reject, 0);
})
.then(() => console.log("Y"))
.catch(() => console.log("N"));
