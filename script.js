function handle() {
    alert('forma otpravlena');
    let inputs = document.querySelectorAll('input');
    let input_values = [];
    for (let i = 0; i < inputs.length; i++) {
        input_values.push(inputs[i].value);
    }

    alert("vash login: " + input_values[0] + "\n" + "vash parol: "+ input_values[1]);
}