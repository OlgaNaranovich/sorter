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
		
		// console.log(indxs);
		// console.log(segment);

		// return indxs;
	 
	}

	setComparator(compareFunction) {
		this.setComparator = compareFunction;
	}
}

// const sorter2 = new Sorter();
// console.log(sorter2.num);
// sorter2.add(88);
// sorter2.add(3);
// sorter2.add(15);
// sorter2.add(4);
// sorter2.add(158);
// sorter2.add(10);
// console.log(sorter2.num);
// sorter2.sort([4,3]);
// sorter2.sort([4,5]);
// console.log(sorter2.sort([4,3]));

// console.log(sorter2.num);

module.exports = Sorter;