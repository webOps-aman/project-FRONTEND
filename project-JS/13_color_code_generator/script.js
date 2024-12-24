let display = document.getElementById('display');
let hexColorCodeInput = document.getElementById('hexColorCode');
let messageInput = document.getElementById('message');
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
