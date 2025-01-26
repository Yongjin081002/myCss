import React, { useState, useEffect } from 'react';
import { SliderWrapper, Banner, DotsContainer, Dot } from './indexStyle';

const SliderBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const banners = [
    { id: 0, color: "lightblue", text: "Banner 1" },
    { id: 1, color: "lightgreen", text: "Banner 2" },
    { id: 2, color: "lightpink", text: "Banner 3" },
  ];

  // 자동 슬라이드 (5초 간격)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer); // 메모리 누수를 위해 타이머를 정리함.
  }, [banners.length]);

  // 특정 배너로 이동
  const goToBanner = (index) => {
    setCurrentIndex(index);
  };

  return (
    <SliderWrapper>
      <Banner color={banners[currentIndex].color}>
        {banners[currentIndex].text}
      </Banner>
      <DotsContainer>
        {banners.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => goToBanner(index)}
          />
        ))}
      </DotsContainer>
    </SliderWrapper>
  );
};

export default SliderBanner;
