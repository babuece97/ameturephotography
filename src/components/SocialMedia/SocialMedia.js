import React from 'react';
import './SocialMedia.css';

const SocialMedia = () => {
  return (
    <div>
         <section className="statusBar">
        <h1 className="mission-header"> My Followers </h1>

        <div className="statusMain">
            <div className="status1">
                <h1>120k</h1>
                <p> <a className="link-button" target="_blank" href="https://www.linkedin.com/feed/">
                        TOKTOK </a> </p>

            </div>
            <div className="status2">
                <h1>1.7m</h1>
                <p> <a className="link-button" target="_blank" href="https://www.linkedin.com/feed/">
                        KURIGRAM </a> </p>
            </div>
            <div className="status3">
                <h1>3400k</h1>
                <p> <a className="link-button" target="_blank" href="https://www.linkedin.com/feed/">
                        BTV </a> </p>
            </div>
        </div>
    </section>


    
    </div>
  );
};

export default SocialMedia;