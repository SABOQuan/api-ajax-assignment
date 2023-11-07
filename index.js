function displayList() {
    $.ajax({
        url: 'https://usman-fake-api.herokuapp.com/api/recipes/',
        type: 'GET',
        success: function(data) {
            const students = $('#studentList');
            students.empty();
            data.forEach(function(item) {
                students.append(`<li>${item.id}: ${item.name}: ${item.description}</li>`);
            });
        },
        error: function(error) { 
            console.error('Error Getting Student Info', error);
        }
    });
}

$('#createForm').on('submit', function(event) {
    event.preventDefault();
    const id = $('#createId').val();
    const name = $('#createName').val();
    const description = $('#createDesc').val();

    $.ajax({
        url: 'https://usman-fake-api.herokuapp.com/api/recipes/',
        type: 'POST',
        data: { id, name, description },
        success: function(data) {
            console.log('Student created:', data);
            displayList();
        },
        error: function(error) {
            console.error('Error creating student:', error);
        }
    });
});

$('#updateForm').on('submit', function(event) {
    event.preventDefault();
    const id = $('#updateId').val();
    const name = $('#updateName').val();
    const description = $('#updateDesc').val();

    $.ajax({
        url: `https://usman-fake-api.herokuapp.com/api/recipes/${id}`,
        type: 'PUT', 
        data: { name, description },
        success: function(data) {
            console.log('Student updated:', data);
            displayList(); 
        },
        error: function(error) {
            console.error('Error updating student:', error);
        }
    });
});

$('#deleteForm').on('submit', function(event) {
    event.preventDefault();
    const id = $('#deleteId').val();

    $.ajax({
        url: `https://usman-fake-api.herokuapp.com/api/recipes/${id}`,
        type: 'DELETE',
        success: function() {
            console.log('Student deleted');
            displayList();
        },
        error: function(error) {
            console.error('Error deleting student:', error);
        }
    });
});


