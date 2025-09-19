import { removeBackground, loadImage } from './backgroundRemoval';

export const processLogoBackground = async (imagePath: string): Promise<string> => {
  try {
    // Load the image
    const response = await fetch(imagePath);
    const imageBlob = await response.blob();
    
    // Load image element from blob
    const imageElement = await loadImage(imageBlob);
    
    // Remove background
    const processedBlob = await removeBackground(imageElement);
    
    // Convert blob to data URL
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(processedBlob);
    });
  } catch (error) {
    console.error('Error processing logo background:', error);
    // Fallback to original image
    return imagePath;
  }
};