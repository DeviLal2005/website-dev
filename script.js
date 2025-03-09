function openModal(title, imageUrl) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-image').src = imageUrl;
    document.getElementById('modal').style.display = "block";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}

