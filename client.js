$(document).ready(onReady);

function onReady() {
    console.log('on ready');

    $('#employeeForm').on('submit', onAddEmployee)
}

function onAddEmployee(action) {
    //Prevent form from reloading
    action.preventDefault();

    console.log('add employee');
}