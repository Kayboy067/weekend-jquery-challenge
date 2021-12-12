$(document).ready(onReady);

function onReady() {
    console.log('on ready');

    $('#employeeForm').on('submit', onAddEmployee)
}

function onAddEmployee(action) {
    //Prevent form from reloading
    action.preventDefault();

    console.log('add employee');

    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let id = $('#idInput').val();
    let title = $('#titleImput').val();
    let annualSalary = $('#annualSalaryInput').val();

    let employee = {
        firstName: firstName,
        lastName: lastName,
        id: id,
        title: title,
        annualSalary: annualSalary
    }

    console.log('New employee salary', employee);


}