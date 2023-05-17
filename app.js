// .nav-actibe
const NavClose = document. querySelector('.closeBtn')
const NavOpen = document. querySelector('.mobile-nav')
const navList = document.querySelector('.nav-list')

NavClose.addEventListener('click',()=>{
    navList.classList.remove('nav-active')
})
NavOpen.addEventListener('click',()=>{
    console.log('i have been clicked');
    navList.classList.add('nav-active')
})
// tab
const tabBtn = document.querySelectorAll('.tabBTN');
const tabImg = document.querySelector('.tabImage')

const tabTitle = document.querySelector('.tab-text h1')

const tabPara = document.querySelector('.tab-text p')

const tab = [
    {
        id:1,
        title:'Bookmark in one click',
        img:'images/illustration-features-tab-1.svg',
        description:'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.' 
    },
    {
        id:2,
        title:' Intelligent search',
        img:'images/illustration-features-tab-2.svg',
        description:' Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.' 
    },
    {
        id:3,
        title:'  Share your bookmarks',
        img:'images/illustration-features-tab-3.svg',
        description:'  Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.' 
    },
]
tabBtn.forEach((e)=>{
    e.addEventListener('click',(btn)=>{
        const container = btn.target.classList;

        if (!container.contains('active')) {
            for (let i = 0; i < tabBtn.length; i++) {
                if (tabBtn[i] != btn.currentTarget) {
                    tabBtn[i].classList.remove('active')
                }
            }
            container.add('active')
        } 
        if (container.contains('tab1')) {
            showTab(tab[0])
        }
        if (container.contains('tab2')) {
            showTab(tab[1])
        }
        if (container.contains('tab3')) {
            showTab(tab[2])
        }

    })
})
const showTab = arr =>{
    tabImg.src = arr.img;
    tabTitle.textContent = arr.title;
    tabPara.textContent = arr.description;
}

const question = document.querySelectorAll('.q')
const answer = document.querySelectorAll('.answer')

question.forEach(e=>{
    e.addEventListener('click',(btn)=>{
        for (let i = 0; i < question.length; i++) {
            if (question[i] != btn.currentTarget) {
                question[i].classList.remove('close')
                question[i].parentElement.classList.remove('ansactive')
            }


            // if (!e.classList.contains('close')) {
            //     e.classList.add('close')
            // }
        }
        !btn.currentTarget.classList.contains('close') ? btn.currentTarget.classList.add('close') : btn.currentTarget.classList.remove('close')
        
        
        e.parentElement.classList.toggle('ansactive')
    })

})