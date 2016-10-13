
function extractDates(input) {

    let datesRegex = /\b([\d]{1,2})-([A-Z][a-z]{2})-([\d]{4})\b/g;
    let dates;
    for (let line of input) {
        dates = line.match(datesRegex);
    }

    console.log(dates);
}

extractDates(['1-Jan-1999 is a valid date.', 'So is 01-July-2000.', 'I am an awful liar, by the way', '-- Ivo, 28-Sep-2016.']);
//extractDates(["30-Dec-1994 (Day: 30, Month: Dec, Year: 1994)","29-Jul-1955 (Day: 29, Month: Jul, Year: 1955)"]);
