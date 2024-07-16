function pickFirstResult() {
  try {
    const firstResult = document.querySelector('a h3').closest('a');
    if (firstResult) {
      window.location.href = firstResult.href;
    } else {
      console.error('First result not found');
    }
  } catch (error) {
    console.error('Error picking first result:', error);
  }
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "pickFirstResult") {
    pickFirstResult();
    sendResponse({status: "done"});
  }
});
