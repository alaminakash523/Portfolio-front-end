import React, { useContext, useEffect } from 'react';
import WorkContext from '../context/WorkContext';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

function BannerBottom() {
  const context = useContext(WorkContext);

  useEffect(() => {
    context.getWorks(); // Fetch the works data
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (context.works && context.works.length > 0) {
      const startAtIndex = Math.max(context.works.length - 3, 0);
      new Glide('.glide', {
        type: 'carousel',
        startAt: startAtIndex,
        perView: 3, 
        gap: 10, 
        direction: 'rtl', 
      }).mount();
    }
  }, [context.works]); 

  return (
    <li className="l-section section">
      <div className="work">
        <h2>Selected work</h2>
        <div className="work--lockup">
          <div className="glide">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {context.works.map((work) => (
                  <li key={work.id} className="glide__slide slider--item slider--item-center">
                    <a href={work.url} target="_blank" rel="noopener noreferrer">
                      <div className="slider--item-image">
                        <img src={work.imageUrl} alt={work.name} />
                      </div>
                      <p className="slider--item-title">{work.name}</p>
                      <p className="slider--item-description">
                        {work.description}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glide__arrows" data-glide-el="controls">
              <button className="glide__arrow glide__arrow--left" data-glide-dir="<">Prev</button>
              <button className="glide__arrow glide__arrow--right" data-glide-dir=">">Next</button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default BannerBottom;
