// emulator.js

const canvas = document.getElementById('gba-screen');
const startBtn = document.getElementById('startBtn');
const zoomSelect = document.getElementById('zoomSelect');
const romImage = document.getElementById('rom-image');
const gameSelect = document.getElementById('gameSelect');
let gba = null;
let keypad = null;

const baseWidth = 240;
const baseHeight = 160;

function applyZoom(factor) {
  const containerWidth = document.getElementById('canvas-wrapper').clientWidth;
  let newWidth = baseWidth * factor;
  let newHeight = baseHeight * factor;

  if (newWidth > containerWidth) {
    const scaleDownFactor = containerWidth / newWidth;
    newWidth = containerWidth;
    newHeight = baseHeight * factor * scaleDownFactor;
  }

  canvas.width = newWidth;
  canvas.height = newHeight;
  canvas.style.width = `${newWidth}px`;
  canvas.style.height = `${newHeight}px`;

  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  canvas.style.imageRendering = "pixelated";
}

zoomSelect.addEventListener('change', () => applyZoom(parseInt(zoomSelect.value)));
applyZoom(parseInt(zoomSelect.value));

async function loadBinary(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Erreur : ${response.statusText}`);
  return await response.arrayBuffer();
}

async function startEmulator(romPath) {
  if (gba) return;

  try {
    gba = new GameBoyAdvance();
    gba.setLogger((level, message) => console.log('GBA log:', level, message));
    gba.setCanvas(canvas);

    startBtn.disabled = true;
    startBtn.textContent = 'Chargement...';

    const biosBuffer = await loadBinary('public/emulator/rom/bios.bin');
    const romBuffer = await loadBinary(romPath);

    gba.setBios(biosBuffer, true);
    gba.setRom(romBuffer);
    gba.runStable();

    romImage.style.display = 'none';
    canvas.classList.remove('hidden');
    startBtn.textContent = 'Émulateur lancé';

  } catch (e) {
    console.error(e);
    alert('Erreur : ' + e.message);
    gba = null;
    startBtn.textContent = 'Lancer l’émulateur';
    startBtn.disabled = false;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  keypad = new GameBoyAdvanceKeypad();
  keypad.init();
});

// Modification touchHandler pour gérer les touches tactiles
GameBoyAdvanceKeypad.prototype.touchHandler = function (e) {
  const keyName = e.target.getAttribute('data-key');
  if (!keyName) return;

  const keyMap = {
    'LEFT': this.LEFT,
    'UP': this.UP,
    'RIGHT': this.RIGHT,
    'DOWN': this.DOWN,
    'START': this.START,
    'SELECT': this.SELECT,
    'A': this.A,
    'B': this.B,
    'L': this.L,
    'R': this.R,
  };

  const toggle = keyMap[keyName];
  if (toggle === undefined) return;

  let bit = 1 << toggle;
  let isDown = (e.type === 'touchstart' || e.type === 'mousedown');

  if (isDown) {
    this.currentDown &= ~bit;
  } else {
    this.currentDown |= bit;
  }

  e.preventDefault();
};

document.getElementById('touch-controls').addEventListener('touchstart', function (e) {
  if (e.target.tagName === 'BUTTON') {
    const key = e.target.getAttribute('data-key');
    if (key && keypad[key] !== undefined) {
      const bit = 1 << keypad[key];
      keypad.currentDown &= ~bit;
      e.preventDefault();
    }
  }
}, { passive: false });

document.getElementById('touch-controls').addEventListener('touchend', function (e) {
  if (e.target.tagName === 'BUTTON') {
    const key = e.target.getAttribute('data-key');
    if (key && keypad[key] !== undefined) {
      const bit = 1 << keypad[key];
      keypad.currentDown |= bit;
      e.preventDefault();
    }
  }
}, { passive: false });

function triggerKey(key, type = 'keydown') {
  if (!gba || !gba.keypad) return;

  const keyMap = {
    'UP': 38, 'DOWN': 40, 'LEFT': 37, 'RIGHT': 39,
    'A': 90, 'B': 88, 'L': 65, 'R': 83, 'START': 13, 'SELECT': 16
  };

  const keyCode = keyMap[key];
  if (!keyCode) return;

  const event = new KeyboardEvent(type, {
    keyCode: keyCode,
    which: keyCode,
    bubbles: true
  });

  document.dispatchEvent(event);
}

document.querySelectorAll('#touch-controls button').forEach(button => {
  const key = button.getAttribute('data-key');

  button.addEventListener('touchstart', e => {
    e.preventDefault();
    triggerKey(key, 'keydown');
  });

  button.addEventListener('touchend', e => {
    e.preventDefault();
    triggerKey(key, 'keyup');
  });

  button.addEventListener('mousedown', () => triggerKey(key, 'keydown'));
  button.addEventListener('mouseup', () => triggerKey(key, 'keyup'));
  button.addEventListener('mouseleave', () => triggerKey(key, 'keyup'));
});

// Liste des roms
const roms = {
  pokemonRubis: {
    image: 'public/emulator/rom/images/pokemonRubis.jpg',
    rom: 'public/emulator/rom/pokemonRubis.gba'
  },
  pokemonSaphir: {
    image: 'public/emulator/rom/images/pokemonSaphire.jpg',
    rom: 'public/emulator/rom/Pokemon - Version Saphir (France).gba'
  },
  pokemonEmeraude: {
    image: 'public/emulator/rom/images/pokemonEmeraude.png',
    rom: 'public/emulator/rom/Pokemon - Version Emeraude (France).gba'
  },
  zelda: {
    image: 'public/emulator/rom/images/zelda.jpg',
    rom: 'public/emulator/rom/Legend of Zelda, The - The Minish Cap (Europe) (En,Fr,De,Es,It).gba'
  },
  harryPotter2: {
    image: 'public/emulator/rom/images/harryPotter2.jpg',
    rom: 'public/emulator/rom/Harry Potter and the Chamber of Secrets (USA, Europe) (En,Fr,De,Es,It,Nl,Pt,Sv,No,Da).gba'
  },
  harryPotter3: {
    image: 'public/emulator/rom/images/harryPotter3.jpg',
    rom: 'public/emulator/rom/Harry Potter and the Prisoner of Azkaban (USA, Europe) (En,Fr,De,Es,It,Nl,Da).gba'
  },
  harryPotter4: {
    image: 'public/emulator/rom/images/harryPotter4.jpg',
    rom: 'public/emulator/rom/Harry Potter and the Goblet of Fire (USA, Europe) (En,Fr,De,Es,It,Nl,Da).gba'
  },
  harryPotter5: {
    image: 'public/emulator/rom/images/harryPotter5.jpg',
    rom: 'public/emulator/rom/Harry Potter and the Order of the Phoenix (Europe) (En,Fr,De,Es,It,Nl,Da).gba'
  },
  princeOfPersia: {
    image: 'public/emulator/rom/images/princeOfPersiaSandOfTIme.jpg',
    rom: 'public/emulator/rom/Prince of Persia - The Sands of Time (Europe) (En,Fr,De,Es,It,Nl).gba'
  },
  LordOfTheRings1: {
    image: 'public/emulator/rom/images/lordOfTheRings1.jpg',
    rom: 'public/emulator/rom/Lord of the Rings, The - The Fellowship of the Ring (Europe) (En,Fr,De,Es,It).gba'
  },
  LordOfTheRings2: {
    image: 'public/emulator/rom/images/lordOfTheRings2.jpg',
    rom: 'public/emulator/rom/Lord of the Rings, The - The Two Towers (USA, Europe) (En,Fr,De,Es,It,Nl).gba'
  },
  LordOfTheRings3: {
    image: 'public/emulator/rom/images/lordOfTheRings3.jpg',
    rom: 'public/emulator/rom/Lord of the Rings, The - The Return of the King (USA, Europe) (En,Fr,De,Es,It).gba'
  },
  Tarzan: {
    image: 'public/emulator/rom/images/Tarzan.jpg',
    rom: 'public/emulator/rom/Tarzan - L\'Appel de la Jungle (France).gba'
  },
  Rayman3: {
    image: 'public/emulator/rom/images/rayman3.jpg',
    rom: 'public/emulator/rom/Rayman 3 (Europe) (En,Fr,De,Es,It,Nl,Sv,No,Da,Fi).gba'
  },
  RaymanAdvance: {
    image: 'public/emulator/rom/images/raymanAdvance.jpg',
    rom: 'public/emulator/rom/Rayman Advance (Europe) (En,Fr,De,Es,It).gba'
  },
  GoldenSun: {
    image: 'public/emulator/rom/images/goldenSun.jpg',
    rom: 'public/emulator/rom/Golden Sun (France).gba'
  },
  MetroidFusion: {
    image: 'public/emulator/rom/images/metroidFusion.jpg',
    rom: 'public/emulator/rom/Metroid Fusion (Europe) (En,Fr,De,Es,It).gba'
  },
  MetroidZeroMission: {
    image: 'public/emulator/rom/images/metroidZeroMission.jpg',
    rom: 'public/emulator/rom/Metroid Fusion (Europe) (En,Fr,De,Es,It).gba'
  },
};

gameSelect.addEventListener('change', () => {
  const selectedGame = gameSelect.value;
  if (roms[selectedGame]) {
    romImage.src = roms[selectedGame].image;
    romImage.setAttribute('data-rom', roms[selectedGame].rom);
    romImage.style.display = 'block';
    canvas.classList.add('hidden');
    startBtn.textContent = 'Lancer l’émulateur';
    startBtn.disabled = false;
    gba = null;
  }
});

startBtn.addEventListener('click', () => {
  const romPath = romImage.getAttribute('data-rom');
  if (!romPath) {
    alert("Aucun jeu sélectionné !");
    return;
  }
  startEmulator(romPath);
});
