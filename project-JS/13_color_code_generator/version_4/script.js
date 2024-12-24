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
        listItem.className = 'data_list_item';

        // Hex Color Code
        let colorCodeDiv = document.createElement('div');
        colorCodeDiv.textContent = color; 
        colorCodeDiv.className = 'data_list_item_color_code';
        
        // Color Preview
        let colorPreviewDiv = document.createElement('div');
        colorPreviewDiv.style.backgroundColor = color; 
        colorPreviewDiv.className = 'data_list_item_color_img';

        // Copy Button
        let copyButtonDiv = document.createElement('button');
        copyButtonDiv.className = 'data_list_item_color_copy';
        let copyIcon = document.createElement('i');
        copyIcon.className = 'fa-solid fa-copy fa-xl';
        copyIcon.style.color = '#000';
        copyButtonDiv.appendChild(copyIcon);
        copyButtonDiv.onclick = () => {
            navigator.clipboard.writeText(color);
            alert(`Copied: ${color}`);
        };

        // Create a button element
        let deleteButtonDiv = document.createElement('button');
        deleteButtonDiv.className = 'data_list_item_color_delete';
        let deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-solid fa-trash fa-lg';
        deleteIcon.style.color = '#ff0000';
        deleteButtonDiv.appendChild(deleteIcon);

        listItem.appendChild(colorCodeDiv);
        listItem.appendChild(colorPreviewDiv);
        listItem.appendChild(copyButtonDiv);
        listItem.appendChild(deleteButtonDiv);
        record_display.appendChild(listItem);
        
    });
};

