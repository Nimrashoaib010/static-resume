var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var profilePicInput = document.getElementById("profile-pic");
var displayName = document.getElementById("display-name");
var displayEmail = document.getElementById("display-email");
var displayPhone = document.getElementById("display-phone");
var displayImage = document.getElementById("display-image");
function generateResume() {
    var _a;
    displayName.innerText = "Name: ".concat(nameInput.value);
    displayEmail.innerText = "Email: ".concat(emailInput.value);
    displayPhone.innerText = "Phone: ".concat(phoneInput.value);
    var file = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            displayImage.innerHTML = "<img src=\"".concat(reader_1.result, "\" alt=\"Profile Picture\">");
        };
        reader_1.readAsDataURL(file);
    }
    else {
        displayImage.innerHTML = "";
    }
}
window.generateResume = generateResume;
