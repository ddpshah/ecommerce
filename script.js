const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const username = document.querySelector("#name");
const btn = document.querySelector("#btn");

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

function handleName() {
    const suit_name = document.getElementById('suit_name');
    localStorage.setItem("suit_name", suit_name);
    return;
}


btn.addEventListener("click", async () => {
    let name = username.value;

    username.value = "";

    console.log(name);

    await fetch(`https://mindful-braid-380816.el.r.appspot.com/insert/10/${name}`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
    });
})