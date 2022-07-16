const bgModal = document.querySelector('.modal-overlay'),
    mainModal = document.querySelector('.modal-wrapper'),
    openModalBtn = document.querySelector('.add-new-btn'),
    closeModalBtn = document.querySelector('.cancel-btn');

function openModal() {
    bgModal.classList.add('modal-overlay-created');
    mainModal.classList.add('modal-wrapper-created');

    setTimeout(() => {
        bgModal.classList.add('modal-overlay-activated')
    }, 100);

    setTimeout(() => {
        mainModal.classList.add('modal-wrapper-activated')
    }, 200);
}

function closeModal() {
    bgModal.classList.remove('modal-overlay-activated');
    mainModal.classList.remove('modal-wrapper-activated');

    setTimeout(() => { bgModal.classList.remove('modal-overlay-created');
    mainModal.classList.remove('modal-wrapper-created') }, 100)
}

window.onclick = function (e) {
    if (e.target.classList.contains('modal-overlay')) {
        closeModal();
    }
}


openModalBtn.addEventListener("click", function(){
    openModal()
});
closeModalBtn.addEventListener("click", function(){
    closeModal()
});
