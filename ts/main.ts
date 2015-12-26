/// <reference path="../js/lib/jquery.d.ts"/>
/// <reference path="ui.ts"/>
/// <reference path="person.ts"/>
/// <reference path="gEvent.ts"/>
/// <reference path="util.ts"/>

enum RoomType {
	CommonRoom
}

class Work {
	progress: number;
	work: number;
	// result: ??;
	relatedStat: Stats;

	constructor(work: number) {
		this.progress = 0;
		this.work = work;
	}
}

class Room {
	type: RoomType
	people: Array<Person>;
	work: Work;

	constructor(type: RoomType) {
		this.people = new Array<Person>();
		this.type = type;
	}
}

class Game {
	ui: UI;
	people: Array<Person>;
	rooms: Array<Room>;

	constructor() {
		this.ui = new UI();
		this.rooms = new Array<Room>();
		this.people = new Array<Person>();
		this.init();
	}

	init(): void {
		EventType.setup();

		// Test stuff

		let room = new Room(RoomType.CommonRoom);
		this.rooms.push(room);

		let roger = new Person("Roger McMillen");
		let lisa = new Person("Lisa Braces");

		room.people.push(roger);
		room.people.push(lisa);

		//EventType.disagreement.occuredTo(roger);

		this.ui.dwellerList.on('click', '.dweller', (event) => {
			alert('bar');
		});

		this.tick();
	}

	tick(): void {
		for(var room of this.rooms) {
			console.log("A room: " + RoomType[room.type]);

			var first = Util.pickOne(room.people);
			var rest = room.people.filter(p => p !== first);
			var second = Util.pickOne(rest);

			first.interact(second);
		}
	}
}

const game = new Game();
