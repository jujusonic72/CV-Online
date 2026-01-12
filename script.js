// ===== GLOBAL STATE =====
let zIndexCounter = 1000;

// ===== MOBILE DETECTION =====
const isMobile = () => window.innerWidth <= 768;

// ===== TRANSLATIONS =====
const translations = {
  fr: {
    'menu.file': 'Fichier',
    'menu.webVersion': 'Version Web',
    'menu.pdfVersion': 'Version PDF',
    'menu.edit': 'Édition',
    'menu.hideAll': 'Tout cacher',
    'menu.showAll': 'Tout afficher',
    'menu.minimizeAll': 'Tout minimiser',
    'menu.extendAll': 'Tout étendre',
    'menu.language': 'Langue',
    'menu.help': 'Aide',
    'sidebar.windows': 'Fenêtres',
    'sidebar.personalInfo': 'Info perso',
    'sidebar.photo': 'Photo',
    'sidebar.contact': 'Contact',
    'sidebar.skills': 'Compétences',
    'sidebar.experience': 'Expériences',
    'sidebar.education': 'Éducation',
    'sidebar.workExperience': 'Expérience pro',
    'sidebar.portfolios': 'Portfolios',
    'sidebar.gamesPortfolio': 'Portfolio Jeux',
    'contact.phone': 'Téléphone:',
    'contact.email': 'Courriel:',
    'contact.address': 'Adresse:',
    'portfolio.with': 'avec',
    'skills.software': 'Logiciels',
    'skills.languages': 'Langages',
    'about.title': 'Moi actuellement',
    'about.job': 'Emploi:',
    'about.jobDesc': 'Professeur de création de jeux vidéo chez Studio XP à temps partiel',
    'about.studies': 'Études:',
    'about.studiesDesc': 'Étudiant à temps plein à l\'UQAT',
    'about.status': 'Statut:',
    'about.statusDesc': 'Ouvert aux opportunités de travail',
    'education.university': 'Université:',
    'education.bachelor': 'Baccalauréat:',
    'education.graduation': 'Graduation:',
    'education.cegep': 'CÉGEP:',
    'education.program': 'Programme:',
    'education.highSchool': 'Secondaire:',
    'education.uqatProgram': 'Création de jeux vidéo (programmation jouabilité)',
    'education.uqacProgram': 'Développement de Jeux Vidéo',
    'education.programChange': 'Changement de programme',
    'education.maisonneuveProgram': 'Techniques d\'intégration multimédia',
    'education.highSchoolDiploma': 'Diplôme d\'études secondaires',
    'work.title': 'Expérience professionnelle',
    'work.internship': 'Stage:',
    'work.internshipToJob': 'Stage→Travail:',
    'work.job': 'Travail:',
    'work.ubiPosition': 'Programmation Gameplay chez Ubisoft Québec',
    'work.ubiDate': 'Printemps 2025',
    'work.ubi1': 'Programmation Gameplay sur AC Shadows',
    'work.ubi2': 'Développement sur éditeur propriétaire Anvil',
    'work.ubi3': 'Débogage et investigation dans un codebase vaste et complexe',
    'work.ubi4': 'Création et modification de fonctionnalités sur un éditeur de jeu',
    'work.couleurPosition': 'Développeur de Jeux Vidéo AR mobile chez Couleur.tv',
    'work.couleur1': 'Développement d\'une application en RA sur Unity',
    'work.couleur2': 'Programmation de l\'interactivité en RA',
    'work.couleur3': 'Intégration d\'assets et level design',
    'work.couleur4': 'Programmation sonore pour RA',
    'work.revenuPosition': 'Étudiant en multimédia chez Revenu Québec',
    'work.revenu1': 'Gestion de contenu d\'une page SharePoint',
    'work.revenu2': 'Résolution de problèmes',
    'work.revenu3': 'Demandes de modifications de pages',
    'work.revenu4': 'Création de designs',
    'work.revenu5': 'Analyse d\'impact',
    'work.alicePosition': 'Développeur de jeux vidéo stagiaire chez Alice & Smith',
    'work.aliceDate': 'Été 2022',
    'work.alice1': 'Gestion de serveurs multijoueurs',
    'work.alice2': 'Utilisation d\'API et optimisation serveur',
    'work.alice3': 'Autonomie de travail',
    'work.alice4': 'Évaluation du temps requis pour un travail',
    'work.rocldPosition': 'Développeur web à contrat chez ROCLD',
    'work.rocld1': 'Gestion de contenu d\'un site Web',
    'work.rocld2': 'Développement et programmation d\'un site web',
    'work.rocld3': 'Intégration d\'un thème Wordpress à partir d\'une maquette'
  },
  en: {
    'menu.file': 'File',
    'menu.webVersion': 'Web Version',
    'menu.pdfVersion': 'PDF Version',
    'menu.edit': 'Edit',
    'menu.hideAll': 'Hide All',
    'menu.showAll': 'Show All',
    'menu.minimizeAll': 'Minimize All',
    'menu.extendAll': 'Extend All',
    'menu.language': 'Language',
    'menu.help': 'Help',
    'sidebar.windows': 'Windows',
    'sidebar.personalInfo': 'Personal Info',
    'sidebar.photo': 'Photo',
    'sidebar.contact': 'Contact',
    'sidebar.skills': 'Skills',
    'sidebar.experience': 'Experience',
    'sidebar.education': 'Education',
    'sidebar.workExperience': 'Work Experience',
    'sidebar.portfolios': 'Portfolios',
    'sidebar.gamesPortfolio': 'Games Portfolio',
    'contact.phone': 'Phone:',
    'contact.email': 'Email:',
    'contact.address': 'Address:',
    'portfolio.with': 'with',
    'skills.software': 'Software',
    'skills.languages': 'Languages',
    'about.title': 'About Me',
    'about.job': 'Job:',
    'about.jobDesc': 'Part-time video game creation teacher at Studio XP',
    'about.studies': 'Studies:',
    'about.studiesDesc': 'Full-time student at UQAT',
    'about.status': 'Status:',
    'about.statusDesc': 'Open to work opportunities',
    'education.university': 'University:',
    'education.bachelor': 'Bachelor\'s:',
    'education.graduation': 'Graduation:',
    'education.cegep': 'CÉGEP:',
    'education.program': 'Program:',
    'education.highSchool': 'High School:',
    'education.uqatProgram': 'Video Game Creation (Gameplay Programming)',
    'education.uqacProgram': 'Video Game Development',
    'education.programChange': 'Program change',
    'education.maisonneuveProgram': 'Multimedia Integration Techniques',
    'education.highSchoolDiploma': 'High School Diploma',
    'work.title': 'Work Experience',
    'work.internship': 'Internship:',
    'work.internshipToJob': 'Internship→Job:',
    'work.job': 'Job:',
    'work.ubiPosition': 'Gameplay Programming at Ubisoft Québec',
    'work.ubiDate': 'Spring 2025',
    'work.ubi1': 'Gameplay Programming on AC Shadows',
    'work.ubi2': 'Development on proprietary Anvil editor',
    'work.ubi3': 'Debugging and investigation in a large and complex codebase',
    'work.ubi4': 'Creation and modification of features on a game editor',
    'work.couleurPosition': 'Mobile AR Video Game Developer at Couleur.tv',
    'work.couleur1': 'AR application development on Unity',
    'work.couleur2': 'AR interactivity programming',
    'work.couleur3': 'Asset integration and level design',
    'work.couleur4': 'Sound programming for AR',
    'work.revenuPosition': 'Multimedia Student at Revenu Québec',
    'work.revenu1': 'SharePoint page content management',
    'work.revenu2': 'Problem solving',
    'work.revenu3': 'Page modification requests',
    'work.revenu4': 'Design creation',
    'work.revenu5': 'Impact analysis',
    'work.alicePosition': 'Video Game Developer Intern at Alice & Smith',
    'work.aliceDate': 'Summer 2022',
    'work.alice1': 'Multiplayer server management',
    'work.alice2': 'API usage and server optimization',
    'work.alice3': 'Work autonomy',
    'work.alice4': 'Time estimation for tasks',
    'work.rocldPosition': 'Contract Web Developer at ROCLD',
    'work.rocld1': 'Website content management',
    'work.rocld2': 'Website development and programming',
    'work.rocld3': 'WordPress theme integration from mockup'
  }
};

let currentLanguage = localStorage.getItem('cvLanguage') || 'fr';

// ===== i18n FUNCTIONS =====
const setLanguage = (lang) => {
  currentLanguage = lang;
  localStorage.setItem('cvLanguage', lang);
  document.documentElement.lang = lang;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
};

const setupLanguageButtons = () => {
  document.getElementById('menu-en')?.addEventListener('click', () => setLanguage('en'));
  document.getElementById('menu-fr')?.addEventListener('click', () => setLanguage('fr'));
};

// ===== STATE MANAGEMENT =====
const saveState = () => {
  if (isMobile()) {
    const saved = localStorage.getItem('floatingWindowsState');
    if (saved) {
      const state = JSON.parse(saved);
      state.forEach(cfg => {
        const el = document.getElementById(cfg.id);
        if (el) {
          cfg.minimized = el.classList.contains('minimized');
        }
      });
      localStorage.setItem('floatingWindowsState', JSON.stringify(state));
    }
    return;
  }
  
  const state = Array.from(document.querySelectorAll('.floating-window')).map(el => {
    return {
      id: el.id,
      top: el.style.top,
      left: el.style.left,
      width: el.style.width,
      height: el.style.height,
      zIndex: el.style.zIndex || '1000',
      minimized: el.classList.contains('minimized')
    };
  });
  localStorage.setItem('floatingWindowsState', JSON.stringify(state));
};

const restoreState = () => {
  const saved = localStorage.getItem('floatingWindowsState');
  if (saved) {
    const state = JSON.parse(saved);
    let maxZIndex = 1000;
    state.forEach(cfg => {
      const el = document.getElementById(cfg.id);
      if (el) {
        if (!isMobile()) {
          el.style.top = cfg.top;
          el.style.left = cfg.left;
          el.style.width = cfg.width;
          el.style.height = cfg.height;
        }
        if (cfg.zIndex) {
          el.style.zIndex = cfg.zIndex;
          const z = parseInt(cfg.zIndex, 10);
          if (z > maxZIndex) maxZIndex = z;
        }
        if (cfg.minimized) {
          el.classList.add('minimized');
          const content = el.querySelector('.content');
          if (content) content.style.display = 'none';
        }
      }
    });
    zIndexCounter = maxZIndex;
  }
};

// ===== WINDOW INITIALIZATION =====
const initializeFloatingWindows = () => {
  document.querySelectorAll('.floating-window').forEach(el => {
    if (el.dataset.init) return;
    el.dataset.init = true;

    let isDragging = false, offsetX = 0, offsetY = 0;

    const bringToFront = () => {
      zIndexCounter++;
      el.style.zIndex = zIndexCounter;
      saveState();
    };

    el.addEventListener('mousedown', bringToFront);
    el.addEventListener('touchstart', bringToFront, { passive: true });

    const dragStart = e => {
      if (isMobile()) return;
      if (!e.target.closest('.floating-header')) return;
      isDragging = true;
      offsetX = e.clientX - el.offsetLeft;
      offsetY = e.clientY - el.offsetTop;
      bringToFront();
      el.classList.add('dragging');
    };

    const dragMove = e => {
      if (!isDragging) return;
      const container = document.querySelector('.container');
      const maxX = container.clientWidth - el.offsetWidth;
      const maxY = container.clientHeight - el.offsetHeight;
      let newLeft = e.clientX - offsetX;
      let newTop = e.clientY - offsetY;
      newLeft = Math.max(0, Math.min(newLeft, maxX));
      newTop = Math.max(0, Math.min(newTop, maxY));
      el.style.left = newLeft + 'px';
      el.style.top = newTop + 'px';
    };

    const dragEnd = () => {
      if (isDragging) {
        isDragging = false;
        el.classList.remove('dragging');
        saveState();
      }
    };

    el.querySelector('.floating-header')?.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', dragMove);
    document.addEventListener('mouseup', dragEnd);

    const minimizeBtn = el.querySelector('.minimize-btn');
    const content = el.querySelector('.content');
    if (minimizeBtn && content) {
      minimizeBtn.addEventListener('click', () => {
        const isHidden = content.style.display === 'none';
        el.style.height = isHidden ? 'fit-content' : 'fit-content';
        content.style.display = isHidden ? 'block' : 'none';
        minimizeBtn.textContent = isHidden ? '−' : '+';
        el.classList.toggle('minimized', !isHidden);
        saveState();
      });
    }

    const resizeObserver = new ResizeObserver(() => {
      isDragging = false;
      saveState();
    });
    resizeObserver.observe(el);

    window.addEventListener('resize', () => {
      const container = document.querySelector('.container');
      const maxX = container.clientWidth - el.offsetWidth;
      const maxY = container.clientHeight - el.offsetHeight;
      let currentLeft = parseInt(el.style.left, 10);
      let currentTop = parseInt(el.style.top, 10);
      if (currentLeft > maxX) el.style.left = Math.max(0, maxX) + 'px';
      if (currentTop > maxY) el.style.top = Math.max(0, maxY) + 'px';
    });
  });
};

// ===== TOGGLE BINDINGS =====
const getWindowDisplay = () => 'flex';

const updateToggleBindings = () => {
  const toggles = document.querySelectorAll('.window-toggle');
  toggles.forEach(toggle => {
    toggle.removeEventListener('click', toggle._listener);
    toggle._listener = () => {
      const windowId = toggle.dataset.window;
      const target = document.getElementById(windowId);
      const isActive = toggle.classList.contains('active');
      
      if (target) {
        if (isActive) {
          toggle.classList.remove('active');
          target.style.opacity = 1;
          setTimeout(() => target.style.opacity = 0, 0);
          setTimeout(() => target.style.display = 'none', 150);
        } else {
          toggle.classList.add('active');
          target.style.opacity = 0;
          target.style.display = getWindowDisplay();
          setTimeout(() => target.style.opacity = 1, 10);
        }
      }
      
      const visibleState = {};
      document.querySelectorAll('.window-toggle').forEach(t => {
        visibleState[t.dataset.window] = t.classList.contains('active');
      });
      localStorage.setItem('visibleWindowStates', JSON.stringify(visibleState));
    };
    toggle.addEventListener('click', toggle._listener);
  });
};

const restoreToggleStates = () => {
  const savedWindowStates = JSON.parse(localStorage.getItem('visibleWindowStates') || '{}');
  document.querySelectorAll('.window-toggle').forEach(toggle => {
    const windowId = toggle.dataset.window;
    if (savedWindowStates.hasOwnProperty(windowId)) {
      const isVisible = savedWindowStates[windowId];
      const target = document.getElementById(windowId);
      
      if (isVisible) {
        toggle.classList.add('active');
        if (target) target.style.display = getWindowDisplay();
      } else {
        toggle.classList.remove('active');
        if (target) target.style.display = 'none';
      }
    }
  });
};

// ===== MENU ACTIONS =====
const setupMenuActions = () => {
  document.getElementById('menu-hide-all')?.addEventListener('click', () => {
    document.querySelectorAll('.window-toggle').forEach(toggle => {
      if (toggle.classList.contains('active')) {
        toggle.click();
      }
    });
  });

  document.getElementById('menu-show-all')?.addEventListener('click', () => {
    document.querySelectorAll('.window-toggle').forEach(toggle => {
      if (!toggle.classList.contains('active')) {
        toggle.click();
      }
    });
  });

  document.getElementById('menu-minimize-all')?.addEventListener('click', () => {
    document.querySelectorAll('.floating-window').forEach(el => {
      const content = el.querySelector('.content');
      const btn = el.querySelector('.minimize-btn');
      if (content && btn && content.style.display !== 'none') {
        content.style.display = 'none';
        btn.textContent = '+';
        el.classList.add('minimized');
      }
    });
    saveState();
  });

  document.getElementById('menu-extend-all')?.addEventListener('click', () => {
    document.querySelectorAll('.floating-window').forEach(el => {
      const content = el.querySelector('.content');
      const btn = el.querySelector('.minimize-btn');
      if (content && btn && content.style.display === 'none') {
        content.style.display = 'block';
        btn.textContent = '−';
        el.classList.remove('minimized');
      }
    });
    saveState();
  });
};

// ===== BURGER MENU =====
const setupBurgerMenu = () => {
  const burgerBtn = document.getElementById('burger-btn');
  const sidebar = document.querySelector('.side-bar');
  const overlay = document.getElementById('sidebar-overlay');

  if (!burgerBtn || !sidebar || !overlay) return;

  const toggleMenu = () => {
    burgerBtn.classList.toggle('active');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
  };

  const closeMenu = () => {
    burgerBtn.classList.remove('active');
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  };

  burgerBtn.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);

  document.querySelectorAll('.window-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      if (isMobile()) {
        setTimeout(closeMenu, 200);
      }
    });
  });
};

// ===== SKILL BARS INITIALIZATION =====
const initializeSkillBars = () => {
  const bars = document.querySelectorAll('.bar');
  bars.forEach(bar => {
    const score = parseFloat(bar.getAttribute('xp')) || 0;
    const scorePercent = (score / 10) * 100;
    const widthToSet = Math.min(scorePercent, 100);
    const progress = bar.querySelector('.progress');
    if (progress) {
      progress.style.width = widthToSet + '%';
    }
  });
};

// ===== MAIN INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  initializeFloatingWindows();
  restoreState();
  updateToggleBindings();
  restoreToggleStates();
  setupMenuActions();
  setupBurgerMenu();
  setupLanguageButtons();
  setLanguage(currentLanguage);
  initializeSkillBars();
});