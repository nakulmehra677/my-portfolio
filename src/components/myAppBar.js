import React from 'react';

export default function MyAppBar(props) {

  return (
    <div>
      <nav className="nav nav--bar">
        <a className="a--logo" href="/"><div className="logo--nav">Nakul's Portfolio</div></a>
        <ul className="list--inline">
          <li className="list__item">Home</li>
          <li className="list__item">Projects</li>
        </ul>
      </nav>
      <nav className="nav"/>
    </div>
  )
}
