/// <reference path="../lib/jquery.d.ts"/>

class Tab {
	body: JQuery;
	label: JQuery;

	constructor(tab: string) {
		this.label = $('[tab=' + tab + ']');
		this.body = $('#' + tab);
	}
}

class UI {
	tabs: JQuery;
	labels: JQuery;
	gameTab: Tab;
	inventoryTab: Tab;

	constructor() {
		this.setup();
		this.init();
	}

	setup(): void {
		this.tabs = $('.gametab');
		this.labels = $('.tab-label');
		this.gameTab = new Tab('gametab');
		this.inventoryTab = new Tab('inventorytab');

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
	}
}

class Game {
	ui: UI;

	constructor() {
		this.ui = new UI();
	}
}

const game = new Game();
