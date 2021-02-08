const NMHOST = 'com.github.teamdocs.kcmd';

function createNMPromise(command) {
	return new Promise(resolve => browser.runtime.sendNativeMessage(NMHOST, { command: command }, response => {
		resolve(response);
	}));
}
