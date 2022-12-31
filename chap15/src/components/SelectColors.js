import { useContext } from 'react';
import ColorContext, { ColorConsumer } from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors = () => {
  const context = useContext(ColorContext);
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <div style={{ display: 'flex', borderBottom: '1px solid black' }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              background: color,
              width: '24px',
              height: '24px',
              cursor: 'pointer',
            }}
            onClick={() => context.actions.setColor(color)}
            onContextMenu={(e) => {
              e.preventDefault();
              context.actions.setSubcolor(color);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectColors;
