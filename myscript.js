
const openChatButton = document.querySelector ('.chat-button')
const theSearch = document.querySelector ('.zoeken')

openChatButton.addEventListener('click', openSearch)


function openSearch() {
    theSearch.classList.add('toonSearch')
}

