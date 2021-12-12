$(document).ready(onReady);

// Global list of employee objects
let salary = [];

function onReady() {
    console.log('on ready');

    $('#employeeForm').on('submit', onAddEmployee);

    // Activate delete clicked botton
    $(document).on('click', '.DeleteBtn', onDeleteEmployee);
}

function onDeleteEmployee() {
    console.log('onDeleteEmployee');

    $(this).parents('tr').remove();
}

function onAddEmployee(action) {
    //Prevent form from reloading
    action.preventDefault();

    console.log('add employee');

    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let id = $('#idInput').val();
    let title = $('#titleImput').val();
    let annualSalary = Number($('#annualSalaryInput').val());

    let employeeObj = {
        firstName: firstName,
        lastName: lastName,
        id: id,
        title: title,
        annualSalary: annualSalary
    }

    console.log('New employee salary', employeeObj);

    // Add my employee object to the global salary
    salary.push(employeeObj);
    console.log('Salary', salary);

    $('#employeeList').empty()



    for (let employee of salary) {
        $('#employeeList').append(`
        <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.id}</td>
                <td>${employee.title}</td>
                <td>$${annualSalary}</td>
                <td>
                    <button class="DeleteBtn">Delete</button>
                </td>
            </tr>
        `);
   
        
    }


}