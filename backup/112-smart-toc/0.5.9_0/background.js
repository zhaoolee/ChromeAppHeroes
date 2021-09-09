const getCurrentTab = (cb) => {
  chrome.tabs.query({ active: true, currentWindow: true }, ([activeTab]) => {
    cb(activeTab)
  })
}

const execOnCurrentTab = (command) => {
  getCurrentTab((tab) => {
    if (tab) {
      chrome.tabs.sendMessage(tab.id, command, (response) => {
        if (command === 'toggle' && response === undefined) {
          chrome.tabs.executeScript(tab.id, {
            file: 'toc.js',
            allFrames: true,
          })
        }
      })
    }
  })
}

chrome.browserAction.onClicked.addListener(() => execOnCurrentTab('toggle'))
chrome.commands.onCommand.addListener((command) => execOnCurrentTab(command))
