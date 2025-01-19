export function playKeyDownSound() {
  const filename = "/sound/keydown.mp3";
  playAudio(filename);
}

export function playInvalidRowSound() {
  const filename = "/sound/invalidrow.mp3";
  playAudio(filename);
}

export function playValidRowSound() {
  const filename = "/sound/rowvalid.mp3";
  playAudio(filename);
}

export function playTrashRowSound() {
  const filename = "/sound/rownone.mp3";
  playAudio(filename);
}

export function playBackspaceSound() {
  const filename = "/sound/backspace.mp3";
  playAudio(filename);
}

export function playButtonClickSound() {
  const filename = "/sound/buttonclick.mp3";
  playAudio(filename);
}

export function playGameOverSound() {
  const filename = "/sound/gameover.mp3";
  playAudio(filename);
}

function playAudio(filename: string) {
  const audio = new Audio(filename);
  audio.oncanplay = () => {
    audio.play();
  };
}
