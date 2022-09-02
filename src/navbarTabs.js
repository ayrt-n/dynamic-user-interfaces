const navbar = document.getElementById('navbar');
const navbarItems = [...document.getElementsByClassName('navbar-item')];
const tabContentDiv = document.getElementById('tab-content');

// Event listener to select tab
navbar.addEventListener('click', (e) => {
  const navbarItem = e.target.closest('.navbar-item');
  if (navbarItem) {
    navbarItems.forEach((item) => {
      item.classList.remove('selected');
    });

    navbarItem.classList.add('selected');
  }
});

// Functions to load each of the individual tabs
const loadNewsTabContent = () => {
  tabContentDiv.innerHTML = 'News tab loaded';
};

const newsTab = document.getElementById('news');
newsTab.addEventListener('click', loadNewsTabContent);

const loadVideosTabContent = () => {
  tabContentDiv.innerHTML = 'Videos tab loaded';
};

const videosTab = document.getElementById('videos');
videosTab.addEventListener('click', loadVideosTabContent);

const loadPhotosTabContent = () => {
  tabContentDiv.innerHTML = 'Photos tab loaded';
};

const photosTab = document.getElementById('photos');
photosTab.addEventListener('click', loadPhotosTabContent);

const loadChatTabContent = () => {
  tabContentDiv.innerHTML = 'Chat tab loaded';
};

const chatTab = document.getElementById('chat');
chatTab.addEventListener('click', loadChatTabContent);

// Initialize tab content and set selected tab in navbar
// Hardcoded to load and select news tab (assumed to be homepage tab)
const initializeTabContent = () => {
  newsTab.classList.add('selected');
  loadNewsTabContent();
};

export default initializeTabContent;
