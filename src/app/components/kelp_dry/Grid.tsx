import React, { ReactNode } from 'react';

interface GridProps {
    children: ReactNode
  }

const Grid: React.FC<GridProps> = ({ children }) => {
    return (
      <div className="grid gap-6 mb-8 grid-cols-1 md:grid-cols-2">
        {children}
      </div>
    );
  }

export default Grid