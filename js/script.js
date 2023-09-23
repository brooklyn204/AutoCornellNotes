document.getElementById('submitBtn').addEventListener('click', function() {
    let notes = document.getElementById('notesArea').value;
    if (notes.trim() === "") {
        alert("Please enter some notes before submitting!");
    } else {
        alert("Notes submitted!");
    }
});

