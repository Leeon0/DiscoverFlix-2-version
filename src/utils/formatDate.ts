export const formatDate = (inputDate: string): string => {
    // Create a Date object from the input date string.
    const date = new Date(inputDate);

    // Extract the day, month, and year components from the Date object.
    const day = date.getDate();
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    // Assemble and return the formatted date string.
    return `${day} ${month} ${year}`;
}
