const projects = document.querySelector('.img-container');

const article = document.createElement('article');
article.classList.add('multi-post');
article.innerHTML = `<img src="./images/image1.png" alt="image" />
<div class="work-text">
  <h2>Multi-Posts Stories</h2>
  <p>
    A daily selection of privately personalized reads; no accounts or
    sign-ups required. has been the industry's standard dummy text ever
    since the 1500s, when an unknown printer took a standard dummy text.
  </p>
  <ul>
    <li>
      <a href="#">css</a>
    </li>
    <li>
      <a href="#">html</a>
    </li>
    <li>
      <a href="#">Bootstrap</a>
    </li>
    <li>
      <a href="#">Ruby</a>
    </li>
  </ul>
  <button type="button" class="article-btn">see project</button>
</div>`;

projects.appendChild(article);

function addProjectCards() {
  for (let i = 0; i < 6; i += 1) {
    const div = document.createElement('div');
    div.classList.add('card-body');
    if (i === 0) {
      div.classList.add('one');
    } else if (i === 1) {
      div.classList.add('two');
    } else if (i === 2) {
      div.classList.add('three');
    } else if (i === 3) {
      div.classList.add('four');
    } else if (i === 4) {
      div.classList.add('five');
    } else if (i === 5) {
      div.classList.add('six');
    }

    div.innerHTML = `<h1 class="card-title">Profesional Art Printing Data</h1>
        <p class="supporting-text">
          A daily selection of privately personalized reads; no accounts or
          sign-ups required. has been the industry's standard
        </p>
        <ul class="card-ul">
          <li class="card-li">
            <a href="" class="card-a">html</a>
          </li>

          <li class="card-li">
            <a href="" class="card-a">bootstrap</a>
          </li>

          <li class="card-li">
            <a href="" class="card-a">ruby</a>
          </li>
        </ul>
        <button    class="project-btn">see project</button>`;
    projects.appendChild(div);
  }
}

addProjectCards();

const popupArray = [
  {
    name: 'Multi Post Stories',
    technologies: ['Css', 'html', 'bootstrap', 'Ruby'],
    image: {
      imageSrc: './images/image5.png',
      imageAlt: 'project image',
    },
    description: `A daily selection of privately personalized reads; no accounts or sign-ups required.
    has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a standard dummy text.`,
    live: 'https://pinkmoon25.github.io/Portfolio/',
    Source: 'https://github.com/PinkMoon25/Portfolio',
  },

  {
    name: 'Professional Art Printing Data 1',
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: {
      imageSrc: './images/image5.png',
      imageAlt: 'project image',
    },
    description: `A daily selection of privately personalized reads 
    no accounts or sign-ups required.
    has been the industry's standard`,
    live: 'https://businesskaniki.github.io/portfolio/',
    Source: 'https://github.com/businesskaniki/portfolio',
  },

  {
    name: 'Professional Art Printing Data 1',
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: {
      imageSrc: './images/image5.png',
      imageAlt: 'project image',
    },
    description: `A daily selection of privately personalized reads 
    no accounts or sign-ups required.
    has been the industry's standard`,
    live: 'https://businesskaniki.github.io/portfolio/',
    Source: 'https://github.com/businesskaniki/portfolio',
  },

  {
    name: 'Professional Art Printing Data 1',
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: {
      imageSrc: './images/image5.png',
      imageAlt: 'project image',
    },
    description: `A daily selection of privately personalized reads 
    no accounts or sign-ups required.
    has been the industry's standard`,
    live: 'https://businesskaniki.github.io/portfolio/',
    Source: 'https://github.com/businesskaniki/portfolio',
  },

  {
    name: 'Professional Art Printing Data 1',
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: {
      imageSrc: './images/image5.png',
      imageAlt: 'project image',
    },
    description: `A daily selection of privately personalized reads 
    no accounts or sign-ups required.
    has been the industry's standard`,
    live: 'https://businesskaniki.github.io/portfolio/',
    Source: 'https://github.com/businesskaniki/portfolio',
  },

  {
    name: 'Professional Art Printing Data 1',
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: {
      imageSrc: './images/image5.png',
      imageAlt: 'project image',
    },
    description: `A daily selection of privately personalized reads 
    no accounts or sign-ups required.
    has been the industry's standard`,
    live: 'https://businesskaniki.github.io/portfolio/',
    Source: 'https://github.com/businesskaniki/portfolio',
  },

  {
    name: 'Professional Art Printing Data 1',
    technologies: ['html', 'bootstrap', 'Ruby'],
    image: {
      imageSrc: './images/image5.png',
      imageAlt: 'project image',
    },
    description: `A daily selection of privately personalized reads 
    no accounts or sign-ups required.
    has been the industry's standard`,
    live: 'https://businesskaniki.github.io/portfolio/',
    Source: 'https://github.com/businesskaniki/portfolio',
  },
];

const body = document.querySelector('body');
const popupContainer = document.createElement('div');
const popupContent = document.createElement('article');

function popup(i) {
  popupContent.innerHTML = '';

  popupContainer.classList.add('popup-container');
  popupContent.classList.add('popup-content');
  popupContainer.appendChild(popupContent);
  body.appendChild(popupContainer);

  const h1 = document.createElement('h1');
  h1.classList.add('project-title');
  popupContent.appendChild(h1);

  const span = document.createElement('span');
  span.classList.add('close-popup');
  popupContent.appendChild(span);

  const icon = document.createElement('i');
  icon.classList.add('fa-solid', 'fa-xmark');
  span.appendChild(icon);

  const ul = document.createElement('ul');
  ul.classList.add('project-tags');
  popupContent.appendChild(ul);

  const alldiv = document.createElement('div');
  alldiv.classList.add('alldiv');

  const image = document.createElement('img');
  const div1 = document.createElement('div');
  div1 .classList.add('imagediv');
  image.classList.add('project-image');
  div1.appendChild(image);
  // popupContent.appendChild(div);

  const para = document.createElement('p');
  const pardiv = document.createElement('div');
  pardiv.classList.add('paradiv')
  para.classList.add('project-description');
  pardiv.appendChild(para);

  alldiv.append(div1, pardiv);
  popupContent.appendChild(alldiv);
  

  const buttonLive = document.createElement('button');
  buttonLive.classList.add('project-btn', 'popup-btn-live');
  buttonLive.setAttribute('type', 'button');
  popupContent.appendChild(buttonLive);

  const buttonSource = document.createElement('button');
  buttonSource.classList.add('project-btn', 'popup-btn-source');
  buttonSource.setAttribute('type', 'button');
  popupContent.appendChild(buttonSource);

  const liveLink = document.createElement('a');
  liveLink.classList.add('popupLink');
  liveLink.textContent = 'See Live';
  buttonLive.appendChild(liveLink);

  const sourceLink = document.createElement('a');
  sourceLink.classList.add('popupLink');
  sourceLink.textContent = 'See Source';
  buttonSource.appendChild(sourceLink);

  const btnIcon = document.createElement('img');
  btnIcon.setAttribute('src', 'Icons/Iconlive.png');
  btnIcon.setAttribute('alt', '');
  buttonLive.appendChild(btnIcon);

  const btnIcon2 = document.createElement('i');
  btnIcon2.classList.add('fa-brands', 'fa-github');
  buttonSource.appendChild(btnIcon2);

  h1.textContent = popupArray[i].name;

  Object.values(popupArray[i].technologies).forEach(
    (item) => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    },
  );

  image.setAttribute('src', `${popupArray[i].image.imageSrc}`);
  image.setAttribute('alt', `${popupArray[i].image.imageAlt}`);

  para.textContent = popupArray[i].description;

  liveLink.setAttribute('href', `${popupArray[i].live}`);

  sourceLink.setAttribute('href', `${popupArray[i].Source}`);
}

const articleBtn = document.querySelector('.article-btn');
const buttonOne = document.querySelector('.one .project-btn');
const buttonTwo = document.querySelector('.two .project-btn');
const buttonThree = document.querySelector('.three .project-btn');
const buttonFour = document.querySelector('.four .project-btn');
const buttonFive = document.querySelector('.five .project-btn');
const buttonSix = document.querySelector('.six .project-btn');

articleBtn.addEventListener('click', () => {
  popup(0);
  popupContainer.style.display = 'flex';
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});

buttonOne.addEventListener('click', () => {
  popup(1);
  popupContainer.style.display = 'flex';
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});

buttonTwo.addEventListener('click', () => {
  popup(2);
  popupContainer.style.display = 'flex';
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});

buttonThree.addEventListener('click', () => {
  popup(3);
  popupContainer.style.display = 'flex';
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});

buttonFour.addEventListener('click', () => {
  popup(4);
  popupContainer.style.display = 'flex';
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});

buttonFive.addEventListener('click', () => {
  popup(5);
  popupContainer.style.display = 'flex';
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});

buttonSix.addEventListener('click', () => {
  popup(6);
  popupContainer.style.display = 'flex';
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    popupContainer.style.display = 'none';
  });
});
