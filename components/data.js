const schedule = [
  {
    day: {
      short: 'Fri',
      long: 'Friday',
      number: 12,
      date: 'July 12'
    },
    events: [
      { name: 'Registration', subtitle: 'Papers, please', start: '12:00 pm', end: '2:00 pm' },
      { name: 'Opening ceremony', subtitle: 'Keynote: Jeremy Rossmann,\nco-founder of Make School', start: '2:00 pm', end: '3:15 pm', summary: 'Planned for 45 minutes, followed by a break until the next event' },
      { name: 'Make School Workshop', start: '3:15 pm', end: '4:30 pm' },
      { name: 'Industry Keynote: Kat Mañalac', start: '4:30 pm', end: '5:00 pm' },
      { name: 'Dinner', start: '5:00 pm', end: '10:00 pm', flavor: 'food' },
    ]
  },
  {
    day: {
      short: 'Sat',
      long: 'Saturday',
      number: 13,
      date: 'July 13'
    },
    events: [
      { name: 'Check-in / Breakfast', subtitle: 'Fresh dino eggs', start: '9:00 am', end: '9:30 am', flavor: 'food' },
      { name: 'Founder Keynote: Zach Latta', start: '9:30 am', end: '10:30 am' },
      { name: 'Break-out sessions', subtitle: '1st Hackathon | Hacker Tools | Running club meetings beyond the workshops', start: '10:30 am', end: '11:30 am' },
      { name: 'Break-out sessions', start: '11:30 am', end: '12:30 pm' },
      { name: 'Lunch', subtitle: 'Get your food!', start: '12:30 pm', end: '1:45 pm', flavor: 'food' },
      { name: 'Break-out sessions', start: '1:45 pm', end: '2:30 pm' },
      { name: 'Office hours', start: '2:30 pm', end: '3:45 pm' },
      { name: 'Break-out sessions', start: '3:45 pm', end: '4:45 pm' },
      { name: 'Closing remarks', start: '4:30 pm', end: '5:00 pm' },
      { name: 'Cybersecurity', start: '5:00 pm', end: '6:15 pm' },
      { name: 'Dinner', start: '6:15 pm', end: '8:15 pm', flavor: 'food' },
      { name: 'Unstructured / Games', start: '8:15 pm', end: '10:00 pm' },
    ]
  },
  {
    day: {
      short: 'Sun',
      long: 'Sunday',
      number: 14,
      date: 'July 14'
    },
    events: [
      { name: 'Check-in / Breakfast', subtitle: 'Fresh dino eggs', start: '9:00 am', end: '9:30 am', flavor: 'food' },
      { name: 'MLH Keynote: Sonia Sachar', start: '9:30 am', end: '10:15 am' },
      { name: 'Office hours', start: '10:15 am', end: '11:00 am' },
      { name: 'Break-out sessions', start: '11:00 am', end: '12:00 pm' },
      { name: 'Lunch', start: '12:00 pm', end: '1:00 pm', flavor: 'food' },
      { name: 'Closing ceremony', start: '1:15 pm', end: '2:00 pm' },
      { name: 'Venue closes', start: '4:45 pm', end: '5:30 pm', summary: '', flavor: 'closing' },
    ]
  }
]

export default schedule