export function formatDateToDDMMYYYY(date) {
    const d = date.getDate().toString().padStart(2, '0');
    const m = (date.getMonth() + 1).toString().padStart(2, '0');
    const y = date.getFullYear();
    return `${d}-${m}-${y}`;
}

export function getDayMinusDays(date, days){
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}