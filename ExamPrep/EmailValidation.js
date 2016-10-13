
function validateEmails([email]) {
    let emailRegex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/g;
    let match = email.match(emailRegex);
    console.log(match ? 'Valid' : 'Invalid');
}

//validateEmails(['valid@email.bg']);
validateEmails(['valid@emai1.bg']);
