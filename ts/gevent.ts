/// <reference path="person.ts"/>

class EventType
{
	static disagreement: EventType;

	static setup()
	{
		EventType.disagreement = new EventType("disagreement");
	}

	name: string;

	constructor(name: string)
	{
		this.name = name;
	}

	occuredTo(person: Person): void
	{
		console.log(this.name + " occured to " + person.name);
	}
}
