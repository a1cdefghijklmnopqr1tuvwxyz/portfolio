const scriptURL = 'https://script.google.com/macros/s/AKfycbzbFTbY_dthKnJCujKknRIbJm7E_yrlIPgPxid0Zv1_x2myaM-7G51jJXauyDmgpy67/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerText = "Message sent successfully"
            setTimeout(function () {
                msg.innerText = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})