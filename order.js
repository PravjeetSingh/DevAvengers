function showPart(part) {
    const part1 = document.getElementById('part1');
    const part2 = document.getElementById('part2');

    if (part === 1) {
        part1.classList.remove('hidden');
        part2.classList.add('hidden');
    } else {
        part2.classList.remove('hidden');
        part1.classList.add('hidden');
    }
}