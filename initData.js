export function getWordsToSearch(){
 
    const lists = document.querySelectorAll('.tag');
 
    return Array.from(lists).map(word => word.textContent);
}

