import React, { useState, useEffect } from 'react';
import { SliderWrapper, Banner, DotsContainer, Dot } from './indexStyle';

const SliderBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const banners = [
    { id: 0, 
      image:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMjJfMjY3%2FMDAxNzAwNTgwMDY0OTA4.9es_TIWqgDqYSH-tcmuvUIca5v5pNVabZB6bcAfZQwUg.DOUpv036QE7JdzmVpgTAGEW-ehq4RpiyjtSTUvCthhUg.JPEG.hkr0415%2FIMG_3705.jpg&type=a340',
      text: "Banner 1" },
    { id: 1,
      image:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEyMjBfMTMg%2FMDAxNzM0NjgxNzkyOTQ2.0WFBpURatx2ly4RlNgKcqgPPAn42fYiyuJqVacN9js4g.yMeEysC-LyhDCAxTenWQG9FPXK23VCaYfLHrj2Ew9dog.JPEG%2FS_00030.jpg&type=a340',
      text: "Banner 2" },
    { id: 2,
      image:'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fpng.pngtree.com%2Fthumb_back%2Ffw800%2Fbackground%2F20250127%2Fpngtree-nature-s-peaceful-haven-in-morning-gentle-light-image_16905613.jpg&type=a340',
      text: "Banner 3" },
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
      <Banner >
        <img style={{width:"600px", height:"400px"}} src={banners[currentIndex].image} />
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
