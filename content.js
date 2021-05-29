chrome.storage.sync.get('state', function (data) {
  if (!data.state) {// se n tiver estado
    chrome.storage.sync.set({ state: 'on' })
  }
  if (data.state === 'on')
    applyChanges();

});

// Watch for changes to the user's options & apply them
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'sync' && changes.state === "on") {
    applyChanges();
  } else
    window.location.reload()
});


function applyChanges() {
  let itens = document.getElementsByClassName('dropdown-item');

  for (let i of itens) {
    if (i.title)
      i.innerHTML = i.title;
  }
}



