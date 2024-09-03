document.getElementById("sum-form").onsubmit = (event) => {
  event.preventDefault();

  let aDOM = document.getElementById("a");
  let bDOM = document.getElementById("b");

  let a = aDOM.value;
  let b = bDOM.value;

  fetch("https://prperez.pythonanywhere.com/sum", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ a: a, b: b }),
  })
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("result").innerHTML = data;
      aDOM.value = "";
      bDOM.value = "";
    });
};
