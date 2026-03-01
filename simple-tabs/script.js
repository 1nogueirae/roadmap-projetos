function showTab(n){
    document.querySelectorAll('.tab').forEach(tab => {
        tab.style.display = 'none';
    });

    document.querySelector(`#tab${n}`).style.display = 'block';
}