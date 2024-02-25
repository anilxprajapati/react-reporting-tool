import React from 'react';

function CLabel({ variant, label }) {
  return (
    <div className={`fw-semibold mb-2 ps-1 ${variant}`}>{label}</div>
  );
}

export default CLabel;
