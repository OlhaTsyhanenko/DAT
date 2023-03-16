let btn = document.getElementsByClassName('btn-more-js');
let p = document.getElementsByClassName('hidden-js');

document.querySelector('.btn-more-js').addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('is-active');
})

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
            let content = p[i];
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
            } else {
                content.classList.add('hidden');
            }
    });
}

let change = document.querySelectorAll('.change');
let imgChecked = document.querySelectorAll('.checked');
let imgNotChecked = document.querySelectorAll('.not-checked');

for (let i = 0; i < change.length; i++) {
        const showCheckbox = () => {

            imgChecked[i].classList.toggle('visible');
            imgNotChecked[i].classList.toggle('visible');
            if (!change[i].checked) {
                change[i].checked = false;
            } else {
                change[i].checked = true;
            }
        }
        imgChecked[i].addEventListener('click', showCheckbox);
        imgNotChecked[i].addEventListener('click', showCheckbox);
}