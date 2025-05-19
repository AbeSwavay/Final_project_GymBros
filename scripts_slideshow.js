const coachSlides = [
  {
    img: "work_outclass.png",
    name: "Class",
    email: "joinClass@gymbros.com"
  },
  {
    img: "daquan.png",
    name: "Daquan",
    email: "daquan@gymbros.com"
  },
  {
    img: "david.png",
    name: "David",
    email: "david@gymbros.com"
  },
  {
    img: "jeff.png",
    name: "Jeff",
    email: "jeff@gymbros.com"
  }
  // Add more coaches as needed
];

let current = 0;
const img = document.getElementById('coach-img');
const info = document.getElementById('coach-info');

// Create dots for navigation
const dotsContainer = document.getElementById('coach-dots');
const dots = [];
if (dotsContainer) {
  for (let i = 0; i < coachSlides.length; i++) {
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.setAttribute('data-idx', i);
    dotsContainer.appendChild(dot);
    dots.push(dot);
  }
}

function showCoach(idx) {
  img.src = coachSlides[idx].img;
  img.alt = coachSlides[idx].name;
  if (idx === 0) {
    info.innerHTML = `<strong>${coachSlides[idx].name}</strong>`;
  } else {
    info.innerHTML = `<strong>${coachSlides[idx].name}</strong><br><span>${coachSlides[idx].email}</span>`;
  }
  // Use a while loop to clear all active dots
  let j = 0;
  while (j < dots.length) {
    dots[j].classList.remove('active');
    j++;
  }
  if (dots[idx]) dots[idx].classList.add('active');
}

document.getElementById('prev').onclick = () => {
  current = (current - 1 + coachSlides.length) % coachSlides.length;
  showCoach(current);
};
document.getElementById('next').onclick = () => {
  current = (current + 1) % coachSlides.length;
  showCoach(current);
};

// Dot navigation
if (dotsContainer) {
  dotsContainer.onclick = function(e) {
    if (e.target.classList.contains('dot')) {
      const idx = parseInt(e.target.getAttribute('data-idx'));
      current = idx;
      showCoach(current);
    }
  };
}

// Initialize
showCoach(current);