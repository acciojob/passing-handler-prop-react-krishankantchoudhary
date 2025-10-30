import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground,key} = props
  const { background } = config;
  return (
    <button data-testid={key} className={config.classname} onClick={() => selectNextBackground({background: background})}>
      {config.label}
    </button>
  )
}
export default ColourSelector;
