import { React, useState } from 'react';

const Folder = (props) => {
  const [currentTab, setCurrentTab] = useState(0);

  const selectTab = (num) => {
    setCurrentTab(num);
  }

  const folder = props.folders[currentTab];
  const titles = props.folders.map((folder) => folder.title);

  const handleClick = (e) => {
    const idx = parseInt(e.target.id, 10);
    selectTab(idx);
  }

  const tabs = titles.map((title, idx) => {
    const headerClass = (idx === currentTab) ? 'active' : '';

    return (
      <li
        key={idx}
        id={idx}
        onClick={handleClick}
        className={headerClass}
      >
        {title}
      </li>
    );
  });

  return (
    <section className="tabs-section">
      <h1>Tabs</h1>
      <div className='tabs'>
        <ul className='tab-header'>
          {tabs}
        </ul>
        <div className='tab-content'>
          {folder.content}
        </div>
      </div>
    </section>
  );
}

export default Folder;