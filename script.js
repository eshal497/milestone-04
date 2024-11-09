var _a;
// Listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //type assertion
    var profilePicInput = document.getElementById('profilepic');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var eduactionElement = document.getElementById('eduaction');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilePicInput && nameElement && emailElement && phoneElement && eduactionElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var eduaction = eduactionElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // pic element
        var profilePicFile = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepicURL = profilePicFile ? URL.createObjectURL(profilePicFile) : "";
        var resumeOutput = " \n   <h2>Resume<h2> \n   ".concat(profilepicURL ? "<img src=\"".concat(profilepicURL, " alt=\"profilrpic\" class=\"profilepic\"> ") : "", "\n   <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\">").concat(name_1, " </span> </p>\n   <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span> </p>\n   <p><strong>Phone Number:</strong> <span id=\"edit-phone\" class=\"editable\"> ").concat(phone, "</span> </p>\n   \n   <h3> Eduaction</h3>\n   <p id=\"edit-eduaction\" class=\"editable\"> ").concat(eduaction, "</p>\n\n\n   <h3>Experience</h3>\n   <p  id=\"edit-experience\" class=\"editable\" >").concat(experience, "</p>\n\n  <h3> skills</h3>\n   <p  id=\"edit-skills\" class=\"editable\"> ").concat(skills, "</p>\n   ");
        // display the resume output
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error('one or more output elements are missing.');
    }
});
function makeEditable() {
    var editableElement = document.querySelectorAll('editable');
    editableElement.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            //replace content
            if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
