/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"cg/tr/com/cgui/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});