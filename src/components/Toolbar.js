import React, { useState } from 'react';
import styled from 'styled-components';

const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`;

const ColorPicker = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ColorOption = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => props.color};
  cursor: pointer;
  border: ${props => props.selected ? '2px solid white' : 'none'};
  
  &:hover {
    transform: scale(1.1);
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #4a4a4a;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #5a5a5a;
  }
`;

const Toolbar = () => {
  const colors = [
    '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF',
    '#00FFFF', '#FFFFFF', '#000000', '#808080', '#800000'
  ];
  
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <ToolbarContainer>
      <h3>Color Picker</h3>
      <ColorPicker>
        {colors.map((color) => (
          <ColorOption
            key={color}
            color={color}
            selected={color === selectedColor}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </ColorPicker>
      
      <Button>Buy Pixel (0.05 ETH)</Button>
      <Button>View My Pixels</Button>
      <Button>Withdraw Earnings</Button>
    </ToolbarContainer>
  );
};

export default Toolbar; 