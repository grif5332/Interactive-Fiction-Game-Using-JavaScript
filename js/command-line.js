cmdInput.addEventListener('change', () => {
    let cmdText = cmdInput.value;
    cmdInput.value = "";
    // roomDesc.innerHTML += `<p id="cmd-text">${cmdText}</p>`;
    checkCmdInput(cmdText);
    roomDesc.scrollIntoView(false);  //this forces the scroll bar to the bottom
})

/* === command-line.js ==============================
+   This script is the command line input script.   +
+   It takes the value of the input box and sends   + 
+   the data to the appropriate script for further  +
+   processing.                                     + 
===================================================== */