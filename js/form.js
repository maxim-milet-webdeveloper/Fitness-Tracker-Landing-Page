const inputs = document.querySelectorAll('input');

inputs.forEach(i => {
    i.addEventListener('input', () => {
        if(i.value !== '') {
            i.previousElementSibling.classList.add('active');
            i.style.borderBottomColor = '#6359E6'
        } else {
            i.previousElementSibling.classList.remove('active');
            i.style.borderBottomColor = 'grey'
        }
    })
});

let submit;

document.querySelector('button#submit').addEventListener('click', (e) => {
    submit = true;
    for(let i of inputs) {
        if(i.value === '') {
            submit = false;
            break;
        }
        if(i.type === 'email' && !/\S+@\S+\.\S+/.test(i.value)) {
            submit = false;
            break;
        }
    }

    if(submit) {
        // Here I would make a post request.
    } else {
        document.getElementById('error').classList.remove('active')
        document.getElementById('error').classList.add('active')
    }
    e.preventDefault();
});