const axios = require('axios');
const fs = require('fs');
const path = require('path');

const githubUsername = 'EdsonCandido';
const profileUrl = `https://github.com/${githubUsername}.png`;

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
    const publicDir = path.join(__dirname, '..', 'public');
    const profilePath = path.join(publicDir, 'profile.jpg');

    // Create public directory if it doesn't exist
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    await downloadImage(profileUrl, profilePath);
    console.log('Profile image downloaded successfully!');
  } catch (error) {
    console.error('Error downloading profile image:', error);
  }
};

main(); 