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
      short: "Fri",
      long: "Friday",
      number: 5,
      date: "August 5th",
    },
    events: [
      {
        name: "✅ Check-in Begins",
        subtitle: "Location: Reception",
        start: "6:00 pm",
        end: "7:00 pm",
      },
      {
        name: "👋 Opening ceremony",
        subtitle: "Location: Courtyard",
        start: "7:00 pm",
        end: "7:30 pm",
      },
      {
        name: "🍜 Dinner & Team Bonding",
        subtitle: "Location: Courtyard",
        start: "7:30 pm",
        end: "9:00 pm",
      },
      {
        name: "🌈 Workshops Wave #1",
        subtitle: "Location: 5th Floor Pods",
        start: "9:00 pm",
        end: "10:00 pm",
        summary: `
**Sound Galaxy**: Visualize sound by making particles move in a galaxy (Matthew Stanciu)

**Personal Website**: Build a website & put it on the internet (Max Speed)

**DIY Yubikey**: Build your own hardware security key that can be used for two-factor authentication with C++! (Maggie Liu)

**Build a Discord quote bot in Rust/Serenity**: Learn rust while writing your own Discord bot to preserve the funniest moments from your server (Cara)

**Intro to Next.JS with Tailwind**: "Start making websites with Next.js and Tailwind. We’ll create a personal website by the end of it. (Sarthak Mohanty, Jaden)

**Sprig**: Be the first users of Hack Club's new handheld game console the Sprig! In order to get a Sprig you'll have to build a game for it. Suitable for coders of all skill levels (Ced & Leo)`,
      },
      {
        name: "✨ Workshops Wave #2",
        subtitle: "Location: 5th Floor Pods",
        start: "10:00 pm",
        end: "11:00 pm",
        summary: `
**Build a Wikipedia graph using Scrapy**: Learn Python web scraping fundamentals and build a graph of Wikipedia with Scrapy (Griffin Li, Ryan Rudes)

**Command Line Magic**: Learn how to code your own command line applications in Node.js, how to interact with external APIs and how to add magic 🪄 to them! (Aaryan Porwal)

**React Native Pokedex**: Build a Pokedex with React Native in this workshop and learn React Native along the way! (Jianmin Chen, Steven Conaway)
        `,
      },
      {
        name: "🎤 The (Un)Talent Show",
        subtitle: "Location: Courtyard",
        start: "11:30 pm",
        end: "11:59 pm",
      },
    ],
  },
  {
    day: {
      short: "Sat",
      long: "Saturday",
      number: 6,
      date: "August 6",
    },
    events: [
      {
        name: "🥯 Breakfast Begins",
        subtitle: "Location: 5th Floor Kitchen",
        start: "7:00 am",
        end: "9:00 am",
      },
      {
        name: "🌌 Workshops Wave #3",
        subtitle: "Location: 5th Floor Pods",
        start: "9:00 am",
        end: "10:00 am",
        summary: `
**Shiny Crystals and Electricity: Using Mathematical Programming to Simulate Piezoelectric Devices**: Using FlexPDE and some physics & math knowledge of geometric/material properties, we'll be creating a model that shows us what happens to piezoelectric crystals in response to stress and/or electricity! (Dina)

**How to Build a Minecraft Farm with Kubernetes**: In this workshop we will see how to deploy your own projects with Kubernetes and how to turn this into a Minecraft farm (Adriano Pereira)

**Real-time Computer Vision tic-tac-toe**: Learn how to use computer vision to build a real-time tic-tac-toe game played with hand gestures (Emily Li)

**Intro to Data Science**: Learn practical applications of data science and how to work with public datasets. Beginner-friendly and hands-on. (Catherine Rasgaitis)`,
      },
      {
        name: "⚡ Lightning Talks",
        subtitle: "Location: Courtyard`",
        start: "10:00 am",
        end: "11:00 am",
      },
      {
        name: "🧶 Workshops Wave #4",
        subtitle: "Location: 5th Floor pods",
        start: "11:00 am",
        end: "12:00 pm",
        summary: `
**Let’s Build a Virtual DOM**: Aiden Bai	Ever wonder how React works internally? In this workshop we’ll be demystifying React and build our own Virtual DOM. Some prior experience with React and JavaScript is encouraged, but not necessary. (Aiden Bai)

**Intro to Figma**: Learn the basics of Figma and play around with fonts and experimental design styles. We’ll design a personal website by the end of it. (Sarthak Mohanty)

**Make your own programming language with JavaScript**: Learn to make your own lisp programming language from scratch with simple JavaScript in 250 lines (Tejas Agarwal)

**RFID workshop**: What is Arduino? What are RFIDs? & What is the 'witchcraft' that makes Apple Pay work? Come learn all about Arduino and RFIDs in this introductory workshop where you'll build your own access control system using RFID tags and LEDs! (Yamilett Estrada-Reyes)`,
      },
      {
        name: "🧭 Food Scavenger Hunt Begins",
        subtitle: "Location: Courtyard and outside",
        start: "12:00 pm",
        end: "2:00 pm",
      },
      {
        name: "🏠 Return to Figma HQ (from Scavenger Hunt)",
        subtitle: "Location: Courtyard",
        start: "2:00 pm",
        end: "3:00 pm",
      },
      {
        name: "🧠 Workshops Wave #5",
        subtitle: "Location: 5th Floor pods",
        start: "3:00 pm",
        end: "4:00 pm",
        summary: `
**Cybersecurity: Hacks, Exploits, and Flags**: The fun side of cybersecurity! Learn cyber tools and compete in a mini-competition! (Ganning Xu) Location: Bevel

**Intro to FPGA Design**: Learn how to use FPGAs to recreate the arcade game Pong. (Vijay Shanmugam, Michael Ilie) Location: Negative Space`,
      },
      {
        name: "🎉 Workshops Wave #6",
        subtitle: "Location: 5th Floor pods",
        start: "4:30 pm",
        end: "5:30 pm",
        summary: `
**Divination with gpt-3/j1**: language models are more powerful than you think (Celeste) Location: Negative Space

**Lockpicking**: Learn how to pick locks! (Max Speed) Location: Dodge

**Muse Jam**: Come jam out with Hack Club's custom language for making music! Suitable for coders of all skill levels. (Leo) Location: Bevel

**Yoga**: yoga’tta join this workshop! relax, recharge, and ragdoll pose while stretching your mind and body with yoga, meditation, and more. (Arianna Martinelli) Location: Negative Space (Starts at 5)

**Code Music Live**: Stuck on a bug? Use Sonic Pi to spread your creative wings and code music to cool off (Audrey Wang) Location: Dodge (Starts at 5)

**Talking to people**: Ever find it hard to talk to (new) people? I'll some tips and tricks to get the conversation going — let's talk! (Kayley Seow) Location: Bevel (Starts at 5)

**Build a Camera!**: Have you ever used a disposable camera? Do you wonder how film works? Wonder no longer! Build a pinhole camera in a film canister! (Kunal Botla)`,
      },
      {
        name: "🌮 Dinner Served",
        subtitle: "Location: Kitchen",
        start: "7:30 pm",
        end: "8:30 pm",
      },
      {
        name: "🎶 Synthwave Disco",
        subtitle: "Location: Courtyard",
        start: "9:30 pm",
        end: "10:30 pm",
      },
    ],
  },
  {
    day: {
      short: "Sun",
      long: "Sunday",
      number: 7,
      date: "August 7",
    },
    events: [
      {
        name: "🍪 Breakfast Begins",
        subtitle: "Location: Kitchen",
        start: "7:00 am",
        end: "9:00 am",
      },
      {
        name: "💖 Demos & Project Sharing",
        subtitle: "Location: Courtyard",
        start: "9:00 am",
        end: "11:00 am",
      },
      {
        name: "👏 Closing ceremony",
        subtitle: "Location: Courtyard",
        start: "11:00 am",
        end: "12:00 pm",
      },
      {
        name: "😢 Event ends & first BART transport leaves to SFO",
        subtitle: "Location: Courtyard",
        start: "12:00 pm",
        end: "1:00 pm",
      },
      {
        name: "🚆 Second BART transport leaves to SFO",
        subtitle: "Location: Building lobby",
        start: "6:00 pm",
        end: "7:00 pm",
      },
    ],
  },
];
export default schedule;
