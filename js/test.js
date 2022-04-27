function generatePwd() {
    const name = document.module.name.value;
    const surname = document.module.surname.value;
    // const favoriteColor = document.module.favoriteColor.value;
    const randomNumber = Math.floor(Math.random() * 100);
    const favoriteColor = document.module.colorList.value;

    if (!(name && surname && favoriteColor)) {
        alert("One or more fields are not filled in");
        return 0;
    }else{
        alert("Password generated: " + name + surname + favoriteColor + randomNumber);
        return 1;
    }


}