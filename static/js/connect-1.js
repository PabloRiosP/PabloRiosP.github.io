document.getElementById("sum-form").onsubmit = (event) => {
    event.preventDefault();

    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;

    fetch('https://prperez.pythonanywhere.com/sum', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({a: a, b: b})
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("result").innerHTML = data;
    });
}