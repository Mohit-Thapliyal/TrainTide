export function formatTimeAndDate(seconds) {
    const date = new Date(seconds * 1000);
    const optionsTime = { hour: "numeric", minute: "numeric", hour12: true };
    const optionsDate = { day: "numeric", month: "long", year: "numeric" };
    const formattedTime = new Intl.DateTimeFormat("en-US", optionsTime).format(
        date
    );
    const formattedDate = new Intl.DateTimeFormat("en-US", optionsDate).format(
        date
    );
    return {
        time: formattedTime,
        date: formattedDate,
    };
}
