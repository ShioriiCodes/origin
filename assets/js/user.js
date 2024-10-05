document.getElementById('staff-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const staffName = document.getElementById('staff-name').value;
    const staffEmail = document.getElementById('staff-email').value;
    const staffRole = document.getElementById('staff-role').value;

    // Add staff to the list
    const staffList = document.getElementById('staff-accounts');
    const listItem = document.createElement('li');
    listItem.textContent = `${staffName} (${staffEmail}) - Role: ${staffRole}`;
    staffList.appendChild(listItem);

    // Clear the form
    this.reset();
});

document.getElementById('remove-staff').addEventListener('click', function () {
    const staffEmail = document.getElementById('staff-email').value;
    const staffList = document.getElementById('staff-accounts');
    const items = staffList.getElementsByTagName('li');

    for (let i = 0; i < items.length; i++) {
        if (items[i].textContent.includes(staffEmail)) {
            staffList.removeChild(items[i]);
            break;
        }
    }

    document.getElementById('staff-email').value = ''; // Clear email input
});

// Backup and Restore functionality
document.getElementById('backup-button').addEventListener('click', function () {
    // Simulate data backup
    document.getElementById('backup-message').textContent = 'Data backed up successfully!';
});

document.getElementById('restore-button').addEventListener('click', function () {
    // Simulate data restoration
    document.getElementById('backup-message').textContent = 'Data restored successfully!';
});
