function encodeAndDecodeMessages() {
    let inputField = document.querySelector("#main  div:nth-child(1)  textarea");
    let sendButton = document.querySelector("#main  div:nth-child(1)  button");
    let receiveField = document.querySelector("#main  div:nth-child(2)  textarea");
    let readButton = document.querySelector("#main  div:nth-child(2)  button");
    sendButton.addEventListener('click', encode);
    readButton.addEventListener('click', decode);
    function encode(){
        let encodedMessage = (inputField.value).split('').map((e) => String.fromCharCode(e.charCodeAt(e) + 1));
        receiveField.value = encodedMessage.join('');
        inputField.value = '';
    };
    function decode(){
        let decodedMessage = receiveField.value.split('').map((e) => String.fromCharCode(e.charCodeAt(e) - 1));
        decodedMessage = decodedMessage.join('');
        receiveField.value = decodedMessage;
    };
}
