import React, {useState, useEffect} from 'react';
import cruiseShipImage from '../assets/ship.jpg'; // Replace with your image path

const Hero = (props) => {
  const {title = 'Explore Exciting Careers in Bahamas Cruise Ships'} = props;
  const subtitle = 'Begin Your Bahamas Cruise Career Journey';

  const [typedSubtitle, setTypedSubtitle] = useState('');

  useEffect(() => {
    const subtitleInterval = setInterval(() => {
      setTypedSubtitle((prevTypedSubtitle) => {
        const nextChar = subtitle.charAt(prevTypedSubtitle.length);
        if (prevTypedSubtitle.length === subtitle.length) {
          clearInterval(subtitleInterval);
        }
        return prevTypedSubtitle + nextChar;
      });
    }, 100); // Adjust the interval for typing speed

    return () => {
      clearInterval(subtitleInterval);
    };
  }, [subtitle]);

  return (
    <section
      className="bg-cover bg-center py-20 pt-24 mb-4"
      style={{backgroundImage: `url(${cruiseShipImage})`}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center bg-black bg-opacity-50 p-4 rounded-lg">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-xl text-white">{typedSubtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
