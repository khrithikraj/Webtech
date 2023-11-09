function validateForm() 
{
    const name = document.getElementById('name').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const qualification = document.querySelectorAll('input[name="qualification"]:checked');
    const caste = document.getElementById('myForm').elements['caste'].value;

    if (name === '') 
    {
        document.getElementById('nameError').textContent = 'Name is required.';
        return false;
    } 
    else 
    {
        document.getElementById('nameError').textContent = '';
    }

    if (!gender)
    {
        document.getElementById('genderError').textContent = 'Gender is required.';
        return false;
    } 
    else 
    {
        document.getElementById('genderError').textContent = '';
    }

    if (qualification.length === 0) 
    {
        document.getElementById('qualificationError').textContent = 'At least one qualification must be selected.';
        return false;
    }
    else
    {
        document.getElementById('qualificationError').textContent = '';
    }

    if (caste === '') 
    {
        document.getElementById('casteError').textContent = 'Caste is required.';
        return false;
    } 
    else
    {
        document.getElementById('casteError').textContent = '';
    }

    const additionalComments = prompt('Please enter any additional comments (optional):');
    
    const confirmationMessage = `Name: ${name}\nGender: ${gender.value}\nQualifications: ${getSelectedQualifications()}\nCaste: ${caste}\nAdditional Comments: ${additionalComments || 'None'}`;
    alert(confirmationMessage);

    const confirmed = confirm('Are you sure you want to submit the form?');
    if (confirmed) 
    {
        console.log('Form submitted successfully!');
        return true;
    }
    else
    {
        console.log('Form submission canceled.');
        return false;
    }
}

function getSelectedQualifications() 
{
    const selectedQualifications = document.querySelectorAll('input[name="qualification"]:checked');
    const selectedValues = Array.from(selectedQualifications).map(input => input.value);
    return selectedValues.join(', ');
}


