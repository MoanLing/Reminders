// Modal JS

const body = document.body,
    bgModal = document.querySelector('.modal-overlay'),
    mainModal = document.querySelector('.modal-wrapper'),
    openModalBtn = document.querySelector('.add-new-btn'),
    mainDocument = document.documentElement,
    closeModalBtn = document.querySelector('.cancel-btn');

function openModal() {
    body.classList.add('clear-body-scroll');
    body.style.paddingRight = 
    `${getScrollWidth()}px`;
    body.style.overflow = 'hidden';

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

    

    setTimeout(() => {
        body.style.paddingRight = "";
        body.style.overflow = ''
    }, 500);
    

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
const getScrollWidth = () => {
const item = document.createElement('scroll-block');

body.appendChild(item);
    item.style.position = 'absolute';
    item.style.top = '-9999px';
    item.style.width = '50px';
    item.style.height = '50px';
    item.style.overflow = 'scroll';
    item.style.visibility = 'hidden';
const calcedWitdh = item.offsetWidth - item.clientWidth;
body.removeChild(item);
return calcedWitdh;
}