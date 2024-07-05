const socket = io('http://localhost:8000');

var audio= new Audio('TingSound.mp3');
const form= document.getElementById('send-container');
const messageInput= document.getElementById('messageInp');
const messageContainer= document.querySelector(".container");
const leaveChat= document.getElementById('leaveBtn');

//writing an append function, to refelect event in chatbox

const append=(message, position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);

}


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const message= messageInput.value
    append(`You:${message}`, 'right')
    socket.emit('send', message);
    messageInput.value='';

    if(position=='left'){
        audio.play();
    }
})

const username= prompt("Enter Name");
socket.emit('new-user-joined', username);


socket.on('user-joined', username=>{
    append(`${username} joined the chat`, 'right');
})

socket.on('receive', data => {
    append(`${data.username}: ${data.message}`, 'left');
});

socket.on('left', username => {
    append(`${username} left the chat`, 'left');
});