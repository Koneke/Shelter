/// <reference path="../js/lib/jquery.d.ts"/>
/// <reference path="game.ts"/>

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
	game: Game;

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

const ui = new UI();
ui.game = new Game(ui);
// const game = new Game();
