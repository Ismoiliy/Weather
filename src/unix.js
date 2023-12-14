export function unix(dt, type) {

    const seconds = dt * 1000
    const data = new Date(seconds)

    let result = type == 'day' ? data.toLocaleString('ru-RU', { day: 'numeric' }) :
        type == 'weekDay' ? data.toLocaleString('ru-RU', { weekday: 'long' }) :
            type == 'month' ? data.toLocaleString('ru-RU', { month: 'long' }) : ''

    return result

}

