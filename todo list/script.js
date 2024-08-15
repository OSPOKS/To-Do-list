document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Add Task
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement('li');
            li.className = 'task-item';
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="remove-btn">Remove</button>
            `;
            li.querySelector('.remove-btn').addEventListener('click', () => {
                taskList.removeChild(li);
            });
            li.addEventListener('click', () => {
                li.classList.toggle('completed');
            });
            taskList.appendChild(li);
            taskInput.value = '';
        }
    });

    // Filter Tasks
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            const tasks = taskList.querySelectorAll('li');
            tasks.forEach(task => {
                if (filter === 'all') {
                    task.style.display = '';
                } else if (filter === 'active') {
                    task.style.display = task.classList.contains('completed') ? 'none' : '';
                } else if (filter === 'completed') {
                    task.style.display = task.classList.contains('completed') ? '' : 'none';
                }
            });
        });
    });
});
