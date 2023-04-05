// get all elements with className 'box'
const boxColection = document.querySelectorAll('.box');

document.querySelector('.nav').addEventListener('click', event => {
    if(!event.target.classList.contains('nav-item')) return false;
    let filterClass = event.target.dataset["f"];

    boxColection.forEach(item => {
        item.classList.remove('hide')
        if(!item.classList.contains(filterClass) && filterClass !== 'all'){
            item.classList.add('hide')
        }
    })
})