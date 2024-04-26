function submit() {
    var nameInput = document.getElementById('Name').value;
    var emailInput = document.getElementById('Email').value;
    var numberInput = document.getElementById('Number').value;
    var messageInput = document.getElementById('Message').value;
    if (emailInput  && nameInput && numberInput && messageInput) {
        alert('Registration successful!');
    } else {
        alert('Please enter  required details ');
    }
}