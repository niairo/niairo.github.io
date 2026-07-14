/* Bilingual content. Keys are stable; all values are applied with textContent. */
const translations = {
  en: {
    meta: { title: 'Robert RYAN — Web Designer & Front-End Integrator', description: 'Robert RYAN is an experienced Web Designer and front-end integrator working across accessibility, UX, WordPress, CMS integration and design systems.' },
    a11y: { skip: 'Skip to main content', home: 'Robert RYAN, home', navigation: 'Primary navigation', languageSelector: 'Choose language', theme: 'Switch colour theme', menu: 'Open menu', disciplines: 'Core disciplines', progress: 'Portfolio preparation', philosophy: 'Design philosophy', changed: 'Language changed to English' },
    nav: { home: 'Home', profile: 'Profile', expertise: 'Expertise', projects: 'Projects', experience: 'Experience', contact: 'Contact' },
    hero: { status: 'Portfolio refresh in progress', title: 'I design accessible digital experiences by bringing together creativity, ease of use and front-end expertise.', intro: 'A Web Designer and front-end integrator with more than ten years’ experience, I create interfaces, content and digital journeys that meet user needs while respecting production constraints. My work spans visual design, web integration, WordPress, Design Systems, digital accessibility and digital communication.', note: 'Detailed case studies are being prepared and will be published shortly.' },
    actions: { cv: 'Download my CV', linkedin: 'View my LinkedIn profile' },
    art: { everyone: 'Designing for everyone', accessible: 'Accessible by default' },
    status: { eyebrow: 'Portfolio update', title: 'A new selection of work is on its way.', copy: 'This portfolio is being updated to present recent work as detailed case studies. It will soon include examples of interface design, accessibility improvements, Design System integration, WordPress development and digital content creation. Until then, my CV, LinkedIn profile and contact details remain available here.', progress: 'Selecting, documenting and refining' },
    expertise: { accessibility: 'Digital accessibility', cms: 'WordPress and CMS', ui: 'Web and UI design', frontend: 'Front-end integration', communication: 'Digital communication', motion: 'Motion design', graphic: 'Graphic design' },
    profile: { eyebrow: '01 — Profile', title: 'A profile connecting design with web production', copy1: 'My experience allows me to contribute throughout the digital creation process: understanding the brief, visual design, prototyping, front-end integration, CMS publishing and continuous improvement.', copy2: 'I regularly work with marketing, UX, development, compliance and data teams. This multidisciplinary approach helps me propose solutions that are creative, technically realistic and appropriate for users.' },
    skills: { eyebrow: '02 — Expertise', title: 'A broad toolkit. One coherent approach.', intro: 'Visual thinking, user experience and technology come together to create considered, practical work.', accessibility: 'Digital accessibility', frontend: 'Front-end integration', communication: 'Digital communication' },
    skillGroups: { inclusive: 'Inclusive design', frontend: 'Front-end and CMS', visual: 'Visual design', direction: 'Digital production' },
    skillItems: { responsive: 'Responsive design', ux: 'User experience', cms: 'CMS integration', ui: 'Interface design', graphic: 'Graphic design', analytics: 'Analytics' },
    experience: { eyebrow: '03 — Experience', title: 'Professional experience', intro: 'A career spanning graphic design, digital communication and accessible web production.', present: '[Present — Date]', dates: '[Date — Date]', role1: 'Web Design, Accessibility and Front-End Integration', copy1: 'Designing and integrating digital journeys, evolving shared components, supporting accessibility and connecting creative, marketing and technical teams.', role2: 'Digital Design and Development', copy2: 'Creating responsive interfaces and campaign content across CMS platforms, with close attention to clarity, consistency and continuous improvement.', independent: 'Independent', role3: 'Freelance Graphic Designer', copy3: 'Managing creative projects across identity, print, web, illustration and motion design, from the initial discussion through to final production.' },
    projects: { eyebrow: '04 — Coming soon', title: 'Case studies in preparation', intro: 'The projects published here will explain the initial context, constraints, my role, the approach taken and the solutions delivered.', status: 'Case study in preparation', card1Title: 'Improving the accessibility of a customer portal', card1Copy: 'Analysing user difficulties, adapting page structure and integrating accessible fixes within an existing technical environment.', card2Title: 'Modernising a WordPress experience', card2Copy: 'Evolving the interface, improving components and bringing the platform closer to a shared Design System.', card3Title: 'Integrating a Design System', card3Copy: 'Implementing coherent, reusable and accessible components to improve quality and production efficiency.', card4Title: 'Optimising a digital journey', card4Copy: 'Bringing design, development, marketing and data analysis together to simplify a journey and improve its measurement.' },
    quote: '“The strongest digital work is created when visual design, accessibility and technology support one another.”',
    contact: { eyebrow: 'Would you like to know more?', title: 'Let’s discuss your projects.', copy: 'If you would like to know more about my experience or see work that has not yet been published here, you can contact me directly or view my CV and LinkedIn profile.', profile: 'View profile', cvLabel: 'Curriculum vitae' },
    footer: { status: 'Portfolio currently being updated. New case studies will be published shortly.', credit: 'Designed with care' }
  },
  fr: {
    meta: { title: 'Robert RYAN — Web Designer et intégrateur front-end', description: 'Robert RYAN, Web Designer et intégrateur front-end expérimenté : accessibilité numérique, UX, WordPress, gestion de contenu et Design Systems.' },
    a11y: { skip: 'Aller au contenu principal', home: 'Robert RYAN, accueil', navigation: 'Navigation principale', languageSelector: 'Choisir la langue', theme: 'Changer de thème de couleurs', menu: 'Ouvrir le menu', disciplines: 'Domaines de compétence', progress: 'Préparation du portfolio', philosophy: 'Approche du design', changed: 'Langue du site changée en français' },
    nav: { home: 'Accueil', profile: 'Profil', expertise: 'Expertises', projects: 'Projets', experience: 'Parcours', contact: 'Contact' },
    hero: { status: 'Portfolio en cours de mise à jour', title: 'Je conçois des expériences numériques accessibles, en associant créativité, simplicité d’usage et maîtrise du front-end.', intro: 'Web Designer et intégrateur front-end depuis plus de dix ans, je conçois des interfaces, des contenus et des parcours numériques adaptés aux besoins des utilisateurs comme aux contraintes de production. Mon expérience couvre notamment la conception graphique, l’intégration web, WordPress, les Design Systems, l’accessibilité numérique et la communication digitale.', note: 'Des études de cas détaillées sont en préparation et seront publiées prochainement.' },
    actions: { cv: 'Télécharger mon CV', linkedin: 'Consulter mon profil LinkedIn' },
    art: { everyone: 'Concevoir pour tous', accessible: 'Accessible dès la conception' },
    status: { eyebrow: 'Mise à jour du portfolio', title: 'Une nouvelle sélection de projets arrive bientôt.', copy: 'Ce portfolio est actuellement mis à jour afin de présenter mes projets récents sous la forme d’études de cas détaillées. Vous y retrouverez prochainement des exemples de conception d’interfaces, d’amélioration de l’accessibilité, d’intégration de Design Systems, de développement WordPress et de création de contenus digitaux. En attendant leur publication, mon CV, mon profil LinkedIn et mes coordonnées restent disponibles sur cette page.', progress: 'Sélection, documentation et finalisation' },
    expertise: { accessibility: 'Accessibilité numérique', cms: 'WordPress et CMS', ui: 'Conception web et UI', frontend: 'Intégration front-end', communication: 'Communication digitale', motion: 'Motion design', graphic: 'Création graphique' },
    profile: { eyebrow: '01 — Profil', title: 'Un profil à la croisée du design et de la production web', copy1: 'Mon parcours me permet d’intervenir sur l’ensemble du processus de création numérique : compréhension du besoin, conception visuelle, prototypage, intégration front-end, publication dans un CMS et amélioration continue.', copy2: 'Je travaille régulièrement avec des équipes marketing, UX, développement, conformité et analyse de données. Cette approche pluridisciplinaire me permet de proposer des solutions créatives, réalistes sur le plan technique et adaptées aux utilisateurs.' },
    skills: { eyebrow: '02 — Expertises', title: 'Des compétences complémentaires. Une approche cohérente.', intro: 'Conception visuelle, expérience utilisateur et technique se complètent pour produire des solutions soignées et réalistes.', accessibility: 'Accessibilité numérique', frontend: 'Intégration front-end', communication: 'Communication digitale' },
    skillGroups: { inclusive: 'Conception inclusive', frontend: 'Front-end et CMS', visual: 'Création graphique', direction: 'Production digitale' },
    skillItems: { responsive: 'Responsive design', ux: 'Expérience utilisateur', cms: 'Intégration CMS', ui: 'Design d’interface', graphic: 'Conception graphique', analytics: 'Analyse de données' },
    experience: { eyebrow: '03 — Parcours', title: 'Parcours professionnel', intro: 'Un parcours qui associe conception graphique, communication digitale et production web accessible.', present: '[Aujourd’hui — Date]', dates: '[Date — Date]', role1: 'Web Design, accessibilité et intégration front-end', copy1: 'Conception et intégration de parcours numériques, évolution de composants partagés, accompagnement sur l’accessibilité et collaboration entre équipes créatives, marketing et techniques.', role2: 'Conception et développement digital', copy2: 'Création d’interfaces responsives et de contenus de campagne dans différents CMS, avec une attention particulière portée à la clarté, à la cohérence et à l’amélioration continue.', independent: 'Indépendant', role3: 'Graphiste freelance', copy3: 'Gestion de projets créatifs en identité visuelle, édition, web, illustration et motion design, du premier échange à la production finale.' },
    projects: { eyebrow: '04 — Prochainement', title: 'Études de cas en préparation', intro: 'Les projets présentés prochainement montreront le contexte initial, les contraintes, mon rôle, la démarche suivie et les solutions mises en œuvre.', status: 'Étude de cas en préparation', card1Title: 'Amélioration de l’accessibilité d’un portail client', card1Copy: 'Analyse des difficultés rencontrées, adaptation de la structure des pages et intégration de corrections accessibles dans un environnement technique existant.', card2Title: 'Modernisation d’une expérience WordPress', card2Copy: 'Évolution de l’interface, amélioration des composants et rapprochement avec un Design System partagé.', card3Title: 'Intégration d’un Design System', card3Copy: 'Mise en œuvre de composants cohérents, réutilisables et accessibles afin d’améliorer la qualité et l’efficacité de production.', card4Title: 'Optimisation d’un parcours digital', card4Copy: 'Collaboration entre design, développement, marketing et analyse de données pour simplifier un parcours et améliorer son suivi.' },
    quote: '« Les projets numériques les plus aboutis naissent lorsque conception graphique, accessibilité et technique avancent ensemble. »',
    contact: { eyebrow: 'Vous souhaitez en savoir plus ?', title: 'Échangeons sur vos projets.', copy: 'Vous souhaitez en savoir plus sur mon parcours ou découvrir des projets qui ne sont pas encore publiés sur ce portfolio ? Vous pouvez me contacter directement ou consulter mon CV et mon profil LinkedIn.', profile: 'Consulter le profil', cvLabel: 'Curriculum vitæ' },
    footer: { status: 'Portfolio actuellement en cours de mise à jour. De nouvelles études de cas seront publiées prochainement.', credit: 'Conçu avec soin' }
  }
};

const getValue = (object, path) => path.split('.').reduce((value, key) => value?.[key], object);
let activeLanguage = window.initialLanguage || 'en';

function applyLanguage(language, { announce = false, updateUrl = false, remember = false } = {}) {
  const content = translations[language] || translations.en;
  activeLanguage = language in translations ? language : 'en';
  document.documentElement.lang = activeLanguage;
  document.querySelectorAll('[data-i18n]').forEach(element => { const value = getValue(content, element.dataset.i18n); if (value) element.textContent = value; });
  ['aria-label', 'title'].forEach(attribute => document.querySelectorAll(`[data-i18n-${attribute}]`).forEach(element => { const value = getValue(content, element.dataset[`i18n${attribute.split('-').map(part => part[0].toUpperCase() + part.slice(1)).join('')}`]); if (value) element.setAttribute(attribute, value); }));
  document.title = content.meta.title;
  document.querySelector('meta[name="description"]').content = content.meta.description;
  document.querySelector('meta[property="og:title"]').content = content.meta.title;
  document.querySelector('meta[property="og:description"]').content = content.meta.description;
  document.querySelector('meta[name="twitter:title"]').content = content.meta.title;
  document.querySelector('meta[name="twitter:description"]').content = content.meta.description;
  document.querySelector('meta[property="og:locale"]').content = activeLanguage === 'fr' ? 'fr_FR' : 'en_GB';
  const languageUrl = `https://your-domain.example/?lang=${activeLanguage}`;
  document.querySelector('link[rel="canonical"]').href = languageUrl;
  document.querySelector('meta[property="og:url"]').content = languageUrl;
  const schema = document.querySelector('#person-schema');
  if (schema) { const person = JSON.parse(schema.textContent); person.jobTitle = activeLanguage === 'fr' ? 'Web Designer et intégrateur front-end' : 'Web Designer and Front-End Integrator'; person.url = languageUrl; schema.textContent = JSON.stringify(person); }
  document.querySelectorAll('[data-language]').forEach(button => { const selected = button.dataset.language === activeLanguage; button.setAttribute('aria-pressed', String(selected)); button.classList.toggle('active', selected); });
  if (remember) { try { localStorage.setItem('language', activeLanguage); } catch (error) { /* The active session still changes language. */ } }
  if (updateUrl) { const url = new URL(location.href); url.searchParams.set('lang', activeLanguage); history.replaceState({}, '', url); }
  if (announce) document.querySelector('#language-status').textContent = content.a11y.changed;
  document.documentElement.classList.remove('i18n-pending');
}

applyLanguage(activeLanguage);
document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => applyLanguage(button.dataset.language, { announce: true, updateUrl: true, remember: true })));

/* Theme preference, mobile navigation and restrained motion. */
const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const storedTheme = localStorage.getItem('theme');
if (storedTheme) root.dataset.theme = storedTheme;
themeButton?.addEventListener('click', () => { const dark = root.dataset.theme === 'dark' || (root.dataset.theme === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches); const next = dark ? 'light' : 'dark'; root.dataset.theme = next; localStorage.setItem('theme', next); });
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
menuButton?.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') === 'true'; menuButton.setAttribute('aria-expanded', String(!open)); nav?.classList.toggle('open', !open); });
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menuButton?.setAttribute('aria-expanded', 'false'); }));
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion && 'IntersectionObserver' in window) { const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 }); document.querySelectorAll('.reveal').forEach(element => observer.observe(element)); } else document.querySelectorAll('.reveal').forEach(element => element.classList.add('visible'));
const header = document.querySelector('[data-header]');
addEventListener('scroll', () => header?.classList.toggle('scrolled', scrollY > 12), { passive: true });
document.querySelector('#year').textContent = new Date().getFullYear();
