document.addEventListener("DOMContentLoaded", function () {
    const calendarDates = document.getElementById('calendar-dates');
    const monthSpan = document.querySelector('.current-month');
    const yearSpan = document.querySelectorAll('.current-year');
    const currentDayOfWeek = document.querySelector('.current-day-of-week');
    const currentDateOfMonth = document.querySelector('.current-date-of-month');
    const currentMonthOfYear = document.querySelector('.current-month-of-year');

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let currentDate = new Date();
    let selectedDate = currentDate;

    function renderCalendar(date) {
        calendarDates.innerHTML = '';
        const year = date.getFullYear();
        const month = date.getMonth();
        monthSpan.textContent = months[month];
        yearSpan.forEach(y => y.textContent = year);
        currentMonthOfYear.textContent = months[month];
        currentDateOfMonth.textContent = date.getDate();
        currentDayOfWeek.textContent = date.toLocaleDateString('en-US', { weekday: 'long' });


        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);
        const firstDayIndex = firstDayOfMonth.getDay();
        const lastDay = lastDayOfMonth.getDate();
        const prevLastDay = new Date(year, month, 0).getDate();

        const daysInCalendar = 42; // 6 rows x 7 days

        // Previous month's days
        for (let x = firstDayIndex; x > 0; x--) {
            const day = document.createElement('span');
            day.textContent = prevLastDay - x + 1;
            day.classList.add('inactive'); // Inactive days are from the previous month
            calendarDates.appendChild(day);
        }

        // Current month's days
        for (let i = 1; i <= lastDay; i++) {
            const day = document.createElement('span');
            day.textContent = i;
            day.classList.add('active'); // Active days are from the current month

            day.addEventListener('click', function () {
                document.querySelectorAll('.calendar-dates span').forEach(d => d.classList.remove('selected'));
                day.classList.add('selected');
                selectedDate = new Date(year,month,i);
                renderCalendar(selectedDate);
            });

            calendarDates.appendChild(day);
        }

        // Next month's days
        for (let j = 1; j <= daysInCalendar - (lastDay + firstDayIndex); j++) {
            const day = document.createElement('span');
            day.textContent = j;
            day.classList.add('inactive'); // Inactive days are from the next month
            calendarDates.appendChild(day);
        }
    }

    function changeMonth(diff) {
        currentDate.setMonth(currentDate.getMonth() + diff);
        renderCalendar(currentDate);
    }

    function changeYear(diff) {
        currentDate.setFullYear(currentDate.getFullYear() + diff);
        renderCalendar(currentDate);
    }

    document.querySelector('.prev-month').addEventListener('click', () => changeMonth(-1));
    document.querySelector('.next-month').addEventListener('click', () => changeMonth(1));
    document.querySelector('.prev-year').addEventListener('click', () => changeYear(-1));
    document.querySelector('.next-year').addEventListener('click', () => changeYear(1));

    renderCalendar(currentDate);
});
