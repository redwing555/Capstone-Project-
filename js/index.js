const speakerContain = document.querySelector('.speakers-container');

const speakersArray = [
  {
    name: 'Stephen Hawking',
    job: ' director of research at the University of Cambridge.',
    image: 'img/speaker1.jpg',
    bio: 'English theoretical physicist whose theory of exploding black holes drew upon both relativity theory and quantum mechanics.',
  },
  {
    name: 'Kip Thorne',
    job: 'Professor of Theoretical Physics at the California Institute of Technology.',
    image: 'img/speaker2.jpg',
    bio: 'Thorne\'s research has principally focused on relativistic astrophysics and gravitation physics, with emphasis on relativistic stars, black holes and especially gravitational waves.',
  },
  {
    name: 'Steven Weinberg',
    job: 'He held the Josey Regental Chair in Science at the University of Texas at Austin.',
    image: 'img/speaker3.jpg',
    bio: 'Nobel laureate in physics for his contributions with Abdus Salam and Sheldon Glashow to the unification of the weak force and electromagnetic interaction.',
  },
  {
    name: 'Jocelyn Bell Burnell',
    job: 'Visiting Professor of Astrophysics at the University of Oxford.',
    image: 'img/speaker4.jpg',
    bio: 'discovered the first radio pulsars as a postgraduate student in 1967.',
  },
  {
    name: 'Leonard Susskind',
    job: ' professor of theoretical physics at Stanford University.',
    image: 'img/speaker5.jpg',
    bio: 'One of the fathers of String theory He was the first to give a precise string-theoretic interpretation of the holographic principle.',
  },
  {
    name: 'Roger Penrose',
    job: 'He is Emeritus Rouse Ball Professor of Mathematics at the University of Oxford.',
    image: 'img/speaker6.jpg',
    bio: 'Penrose has made contributions to the mathematical physics of general relativity and cosmology.',
  },
];

let speakers = '';

speakersArray.forEach((speaker) => {
  speakers += `<article class="speaker" >
                    
                            
                        
  <div class="speakers-img">

      <img class="chessboard" src="img/chessboard.png" alt="">
          <img class="speaker-img" src="${speaker.image}" alt="">
      </div>
  
  <div class="speaker-info">
      <h3>${speaker.name}</h3>
      <p class="job"><em>${speaker.job}  </em></p>
      <div></div>
      <p class="bio">${speaker.bio}</p>
  </div>
  

</article>`;

  speakerContain.innerHTML = speakers;
});

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-desktop-container');
const body = document.querySelector('body');
const close = document.querySelector('.close');

function openMenu() {
  menu.classList.add('clickme');
  menu.classList.remove('nav-desktop-container');
  hamburger.classList.remove('hamburger');
  close.classList.add('close-active');
  body.style.overflow = 'hidden';
}

hamburger.addEventListener('click', openMenu);

function closeMenu() {
  menu.classList.remove('clickme');
  hamburger.classList.add('hamburger');
  close.classList.remove('close-active');
  menu.classList.add('nav-desktop-container');
  body.style.overflow = 'auto';
}

close.addEventListener('click', closeMenu);

const navList = document.querySelectorAll('.mnitem');
for (let i = 0; i < navList.length; i += 1) {
  navList[i].addEventListener('click', closeMenu);
}