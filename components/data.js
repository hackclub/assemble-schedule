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
      { name: 'Opening ceremony', start: '2:00 pm', end: '2:30 pm' },
      { name: 'Keynote: Jeremy Rossmann', subtitle: 'Co-founder of Make School', start: '2:30 pm', end: '3:15 pm'  },
      { name: 'Pitch Your Passion', subtitle: 'Make School Workshop', start: '3:15 pm', end: '4:30 pm', summary: 'How to pitch your passion for programming to inspire others and grow your club and hackathon attendance. Featuring Jordan Arnesen, Curriculum Engineer at Make School.' },
      { name: 'Keynote: Kat Mañalac', subtitle: 'YC Partner', start: '4:30 pm', end: '5:00 pm', summary: 'Kat was Chief of Staff to Alexis Ohanian, cofounder of reddit, before joining YC as its Director of Outreach.' },
      { name: 'Dinner', subtitle: 'Pizza', start: '5:00 pm', end: '6:00 pm', flavor: 'food', summary: 'Pizza by the slice from Oz Pizza.' },
      { name: 'Afternoon activities', start: '6:00 pm', end: '10:00 pm', summary: 'Check-in at hostels or hang out at the venue. Boardgames will be available.' },
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
      { name: 'Check-in / Breakfast', start: '9:00 am', end: '9:30 am', flavor: 'food', summary: `Light breakfast provided at Make School w/ fresh fruit, snack bars, yogurt, tea, coffee. Attendees with lodging will have a larger breakfast available at their hostels.` },
      { name: 'Keynote: Zach Latta', subtitle: 'Founder of Hack Club', start: '9:30 am', end: '10:30 am' },
      { name: 'Break-out sessions', start: '10:30 am', end: '11:30 am', summary: `
**The Deck:** How to Start Your First Hackathon _Ran by Lachlan_

**San Francisco:** Party Club _How to make your club a party for new members. Ran by Eureka._

**Hong Kong:** Hacker Tools _Quick and dirty tools for the high speed hacker. Ran by Max Speed._
` },
      { name: 'Break-out sessions', start: '11:30 am', end: '12:30 pm', summary: `
**The Deck:** Creative Marketing for CS Clubs _Ran by Matthew_

**San Francisco:** Diversity and Inclusion in Hackathons _Ran by Emily, Charissa, Lavi._

**Hong Kong:** Koding 4 Kids _Run by Ava and Jack._
` },
      { name: 'Lunch', subtitle: 'Sandwiches & Salads', start: '12:30 pm', end: '1:45 pm', flavor: 'food', summary: 'Catered by Bi-Rite' },
      { name: 'Break-out sessions', start: '1:45 pm', end: '2:30 pm', summary: `
**The Deck:** Running Club Meetings Beyond the Workshops _Ran by Dina._

**San Francisco:** Community @ Hackathons _Ran by Dave._

**Hong Kong:** "Green" Hackathons _Run by Sean._
` },
      { name: 'Office hours', start: '2:30 pm', end: '3:45 pm', summary: `
Guests with available office hours:

- Amjad Masad, Founder of Repl.it
- Dave Fontenot, Founder of MachMatch, MHacks, Hackathon Hackers
- Haya Odeh, Co-Founder and Product Designer of Repl.it
- Jeremy Rossmann, Co-Founder of Make School
- Sonia Sachar, MLH Coach
- Zach Latta, Founder of Hack Club

You can request office hours with a random guest [here](https://forms.gle/Hus8GmbZjVBLdKVz9).
      ` },
      { name: 'Break-out sessions', start: '3:45 pm', end: '4:45 pm', summary: `
**The Deck:** Beyond CS Club _Ran by Megan._

**San Francisco:** Team Building & Transition _Ran by Mingjie and Sean._

**Hong Kong:** Serving your member's interests _Run by Alex._
` },
      { name: 'Closing remarks', start: '4:45 pm', end: '5:15 pm' },
      { name: 'Cybersecurity', subtitle: 'Hacker game', start: '5:15 pm', end: '6:15 pm', summary: 'War games, CTFs, hacker games. Lead by Dina and Charissa.' },
      { name: 'Dinner', start: '6:15 pm', end: '8:15 pm', flavor: 'food' },
      { name: 'Unstructured Games', start: '8:15 pm', end: '10:00 pm' },
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
      { name: 'Check-in / Breakfast', start: '9:00 am', end: '9:30 am', flavor: 'food', summary: 'Light breakfast provided at Make School w/ fresh fruit, snack bars, yogurt, tea, coffee. Attendees with lodging will have a larger breakfast available at their hostels.' },
      { name: 'Keynote: Sonia Sachar', subtitle: 'MLH Coach', start: '9:30 am', end: '10:15 am' },
      { name: 'Office hours', start: '10:15 am', end: '11:00 am', summary: `
Guests with available office hours:

- Sonia Sachar, MLH Coach
- Zach Latta, Founder of Hack Club

You can request office hours with a random guest at [here](https://forms.gle/Hus8GmbZjVBLdKVz9).
      ` },
      { name: 'Break-out sessions', start: '11:00 am', end: '12:00 pm' },
      { name: 'Lunch', start: '12:00 pm', end: '1:00 pm', flavor: 'food', summary: '' },
      { name: 'Closing ceremony', start: '1:15 pm', end: '2:00 pm' },
      { name: 'Venue closes', start: '4:45 pm', end: '5:30 pm', summary: '', flavor: 'closing' },
    ]
  }
]
export default schedule