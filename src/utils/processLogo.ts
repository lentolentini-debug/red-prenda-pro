import { removeBackground, loadImage } from './backgroundRemoval';

export const processLogoImage = async (): Promise<string> => {
  try {
    // Load the original logo image
    const response = await fetch('/src/assets/logoredpfinal2.png');
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
    console.error('Error processing logo:', error);
    // Fallback to original image
    return '/src/assets/logoredpfinal2.png';
  }
};