const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music
const songs = [
  {
    name: 'BARMAN_WORKING',
    displayName: 'Barman Working',
    artist: 'Maverick',
  },
  {
    name: 'SERVING_DRINKS',
    displayName: 'Serving Drinks',
    artist: 'Maverick',
  },
  {
    name: 'PEOPLE_TALKING',
    displayName: 'People Talking',
    artist: 'Maverick',
  },
  {
    name: 'STREET_AMBIENCE',
    displayName: 'Street Ambience',
    artist: 'Maverick',
  },
  {
    name: 'NIGHT_AMBIENCE',
    displayName: 'Night Ambience',
    artist: 'Maverick',
  },
  {
    name: 'RAIN_ON_WINDOW',
    displayName: 'Rain on Window',
    artist: 'Maverick',
  },
  {
    name: 'jacinto-1',
    displayName: 'Electric Chill Machine',
    artist: 'Maverick',
  },
  {
    name: 'jacinto-1',
    displayName: 'Electric Chill Machine',
    artist: 'Jacinto Design',
  },
  {
    name: 'jacinto-2',
    displayName: 'Seven Nation Army (Remix)',
    artist: 'Jacinto Design',
  },
  {
    name: 'jacinto-3',
    displayName: 'Goodnight, Disco Queen',
    artist: 'Jacinto Design',
  },
  {
    name: 'metric-1',
    displayName: 'Front Row (Remix)',
    artist: 'Metric/Jacinto Design',
  },
];

// Check if playing
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

// Play or pause eventListener
playBtn.addEventListener('click', () => {
  isPlaying ? pauseSong() : playSong();
})

// Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

// Current song
let songIndex = 0;

// Previous song
function prevSong() {
  songIndex--
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  isPlaying ? playSong() : pauseSong();
}

// Next song
function nextSong() {
  songIndex++
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  isPlaying ? playSong() : pauseSong();
}

// On load - select first song
loadSong(songs[songIndex]);

// Event Listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);