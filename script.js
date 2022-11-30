const courses = document.querySelectorAll('.course');
const semesters = document.querySelectorAll('.semester');

courses.forEach(course => {


    // Dragging has Started
    course.addEventListener('dragstart',() => {
        course.classList.add('dragging');
    });

    // Dragging has Ended
    course.addEventListener('dragend', () => {
        course.classList.remove('dragging');
    })
});

semesters.forEach(semester => {
    semester.addEventListener('dragover', e =>{

        e.preventDefault();

        // Determine if inside container 1 or 2
        const draggable = document.querySelector('.dragging');
        semester.appendChild(draggable);
    })
});