import React, { useState } from 'react';

interface InteractiveSectionProps {
  topics: string[];
  content: { [key: string]: React.ReactNode };
}

export function InteractiveSection({ topics, content }: InteractiveSectionProps) {
  const [selectedTopic, setSelectedTopic] = useState<string>(topics[0]);

  const renderContent = (): React.ReactNode => {
    return content[selectedTopic] || null;
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '1em' }}>
        {topics.map((topic) => (
          <button
            key={topic}
            onClick={() => setSelectedTopic(topic)}
            style={{
              padding: '0.5em 1em',
              cursor: 'pointer',
              backgroundColor: selectedTopic === topic ? 'var(--k-secondary)' : 'var(--k-primary)',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            {topic}
          </button>
        ))}
      </div>
      <div>{renderContent()}</div>
    </div>
  );
}