// const people = {
//   'jordan': {
//     name: 'Jordan Arnesen',
//     title: ' Curriculum Engineer'
//   },
//   ''
// }
const schedule = [
  {
    day: {
      short: 'Fri',
      long: 'Friday',
      number: 12,
      date: 'July 12'
    },
    events: [
      { name: 'Registration', start: '12:00 pm', end: '2:00 pm', summary: 'For questions or assistance: (415) 805-1774' },
      { name: 'Opening ceremony', start: '2:00 pm', end: '3:15 pm' },
      { name: 'Keynote: Jeremy Rossmann', subtitle: 'Co-founder of Make School', start: '9:30 am', end: '10:30 am',  },
      { name: 'Pitch Your Passion', subtitle: 'Make School Workshop', start: '3:15 pm', end: '4:30 pm', summary: 'How to pitch your passion for programming to inspire other and grow your club and hackathon attendance. Featuring Jordan Arnesen, Curriculum Engineer at Make School.' },
      { name: 'Keynote: Kat Mañalac', subtitle: 'YC Partner', start: '4:30 pm', end: '5:00 pm', summary: 'Kat was Chief of Staff to Alexis Ohanian, cofounder of reddit, before joining YC as its Director of Outreach.' },
      { name: 'Dinner', start: '5:00 pm', end: '6:00 pm', flavor: 'food' },
      { name: 'Afternoon activities', start: '6:00 pm', end: '10:00 pm', summary: 'Check-in at hostels or hang out at the venue' },
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
      { name: 'Check-in / Breakfast', start: '9:00 am', end: '9:30 am', flavor: 'food' },
      { name: 'Keynote: Zach Latta', subtitle: 'Founder of Hack Club', start: '9:30 am', end: '10:30 am' },
      { name: 'Break-out sessions', start: '10:30 am', end: '11:30 am' },
      { name: 'Break-out sessions', start: '11:30 am', end: '12:30 pm' },
      { name: 'Lunch', subtitle: 'Get your food!', start: '12:30 pm', end: '1:45 pm', flavor: 'food' },
      { name: 'Break-out sessions', start: '1:45 pm', end: '2:30 pm' },
      { name: 'Office hours', start: '2:30 pm', end: '3:45 pm', summary: `
Guests with available office hours:

- Amjad Masad, Founder of Repl.it
- Dave Fontenot, Founder of MachMatch, MHacks, Hackathon Hackers
- Haya Odeh, Co-Founder and Product Designer of Repl.it
- Jeremy Rossmann, Co-Founder of Make School
- Sonia Sachar, MLH Coach
- Zach Latta, Founder of Hack Club

You can request office hours with a random guest by reaching out to hello@flagshipsummit.com.
      ` },
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
      { name: 'Check-in / Breakfast', start: '9:00 am', end: '9:30 am', flavor: 'food' },
      { name: 'Keynote: Sonia Sachar', subtitle: 'MLH Coach', start: '9:30 am', end: '10:15 am' },
      { name: 'Office hours', start: '10:15 am', end: '11:00 am', summary: `
Guests with available office hours:

- Sonia Sachar, MLH Coach
- Zach Latta, Founder of Hack Club

You can request office hours with a random guest by reaching out to hello@flagshipsummit.com.
      ` },
      { name: 'Break-out sessions', start: '11:00 am', end: '12:00 pm' },
      { name: 'Lunch', start: '12:00 pm', end: '1:00 pm', flavor: 'food' },
      { name: 'Closing ceremony', start: '1:15 pm', end: '2:00 pm' },
      { name: 'Venue closes', start: '4:45 pm', end: '5:30 pm', summary: '', flavor: 'closing' },
    ]
  }
]
export default schedule