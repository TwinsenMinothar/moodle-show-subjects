let checkmark = document.getElementById("on-off-switch");

readLocalStorage().then((r) => {
    if (r === 'on')
        checkmark.checked = true
    else
        checkmark.checked = false;

    let isChecked = checkmark.checked;
    console.log(isChecked);

    checkmark.addEventListener("click", () => isChecked ? uncheck() : check())
})

function readLocalStorage() {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get('state', function (data) {
            if (data.state)
                resolve(data.state)
            else
                reject()
        });
    });
}

function check() {
    chrome.storage.sync.set({ state: 'on' });
    isChecked = true;
    console.log('check');
}

function uncheck() {
    chrome.storage.sync.set({ state: 'off' });
    isChecked = false;
    console.log('uncheck');
}

