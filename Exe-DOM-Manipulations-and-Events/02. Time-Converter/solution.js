function attachEventsListeners() {
    let obj = {
        day: 1,
        hour: 24,
        minutes: 1440,
        seconds: 86400,
    };
    let allButtons = Array.from(document.querySelectorAll('div input:nth-child(3)'));
    allButtons.forEach((b) => b.addEventListener('click', calculateOthers));
    function calculateOthers(event) {
        let currentButtonId = event.target.id;
        let allFields = Array.from(document.querySelectorAll('div input:nth-child(2)'));
        let [daysInput, hourInput, minutesInput, secondsInput] = allFields;
        let inDays = -1;
        switch (currentButtonId) {
            case 'daysBtn':
                inDays = daysInput.value;
                break;
            case 'hoursBtn':
                inDays = hourInput.value / obj.hour;
                break;
            case 'minutesBtn':
                inDays = minutesInput.value / obj.minutes;
                break;
            case 'secondsBtn':
                inDays = secondsInput.value / obj.seconds;
        }
        daysInput.value = inDays;
        hourInput.value = inDays * obj.hour;
        minutesInput.value = inDays * obj.minutes;
        secondsInput.value = inDays * obj.seconds;
    }
}