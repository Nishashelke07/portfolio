export default function validateInfo(values)  {
    let errors={};

    if(!values.personName.trim()) {
        errors.personName = "Name is required";
    }
    if(values.personEmail === "") {
        errors.personEmail = "email is required"
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.personEmail))
        {
            errors.personEmail = "email is invalid"
        }

    // if(values.personContact === "") {
    //     errors.personContact = "Name is required";
    // }

    if(values.personMessage === "") {
        errors.personMessage = "Message can't be blank.";
    }

    return errors;

}

