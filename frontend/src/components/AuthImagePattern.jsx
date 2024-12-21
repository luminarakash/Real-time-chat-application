import React from 'react';
import logoImage from '../pages/logo.jpg'; // Ensure the path is correct

const AuthImagePattern = ({ altText, title, subtitle }) => {
  return (
    <div className="flex items-center justify-center bg-base-200 p-12 min-h-screen bg-gradient-to-t from-indigo-300 ...">
      <div className="max-w-md text-center">
        <div className='items-center justify-center'>
          <img
            src={logoImage} // The imported image
            alt={altText || "Auth Image"}
            className="max-w-full mx-auto h-auto rounded-2xl mb-4"
          />
        </div>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
