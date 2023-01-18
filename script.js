const groupHeaders = document.querySelectorAll(".group-header");

groupHeaders.forEach(groupHeader => { 
    groupHeader.addEventListener("click", () => { 
        groupHeader.classList.toggle('active');
    })
})

const backToTopButtons = document.querySelectorAll('.back-to-top-button');

for(let i = 0; i < backToTopButtons.length; i++) { 
    backToTopButtons[i].addEventListener('click', () => {
        const headerScroll = backToTopButtons[i].parentElement.previousElementSibling;
        headerScroll.scrollIntoView({ behavior: "smooth"});
    }) 
}

const hiraganaTable = document.querySelector('.hiragana-table');
const hiraganaImage = document.querySelector('.hiragana-image');

hiraganaTable.addEventListener('click', (e) => {
    hiraganaImage.classList.toggle('open');
})