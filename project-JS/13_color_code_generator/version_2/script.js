let display = document.getElementById('display');
let hexColorCodeInput = document.getElementById('hexColorCode');
let messageInput = document.getElementById('message');
let record_display = document.getElementById('record_display');
let recordCopiedColor = [];

let getHexColorCode = "";

let generateHexColor = () => {
    let hexColor = `#${Math.random().toString(16).slice(2,8).padStart(6,0)}`;
    getHexColorCode = hexColor;
    display.style.backgroundColor = hexColor; 
    hexColorCodeInput.value = getHexColorCode;
};

let copyColor = () => {
    if (getHexColorCode) {
        navigator.clipboard.writeText(getHexColorCode)
            .then(() => {
                	messageInput.value = 'copied';
                    recordCopiedColor.push(getHexColorCode);                  
                    updateRecordList();
                setTimeout(() =>{
                	messageInput.value = '';
                },1000)
            })
            .catch(err => {
                console.error('Error copying color code:', err);
            });
    } else {
        alert('Generate a color first!');
    }
};

let updateRecordList = () => {
    record_display.innerHTML = '';
    recordCopiedColor.forEach((color) => {
        let listItem = document.createElement('div');
        listItem.textContent = color;
        listItem.className = 'data_list_item';
        listItem.style.marginBottom = '5px';
        listItem.style.color = '#fff';
        listItem.style.fontSize = '22px';
        listItem.style.fontWeight = 'bold';
        record_display.appendChild(listItem);
    });
};

