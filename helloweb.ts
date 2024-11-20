let message: string = 'Hello Web';

function mensaje() {
    let message2:string = "Mensaje 2";
    message="Hola mundo 2";
    console.log(message);
    return message2;
}

mensaje();

document.body.innerHTML = message;
                                                          