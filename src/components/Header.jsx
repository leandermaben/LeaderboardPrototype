import React from 'react';
import headerDetails from '../data/header_details.json';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <section style={{ backgroundColor: 'var(--dark_accent_color)' }}>
      <div className="content-wrapper title-wrapper" style={{ flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingBottom: '15px' }}>
          <h1 style={{ fontSize: '60px', paddingTop: '0.4em' }}>{headerDetails.title}</h1>
          <img 
            src={process.env.PUBLIC_URL + '/robot.png'} 
            style={{ height: '100px', paddingTop: '0em', paddingLeft: '0.5em' }} 
            alt="TheAgentCompanyLogo" 
          />
        </div>
        <h3>{headerDetails.subtitle}</h3>
        {/* <h3 style={{ fontSize: '20px', paddingTop: '1.2em' }}>ICLR 2024</h3> */}
        <p style={{ textAlign: 'center', marginTop: '1em' }}>
          {headerDetails.authors.map((author, index) => (
            <React.Fragment key={index}>
              {index % 5 === 0 && index !== 0 && <br />}
              <span>{author}</span>
              {index !=  headerDetails.authors.length-1 && ', '}
            </React.Fragment>
          ))}
        </p>
        <div className="content-wrapper" style={{ marginTop: '2em' }}>
          <Link to="/">
            <button className="outline">
              <i className="fa fa-home"></i> Home&nbsp;
            </button>
          </Link>
          <a href={headerDetails.paper_link}>
            <button className="outline">
              <i className="fa fa-paperclip"></i> Paper&nbsp;
            </button>
          </a>
          <a href={headerDetails.github_link}>
            <button className="outline">
              <i className="fab fa-github"></i> Code&nbsp;
            </button>
          </a>
          <Link to="/submit">
            <button className="outline">
              <i className="fa fa-upload"></i> Submit&nbsp;
            </button>
          </Link>
            

          {/* <a href="viewer.html">
            <button className="outline">
              <i className="fa fa-chart-simple"></i> Analysis&nbsp;
            </button>
          </a> */}
        </div>
      </div>
    </section>
  );
}

export default Header; 