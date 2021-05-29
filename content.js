chrome.storage.sync.get('state', function (data) {

  if (!data.state) {// se n tiver estado
    chrome.storage.sync.set({ state: 'on' })
  }
});

// Watch for changes to the user's options & apply them
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'sync' && changes.state === "on") {
    let itens = document.getElementsByClassName('dropdown-item');

    for (let i of itens) {
      if (i.title)
        i.innerHTML = i.title;
    }

  } else
    window.location.reload()
});






