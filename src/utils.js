export function formatDateToYYYYMMDD(date) {
    const year = date.getFullYear();
    // Get the month and add 1 because months are zero-based (0 = January, 1 = February, ...)
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
}