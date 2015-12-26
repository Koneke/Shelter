/// <reference path="../js/lib/jquery.d.ts"/>
/// <reference path="room.ts"/>
/// <reference path="person.ts"/>
/// <reference path="gEvent.ts"/>
/// <reference path="util.ts"/>

class Game {
	ui: UI;
	people: Array<Person>;
	rooms: Array<Room>;

	constructor(ui: UI) {
		this.ui = ui; // ugly, do we actually need it?

		this.rooms = new Array<Room>();
		this.people = new Array<Person>();
		this.init();
	}

	init(): void {
		EventType.setup();

		// Test stuff

		console.log("===============");

		let room = new Room(RoomType.CommonRoom);
		this.rooms.push(room);

		let roger = new Person("Roger McMillen");
		let lisa = new Person("Lisa Braces");

		room.addPerson(roger);
		room.addPerson(lisa);

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
