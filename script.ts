// Listing element
document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
   event.preventDefault();
 

    //type assertion
    const profilePicInput = document.getElementById('profilepic') as HTMLInputElement;

  const nameElement =document.getElementById('name') as HTMLInputElement;
  const emailElement =document.getElementById('email') as HTMLInputElement;
  const phoneElement =document.getElementById('phone') as HTMLInputElement; 
  const eduactionElement =document.getElementById('eduaction') as HTMLInputElement;
  const experienceElement =document.getElementById('experience') as HTMLInputElement;
  const skillsElement =document.getElementById('skills') as HTMLInputElement;

//** 
const usernameElement = document.getElementById(
  "username"
) as HTMLInputElement;







   if (profilePicInput && nameElement && emailElement && phoneElement &&eduactionElement && experienceElement && skillsElement  && usernameElement){  

       const name = nameElement.value;
       const email = emailElement.value;
       const phone = phoneElement.value;
       const eduaction = eduactionElement.value;       
       const experience = experienceElement.value;        
       const skills = skillsElement.value;


       //** */
      const username = usernameElement.value;
      const uniquePath = `resume/${username.replace(/\s+/g, '')} _cv.html`




  

// pic element
const profilePicFile =profilePicInput.files?.[0]
const profilepicURL = profilePicFile ? URL.createObjectURL(profilePicFile) : "";



   const resumeOutput =` 
   <h2>Resume<h2> 
   ${profilepicURL ?`<img src="${profilepicURL } alt="profilrpic" class="profilepic"> ` : "" }
   <p><strong>Name:</strong> <span id="edit-name" class="editable">${name} </span> </p>
   <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span> </p>
   <p><strong>Phone Number:</strong> <span id="edit-phone" class="editable"> ${phone}</span> </p>
   
   <h3> Eduaction</h3>
   <p id="edit-eduaction" class="editable"> ${eduaction}</p>


   <h3>Experience</h3>
   <p  id="edit-experience" class="editable" >${experience}</p>

  <h3> skills</h3>
   <p  id="edit-skills" class="editable"> ${skills}</p>
   `;  

   //** */
   const downloadLink = document.createElement('a')
   downloadLink.href ='data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
   downloadLink.download = uniquePath;
   downloadLink.textContent = 'Download Your 2024 Resume';
   



   // display the resume output

    const resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement){
      resumeOutputElement.innerHTML = resumeOutput
    makeEditable();
    }


} else{
   console.error ('one or more output elements are missing.');
}
});


function makeEditable() {
   const editableElement = document.querySelectorAll('editable');
   editableElement.forEach(element => {
    element.addEventListener('click' , function(){
      const currentElement = element as HTMLElement;
      const currentValue = currentElement.textContent || "" ;

      //replace content
    if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
      const input =document.createElement('input')
      input.type = 'text'
      input.value = currentValue
      input.classList.add('editing-input')

      input.addEventListener('blur', function (){
        currentElement.textContent = input.value;
        currentElement.style.display = 'inline'
        input.remove()
      })
      

      currentElement.style.display = 'none'
      currentElement.parentNode?.insertBefore(input,currentElement)
      input.focus()
    }

    })
   })
}
