 
import './ImageCarousel.css';
 
// Left, Middle, and Right images
const leftImages = [
  "https://ahaanmedia.com/ahaanwebsite/gallery/gallery1.webp", // Image 1
  "https://ahaanmedia.com/ahaanwebsite/gallery/gallery2.webp", // Image 2
];
 
const middleImages = [
  "https://ahaanmedia.com/ahaanwebsite/gallery/gallery3.webp", // Image 3
  "https://ahaanmedia.com/ahaanwebsite/gallery/gallery4.webp", // Image 4
];
 
const rightImages = [
  "https://ahaanmedia.com/ahaanwebsite/gallery/gallery5.webp", // Image 5
  "https://ahaanmedia.com/ahaanwebsite/gallery/gallery6.webp", // Image 6
];
 
const middleRightImages = [
  "https://ahaanmedia.com/ahaanwebsite/gallery/gallery7.webp", // Image 7
  "https://ahaanmedia.com/ahaanwebsite/gallery/gallery8.webp", // Image 8
];
 
const BusinessCard = () => {
  return (
    <div style={{
  background: "linear-gradient(180deg, #f1e7c6 0%, #E6E6E6 80%, #e6dbbb 100%) "
}}
className='pt-5'
>
    <div className="container bussiness-testimonial-section ">
      <div className=" layout-minimal-container">
 
        {/* --- Left Column (Images 1, 2) --- */}
        <div className="image-column first-column">
          {leftImages.map((url, index) => (
            <div key={`L-${index}`} className="side-image-card">
              <img src={url} alt={`Left Image ${index + 1}`} />
            </div>
          ))}
        </div>
 
        {/* --- Middle Column (Images 3, 4) --- */}
        <div className="image-column second-column">
          {middleImages.map((url, index) => (
            <div key={`M-${index}`} className="side-image-card">
              <img src={url} alt={`Middle Image ${index + 1}`} />
            </div>
          ))}
        </div>
         {/* <div className="side-image-card third-column-tablet">
          <img src="https://ahaanmedia.com/ahaanwebsite/gallery/gallery1.webp" alt="Single Image" />
        </div> */}
        <div className="side-image-card third-column">
          <img src="https://ahaanmedia.com/ahaanwebsite/gallery/gallery8.webp" alt="Single Image" />
        </div>
       
        <div className="side-image-card fourth-column">
          <img src="https://ahaanmedia.com/ahaanwebsite/gallery/gallery10.webp" alt="Single Image" />
        </div>
        <div className="side-image-card final-column">
          <img src="https://ahaanmedia.com/ahaanwebsite/gallery/gallery9.webp" alt="Single Image" />
        </div>
        <div className="side-image-card fourth-column">
          <img src="https://ahaanmedia.com/ahaanwebsite/gallery/gallery12.webp" alt="Single Image" />
        </div>
        <div className="side-image-card third-column">
          <img src="https://ahaanmedia.com/ahaanwebsite/gallery/gallery11.webp" alt="Single Image" />
        </div>
         {/* <div className="side-image-card third-column-tablet">
          <img src="https://ahaanmedia.com/ahaanwebsite/gallery/gallery1.jpg" alt="Single Image" />
        </div> */}
 
        {/* --- Right Column (Images 5, 6) --- */}
        <div className="image-column second-column">
          {rightImages.map((url, index) => (
            <div key={`R-${index}`} className="side-image-card">
              <img src={url} alt={`Right Image ${index + 1}`} />
            </div>
          ))}
        </div>
 
 
        {/* --- Middle-Right Column (Images 7, 8) --- */}
        <div className="image-column first-column">
          {middleRightImages.map((url, index) => (
            <div key={`MR-${index}`} className="side-image-card">
              <img src={url} alt={`Middle-Right Image ${index + 1}`} />
            </div>
          ))}
        </div>
 
      </div>
      <div className="central-content">
        <h2 className="central-content-title">Trusted by leaders from various industries</h2>
        <p className="central-content-description">
          Learn why professionals trust our solutions to complete their customer journeys.
        </p>
        
      </div>
      <div className=" layout-minimal-container">
       <div className="side-image-card third-column-mobile">
          <img src="https://ahaanmedia.com/asc/gallery/gallery1.jpg" alt="Single Image" />
        </div>
        <div className="side-image-card final-column-mobile">
          <img src="https://ahaanmedia.com/asc/gallery/gallery2.jpg" alt="Single Image" />
        </div>
         <div className="side-image-card third-column-mobile">
          <img src="https://ahaanmedia.com/asc/gallery/gallery3.jpg" alt="Single Image" />
        </div>
        </div>
    </div>
    </div>
  );
};
 
export default BusinessCard;
 
 
 