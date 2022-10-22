var CURRENT_VERSION = "5";

function SettingsManager() {}

SettingsManager.prototype.load = function() {
	try {
		// load data from local storage
		var data = localStorage["settings"];
		
		// attempt to parse, if unable then make the assumption it has been corrupted
		return JSON.parse(data)
	} catch(error) {
		var settings = this.init();
		settings.error = "Error: "+error+"|Data:"+data;
		return settings;
	}
};

SettingsManager.prototype.save = function(settings) {
	// remove any error messages from object (shouldn't be there)
	if (settings.error !== undefined) {
		delete settings.error;
	}
	
	localStorage["settings"] = JSON.stringify(settings);
};

SettingsManager.prototype.isInit = function() {
	return (localStorage["version"] !== undefined);
};

SettingsManager.prototype.isLatest = function() {
	return (localStorage["version"] === CURRENT_VERSION);
};

SettingsManager.prototype.init = function() {
	// create default settings for first time user
	var settings = {
			"actions": {
				"101": {
					"mouse": 0,  // left mouse button
					"key": 90,   // z key
					"action": "tabs",
					"color": "#FFA500",
					"options": {
						"smart": 0,
						"ignore": [0],
						"delay": 0,
						"close": 0,
						"block": true,
						"reverse": false,
						"end": false
					}
				}
			},
			"blocked": []
		};

	// save settings to store
	localStorage["settings"] = JSON.stringify(settings);
	localStorage["version"] = CURRENT_VERSION;
	
	return settings;
};


SettingsManager.prototype.update = function() {
	if (!this.isInit()) {
		this.init();
	}
};
