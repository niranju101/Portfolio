fetch('data/projects.json')
  .then(response => response.json())
  .then(projects => {
    const container = document.getElementById('project-list');
    projects.forEach(p => {
      const card = document.createElement('div');
      card.classList.add('project-card');
      card.innerHTML = `
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <p><strong>Tech:</strong> ${p.tech.join(', ')}</p>
        <a href="${p.link}" target="_blank">View on GitHub</a>
      `;
      container.appendChild(card);
    });
  });