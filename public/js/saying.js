const sayingContainer = document.querySelector('#js-saying');

const sayings = [
  "Think like a man of action and act like man of thought.",
  "Courage is very important. Like a muscle, it is strengthened by use.",
  "Life is the art of drawing sufficient conclusions from insufficient premises.",
  "By doubting we come at the truth.",
  "A man that hath no virtue in himself, ever envieth virtue in others.",
  "When money speaks, the truth keeps silent.",
  "Better the last smile than the first laughter.",
  "In the morning of life, work; in the midday, give counsel; in the evening, pray.",
  "Painless poverty is better than embittered wealth.",
  "A poet is the painter of the soul.",
  "Error is the discipline through which we advance.",
  "Faith without deeds is useless.",
  "Weak things united become strong.",
  "We give advice, but we cannot give conduct.",
  "Nature never deceives us; it is always we who deceive ourselves.",
  "Forgiveness is better than revenge.",
  "We never know the worth of water till the well is dry.",
  "Pain past is pleasure.",
  "Books are ships which pass through the vast seas of time.",
  "Who begins too much accomplishes little.",
  "Better the last smile than the first laughter.",
  "Faith is a higher faculty than reason.",
  "Until the day of his death, no man can be sure of his courage.",
  "Great art is an instant arrested in eternity.",
  "Faith without deeds is useless.",
  "The world is a beautiful book, but of little use to him who cannot read it.",
  "Heaven gives its favourites-early death.",
  "I never think of the future. It comes soon enough.",
  "Suspicion follows close on mistrust.",
  "He who spares the rod hates his son, but he who loves him is careful to discipline him.",
  "All good things which exist are the fruits of originality.",
  "The will of a man is his happiness.",
  "He that has no shame has no conscience.",
  "Weak things united become strong.",
  "A minute’s success pays the failure of years.",
  "United we stand, divided we fall.",
  "To doubt is safer than to be secure.",
  "Time is but the stream I go a-fishing in.",
  "A full belly is the mother of all evil.",
  "Love your neighbor as yourself.",
  "It is a wise father that knows his own child.",
  "By doubting we come at the truth.",
  "Absence makes the heart grow fonder.",
  "Habit is second nature.",
  "Who knows much believes the less.",
  "Only the just man enjoys peace of mind.",
  "Waste not fresh tears over old griefs.",
  "Life itself is a quotation.",
  "He is greatest who is most often in men’s good thoughts.",
  "Envy and wrath shorten the life.",
  "Where there is no desire, there will be no industry.",
  "To be trusted is a greater compliment than to be loved.",
  "Education is the best provision for old age.",
  "To jaw-jaw is better than to war-war.",
  "Music is a beautiful opiate, if you don’t take it too seriously.",
  "Appearances are deceptive.",
  "Let thy speech be short, comprehending much in few words.",
  "Things are always at their best in the beginning.",
  "A gift in season is a double favor to the needy.",
  "In giving advice, seek to help, not to please, your friend.",
  "The difficulty in life is the choice.",
  "The most beautiful thing in the world is, of course, the world itself.",
  "All fortune is to be conquered by bearing it.",
  "Better is to bow than break.",
  "Good fences makes good neighbors.",
  "Give me liberty, or give me death.",
];

function paintSaying() {
  const index = getIndex();
  const saying = sayings[index];
  sayingContainer.innerHTML = saying;
}

function getIndex() {
  return Math.floor(Math.random() * sayings.length);
}

function init() {
  paintSaying();
}

init();