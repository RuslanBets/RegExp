// Name 
/^[a-zA-Zа-яёїґА-ЯЁЇҐ]+$|^[a-zA-Zа-яёїґА-ЯЁЇҐ]+\-[a-zA-Zа-яёїґА-ЯЁЇҐ]+$/; // 'ruslan', 'Ruslan', 'ruslan-ruslan', 'Ruslan-Ruslan','ruslan-Ruslan' 'Руслан', 'руслан'

// SecondName
/^[a-zA-Zа-яёїґА-ЯЁЇҐ]+$|^[a-zA-Zа-яёїґА-ЯЁЇҐ]+\-[a-zA-Zа-яёїґА-ЯЁЇҐ]+$/; // 'ruslan', 'Ruslan', 'ruslan-ruslan', 'Ruslan-Ruslan','ruslan-Ruslan' 'Руслан', 'руслан'

// Phone
const numbers = {
  China: '86',
  Germany: '49',
  India: '91',
  Italy: '39',
  Japan: '81',
  russia: 'хуйло',
  Ukraine: '380',
  USA: '1',
  UnitedKingdom: '44',
  France: '33'
};

/^(\+\d{1,3}\s\(\d{2}\)|0\d{2}|\+\d{1,3}\s\d{2})\s\d{3}\s\d{2}\s\d{2}$|^(0\d{2}|\+\d{3}\d{2})|\d{3}\d{2}\d{7}$/; // '+380 (67) 507 43 02' , '+380 67 507 43 02', '380675074302', '+380675074302', '0675074302', '067 507 43 02',

// Email
/^[a-zA-Z\d.\-\_]+\@[a-zA-Z]+\.[a-zA-Z]+$/; // 'rbec4263@gmail.com', 'danil.beshlebnov@gmail.com', 'rbec-4263@ukr.net', 'danil_beshlebnov@gmail.ua'

// URL
/^[a-zA-Z]+\:\/\/([a-zA-Z]+\.[a-zA-Z]+|[a-zA-Z]+)\.[a-zA-Z]+$/; // 'http://gmail.com', 'https://gmail.kiev.com'

// Adress
/^([a-zA-Zа-яёїґА-ЯЁЇҐ]+|[a-zA-Zа-яёїґА-ЯЁЇҐ]+(.)*[a-zA-Zа-яёїґА-ЯЁЇҐ]+)((.)+){1,3}$/; // 'country', 'country city', 'country: city', 'country-city-street', 'country-city-street'

// Time
/^0[0-9]|1[0-9]2[0-3][\.\:\-\s][0-5][0-9][\.\:\-\s][0-5][0-9]$/; // 'hours-minutes-seconds', 'hours:minutes:seconds'

// Date
/^(0[1-9]|[1-2][0-9]|3[0-2])[\.\-\_\s](0[1-9]|1[0-2])[\.\-\_\s]\d{4}$/; // 'date month year', 'date-month-year', 'date.month.year'
/^([1-9]|[1-2][0-9]|3[0-2])[\.\-\_\s][a-zA-Zа-яёїґА-ЯЁЇҐ]+[\.\-\_\s]\d{4}$/; // '5 month 2022'

// Password
/^(?=.*[a-zA-Zа-яёїґА-ЯЁЇҐ])(?=.*\d)(?=.*[^a-zA-Zа-яёїґА-ЯЁЇҐ\d]).*$/;

// Comment
/^.*$/; // any text


