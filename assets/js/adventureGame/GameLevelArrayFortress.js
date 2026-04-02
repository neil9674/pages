// GAME_RUNNER: Array Fortress -- defend against guardians guarding array knowledge!

// --- Engine imports ---

import GameEnvBackground from './GameEngine/GameEnvBackground.js';
import Player from './GameEngine/Player.js';
import Npc from './GameEngine/Npc.js';

// =======================================================================
//  MODULE 1 - ChallengeBank
// =======================================================================
var ChallengeBank = {
  data: {
    'Goblin Scribe': [
      {
        q: "I scribble array declarations! Which declares a String array of 10 elements?",
        choices: [
          "String arr = new String[10];",
          "String[] arr = new String[10];",
          "String arr[] = String[10];",
          "array[String] arr(10);"
        ],
        answer: 1
      },
      {
        q: "What is the default value when you create: double[] temps = new double[7]?",
        choices: ["1.0", "0", "0.0", "NaN"],
        answer: 2
      },
      {
        q: "Which initializer properly creates a byte array?",
        choices: [
          "byte[] data = (10, 20, 30);",
          "byte[] data = new byte{10, 20};",
          "byte[] data = {10, 20};",
          "byte data[] = [10, 20];"
        ],
        answer: 2
      },
      {
        q: "You declare: Object[] items = new Object[5]; What is items[0]?",
        choices: ["0", "empty", "null", "Object()"],
        answer: 2
      }
    ],

    'Elf Ranger': [
      {
        q: "I track positions in the forest! int[] path = {14, 25, 17, 39}; What is path[1]?",
        choices: ["14", "25", "17", "39"],
        answer: 1
      },
      {
        q: "For char[] letters = new char[12]; what is the last valid index?",
        choices: ["11", "12", "10", "1"],
        answer: 0
      },
      {
        q: "String[] spells = \"fireball\", \"frostbolt\", \"lightning\" }; What is spells.length?",
        choices: ["2", "3", "8", "undefined"],
        answer: 1
      },
      {
        q: "What exception occurs when you access arr[arr.length]?",
        choices: [
          "NullPointerException",
          "ArrayLengthException",
          "ArrayIndexOutOfBoundsException",
          "IndexErrorException"
        ],
        answer: 2
      }
    ],

    'Dwarf Engineer': [
      {
        q: "I build tunnels with loops! int[] tunnels = {1,2,3,4,5}; Loop summing all: for(int i=0; i<tunnels.length; i++) sum+=tunnels[i]; Result?",
        choices: ["10", "14", "15", "20"],
        answer: 2
      },
      {
        q: "To traverse backwards from last to first element, which loop header?",
        choices: [
          "for (int i=0; i<arr.length; i++)",
          "for (int i=arr.length-1; i>=0; i--)",
          "for (int i=arr.length; i>0; i--)",
          "for (int i=arr.length; i>=1; i--)"
        ],
        answer: 1
      },
      {
        q: "Which loop visits indices 0, 2, 4, 6... (every other element)?",
        choices: [
          "for (int i=2; i<arr.length; i++)",
          "for (int i=1; i<arr.length; i+=2)",
          "for (int i=0; i<arr.length; i+=2)",
          "for (int i=0; i<=arr.length; i+=2)"
        ],
        answer: 2
      }
    ],

    'Mage Artificer': [
      {
        q: "I cast the for-each spell! What is the correct syntax?",
        choices: [
          "for (int val in array)",
          "for (array : int val)",
          "for (int val : array)",
          "foreach (int val; array)"
        ],
        answer: 2
      },
      {
        q: "In for(int x : nums), if you modify x, does nums change?",
        choices: [
          "Yes, the first element always changes",
          "No, x is a copy of each element",
          "Only if nums is a primitive type",
          "Yes, but only for odd-indexed elements"
        ],
        answer: 1
      },
      {
        q: "When should you prefer for-each over standard for?",
        choices: [
          "When the array is sorted",
          "When you only read elements, never modify",
          "When the array contains strings",
          "Never; always use standard for"
        ],
        answer: 1
      }
    ],

    'Dragon Keeper': [
      {
        q: "From my hoard, I declare a 5-row, 3-column treasure grid! Which line?",
        choices: [
          "int[][] treasure = new int[3][5];",
          "int[][] treasure = new int[5][3];",
          "int treasure[5,3];",
          "int[5][3] treasure;"
        ],
        answer: 1
      },
      {
        q: "For int[][] board = new int[6][4]; what does board.length return?",
        choices: ["4", "6", "24", "10"],
        answer: 1
      },
      {
        q: "To access row 2, column 3 (0-indexed), which notation?",
        choices: ["board[3][2]", "board[2][3]", "board(2,3)", "board.get(2,3)"],
        answer: 1
      },
      {
        q: "Which nested loop correctly fills every cell of a 2D array?",
        choices: [
          "for (int r=0; r<arr[0].length; r++) { for (int c=0; c<arr.length; c++) }",
          "for (int r=0; r<arr.length; r++) { for (int c=0; c<arr[r].length; c++) }",
          "for (int r=1; r<=arr.length; r++) { for (int c=1; c<=arr[r].length; c++) }",
          "for (int r=0; r<=arr.length-1; r++) { for (int c=0; c<=arr[r].length; c++) }"
        ],
        answer: 1
      }
    ],

    'Ancient Sentinel': [
      {
        q: "I guard ancient array magic! Which import enables Arrays utilities?",
        choices: [
          "import java.lang.Arrays;",
          "import java.io.Arrays;",
          "import java.util.Arrays;",
          "No import; Arrays is built-in"
        ],
        answer: 2
      },
      {
        q: "Arrays.fill(arr, 99) does what?",
        choices: [
          "Empties the array",
          "Sets all elements to 99",
          "Finds the index of 99",
          "Removes all 99s"
        ],
        answer: 1
      },
      {
        q: "After Arrays.sort(nums); elements are ordered how?",
        choices: [
          "Descending (largest first)",
          "Ascending (smallest first)",
          "Random order",
          "Unchanged"
        ],
        answer: 1
      },
      {
        q: "What does Arrays.toString(arr) return?",
        choices: [
          "The memory address",
          "A readable String like [5, 3, 8]",
          "The array length",
          "A new sorted copy"
        ],
        answer: 1
      }
    ]
  },

  pick: function(guardianId) {
    var pool = this.data[guardianId];
    if (!pool || !pool.length) return null;
    return pool[Math.floor(Math.random() * pool.length)];
  },

  check: function(q, idx) {
    return idx === q.answer;
  }
};

// =======================================================================
//  MODULE 2 - BattleTracker
// =======================================================================
var BattleTracker = {
  _defeated: {},
  TOTAL: 6,
  defeat:   function(id) { this._defeated[id] = true; },
  isDefeated: function(id) { return this._defeated[id] === true; },
  count:    function()   { return Object.keys(this._defeated).length; },
  completed: function()  { return this.count() >= this.TOTAL; },
  reset:    function()   { this._defeated = {}; }
};

// =======================================================================
//  MODULE 3 - ChallengeOverlay
// =======================================================================
var ChallengeOverlay = {
  open: false,
  _esc: null,

  THEME: {
    card:   'linear-gradient(145deg,#2d1b00,#4a2d00)',
    accent: '#ffb800',
    btn:    '#3a2600',
    good:   '#4ade80',
    bad:    '#ff6b6b'
  },

  show: function(guardianId, challenge) {
    if (this.open) return;
    this.open = true;

    if (BattleTracker.isDefeated(guardianId)) {
      this._announce('Guardian already vanquished!', this.THEME.good);
      return;
    }

    var q = ChallengeBank.pick(guardianId);
    if (!q) { this.open = false; return; }

    var self = this;
    var overlay = this._makeOverlay();
    var card    = this._makeCard();

    var hdr = document.createElement('h2');
    hdr.textContent = guardianId + '\'s Challenge';
    hdr.style.cssText = 'color:' + this.THEME.accent + ';margin:0 0 6px;font-size:1.3em;text-shadow:0 0 12px ' + this.THEME.accent + ';';
    card.appendChild(hdr);

    var chall = document.createElement('p');
    chall.textContent = challenge;
    chall.style.cssText = 'color:#d4a574;font-style:italic;font-size:0.9em;margin:0 0 16px;';
    card.appendChild(chall);

    var qBox = document.createElement('pre');
    qBox.style.cssText = 'background:#1a0f00;border:2px solid rgba(255,184,0,0.25);border-radius:8px;padding:14px;font-family:Consolas,monospace;font-size:0.9em;color:#f5d89f;margin:0 0 20px;text-align:left;white-space:pre-wrap;word-break:break-word;';
    qBox.textContent = q.q;
    card.appendChild(qBox);

    var btnWrap = document.createElement('div');
    btnWrap.style.cssText = 'display:flex;flex-direction:column;gap:10px;';
    q.choices.forEach(function(choice, idx) {
      var btn = document.createElement('button');
      btn.style.cssText = 'padding:12px 16px;border:2px solid rgba(255,184,0,0.3);border-radius:8px;background:' + self.THEME.btn + ';color:#e8c9a0;font-family:Consolas,monospace;font-size:0.92em;cursor:pointer;text-align:left;';
      btn.textContent = String.fromCharCode(65 + idx) + ')  ' + choice;
      btn.onmouseenter = function() {
        btn.style.borderColor = self.THEME.accent;
        btn.style.background  = '#5a3d00';
        btn.style.color       = '#fff';
        btn.style.boxShadow   = '0 0 14px rgba(255,184,0,0.35)';
      };
      btn.onmouseleave = function() {
        btn.style.borderColor = 'rgba(255,184,0,0.3)';
        btn.style.background  = self.THEME.btn;
        btn.style.color       = '#e8c9a0';
        btn.style.boxShadow   = 'none';
      };
      btn.onclick = function() { self._answer(guardianId, q, idx, overlay); };
      btnWrap.appendChild(btn);
    });
    card.appendChild(btnWrap);

    var hint = document.createElement('p');
    hint.textContent = 'Press Escape to dismiss';
    hint.style.cssText = 'color:#554;font-size:0.75em;margin:16px 0 0;';
    card.appendChild(hint);

    overlay.appendChild(card);
    document.body.appendChild(overlay);
    this._esc = function(e) { if (e.key === 'Escape') self._close(overlay); };
    document.addEventListener('keydown', this._esc);
  },

  _answer: function(guardianId, q, idx, overlay) {
    var ok = ChallengeBank.check(q, idx);
    if (ok) {
      BattleTracker.defeat(guardianId);
      BattleLog.update();
    }
    this._close(overlay);
    if (ok && BattleTracker.completed()) {
      var self = this;
      setTimeout(function() { self._showTriumph(); }, 250);
      return;
    }
    var msg   = ok ? 'Victory! ' + guardianId + ' is defeated!' : 'Defeat! Study the lesson and return!';
    var color = ok ? this.THEME.good : this.THEME.bad;
    this._announce(msg, color);
  },

  _announce: function(text, color) {
    var self = this;
    var overlay = this._makeOverlay('rgba(0,0,0,0.8)');
    var box = document.createElement('div');
    box.style.cssText = 'background:#2a1a00;color:#fff;border-radius:16px;padding:36px 40px;max-width:460px;width:90%;text-align:center;border:2.5px solid ' + color + ';box-shadow:0 0 44px ' + color + '55;';

    var p = document.createElement('p');
    p.textContent = text;
    p.style.cssText = 'font-size:1.15em;line-height:1.6;margin:0 0 20px;';
    box.appendChild(p);

    var btn = document.createElement('button');
    btn.textContent = 'Continue';
    btn.style.cssText = 'padding:11px 40px;border:none;border-radius:8px;background:' + color + ';color:#000;font-size:1em;font-weight:bold;cursor:pointer;';
    btn.onclick = function() { self._close(overlay); };
    box.appendChild(btn);

    overlay.appendChild(box);
    document.body.appendChild(overlay);
    this._esc = function(e) { if (e.key === 'Escape') self._close(overlay); };
    document.addEventListener('keydown', this._esc);
  },

  _showTriumph: function() {
    var overlay = this._makeOverlay();
    var box = document.createElement('div');
    box.style.cssText = 'background:linear-gradient(145deg,#1a0f00,#3a2400);color:#fff;border-radius:20px;padding:48px 44px;max-width:540px;width:94%;text-align:center;border:3px solid #ffb800;box-shadow:0 0 90px rgba(255,184,0,0.35);';

    var crown = document.createElement('div');
    crown.style.cssText = 'font-size:5em;margin-bottom:10px;';
    crown.textContent = '👑';
    box.appendChild(crown);

    var title = document.createElement('h1');
    title.textContent = 'ARRAY SENTINEL';
    title.style.cssText = 'color:#ffb800;font-size:2.3em;margin:0 0 14px;text-shadow:0 0 22px #ffb800;letter-spacing:3px;';
    box.appendChild(title);

    var sub1 = document.createElement('p');
    sub1.textContent = 'All 6 guardians have fallen!';
    sub1.style.cssText = 'font-size:1.2em;color:#d4a574;margin-bottom:10px;';
    box.appendChild(sub1);

    var sub2 = document.createElement('p');
    sub2.textContent = 'The fortress is saved! You have conquered every test of array knowledge: declarations, indexing, loops, for-each patterns, 2D grids, and utility methods.';
    sub2.style.cssText = 'font-size:0.98em;color:#a87444;margin-bottom:28px;line-height:1.7;';
    box.appendChild(sub2);

    var btn = document.createElement('button');
    btn.textContent = 'Claim Your Victory';
    btn.style.cssText = 'padding:14px 48px;border:none;border-radius:10px;background:#ffb800;color:#000;font-size:1.1em;font-weight:bold;cursor:pointer;';
    btn.onclick = function() { overlay.remove(); };
    box.appendChild(btn);

    overlay.appendChild(box);
    document.body.appendChild(overlay);
  },

  _makeOverlay: function(bg) {
    var d = document.createElement('div');
    d.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:' + (bg || 'rgba(0,0,0,0.9)') + ';display:flex;align-items:center;justify-content:center;z-index:10000;font-family:Segoe UI,sans-serif;';
    return d;
  },

  _makeCard: function() {
    var c = document.createElement('div');
    c.style.cssText = 'background:' + this.THEME.card + ';color:#e8c9a0;border-radius:18px;padding:32px 36px;max-width:580px;width:94%;box-shadow:0 0 55px rgba(255,184,0,0.12);border:2px solid rgba(255,184,0,0.28);text-align:center;';
    return c;
  },

  _close: function(overlay) {
    if (overlay && overlay.parentNode) overlay.remove();
    if (this._esc) document.removeEventListener('keydown', this._esc);
    this.open = false;
  }
};

// =======================================================================
//  MODULE 4 - BattleLog
// =======================================================================
var BattleLog = {
  el: null,
  GUARDIANS: [
    'Goblin Scribe',
    'Elf Ranger',
    'Dwarf Engineer',
    'Mage Artificer',
    'Dragon Keeper',
    'Ancient Sentinel'
  ],

  create: function() {
    var old = document.getElementById('fortress-battle-log');
    if (old) old.remove();
    this.el = document.createElement('div');
    this.el.id = 'fortress-battle-log';
    this.el.style.cssText = 'position:fixed;top:12px;right:12px;z-index:9999;background:linear-gradient(145deg,#2a1a00,#3d2600);border:2.5px solid rgba(255,184,0,0.35);border-radius:14px;padding:14px 20px;color:#e8c9a0;font-family:Segoe UI,sans-serif;box-shadow:0 0 28px rgba(255,184,0,0.12);min-width:220px;';
    document.body.appendChild(this.el);
    this.update();
  },

  update: function() {
    if (!this.el) return;
    var self = this;
    this.el.innerHTML = '';

    var title = document.createElement('div');
    title.style.cssText = 'font-weight:bold;font-size:1.08em;color:#ffb800;margin-bottom:8px;';
    title.textContent = 'Battles Won';
    this.el.appendChild(title);

    this.GUARDIANS.forEach(function(guardian) {
      var row = document.createElement('div');
      var beaten = BattleTracker.isDefeated(guardian);
      row.style.cssText = 'font-size:0.84em;padding:2px 0;color:' + (beaten ? '#4ade80' : '#665533') + ';';
      row.textContent = (beaten ? '[X] ' : '[ ] ') + guardian;
      self.el.appendChild(row);
    });

    var score = document.createElement('div');
    score.style.cssText = 'margin-top:10px;font-size:0.9em;color:#c9a569;border-top:1px solid rgba(255,184,0,0.15);padding-top:8px;';
    score.textContent = BattleTracker.count() + '/6 vanquished';
    this.el.appendChild(score);
  },

  destroy: function() {
    if (this.el) { this.el.remove(); this.el = null; }
  }
};

// =======================================================================
//  MODULE 5 - KingdomGate (Welcome Screen)
// =======================================================================
var KingdomGate = {
  shown: false,

  show: function(container, onEnter) {
    var self = this;
    self.shown = true;

    container.style.position = 'relative';

    var overlay = document.createElement('div');
    overlay.id = 'fortress-welcome';
    overlay.style.cssText = [
      'position:absolute', 'top:0', 'left:0', 'width:100%', 'height:100%',
      'background:linear-gradient(145deg,#1a0f00,#2d1a00,#3d2600)',
      'display:flex', 'flex-direction:column', 'align-items:center',
      'justify-content:center', 'z-index:10000',
      'font-family:Segoe UI,sans-serif'
    ].join(';') + ';';

    var title = document.createElement('div');
    title.textContent = 'Array Fortress';
    title.style.cssText = [
      'font-size:5.8em', 'font-weight:900', 'letter-spacing:7px',
      'color:#ffffff',
      'text-shadow:' + [
        '-6px -6px 0 #ffb800',
         '6px -6px 0 #ffb800',
        '-6px  6px 0 #ffb800',
         '6px  6px 0 #ffb800',
        '-6px  0   0 #ffb800',
         '6px  0   0 #ffb800',
         '0   -6px 0 #ffb800',
         '0    6px 0 #ffb800',
         '0 0 50px rgba(255,184,0,0.4)'
      ].join(','),
      'margin-bottom:32px',
      'user-select:none'
    ].join(';') + ';';
    overlay.appendChild(title);

    var subtitle = document.createElement('p');
    subtitle.textContent = 'Defeat all guardians to save the kingdom';
    subtitle.style.cssText = 'font-size:1.1em;color:#d4a574;margin-bottom:40px;';
    overlay.appendChild(subtitle);

    var btn = document.createElement('button');
    btn.textContent = 'Enter Battle';
    btn.style.cssText = [
      'background:#ff6b35',
      'color:#fff',
      'border:none',
      'padding:14px 52px',
      'font-size:1.2em',
      'font-weight:bold',
      'border-radius:30px',
      'cursor:pointer',
      'letter-spacing:1px',
      'box-shadow:0 5px 25px rgba(255,107,53,0.6)',
      'transition:transform 0.1s, box-shadow 0.1s'
    ].join(';') + ';';
    btn.onmouseenter = function() {
      btn.style.transform = 'scale(1.08)';
      btn.style.boxShadow = '0 7px 35px rgba(255,107,53,0.8)';
    };
    btn.onmouseleave = function() {
      btn.style.transform = 'scale(1)';
      btn.style.boxShadow = '0 5px 25px rgba(255,107,53,0.6)';
    };
    btn.onclick = function() {
      overlay.remove();
      self.shown = false;
      if (onEnter) onEnter();
    };
    overlay.appendChild(btn);

    container.appendChild(overlay);
  }
};

// =======================================================================
//  MODULE 6 - ArrayFortressLevel
// =======================================================================
class ArrayFortressLevel {
  constructor(gameEnv) {
    const path = gameEnv.path;
    const W    = gameEnv.innerWidth;
    const H    = gameEnv.innerHeight;

    BattleTracker.reset();
    BattleLog.create();

    const bgData = {
      name: 'array_fortress',
      greeting: 'The Array Fortress stands under siege. Brave heroes must defeat the magic guardians!',
      src: path + '/images/gamify/castle.png',
      pixels: { height: 574, width: 1025 }
    };

    const playerData = {
      id: 'Knight',
      greeting: 'I will defend the fortress!',
      src: path + '/images/gamify/knight.png',
      SCALE_FACTOR: 5,
      STEP_FACTOR: 1000,
      ANIMATION_RATE: 50,
      INIT_POSITION: { x: W / 2 - 32, y: H - H / 5 },
      pixels: { height: 512, width: 384 },
      orientation: { rows: 4, columns: 3 },
      down:      { row: 0, start: 0, columns: 3 },
      downRight: { row: 1, start: 0, columns: 3, rotate:  Math.PI / 16 },
      downLeft:  { row: 2, start: 0, columns: 3, rotate: -Math.PI / 16 },
      left:      { row: 2, start: 0, columns: 3 },
      right:     { row: 1, start: 0, columns: 3 },
      up:        { row: 3, start: 0, columns: 3 },
      upLeft:    { row: 2, start: 0, columns: 3, rotate:  Math.PI / 16 },
      upRight:   { row: 1, start: 0, columns: 3, rotate: -Math.PI / 16 },
      hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
      keypress: { up: 87, left: 65, down: 83, right: 68 }
    };

    function makeGuardian(id, challenge, sprite, pixels, pos, scaleFactor, orient, downAnim) {
      return {
        id:             id,
        greeting:       challenge,
        _challenges:    challenge,
        src:            path + sprite,
        SCALE_FACTOR:   scaleFactor,
        ANIMATION_RATE: 110,
        pixels:         pixels,
        INIT_POSITION:  pos,
        orientation:    orient,
        down:           downAnim,
        hitbox: { widthPercentage: 0.3, heightPercentage: 0.3 },
        interact: function() { ChallengeOverlay.show(id, challenge); }
      };
    }

    const goblinScribe = makeGuardian(
      'Goblin Scribe',
      'Answer my riddle about parsing declarations!',
      '/images/gamify/goblin.png',
      { width: 264, height: 192 },
      { x: W * 0.10, y: H * 0.15 },
      4,
      { rows: 4, columns: 4 },
      { row: 0, start: 0, columns: 4 }
    );

    const elfRanger = makeGuardian(
      'Elf Ranger',
      'Track positions or face my arrows!',
      '/images/gamify/elf.png',
      { width: 627, height: 316 },
      { x: W * 0.85, y: H * 0.08 },
      8,
      { rows: 3, columns: 6 },
      { row: 1, start: 0, columns: 6 }
    );

    const dwarfEngineer = makeGuardian(
      'Dwarf Engineer',
      'Prove you can build loops through my tunnels!',
      '/images/gamify/dwarf.png',
      { width: 256, height: 352 },
      { x: W * 0.08, y: H * 0.52 },
      4,
      { rows: 1, columns: 1 },
      { row: 0, start: 0, columns: 1 }
    );

    const mageArtificer = makeGuardian(
      'Mage Artificer',
      'Unravel the mysteries of elegant for-each loops!',
      '/images/gamify/mage.png',
      { width: 343, height: 503 },
      { x: W * 0.87, y: H * 0.48 },
      4,
      { rows: 1, columns: 1 },
      { row: 0, start: 0, columns: 1 }
    );

    const dragonKeeper = makeGuardian(
      'Dragon Keeper',
      'Navigate my multi-dimensional hoard!',
      '/images/gamify/dragon.png',
      { width: 306, height: 388 },
      { x: W * 0.15, y: H * 0.75 },
      4,
      { rows: 1, columns: 1 },
      { row: 0, start: 0, columns: 1 }
    );

    const ancientSentinel = makeGuardian(
      'Ancient Sentinel',
      'Wield the ancient array utilities with wisdom!',
      '/images/gamify/sentinel.png',
      { width: 801, height: 301 },
      { x: W * 0.70, y: H * 0.76 },
      6,
      { rows: 1, columns: 1 },
      { row: 0, start: 0, columns: 1 }
    );

    const guardianList = [
      goblinScribe, elfRanger, dwarfEngineer,
      mageArtificer, dragonKeeper, ancientSentinel
    ];

    function proximityChallenge(e) {
      if (KingdomGate.shown) return;
      if (e.key.toLowerCase() !== 'e') return;
      if (ChallengeOverlay.open) return;
      const playerObj = gameEnv.gameObjects && gameEnv.gameObjects.find(
        function(o) { return o.spriteData && o.spriteData.id === 'Knight'; }
      );
      if (!playerObj) {
        document.removeEventListener('keydown', proximityChallenge);
        return;
      }
      var px = playerObj.position.x + playerObj.width / 2;
      var py = playerObj.position.y + playerObj.height / 2;
      var nearest = null, nearestDist = Infinity;
      for (var i = 0; i < guardianList.length; i++) {
        var gd = guardianList[i];
        var gObj = gameEnv.gameObjects.find(
          function(o) { return o.spriteData && o.spriteData.id === gd.id; }
        );
        if (!gObj) continue;
        var gx = gObj.position.x + gObj.width / 2;
        var gy = gObj.position.y + gObj.height / 2;
        var dist = Math.sqrt((px - gx) * (px - gx) + (py - gy) * (py - gy));
        if (dist < nearestDist) { nearestDist = dist; nearest = gd; }
      }
      if (nearest && nearestDist < 250) {
        ChallengeOverlay.show(nearest.id, nearest._challenges);
      }
    }
    KingdomGate.show(gameEnv.gameContainer, function() {});
    document.addEventListener('keydown', proximityChallenge);

    var hintEl = document.createElement('div');
    hintEl.id = 'fortress-hint';
    hintEl.style.cssText = 'position:fixed;bottom:28px;left:50%;transform:translateX(-50%);background:rgba(0,0,0,0.8);color:#ffb800;padding:7px 20px;border-radius:22px;font-family:Segoe UI,sans-serif;font-size:0.92em;pointer-events:none;opacity:0;transition:opacity 0.3s;z-index:9990;border:1.5px solid rgba(255,184,0,0.45);';
    document.body.appendChild(hintEl);

    var hintInterval = setInterval(function() {
      var pObj = gameEnv.gameObjects && gameEnv.gameObjects.find(
        function(o) { return o.spriteData && o.spriteData.id === 'Knight'; }
      );
      if (!pObj) { clearInterval(hintInterval); hintEl.remove(); return; }
      var ppx = pObj.position.x + pObj.width / 2;
      var ppy = pObj.position.y + pObj.height / 2;
      var minDist = Infinity, nearName = '';
      for (var j = 0; j < guardianList.length; j++) {
        var gd2 = guardianList[j];
        var go2 = gameEnv.gameObjects.find(
          function(o) { return o.spriteData && o.spriteData.id === gd2.id; }
        );
        if (!go2) continue;
        var d2 = Math.sqrt(
          (ppx - (go2.position.x + go2.width/2)) * (ppx - (go2.position.x + go2.width/2)) +
          (ppy - (go2.position.y + go2.height/2)) * (ppy - (go2.position.y + go2.height/2))
        );
        if (d2 < minDist) { minDist = d2; nearName = gd2.id; }
      }
      if (minDist < 250 && !ChallengeOverlay.open && !KingdomGate.shown) {
        hintEl.textContent = 'Press E to challenge ' + nearName;
        hintEl.style.opacity = '1';
      } else {
        hintEl.style.opacity = '0';
      }
    }, 100);

    this.classes = [
      { class: GameEnvBackground, data: bgData },
      { class: Player,            data: playerData },
      { class: Npc,               data: goblinScribe },
      { class: Npc,               data: elfRanger },
      { class: Npc,               data: dwarfEngineer },
      { class: Npc,               data: mageArtificer },
      { class: Npc,               data: dragonKeeper },
      { class: Npc,               data: ancientSentinel }
    ];
  }
}

 
 

export default ArrayFortressLevel;
