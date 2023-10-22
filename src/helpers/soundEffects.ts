export function playKeyDownSound() {
  const filename = "/public/sound/keydown.mp3";
  playAudio(filename);
}

export function playInvalidRowSound() {
  const filename = "/public/sound/invalidrow.mp3";
  playAudio(filename);
}

export function playValidRowSound() {
  const filename = "/public/sound/rowvalid.mp3";
  playAudio(filename);
}

export function playTrashRowSound() {
  const filename = "/public/sound/rownone.mp3";
  playAudio(filename);
}

export function playBackspaceSound() {
  const filename = "/public/sound/backspace.mp3";
  playAudio(filename);
}

export function playButtonClickSound() {
  const filename = "/public/sound/buttonclick.mp3";
  playAudio(filename);
}

export function playGameOverSound() {
  const filename = "/public/sound/gameover.mp3";
  playAudio(filename);
}

function playAudio(filename: string) {
  const audio = new Audio(filename);
  audio.oncanplay = () => {
    audio.play();
  };
}
