class Tuple<T, U> {
	constructor(public first: T, public second: U) {
	}
}

class Util {
	static random(max: number, min: number = 0) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	static pickOne<T>(source: Array<T>) : T {
		return source[Util.random(source.length)];
	}

	static enumEach<T>(source: any, fn: (T) => void): void {
		for(let i = 0; i < Util.enumLength(source); i++) {
			fn(source[i]);
		}
	}

	static enumLength(source: any): number {
		// Ugly, hackish solution.
		return Object.keys(source).length / 2;
	}

	/*========//
	Usage:
		Util.weighted([
			new Tuple("value", weight),
			new Tuple("test2", 50),
			new Tuple("test3", 500)
		]);
	//========*/
	static weighted(source: Array<Tuple<any, number>>) {
		let sum = 0;
		source.forEach(t => sum += t.second);

		let selected = Util.random(sum);
		let accumulated = 0;
		for(var item of source) {
			if(selected < item.second + accumulated) {
				return item.first;
			}
			else {
				accumulated += item.second;
			}
		}
	}
}
