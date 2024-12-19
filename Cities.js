function toggleMoreStates() {
    const moreStates = document.getElementById('more-states');
    const button = document.getElementById('show-more-btn');
    if (moreStates.classList.contains('hidden')) {
        moreStates.classList.remove('hidden');
        button.textContent = 'Show Less';
    } else {
        moreStates.classList.add('hidden');
        button.textContent = 'Show More';
    }
}