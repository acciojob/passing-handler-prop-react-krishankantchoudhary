import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground} = props
  const { background,key } = config;
  return (
    <button data-testid={key} className={config.classname} onClick={() => selectNextBackground({background: background})}>
      {config.label}
    </button>
  )
}
export default ColourSelector;
