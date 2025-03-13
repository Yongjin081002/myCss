import styled from 'styled-components';

// 슬라이더 전체 래퍼
export const SliderWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// 배너 영역
export const Banner = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  transition: background-color 0.5s ease;
`;

// 도트 컨테이너
export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px ;
  transition: 1s ease;
`;

export const BannerImg  = styled.image`
  width: 600px;
  height: 200px;
`;

// 개별 도트
export const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 6px;
  background-color: ${(props) => (props.active ? '#007bff' : '#ccc')};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.active ? '#0056b3' : '#aaa'}; // hover 효과
  }
`;


