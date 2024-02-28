export function daysWeek(listOFDays: Array<any>) {
    const days: Array<object> = []

    listOFDays.map((e) => {
        const day = e.dt_txt.split(' ')
        if (!days.includes(day[0])) {
            days.push(day[0])
        }
    })

    return days
}

export function averageTemperature(listOFDays: Array<any>, days: Array<object>){
    let averageTemperature: number = 0
    let count: number = 0

    let response: Array<object> = []

    days.forEach((day) => {
        listOFDays.forEach(e => {
            const date = e.dt_txt.split(' ')
            if (days.includes(date[0]) && date[0] === day) {
                averageTemperature += e.main.temp
                count++
            }
        })
        response.push({
            day: formatDate(day.toString()),
            temperature: averageTemperature / count
        })
    })

    return response
}

function formatDate(inputDate: string) {
    const parts = inputDate.split('-');
    const newDate = `${parts[2]}-${parts[1]}`;
    return newDate;
}