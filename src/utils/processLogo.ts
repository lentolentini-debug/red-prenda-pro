import { removeBackground, loadImage } from './backgroundRemoval';

export const processLogoBackground = async () => {
  try {
    // Load the current logo image
    const response = await fetch('/src/assets/logoredpfinal2.png');
    const blob = await response.blob();
    
    // Load it as HTMLImageElement
    const imageElement = await loadImage(blob);
    
    // Remove background
    const processedBlob = await removeBackground(imageElement);
    
    // Create a download link for the processed image
    const url = URL.createObjectURL(processedBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'logo-transparent.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    console.log('Processed logo downloaded successfully');
  } catch (error) {
    console.error('Error processing logo:', error);
  }
};