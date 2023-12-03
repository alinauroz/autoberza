'use client';

import { useEffect, useState } from 'react';
import svg from '../../public/test.svg';

function Test() {
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const response = await fetch(svg.src);
        if (!response.ok) {
          throw new Error('Failed to fetch SVG');
        }
        const svgText = await response.text();
        setSvgContent(svgText);
      } catch (error) {
        console.error('Error fetching SVG:', error);
      }
    };

    fetchSvg();
  }, [svg]);

  useEffect(() => {
    const handleCircleClick = (event: any) => {
      const circleId = event.target.id;
      alert(`Clicked on seat no: ${circleId}!`);
    };

    const circles = document.querySelectorAll('circle');
    const p = document.getElementById('1P-1-27');
    console.log('>>P', p);
    circles.forEach((circle) => {
      circle.addEventListener('click', handleCircleClick);
    });

    return () => {
      circles.forEach((circle) => {
        circle.removeEventListener('click', handleCircleClick);
      });
    };
  }, [svgContent]);

  return <div dangerouslySetInnerHTML={{ __html: svgContent }} />;
}

export default Test;
