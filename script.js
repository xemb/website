const words = [
  "accept", "account", "achieve", "act", "add", "admire", "advice", "agree",
  "aim", "allow", "answer", "appear", "apply", "argue", "arrive", "ask",
  "attack", "avoid", "balance", "be", "bear", "beat", "become", "begin",
  "believe", "belong", "bend", "bet", "bind", "bite", "blame", "blow",
  "boil", "borrow", "bother", "break", "breathe", "bring", "build", "burn",
  "buy", "call", "care", "carry", "catch", "cause", "change", "check",
  "choose", "claim", "clean", "climb", "close", "come", "compare", "complain",
  "complete", "concern", "confirm", "connect", "consider", "contain", "continue", "control",
  "cook", "copy", "count", "cover", "create", "cross", "cry", "cut",
  "damage", "dance", "deal", "decide", "deliver", "demand", "deny", "depend",
  "describe", "design", "destroy", "develop", "discover", "discuss", "divide",
  "do", "doubt", "draw", "dream", "drink", "drive", "drop", "earn",
  "eat", "encourage", "end", "enjoy", "enter", "escape", "expect", "explain",
  "express", "face", "fail", "fall", "feel", "fight", "fill", "find",
  "finish", "fit", "fix", "fly", "follow", "forget", "forgive", "form",
  "get", "give", "go", "grow", "guess", "happen", "hate", "have",
  "hear", "help", "hide", "hold", "hope", "hurt", "imagine", "improve",
  "include", "increase", "indicate", "inform", "intend", "introduce", "invite", "join",
  "jump", "keep", "kill", "know", "laugh", "learn", "leave", "lend",
  "let", "lie", "like", "listen", "live", "look", "lose", "love",
  "make", "manage", "matter", "mean", "meet", "mention", "mind", "miss",
  "move", "need", "notice", "obtain", "offer", "open", "order", "own",
  "pass", "pay", "perform", "pick", "plan", "play", "point", "prefer",
  "prepare", "present", "prevent", "produce", "promise", "protect", "prove", "provide",
  "pull", "push", "put", "raise", "reach", "read", "realize", "receive",
  "recognize", "reduce", "refuse", "regard", "relate", "release", "remain", "remember",
  "remove", "repeat", "replace", "reply", "report", "represent", "require", "rest",
  "return", "reveal", "ride", "ring", "rise", "run", "save", "say",
  "see", "seek", "seem", "sell", "send", "serve", "set", "shake",
  "share", "show", "shut", "sing", "sit", "sleep", "speak", "spend",
  "stand", "start", "stay", "stop", "study", "succeed", "suggest", "supply",
  "support", "suppose", "survive", "take", "talk", "teach", "tell", "tend",
  "test", "thank", "think", "throw", "touch", "train", "travel", "treat",
  "trust", "try", "turn", "understand", "use", "visit", "wait", "walk",
  "want", "watch", "wear", "win", "wish", "wonder", "work", "worry",
  "write", "answer", "belief", "chance", "choice", "dream", "effort", "fear",
  "hope", "idea", "lesson", "light", "love", "memory", "moment", "path",
  "peace", "reason", "risk", "rule", "story", "time", "truth", "voice"
];

const tog = document.getElementById('tog');
let sans = false;
tog.onclick = () => {
  if (sans) {
    document.body.style.fontFamily = '\'Times New Roman\', serif';
  } else {
    document.body.style.fontFamily = 'Arial, sans-serif';
  }
  sans = !sans;
};

const ask = document.getElementById('ask');
const godsays = document.getElementById('godsays');
ask.onclick = () => {
  let idx = Math.floor(Math.random() * words.length);
  godsays.textContent = words[idx];
};

// Drak theme detect
const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (isDark) {
  document.body.style.backgroundColor = '#333333';
  document.body.style.color = '#cccccc';
}