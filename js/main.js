// Modal JS

const body = document.body,
    bgModal = document.querySelector('.modal-overlay'),
    mainModal = document.querySelector('.modal-wrapper'),
    openModalBtn = document.querySelector('.add-new-btn'),
    mainDocument = document.documentElement,
    widthWithScroll = mainDocument.clientWidth,
    widthWithoutScroll = body.offsetWidth,
    closeModalBtn = document.querySelector('.cancel-btn');
console.log(widthWithScroll);
console.log(widthWithoutScroll);

function openModal() {
    body.classList.add('clear-body-scroll');
    body.style.marginRight = 
    `${widthCalced}px`;

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
    body.classList.remove('clear-body-scroll');
    body.style.marginRight = "";

    bgModal.classList.remove('modal-overlay-activated');
    mainModal.classList.remove('modal-wrapper-activated');

    setTimeout(() => { bgModal.classList.remove('modal-overlay-created');
    mainModal.classList.remove('modal-wrapper-created') }, 500)
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


// Scroll calc JS

const widthCalced = widthWithScroll - widthWithoutScroll;
console.log(`${widthCalced}px`);
console.log(widthWithoutScroll - widthWithScroll); 