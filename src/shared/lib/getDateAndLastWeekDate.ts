export const getDateAndLastWeekDate = () => {

    const currentDate = new Date();

    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1; // Месяцы в JavaScript начинаются с 0
    const currentYear = currentDate.getFullYear();
    const initialEndDate = `${currentYear}-${currentMonth < 10 ? `0${currentMonth}`
        : currentMonth}-${currentDay < 10 ? `0${currentDay}` : currentDay}`;

    const lastWeekDate = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
    const lastWeekDay = lastWeekDate.getDate();
    const lastWeekMonth = lastWeekDate.getMonth() + 1;
    const lastWeekYear = lastWeekDate.getFullYear();
    const initialStartDate = `${lastWeekYear}-${lastWeekMonth < 10 ? `0${lastWeekMonth}`
        : lastWeekMonth}-${lastWeekDay < 10 ? `0${lastWeekDay}` : lastWeekDay}`;

    return { initialStartDate, initialEndDate };

};
