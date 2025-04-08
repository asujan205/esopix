import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const CanvasContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(100, 1fr);
  grid-template-rows: repeat(100, 1fr);
  gap: 1px;
  background-color: #333;
  padding: 10px;
  border-radius: 8px;
`;

const Pixel = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${props => props.color || '#000'};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const Canvas = () => {
  const [pixels, setPixels] = useState(Array(10000).fill(null));
  const [selectedColor, setSelectedColor] = useState('#FF0000');
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);

  const handlePixelClick = (index) => {
    if (!isDrawing) return;
    
    const newPixels = [...pixels];
    newPixels[index] = selectedColor;
    setPixels(newPixels);
  };

  const handleMouseDown = () => {
    setIsDrawing(true);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener('mousedown', handleMouseDown);
      canvas.addEventListener('mouseup', handleMouseUp);
      canvas.addEventListener('mouseleave', handleMouseUp);
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener('mousedown', handleMouseDown);
        canvas.removeEventListener('mouseup', handleMouseUp);
        canvas.removeEventListener('mouseleave', handleMouseUp);
      }
    };
  }, []);

  return (
    <CanvasContainer ref={canvasRef}>
      <Grid>
        {pixels.map((color, index) => (
          <Pixel
            key={index}
            color={color}
            onClick={() => handlePixelClick(index)}
            onMouseEnter={() => isDrawing && handlePixelClick(index)}
          />
        ))}
      </Grid>
    </CanvasContainer>
  );
};

export default Canvas; 