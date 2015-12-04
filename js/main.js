/// <reference path="../lib/jquery.d.ts"/>
var Tab = (function () {
    function Tab(tab) {
        this.label = $('[tab=' + tab + ']');
        this.body = $('#' + tab);
    }
    return Tab;
})();
var UI = (function () {
    function UI() {
        this.setup();
        this.init();
    }
    UI.prototype.setup = function () {
        var _this = this;
        this.tabs = $('.gametab');
        this.labels = $('.tab-label');
        this.gameTab = new Tab('gametab');
        this.inventoryTab = new Tab('inventorytab');
        this.labels.click(function (event) {
            var targetTabId = event.target.attributes["tab"].value;
            var targetTab = $("#" + targetTabId);
            _this.tabs.hide();
            targetTab.show();
        });
    };
    UI.prototype.init = function () {
        // start with only gameTab visible.
        this.tabs.hide();
        this.gameTab.label.click();
    };
    return UI;
})();
var Game = (function () {
    function Game() {
        this.ui = new UI();
    }
    return Game;
})();
var game = new Game();
