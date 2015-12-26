/// <reference path="util.ts"/>

enum Stats {
	Strength,
	Perception,
	Endurance,
	Charisma,
	Intelligence,
	Agility,
	Luck
}

enum InteractionType {
	Chat,
	Insult
}

class Person {
	static idCounter: number = 0;

	id: number;
	name: string;
	stats: { [stat: number]: number } = {};
	relations: { [personId: number]: number } = {};

	constructor(name: string) {
		this.name = name;
		this.id = Person.idCounter++;
		Util.enumEach(Stats, s => {
			this.stats[Stats[s]] = Util.random(1, 11); // 11 because random is [..)
		});
	}

	alterRelationTo(person: Person, amount: number) {
		this.relations[person.id] = this.relationTo(person) + amount;
	}

	relationTo(person: Person): number {
		if(person.id in this.relations) {
			return this.relations[person.id];
		}
		else {
			return 0;
		}
	}

	interact(other: Person): void {
		let interactionType = Util.weighted([
			new Tuple(InteractionType.Chat, 200),
			new Tuple(InteractionType.Insult, 50),
		]);

		console.log(`${this.name} -> ${other.name}: ${InteractionType[interactionType]}`);

		if(interactionType == InteractionType.Chat) {
			console.log("Hi!");
			this.alterRelationTo(other, 10);
			other.alterRelationTo(this, 10);
		}

		console.log(`relation, ${this.name} -> ${other.name}: ${this.relationTo(other)}`);
	}
}
