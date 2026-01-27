fetch('data/projects.json')
  .then(response => response.json())
  .then(projects => {
    const container = document.getElementById('project-list');
    projects.forEach(p => {
      const card = document.createElement('div');
      card.classList.add('col-md-4', 'mb-4');
      card.innerHTML = `
        <div class="card project-card h-100">
          <div class="card-body">
            <h5 class="card-title">${p.title}</h5>
            <p class="card-text">${p.description}</p>
            <p><strong>Tech:</strong> ${p.tech.join(', ')}</p>
            <a href="${p.link}" target="_blank" class="btn btn-primary">View on GitHub</a>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  });