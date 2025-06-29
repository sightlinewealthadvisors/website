import { useState, useEffect } from 'react';
import styles from '../../styles/Shape.module.scss';

interface ShapeProps {
  className?: string;
}

const Shape: React.FC<ShapeProps> = ({ className }) => {
  return (
    <div className={`${styles.shape} md:mt-0 mt-34  ${className || ''}`}></div>
  );
};

export default Shape;