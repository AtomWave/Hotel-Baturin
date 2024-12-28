import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const convertImages = async (inputDir, outputDir) => {
  const files = fs.readdirSync(inputDir).filter(file =>
    file.endsWith('.jpg') || file.endsWith('.png')
  );

  for (const file of files) {
    const inputPath = path.join(inputDir, file);

    await sharp(inputPath)
      .toFile(path.join(outputDir, `${path.basename(file, path.extname(file))}.avif`));
    await sharp(inputPath)
      .toFile(path.join(outputDir, `${path.basename(file, path.extname(file))}.webp`));
  }
};

const inputDirectory = './original_images/';
const outputDirectory = './public/assets/images';

if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory);
}

convertImages(inputDirectory, outputDirectory)
  .then(() => console.log('Conversion completed!'))
  .catch(err => console.error('Error during conversion:', err)); 
