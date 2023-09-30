function setName() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();

    if (name !== ' ') {
        const output = document.getElementById('output');
        output.textContent = "You named it: ${name}";
    } else {
        alert("Please enter a valid name.");
    }
}
