
let nam=document.getElementById("name").value;
let last=document.getElementById("lastname").value;
let mail=document.getElementById("email").value;
let pass=document.getElementById("password").value;

    localStorage.setItem('username', nam);
    localStorage.setItem('lastname', last);
    localStorage.setItem('mail', mail);
    localStorage.setItem('pass', pass);

