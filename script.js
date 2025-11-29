/*
File: script.js
Place this file in the same folder and include it at the end of index.html
*/

// Theme toggle (light/dark) persisted in localStorage
(function(){
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('theme');

  if(stored === 'dark') root.classList.add('dark');

  themeToggle.addEventListener('click', () => {
    root.classList.toggle('dark');
    const isDark = root.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
  });

  // set initial button icon
  themeToggle.textContent = root.classList.contains('dark') ? '☀️' : '🌙';
})();

// Mobile menu toggle
(function(){
  const menuBtn = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  let open = false;
  menuBtn && menuBtn.addEventListener('click', () => {
    open = !open;
    mobileNav.style.display = open ? 'block' : 'none';
  });
})();

// Typing effect
(function(){
  const phrases = [
    'Business Analyst',
    'Data Visualisation Specialist',
    'Power BI Enthusiast',
    'Problem Solver',
  ];
  const el = document.getElementById('typing');
  const cursor = document.querySelector('.cursor');
  let p = 0, i = 0, forward = true;

  function tick(){
    const full = phrases[p];
    if(forward){
      el.textContent = full.slice(0, i+1);
      i++;
      if(i === full.length){ forward = false; setTimeout(tick, 1100); return; }
    } else {
      el.textContent = full.slice(0, i-1);
      i--;
      if(i === 0){ forward = true; p = (p+1) % phrases.length; setTimeout(tick, 200); return; }
    }
    setTimeout(tick, forward ? 80 : 40);
  }
  tick();
})();

// Modal for project details
(function(){
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  const closeBtn = document.querySelector('.modal-close');
  const openBtns = document.querySelectorAll('.open-modal');

  const projects = {
    p1: {
      title: 'LLM Tool for Strategic Foresight',
      body: '<p>Built a Retrieval-Augmented Generation tool that extracts PESTEL insights from mixed-data sources. Features: semantic search, chunking, summarisation and stakeholder-ready recommendations.</p><ul><li>Tech: Python, FAISS, LangChain, OpenAI</li><li>Outcome: Better foresight reports for strategy teams</li></ul>'
    },
    p2: {
      title: 'Blockchain in Education',
      body: '<p>Proof-of-concept for Students Skills Ledger to store verified credentials. Investigated on-chain vs off-chain trade-offs and governance models.</p><ul><li>Tech: Ethereum (testnet), Smart Contracts, IPFS</li><li>Outcome: Architecture & adoption roadmap</li></ul>'
    },
    p3: {
      title: 'Hospital Performance Dashboard',
      body: '<p>Power BI reports to track wait times, readmission, and patient experience. Includes data transformation pipelines and KPI definitions.</p><ul><li>Tech: Power BI, Python ETL</li><li>Outcome: Operational dashboards reducing wait times</li></ul>'
    },
    p4: {
      title: 'Housing Market Dataset',
      body: '<p>Aggregated and harmonised data from ABS, RBA and real-estate listings to support affordability analysis and prediction.</p><ul><li>Tech: Python, pandas, forecasting models</li><li>Outcome: Research dataset and reproducible notebooks</li></ul>'
    }
  };

  function openModal(id){
    const data = projects[id];
    modalContent.innerHTML = `<h2>${data.title}</h2>${data.body}<div style="margin-top:14px"><a class=\"btn primary\" href=\"#\">Open demo</a> <button class=\"btn outline modal-close\">Close</button></div>`;
    modal.setAttribute('aria-hidden','false');
    // trap focus (basic)
    document.body.style.overflow = 'hidden';
  }

  function closeModal(){
    modal.setAttribute('aria-hidden','true');
    modalContent.innerHTML = '';
    document.body.style.overflow = '';
  }

  openBtns.forEach(b => b.addEventListener('click', e => {
    const id = e.currentTarget.getAttribute('data-project');
    openModal(id);
  }));

  modal.addEventListener('click', (e) => { if(e.target.classList.contains('modal-backdrop')) closeModal(); });
  document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('modal-close')) closeModal();
  })
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeModal(); });
})();

// Small helper: set year
document.getElementById('year').textContent = new Date().getFullYear();


/*
-- End of files --
*/
