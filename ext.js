let checkmark = document.getElementById("on-off-switch");
let isChecked;
readLocalStorage().then((r) => {
    if (r === 'on'){
        checkmark.checked = true
        isChecked = true;
    }
    else{
        checkmark.checked = false;
        isChecked = false;
    }
    checkmark.addEventListener("click", click)
});

// Functions :

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

function click() {
    isChecked ? uncheck() : check()
}

function check() {
    chrome.storage.sync.set({ state: 'on' });
    isChecked = true;
}

function uncheck() {
    chrome.storage.sync.set({ state: 'off' });
    isChecked = false;
}

