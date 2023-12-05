export const countryOptions = ['Montenegro'].map((option) => ({
  label: option,
  value: option,
}));

export const _cityOptions = [
  { value: 'Andrijevica', country: 'Montenegro', label: 'Podgorica' },
  { value: 'Podgorica', country: 'Montenegro', label: 'Podgorica' },
];

export const cityOptions = [
  'Andrijevica',
  'Bar',
  'Berane',
  'Bijelo Polje',
  'Burva',
  'Cetinje',
  'Danilovgrad',
  'Gusinje',
  'Herceg Novi',
  'Kolašin',
  'Kotor',
  'mojkovac',
  'Nikšić',
  'Petnjica',
  'Plav',
  'Pljevlja',
  'Plužine',
  'Podgorica',
  'Rožaje',
  'Šavnik',
  'Tivat',
  'Ulcinj',
  'Žabljak',
].map((city) => ({
  value: city,
  label: city,
  country: 'Montenegro',
}));
