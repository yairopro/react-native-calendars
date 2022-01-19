export function calcTimeByPosition(yPosition, hourBlockHeight) {
    let time = yPosition / hourBlockHeight;
    time = Math.floor(time * 2) / 2;
    const hour = Math.floor(time);
    const minutes = (time - Math.floor(time)) * 60;
    return { hour, minutes };
}
export function buildTimeString(hour = 0, minutes = 0, date = '') {
    return `${date} ${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:00`.trimStart();
}
