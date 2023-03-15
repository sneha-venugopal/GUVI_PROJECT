const value = document.querySelectorAll('.value');
const a = [localStorage.getItem('username'), localStorage.getItem('lastname'), localStorage.getItem('mail'),localStorage.getItem('password')]
value.forEach((element, i) => {
    element.value = a[i];
});

console.log(localStorage.getItem('username'));

function submit()
{
    document.getElementById("result").innerHTML="Saved successfully!!";
}