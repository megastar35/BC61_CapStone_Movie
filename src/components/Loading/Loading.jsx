import Lottie from 'lottie-react';
import React from 'react';
import loadingAnimation from '../../assets/animation/loadingAnimation.json';
const Loading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center fixed top-0 left-0 bg-opacity-30 bg-gray-50">
      <Lottie animationData={loadingAnimation} loop={true} />
    </div>
  );
};

export default Loading;
