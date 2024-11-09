
const images = [
    { thumbnail: 'https://images.unsplash.com/photo-1602924097911-a78ca1af38c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHx8Mg%3D%3D', hd: 'https://images.unsplash.com/photo-1602924097911-a78ca1af38c6?q=80&w=2933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'cat 1' },
    { thumbnail: 'https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0c3xlbnwwfHwwfHx8Mg%3D%3D', hd: 'https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'cat 2' },
    { thumbnail: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0c3xlbnwwfHwwfHx8Mg%3D%3D', hd: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'cat 3' },
    { thumbnail: 'https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHN8ZW58MHx8MHx8fDI%3D', hd: 'https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?q=80&w=2968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'cat 4' },
    { thumbnail: 'https://images.unsplash.com/photo-1516750484197-6b28d10c91ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdHN8ZW58MHx8MHx8fDI%3D', hd: 'https://images.unsplash.com/photo-1516750484197-6b28d10c91ea?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'cat 5' },
    { thumbnail: 'https://images.unsplash.com/photo-1542108226-9130e1e83cc4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhdHN8ZW58MHx8MHx8fDI%3D', hd: 'https://images.unsplash.com/photo-1542108226-9130e1e83cc4?q=80&w=2898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'cat 6' },
    { thumbnail: 'https://images.unsplash.com/photo-1548595224-8c7ae4e20bf6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNhdHN8ZW58MHx8MHx8fDI%3D', hd: 'https://images.unsplash.com/photo-1548595224-8c7ae4e20bf6?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'cat 7' },
    { thumbnail: 'https://images.unsplash.com/photo-1534330980656-d201223895ee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGNhdHN8ZW58MHx8MHx8fDI%3D', hd: 'https://images.unsplash.com/photo-1534330980656-d201223895ee?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'cat 8' },
    { thumbnail: 'https://images.unsplash.com/photo-1559564207-09c99dc78a70?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNhdHN8ZW58MHx8MHx8fDI%3D', hd: 'https://images.unsplash.com/photo-1559564207-09c99dc78a70?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'cat 9' },
    { thumbnail: 'https://images.unsplash.com/photo-1527864201498-eda8a7aa4ab5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGNhdHN8ZW58MHx8MHx8fDI%3D', hd: 'https://images.unsplash.com/photo-1527864201498-eda8a7aa4ab5?q=80&w=2973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'cat 10' },
    { thumbnail: 'https://images.unsplash.com/photo-1575950670249-de0b72289e97?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGNhdHN8ZW58MHx8MHx8fDI%3D', hd: 'https://images.unsplash.com/photo-1575950670249-de0b72289e97?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'cat 11' },
    { thumbnail: 'https://images.unsplash.com/photo-1513277179122-48cc37a9cd96?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGNhdHN8ZW58MHx8MHx8fDI%3D', hd: 'https://images.unsplash.com/photo-1513277179122-48cc37a9cd96?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'cat 12' }
  ];
  
 
// Elements for the gallery and modal
const galleryContainer = document.querySelector('.gallery-container');
const modal = document.querySelector('.modal');
const hdImage = document.getElementById('hd-image');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

// Populate the gallery with images
function createGallery() {
  images.forEach((img) => {
    const imgElement = document.createElement('img');
    imgElement.src = img.thumbnail;
    imgElement.alt = img.caption;
    imgElement.dataset.hdSrc = img.hd;
    imgElement.dataset.caption = img.caption;
    imgElement.classList.add('gallery-image');
    galleryContainer.appendChild(imgElement);
  });
}

// Open modal with the high-definition image
function openModal(event) {
  if (event.target.classList.contains('gallery-image')) {
    hdImage.src = event.target.dataset.hdSrc;
    captionText.textContent = event.target.dataset.caption; 
    modal.style.display = 'flex';
  }
}

// Close the modal and clear image source for efficiency
function closeModal() {
  modal.style.display = 'none';
  hdImage.src = '';
}

// Event listeners for opening and closing modal
galleryContainer.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// Initialize the gallery on page load
createGallery();