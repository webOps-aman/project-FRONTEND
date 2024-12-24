let display = document.getElementById('display');
let hexColorCodeInput = document.getElementById('hexColorCode');
let messageInput = document.getElementById('message');
let record_display = document.getElementById('record_display');

// Retrieve data from localStorage or initialize as an empty array
let recordCopiedColor = JSON.parse(localStorage.getItem('recordCopiedColor')) || [];

// Current hex color
let getHexColorCode = "";

// Generate a random hex color
let generateHexColor = () => {
  let hexColor = `#${Math.random().toString(16).slice(2, 8).padStart(6, 0)}`;
  getHexColorCode = hexColor;
  display.style.backgroundColor = hexColor;
  hexColorCodeInput.value = getHexColorCode;
};

// Copy color to clipboard
let copyColor = () => {
  if (getHexColorCode) {
    navigator.clipboard.writeText(getHexColorCode).then(() => {
      messageInput.value = 'Copied!';
      recordCopiedColor.push(getHexColorCode);
      localStorage.setItem('recordCopiedColor', JSON.stringify(recordCopiedColor));
      updateRecordList();
      setTimeout(() => (messageInput.value = ''), 1000);
    });
  } else {
    alert('Generate a color first!');
  }
};

// Update the record display
let updateRecordList = () => {
  record_display.innerHTML = '';
  recordCopiedColor.forEach((color, index) => {
    let listItem = document.createElement('div');
    listItem.className = 'data_list_item';

    // Color code display
    let colorCodeDiv = document.createElement('div');
    colorCodeDiv.textContent = color;
    colorCodeDiv.className = 'data_list_item_color_code';

    // Color preview
    let colorPreviewDiv = document.createElement('div');
    colorPreviewDiv.style.backgroundColor = color;
    colorPreviewDiv.className = 'data_list_item_color_img';

    // Copy button
    let copyButtonDiv = document.createElement('button');
    copyButtonDiv.className = 'data_list_item_color_copy';
    let copyIcon = document.createElement('i');
    copyIcon.className = 'fa-solid fa-copy fa-xl';
    copyButtonDiv.appendChild(copyIcon);
    copyButtonDiv.onclick = () => {
      navigator.clipboard.writeText(color);
      alert(`Copied: ${color}`);
    };

    // Delete button
    let deleteButtonDiv = document.createElement('button');
    deleteButtonDiv.className = 'data_list_item_color_delete';
    let deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa-solid fa-trash fa-lg';
    deleteButtonDiv.appendChild(deleteIcon);
    deleteButtonDiv.onclick = () => {
      recordCopiedColor.splice(index, 1);
      localStorage.setItem('recordCopiedColor', JSON.stringify(recordCopiedColor));
      updateRecordList();
    };

    listItem.appendChild(colorCodeDiv);
    listItem.appendChild(colorPreviewDiv);
    listItem.appendChild(copyButtonDiv);
    listItem.appendChild(deleteButtonDiv);
    record_display.appendChild(listItem);
  });
};

// Clear clipboard history
let clearHistory = () => {
  recordCopiedColor = [];
  localStorage.removeItem('recordCopiedColor');
  updateRecordList();
};

// Call updateRecordList after its definition
updateRecordList();
