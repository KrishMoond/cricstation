// News Data
const newsArticles = [
    {
        title: 'Virat Kohli Reaches 50th ODI Century Milestone',
        excerpt: 'The cricket legend achieves another remarkable feat in his illustrious career.',
        content: 'In a historic moment for cricket, Virat Kohli achieved his 50th ODI century...',
        image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80',
        date: '2024-03-15',
        category: 'Player News'
    },
    {
        title: 'Ben Stokes Announces Test Cricket Retirement',
        excerpt: 'England's all-rounder decides to focus on white-ball cricket.',
        content: 'England's dynamic all-rounder Ben Stokes has announced his retirement...',
        image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80',
        date: '2024-03-10',
        category: 'Player News'
    },
    {
        title: 'IPL 2024: Complete Tournament Preview',
        excerpt: 'Everything you need to know about the upcoming IPL season.',
        content: 'The Indian Premier League 2024 is set to begin with exciting matches...',
        image: 'https://images.unsplash.com/photo-1624526267942-ab0c0e53caf8?auto=format&fit=crop&q=80',
        date: '2024-03-05',
        category: 'Match Updates'
    }
    // Add more news articles as needed
];

// Populate News Grid
function populateNewsGrid(articles = newsArticles) {
    const container = document.getElementById('news-grid');
    if (!container) return;

    container.innerHTML = ''; // Clear existing content

    articles.forEach(article => {
        const articleElement = `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card h-100">
                    <img src="${article.image}" class="card-img-top" alt="${article.title}">
                    <div class="card-body">
                        <span class="badge bg-primary mb-2">${article.category}</span>
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text">${article.excerpt}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <small class="text-muted">${article.date}</small>
                            <a href="#" class="btn btn-sm btn-outline-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += articleElement;
    });
}

// Filter News by Category
function filterNews(category) {
    if (category === 'All News') {
        populateNewsGrid();
    } else {
        const filteredArticles = newsArticles.filter(article => article.category === category);
        populateNewsGrid(filteredArticles);
    }
}

// Initialize News Page
document.addEventListener('DOMContentLoaded', function() {
    // Populate initial news grid
    populateNewsGrid();

    // Add click handlers for category buttons
    const categoryButtons = document.querySelectorAll('.btn-outline-primary');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Filter news
            filterNews(this.textContent);
        });
    });
});