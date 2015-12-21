/// <reference path="references.ts"/>

class Tab {
	id: string;
	body: JQuery;
	label: JQuery;

	constructor(tab: string) {
		this.id = tab;
		this.label = $('[tab=' + tab + ']');
		this.body = $('#' + tab);
	}
}

class UI {
	tabs: JQuery;
	labels: JQuery;
	gameTab: Tab;
	inventoryTab: Tab;
    dwellerList: JQuery;

	constructor() {
		this.setup();
		this.init();
	}

	setup(): void {
		this.tabs = $('.tab');
		this.labels = $('.tab-label');
		this.gameTab = new Tab('gametab');
		this.inventoryTab = new Tab('inventorytab');

        this.dwellerList = $('#' + this.gameTab.id + ' #dwellerlist');

		this.labels.click((event) => {
			const targetTabId = event.target.attributes["tab"].value;
			const targetTab = $(`#${targetTabId}`);

			this.tabs.hide();
			targetTab.show();
		});
	}

	init(): void {
		// start with only gameTab visible.
		this.tabs.hide();
		this.gameTab.label.click();
        this.dwellerList.append('<a class="dweller">Test McTest</p>');
	}
}

class Game {
	ui: UI;
	people: Array<Person>;

	constructor() {
		this.ui = new UI();
		this.init();
	}

	init(): void {
		this.people = new Array<Person>();
		console.log(this.people);
		this.people.push(new Person("Roger McMillen"));
		console.log(this.people);

		this.ui.dwellerList.on('click', '.dweller', (event) => {
			alert('bar');
		});
	}
}

const game = new Game();
