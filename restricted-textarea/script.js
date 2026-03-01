let textArea = document.getElementById('textArea');
let charCount = document.getElementById('charCount');

textArea.value = '';
charCount.textContent = textArea.value.length + ' / ' + textArea.maxLength;

textArea.addEventListener('input', function() {
    charCount.textContent = textArea.value.length + ' / ' + textArea.maxLength;
    
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';

    if (textArea.value.length >= textArea.maxLength) {
        textArea.style.color = 'darkred';
        textArea.style.borderColor = 'red';
    }
});