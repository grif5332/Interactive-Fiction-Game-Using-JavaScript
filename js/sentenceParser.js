const action = ['look', 'take', 'use', 'move'];
const movement = ['north', 'east', 'south', 'west'];

let checkCmdInput = (cmdText) => {
    let cmdTextArray = cmdText.split(' ');
    alert(cmdTextArray);
    roomDesc.innerHTML += `<p id="cmd-text-error">${cmdText}</p>`;
        
        
        
        // else {
        //     roomDesc.innerHTML += `<p id="cmd-text-error">I do not understand.</p>`;
        // }
};