// Featured Posts Data
const featuredPosts = [
    {
        title: 'Virat Kohli Reaches 50th ODI Century Milestone',
        excerpt: 'The cricket legend achieves another remarkable feat in his illustrious career.',
        image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80',
        date: '2024-03-15',
        category: 'news'
    },
    {
        title: 'Ben Stokes Announces Test Cricket Retirement',
        excerpt: 'England's all-rounder decides to focus on white-ball cricket.',
        image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80',
        date: '2024-03-10',
        category: 'retirement'
    },
    {
        title: 'IPL 2024: Complete Tournament Preview',
        excerpt: 'Everything you need to know about the upcoming IPL season.',
        image: 'https://images.unsplash.com/photo-1624526267942-ab0c0e53caf8?auto=format&fit=crop&q=80',
        date: '2024-03-05',
        category: 'news'
    }
];

// Populate Featured Posts
function populateFeaturedPosts() {
    const container = document.getElementById('featured-posts');
    if (!container) return;

    featuredPosts.forEach(post => {
        const postElement = `
            <div class="col-md-4">
                <div class="card h-100">
                    <img src="${post.image}" class="card-img-top" alt="${post.title}">
                    <div class="card-body">
                        <span class="badge bg-primary mb-2">${post.category}</span>
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">${post.excerpt}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <small class="text-muted">${post.date}</small>
                            <a href="#" class="btn btn-sm btn-outline-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += postElement;
    });
}

// Newsletter Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with ${email}! You'll receive our updates soon.`);
            this.reset();
        });
    }

    // Initialize Featured Posts
    populateFeaturedPosts();
});