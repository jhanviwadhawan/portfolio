// Function to update the visual state of the filter buttons
function updateFilterButtonStyles(selectedFilter) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        const isSelected = btn.getAttribute('data-filter') === selectedFilter;
        
        // Reset styles
        btn.classList.remove('bg-sky-600', 'text-white', 'border-sky-600', 'bg-slate-700', 'text-slate-400', 'border-slate-700');

        if (isSelected) {
            // Active styles (Dark Theme)
            btn.classList.add('bg-sky-600', 'text-white', 'border-sky-600');
        } else {
            // Inactive styles (Dark Theme)
            btn.classList.add('bg-slate-700', 'text-slate-400', 'border-slate-700');
        }
    });
}

// Function to filter the analysis projects
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card');
    
    projects.forEach(project => {
        const projectCategory = project.getAttribute('data-category');
        
        if (category === 'all' || projectCategory === category) {
            project.classList.remove('hidden-project');
            project.style.display = 'block'; // Ensure card is visible
        } else {
            project.classList.add('hidden-project');
            project.style.display = 'none'; // Ensure card is hidden
        }
    });

    // Update button visual state
    updateFilterButtonStyles(category);
}

// Function to switch the main navigation tabs
function switchTab(tabId) {
    // 1. Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // 2. Show the selected tab content
    document.getElementById(tabId).classList.add('active');

    // 3. Update active state on buttons (Desktop)
    document.querySelectorAll('.nav-btn').forEach(btn => {
        if(btn.getAttribute('data-target') === tabId) {
            btn.classList.remove('text-slate-400');
            btn.classList.add('text-white', 'text-sky-500'); 
        } else {
            btn.classList.remove('text-white', 'text-sky-500');
            btn.classList.add('text-slate-400');
        }
    });
    
    // 4. Close mobile menu if open
    document.getElementById('mobile-menu').classList.add('hidden');
}

// Initialize active state on load
document.addEventListener('DOMContentLoaded', () => {
    // The active state is initially set to 'work' in the HTML, but this ensures JS consistency.
    switchTab('portfolio'); 
    filterProjects('all'); 
    updateFilterButtonStyles('all');
});
