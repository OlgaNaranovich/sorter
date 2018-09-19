class Sorter {
	constructor(num) {
		this.num = [];
		this.setComparator = function(a, b) { return a - b };
	}

	add(element) {
		this.num.push(element);
	}

	at(index) {
		return this.num[index];
	}

	get length() {
		return this.num.length;
	}

	toArray() {
		return this.num;
	}

	sort(indices) {
		let indxs = indices.sort(this.setComparator);
		let segment = [];
		
		for (let i = 0; i < indxs.length; i++) {
			segment.push(this.num[indxs[i]]);
		}
		segment.sort(this.setComparator);
		for (let j = 0; j < segment.length; j++) {
			this.num[indxs[j]] = segment[j];
		}	 
	}

	setComparator(compareFunction) {
		this.setComparator = compareFunction;
	}
}

module.exports = Sorter;