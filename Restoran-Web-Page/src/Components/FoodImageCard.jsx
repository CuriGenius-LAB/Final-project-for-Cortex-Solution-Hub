
import { useState } from "react";

const FoodImageCard = ({ src, alt, emoji, bgColor, className = "" }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 ${className}`}>
      <div className="h-64 bg-gray-200 flex items-center justify-center overflow-hidden relative">
        {src && !imageError ? (
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className={`w-full h-full ${bgColor} flex items-center justify-center`}>
            <div className="text-center text-white">
              <div className="text-6xl filter drop-shadow-lg">
                {emoji}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodImageCard