function validate()
        {
            var name = document.stud_form.name;
            if(name.value.length <=0)
            {
                alert("Name should be at least 5 letters");
                name.focus();
                return false;
            }

            var email = document.stud_form.email;
            if(email.value.length <=0)
            {
                alert("Email cannot be blank");
                email.focus();
                return false;
            }

            var mobile = document.stud_form.mobile;
            if(mobile.value.length <=0)
            {
                alert("Mobile cannot be blank");
                mobile.focus();
                return false;
            }

            var gender = document.stud_form.gender;
            if(gender.value.length <=0)
            {
                alert("Gender cannot be blank");
                gender.focus();
                return false;
            }   

            var course = document.stud_form.course;
            if(course.value == "Select")
            {
                alert("Course cannot be blank");
                course.focus();
                return false;
            }
            
            var batch = document.stud_form.batch;
            var check = false;
            for(var i=0;i<batch.length;i++)
            {
                if(batch[i].checked)
                {
                    check = true;
                }
            }
            if(check == false)
            {
                alert("Batch cannot be blank");
                // batch.focus();
                return false;
            }
        }

function validateString(id)
{
    var element = document.getElementById(id);
    var regexp = /^[a-zA-Z ]+$/;
    if(!regexp.test(element.value))
    {
        alert("Enter String value.");
        element.style.border = "2px solid red";
        return false;
    }
    else
    {
        element.style.border = "2px solid green";

    }
}

function validateNumber(id)
{
    var element = document.getElementById(id);
    var regexp = /^[0-9]{10}$/;
    if(!regexp.test(element.value))
    {
        alert("Enter 10 digit number.");
        element.style.border = "2px solid red";
        return false;
    }
    else
    {
        element.style.border = "2px solid green";

    }
}

function validateEmail(id)
{
    var element = document.getElementById(id);
    var regexp = /^[a-zA-Z._]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,4}$/;
    if(!regexp.test(element.value))
    {
        alert("Enter valid Email");
        element.style.border = "2px solid red";
        return false;
    }
    else
    {
        element.style.border = "2px solid green";

    }
}

