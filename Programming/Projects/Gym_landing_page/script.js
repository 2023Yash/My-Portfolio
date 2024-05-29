// SPA Dom Manupilation

function home() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('about').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('joinus').style.display = 'none';
    document.title = 'MrGym | Simply the best Gyms in India A place for fitness';
}

function about() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('about').style.display = 'block';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('joinus').style.display = 'none';
    document.title = 'MrGym | About';
}

function contact() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('contact').style.display = 'flex';
    document.getElementById('joinus').style.display = 'none';
    document.title = 'MrGym | Contact Us';
}

function joinus() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('joinus').style.display = 'flex';
    document.title = 'MrGym | Join us';
}

//\\//\\ SPA Dom Manupilation

// joining

function Form() {
    const fname = document.getElementById("fname").value;
    const phone_num = document.getElementById("phone").value;
    submitOK = "true";
    const req_confirm = confirm('Are you sure you want to join our GYM');
    if (req_confirm == true) {
        alert("Your request sent to us and we will soon be in contact.");
        DB.setItem(fname, phone_num);
    } else {
        alert("Your request have been denied but Thank's for coming.");
    }
}

//\\//\\ joining