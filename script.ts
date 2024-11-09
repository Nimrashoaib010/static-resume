const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement
const skills = document.getElementById('skills') as HTMLElement

toggleButton.addEventListener('click', () => {
    if (skills.style.display === 'none') {
        skills.style.display = 'block'
    } else {
        skills.style.display = 'none'
    }
});


// const nameInput = document.getElementById("name") as HTMLInputElement;
// const emailInput = document.getElementById("email") as HTMLInputElement;
// const phoneInput = document.getElementById("phone") as HTMLInputElement;
// const profilePicInput = document.getElementById("profile-pic") as HTMLInputElement;

// const displayName = document.getElementById("display-name") as HTMLParagraphElement;
// const displayEmail = document.getElementById("display-email") as HTMLParagraphElement;
// const displayPhone = document.getElementById("display-phone") as HTMLParagraphElement;
// const displayImage = document.getElementById("display-image") as HTMLDivElement;

// function generateResume() {

//    displayName.innerText = `Name: ${nameInput.value}`;
//    displayEmail.innerText = `Email: ${emailInput.value}`;
//    displayPhone.innerText = `Phone: ${phoneInput.value}`;


//    const file = profilePicInput.files?.[0];
//    if (file) {
//       const reader = new FileReader();
//       reader.onload = function () {
//          displayImage.innerHTML = `<img src="${reader.result}" alt="Profile Picture">`;
//       };
//       reader.readAsDataURL(file);
//    } else {
//       displayImage.innerHTML = ""; 
//    }
// }


// (window as any).generateResume = generateResume;
