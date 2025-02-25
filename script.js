document.getElementById('member-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const memberList = document.getElementById('member-list');

    memberList.innerHTML += `<label><input type="checkbox" value="${name}">${name} (${email})</label>`;
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
});

document.getElementById('event-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const eventName = document.getElementById('event-name').value;
    const selectEvent = document.getElementById('select-event');

    selectEvent.innerHTML += `<option value="${eventName}">${eventName}</option>`;
    document.getElementById('event-name').value = '';
});

document.getElementById('submit-attendance').addEventListener('click', function() {
    const selectedEvent = document.getElementById('select-event').value;
    const checkedMembers = document.querySelectorAll('#member-list input:checked');
    const attendanceTable = document.getElementById('attendance-table');

    checkedMembers.forEach(member => {
        attendanceTable.innerHTML += `
            <tr>
                <td>${selectedEvent}</td>
                <td>${member.value}</td>
                <td>Present</td>
            </tr>
        `;
    });
});
