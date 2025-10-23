
//Hämtar alla input fält
var f_name_input = document.getElementById('f_name');
var l_name_input = document.getElementById('l_name');
var email_input = document.getElementById('email');
var age_input = document.getElementById('age');
var psw_input = document.getElementById('psw');
var con_psw_input = document.getElementById('con_psw');

//Hämtar specifika element
var submit_btn = document.getElementById("submit_btn");
var strength_bar = document.getElementById('strength_bar');
var strength_txt = document.getElementById('strength_txt');
var form = document.getElementById('register_form');
var loader = document.getElementById('loader');

//Hämtar alla unika error medelande
var f_name_error = document.getElementById('f_name_msg');
var l_name_error = document.getElementById('l_name_msg');
var email_error = document.getElementById('email_msg');
var age_error = document.getElementById('age_msg');
var psw_error = document.getElementById('psw_msg');
var con_psw_error = document.getElementById('con_psw_msg');
var sumbit_error = document.getElementById('sumbit_msg')

//Validerings mönster 
var name_pattern = /^[a-zA-ZåäöÅÄÖ]{2,}$/;
var email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var upper_case = /[A-Z]/;
var num = /[0-9]/;
var special_char = /[^a-zA-Z0-9]/;

//Skapar variabler för validering
var f_name_valid = false;
var l_name_valid = false;
var age_valid = false;
var email_valid = false;
var psw_valid = false;
var con_psw_valid = false;

//Validerings funktioner
function validate_first_name() {
    var name = f_name_input.value;

    //Visar felmeddlande om förnamn inte innehåller minst 2 bokstäver
    if (name_pattern.test(name)) {
        f_name_input.className = 'valid';
        f_name_error.className = 'error_msg';
        f_name_valid = true;
    } else {
        f_name_input.className = 'invalid';
        f_name_error.className = 'error_msg show';
        f_name_valid = false;
    }
    update_btn();
}

function validate_last_name() {
    var name = l_name_input.value;

    //Visar felmeddlande om efternamn inte innehåller minst 2 bokstäver
    if (name_pattern.test(name)) {
        l_name_input.className = 'valid';
        l_name_error.className = 'error_msg';
        l_name_valid = true;
    } else {
        l_name_input.className = 'invalid';
        l_name_error.className = 'error_msg show';
        l_name_valid = false;
    }  
    update_btn();
}

function validate_email() {
    var email = email_input.value;

    //Visar felmeddlande om email inte innehåller @, domän och alla delar är minst två tecken
    if (email_pattern.test(email)) {
        email_input.className = 'valid';
        email_error.className = 'error_msg';
        email_valid = true;
    } else {
        email_input.className = 'invalid';
        email_error.className = 'error_msg show';
        email_valid = false;
    }
    update_btn();
}

function validate_age() {
    var age = age_input.value;

    //Visar felmeddlande om ålder är under 18 eller över 100
    if (age >= 18 && age <=100) {
        age_input.className = 'valid';
        age_error.className = 'error_msg';
        age_valid = true;
    } else {
        age_input.className = 'invalid';
        age_error.className = 'error_msg show';
        age_valid = false;
    }
    update_btn();
}

function validate_psw() {
    var psw = psw_input.value;
    //Visar felmedllande om lösenord inte är minst innehålle 8 tecken, siffra, stor bokstav och speciall tecken.
    if (psw.length < 8) {
        psw_input.className = 'invalid';
        psw_error.className = 'error_msg show';
        psw_valid = false;
    }
    else if (psw.length>=8 && upper_case.test(psw) && num.test(psw) && special_char.test(psw)) {
        psw_input.className = 'valid';
        psw_error.className = 'error_msg';
        psw_valid = true;
    }
    psw_strength();
    update_btn();
}

function psw_strength(){
    var psw = psw_input.value;
    var strength = 0;
    //Kontrollerar om lösernord innehåller minst en storbokstav, siffra och specialtecken)
    if (upper_case.test(psw)) strength++;
    if (num.test(psw)) strength++;
    if (special_char.test(psw)) strength++;
    
    //Lösenords styrka visas beroende på lösernordet längd och innehåll 
    if (psw.length === 0) {
        strength_bar.style.width = '0%';
        strength_txt.textContent = '';
    }   else if (strength<=1) {
        strength_bar.style.width = '33%';
        strength_bar.className = 'strength_bar weak';
        strength_txt.textContent = 'Svagt lösenord';
        strength_txt.style.color = 'red';
    }   else if (strength === 2) {
        strength_bar.style.width = '66%';
        strength_bar.className = 'strength_bar medium';
        strength_txt.textContent = 'Medel lösenord';
        strength_txt.style.color = '#ff9800';
    }   else if (strength === 3) {
        strength_bar.style.width = '100%';
        strength_bar.className = 'strength_bar strong';
        strength_txt.textContent = 'Starkt lösenord';
        strength_txt.style.color = '#4caf50';
    }
}

function validate_con_psw() {
    var psw = psw_input.value;
    var con_psw = con_psw_input.value;
    //Kontrollerar om det bekräftade lösenordet är det samma som lösenordet, om inte visas felmeddelande
    if (con_psw == psw) {
        con_psw_input.className = 'valid';
        con_psw_error.className = 'error_msg';
        con_psw_valid = true;
    } 
    else {
        con_psw_input.className = 'invalid';
        con_psw_error.className = 'error_msg show';
        con_psw_valid = false;
    }
    update_btn();
}
//Om alla fält är korrekt ifyllda kan användaren trycka på sumbit knappen och felmeddelandet döljs
function update_btn() {
    if(f_name_valid && l_name_valid && email_valid && age_valid && psw_valid && con_psw_valid) {
        submit_btn.disabled = false;
        sumbit_error.className = 'error_msg'
    }
    else {
        submit_btn.disabled = true;
        sumbit_error.className = 'error_msg show'
    }
}
//När sumbit knappen trycks skickas formuläret till servern (innehållet återställs inte)
form.addEventListener('submit', function(event) {
    event.preventDefault();

    //Laddikonen visas när formuläret skickas och submit knappen blir otillgänglig
    submit_btn.disabled = true;
    loader.className = 'loader show';

    //Hämtar data från kroppen
    const form_data = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: form_data
    })
    //Användaren får ett meddelande om post anropet lyckades eller inte
    .then(()=>{
        alert(`Registrering lyckades!\n\nNamn: ${f_name_input.value} ${l_name_input.value} \nE-post: ${email_input.value} \nÅlder: ${age_input.value}`);
    })
    .catch(error=>{
        alert(`Ett fel uppstod: ${error.message}`);
    })
    //Döljer laddikonen och användaren kan klicka på sumbit knappen igen
    .finally(()=>{
        loader.className = 'loader';
        submit_btn.disabled = false;
    })
});
//Lyssnar på input fält och sumbit knappen
f_name_input.addEventListener("input",validate_first_name);
l_name_input.addEventListener("input",validate_last_name);
email_input.addEventListener("input",validate_email);
age_input.addEventListener("input",validate_age);
psw_input.addEventListener("input",validate_psw);
con_psw_input.addEventListener("input",validate_con_psw);
submit_btn.addEventListener("click",update_btn);



