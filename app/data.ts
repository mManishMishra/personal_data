import { BookOpen, Phone, Sparkles, Heart, Gift } from "lucide-react";

// --- BLUSH MESSAGES ---
export const BLUSH_MESSAGES = [
  "You waited 27 minutes just to hear my voice... that courage makes my heart race.",
  "Admit it, you're here because you missed me. (I missed you too).",
  "Just a reminder: Your voice is the only melody my heart beats to.",
  "Still crushing on the Blue House Captain. Some things never change. ❤️",
  "That 27-minute wait wasn't just a call. It was the best gift.",
  "I was the shy boy, you were the bold girl. We were perfect.",
  "Checking our diary? I bet you're smiling right now. 😉",
  "You made a railway waiting room feel like home just by calling me.",
  "I love it when you try to be tough, but I know you're soft for me.",
  "My day gets 100% better the second I hear you speak."
];

// --- PLAYLIST ---
export const PLAYLIST = [
  { id: "b1kQv8d-lqQ", title: "Pehla Nasha", emotion: "Class 6: When I first saw you." },
  { id: "fBFFlL58UTM", title: "Fairytale", emotion: "POV: You were my magic." },
  { id: "r6t2f1-sBbs", title: "Tera Hone Laga Hoon", emotion: "Class 8: When the crush became real." },
  { id: "2Vv-BfVoq4g", title: "Perfect", emotion: "We were just kids..." },
  { id: "mt9xg0mmt28", title: "Tum Se Hi", emotion: "The Separation: I never stopped thinking of you." },
  { id: "uDTG61Jd1Yc", title: "Apna Bana Le", emotion: "To my Healer: You are my temple." },
  { id: "1s74llI18nQ", title: "Tum Jo Aaye", emotion: "My Birthday: Zindagi ban gaye ho tum." }
];



// --- TIMELINE STORIES ---
export const TIMELINE_DATA = {
  school: {
    label: "The Golden Era (2009-13)",
    id: "school",
    iconName: "BookOpen", // Using string names to avoid hydration issues
    chapters: [
      {
        title: "The New Girl",
        img: "/new_girl.png", 
        text: "It was Class 6. I had just transferred to the new branch. Then, you walked in late. You took the first bench, right row, right side, sitting next to Shobha and another girl. I stopped looking at the board. I was just looking at you. A teacher even scolded me for staring! That was the beginning.",
        songSuggestion: "Pehla Nasha"
      },
      {
        title: "The Khaki Shorts Crisis",
        img: "/emb.png",
        text: "I was so intimidated by how cool you were that my own uniform embarrassed me. I hated wearing those khaki shorts in front of you. I literally went on strike at home! I told my mom: 'I am NOT going to school until I get full pants!' just so I could look like a gentleman for you.",
        songSuggestion: "Perfect"
      },
       {
        title: "The Front Desk War",
        img: "/front_desk_fight.png", 
        text: "Class 7, Day 2. We fought for that front row desk like it was a kingdom. To the world, it was an argument. But to me? It was intentional. I fought just to be close to you, to feel your presence, to accidentally brush shoulders. I was madly in love and this was my way of touching your world. A friend had to pull us apart, and I 'surrendered' the seat to you. Losing to you was my favorite victory.",
        songSuggestion: "Kuch Kuch Hota Hai" 
      },
      {
        title: "The Front Bench War",
        img: "/our_fight.png",
        text: "In Class 7, you sat right in front of me. We were friends now, but you had a crush on someone else. It made me so jealous! I used to steal your copies & files just to hold something of yours. And remember that guy who shoulder-rubbed you? I fought him. Because even if you liked someone else, I was the one protecting you.",
        songSuggestion: "Tum Se Hi"
      },
       {
        title: "The Unattainable Star",
        img: "/kho_kho.png",
        text: "You were the Topper. You didn't even seem to try hard, yet you were brilliant. You were confident, great at Kho-Kho, and fearless. I was just a boy admiring you from a distance. Truth be told? Everyone had a crush on you.",
        songSuggestion: "Fairytale"
      },
      {
        title: "Card Cricket Wars",
        img: "/cricket_game.png",
        text: "We were stupid kids. We used to play 'Card Cricket' in class. The biggest prize? Whoever won the match 'got' you. It was silly, but I fought those card battles like I was fighting for a kingdom. I just wanted to be associated with you, even in a game.",
        songSuggestion: "Tera Hone Laga Hoon"
      },
      {
        title: "The Introvert's Dilemma",
        img: "/doorway_block.png", 
        text: "You used to stand right at the classroom door, intentionally blocking my path because you knew I'd try to avoid you. Part of me wanted to break free, to playfully fight my way in... but I just froze. I was completely flabbergasted. You were my absolute dream, and just being near you made me blush uncontrollably. I was too shy to fight, so I just melted.",
        songSuggestion: "Chori Chori Chupke Chupke" 
      },
      {
        title: "The Kabaddi Miracle",
        img: "/hug.png",
        text: "My heart remembers this clearly. Sunny afternoon, end of corridor. You were playing Kabaddi and ran into me. For a moment, everything stopped. I held you. My favorite hug! I want you to run to me again, and this time, I will catch you and never let you go.",
        songSuggestion: "Apna Bana Le"
      },
      {
        title: "The Morning Drag",
        img: "/assembly.png", // Generate this!
        text: "Class 8. Morning assembly was my nightmare—I was terrified of messing up. But for you? It was a stage. You would literally drag me there! I was trembling inside, asking 'What if I mess up?', but you were buzzing with excitement. You didn't just pull me to the ground; you pulled me out of my shell every single morning.",
        songSuggestion: "Kuch Toh Hua Hai" 
      },
      {
        title: "The Anthem & The Free Spirit",
        img: "/anthem.png", // Generate this!
        text: "The teacher assigned you to lead the assembly. You handled everything like a queen, a total free spirit effortlessly managing the crowd. I stood next to you for the National Anthem, a nervous wreck vs. your effortless grace. I wasn't just singing; I was watching you in awe, wondering how anyone could be so perfect and fearless.",
        songSuggestion: "Iktara" // Fits the 'Free Spirit' vibe perfectly
      },
      {
        title: "Class 10: The Secret", 
        img: "/the_secret.jpg", // Use the image you want to blur
        text: "The year everything changed. The year you proposed. I was already in love with you from the moment I saw you in Class 6, but hearing you say it... it was the best memory of my entire life. My Forever Dream ..... (Story coming soon...)",
        songSuggestion: "Raabta",
        isLocked: true,
        lockedMessage: "A memory too precious to reveal just yet... Coming soon. ❤️" 
      }
    ]
  },
  reconnection: {
    label: "The Long Call (2017-22)",
    id: "reconnection",
    iconName: "Phone",
    chapters: [
      {
        title: "The Spark Returns (2017)",
        img: "/2017_golden_era.png", // Make sure to generate this! 
        text: "After school ended in 2013, we lost touch. But in early 2017, the universe pulled us back. For those first 3 months, it was intense. You were madly in love with me, and I was floating on air. We were miles apart, connected only by phone calls and texts, but it felt closer than ever.",
        songSuggestion: "Tum Se Hi"
      },
      {
        title: "The Echo",
        img: "/longing.png", 
        text: "From 2017 to 2022, we kept finding each other. We never met physically during these years, but our voices kept us alive. We were in touch, back and forth, writing a story that wasn't ready to end. We finally met in 2022, and it felt like .......",
        songSuggestion: "Agar Tum Saath Ho"
      }
    ]
  },
  present: {
    label: "The Beautiful Now (2026)",
    id: "present",
    iconName: "Sparkles",
    chapters: [
        {
        title: "To My Healer (12 Jan 2026)",
        img: "/healed.png", // Or a picture of you two
        text: "I am profoundly sorry. You healed me all last week, took me out of my despair, and instead of just being happy, I got scared and overthought. I know it made you mad. It should have. I was being an idiot who ran away when he should have stayed. 'Like a flute is hollow without breath, I am just noise without your calm.'",
        songSuggestion: "Apna Bana Le"
      },
      {
        title: "The Midnight Call",
        img: "/birthday_call.png", 
        text: "It was my Birthday, 2026. You were traveling, sitting in a Railway Waiting Room because the train was delayed. You waited 27 minutes... just to make that call at midnight. Amidst all that chaos and travel, you found time for me. Hearing your voice was the only gift I needed. We are back, and this connection is crazy.",
        songSuggestion: "Tum Jo Aaye"
      }
      
    ]
  }
};