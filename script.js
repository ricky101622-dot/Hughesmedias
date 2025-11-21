document.addEventListener('DOMContentLoaded', () => {

    const chatBubble = document.getElementById('chatbox_bubble');
    const toggleButton = document.getElementById('toggle_button');

    toggleButton.addEventListener('click', () => {
        console.log('clicked');
        chatBubble.classList.toggle('expanded');
    });

});
