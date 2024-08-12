import React, { useState } from 'react';

interface StepProps {
  stepNumber: number;
  title: string;
  children: React.ReactNode;
}

export function Step({ stepNumber, title, children }: StepProps) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div style={{ marginBottom: '1em' }}>
      <h3
        onClick={() => setIsOpen(!isOpen)}
        style={{
          cursor: 'pointer',
          padding: '0.5em',
          borderRadius: '5px',
          marginBottom: '0.5em',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        className="steps"
      >
        <span>Step {stepNumber}: {title}</span>
        <span>{isOpen ? '▼' : '▶'}</span>
      </h3>
      {isOpen && <div style={{ padding: '1em', borderRadius: '5px' }} className="step">{children}</div>}
    </div>
  );
}