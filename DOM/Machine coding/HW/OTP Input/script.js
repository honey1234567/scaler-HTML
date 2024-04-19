let inputs = document.querySelector('#inputs');
inputs.addEventListener('keyup', function (e) {
    console.log(e)
    if (e.key == 'Backspace' || e.key == 'Delete') {
        e.target.value = null
        if (e.target.previousElementSibling) e.target.previousElementSibling.focus()
    } else if (isNaN(e.key)) {
        e.target.value = null
    }

    else {
        const num = e.key;
       // e.target.value = num;
        if (e.target.nextElementSibling) e.target.nextElementSibling.focus()
    }
})
