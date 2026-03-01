const picker = datepicker('#birthdate', {
    formatter: (input, date, instace) => {
        const value = date.toLocaleDateString()
        input.value = value
    }
});

function calculateAge() {
    let paragraph = document.getElementById('result');

    const DateTime = luxon.DateTime;
    const today = DateTime.now();
    const birthday = DateTime.fromJSDate(picker.dateSelected);
    

    if (!birthday.isValid) {
        paragraph.textContent = "Insert a valid date."
        return
    }

    let age = today.diff(birthday, ['years', 'months', 'days'])

    let years = parseInt(age.years);
    let months = parseInt(age.months);
    let days = parseInt(age.days);

    console.log(years, months, days)

    if (years > 0) {
        paragraph.textContent = "You are " + years + " years, " + months + " months and " + days + " days old."
    } else if (months > 0) {
        paragraph.textContent = "You are " + months + " months and " + days + " days old."
    } else if (days > 0) {
        paragraph.textContent = "You are " + days + " days old."
    } else if (years < 0 || months < 0 || days < 0) { 
        paragraph.textContent = "Insert a valid date."
    }   

}