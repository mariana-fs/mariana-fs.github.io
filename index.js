function getInputValue() {
    const inputValue = document.getElementById("myInput").value;
    const decimal = parseInt(inputValue, 2);

    document.getElementById('output').value = decimal;
    return true;
}