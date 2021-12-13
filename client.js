$(document).ready(onReady);

// Global list of employee objects
let salary = [];

function onReady() {
    console.log('on ready');

    // activating the submit botton to add employee
    $('#employeeForm').on('submit', onAddEmployee);
    $('#employeeForm').on('submit', totalSalary);

    // Activate delete clicked botton
    //$(document).on('click', '.DeleteBtn', onDeleteEmployee);
    $(document).on('click', '.DeleteBtn', onDeleteEmployee);
} // en function onReady

function totalSalary() {
    console.log('in function totalSalary');
    let sum = 0;
    for (let i = 0; i < salary.length; i++){
        sum += salary[i].annualSalary
    }
    console.log('total sum is', sum)
    // make sure to empty the spot
    $('#total').text('')
    // append to the empty slot
    $('#total').append(`Total Salary: $${sum}`) // total salary fixed
    // I need help deleting the added salary
    // when employee is deleted
    
} // end function totalSalary


function onDeleteEmployee() {
    console.log('onDeleteEmployee');

    $(this).parents('tr').remove();
    salary.splice($(this),1);
    
} //end function onDeleteEmployee

function onAddEmployee(action) {
    //Prevent form from reloading
    action.preventDefault();

    console.log('add employee');
    
    //rendering the form vaule to the DOM
    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let id = $('#idInput').val();
    let title = $('#titleImput').val();
    let annualSalary = Number($('#annualSalaryInput').val());
    
    //created employee object
    let employeeObj = {
        firstName: firstName,
        lastName: lastName,
        id: id,
        title: title,
        annualSalary: annualSalary
    } // end employee object

    console.log('New employee salary', employeeObj);

    // Add my employee object to the global salary
    salary.push(employeeObj);
    console.log('Salary', salary);

    // emptying <tbody> before rendring to the DOM
    $('#employeeList').empty()


    // looping through employee to append 
    // employee object to the DOM
    for (let employee of salary) {
        $('#employeeList').append(`
        <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.id}</td>
                <td>${employee.title}</td>
                <td>$${employee.annualSalary}</td>
                <td>
                    <button class="DeleteBtn">Delete</button>
                </td>
            </tr>
        `);
    } // end for loop

} // end onAddEmployee