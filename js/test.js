function generatePwd() {
    const name = document.module.name.value;
    const surname = document.module.surname.value;
    const favoriteColor = document.module.favoriteColor.value;
    const randomNumber = Math.floor(Math.random() * 100);

    if (!(name && surname && favoriteColor)) {
        alert("uno o più campi non sono compilati!");
        return 0;
    }else{
        alert("Password generata: " + name + surname + favoriteColor + randomNumber);
        return 1;
    }


}