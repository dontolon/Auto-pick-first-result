chrome.commands.onCommand.addListener((command) => {
  if (command === "pick-first-result") {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      if (tabs[0].url.includes('google.com')) {
        chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          files: ['content.js']
        }, () => {
          chrome.tabs.sendMessage(tabs[0].id, {action: "pickFirstResult"});
        });
      } else {
        console.error('Command executed on unsupported URL');
      }
    });
  }
});
