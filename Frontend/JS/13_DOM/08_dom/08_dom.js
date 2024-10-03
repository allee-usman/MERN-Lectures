//$ There are three types of events
//* 1) DOM events i.e mouseover, mouseout etc
//* 2) Browser events i.e scrolling etc
//* 3) Keyboards events i.e press enter btn etc

//? In this file, we will discuss keyboard events
//$ There are three types of keyboards events i.e (keyup events, keydown events. keypress events)
//* keydown: events can be handled for any type of key.  This event is triggered when the user presses a key of the keyboard and it is triggered repeatedly while the user is holding down the key for a long. In simple language keydown means a key has been pressed

//* keypress: events can only be handled for character keys i.e numbers, special characters etc. So we can't use keypress events to handle on functions keys i.e shift, ctrl etc

//* keyup: This event is triggered when the user releases a key of the keyboard. In simple languagekeyup means, that a key has been released.

// Note: Keyboard events are so called global events (i.e do not happen on one web page element), so to handle these events we can use addEventListener() method. Hence we listen these events on whole document i.e: document.addEventListener('keydown', function(e) {//definition})
//? Lets handle keyboard events by key down events

//IDEA: We want to allow user to close popup window by pressing 'esc' button

let modalWindow = document.getElementById('modal-window');

document.addEventListener('keydown', function(event) {
    // console.log(event);
    //assume we press 'd' key on  keyboard
    // console.log(event.keyCode); //Expected Output: 68
    // console.log(event.code); //Expected Output: KeyD
    // console.log(event.key); //Expected Output: d

    //now assume we press 'shift+d' key on keyboard
    // console.log(event.keyCode); //Expected Output: 68
    // console.log(event.code); //Expected Output: KeyD
    // console.log(event.key); //Expected Output: D

    if(event.keyCode === 13 && !(modalWindow.classList.contains('hide'))) {
        hideModalWindow()
    }
    
})


function showModalWindow(e) {

    e.preventDefault();
    let name = document.getElementById('name').value
    let para = document.querySelector('.para')
    para.textContent = `You have entered name: ${name}`
    modalWindow.classList.remove('hide')
}

function hideModalWindow() {
    modalWindow.classList.add('hide')
}

