const fs = require('fs');
const path = require('path');
const axios = require('axios');

const projectImages = [
  {
    name: 'portfolio.jpg',
    url: 'https://picsum.photos/800/600?random=1'
  },
  {
    name: 'estoque.jpg',
    url: 'https://picsum.photos/800/600?random=2'
  },
  {
    name: 'api.jpg',
    url: 'https://picsum.photos/800/600?random=3'
  },
  {
    name: 'ecommerce.jpg',
    url: 'https://picsum.photos/800/600?random=4'
  },
  {
    name: 'dashboard.jpg',
    url: 'https://picsum.photos/800/600?random=5'
  },
  {
    name: 'tasks.jpg',
    url: 'https://picsum.photos/800/600?random=6'
  }
];

const downloadImage = async (url, filepath) => {
  try {
    const response = await axios({
      method: 'GET',
      url: url,
      responseType: 'stream'
    });

    const writer = fs.createWriteStream(filepath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (error) {
    throw new Error(`Failed to download image: ${error.message}`);
  }
};

const main = async () => {
  try {
    const projectsDir = path.join(__dirname, '..', 'public', 'projects');

    // Create projects directory if it doesn't exist
    if (!fs.existsSync(projectsDir)) {
      fs.mkdirSync(projectsDir, { recursive: true });
    }

    // Download each project image
    for (const image of projectImages) {
      const imagePath = path.join(projectsDir, image.name);
      await downloadImage(image.url, imagePath);
      console.log(`Downloaded ${image.name}`);
    }

    console.log('All project images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading project images:', error);
  }
};

main(); 