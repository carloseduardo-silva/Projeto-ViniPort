class indexController{

    constructor(){

        this.menuHamburguerBtn = document.querySelector('#menu-hamburguer')
        this.navContent = document.querySelector('#content-nav')

        this.menuHamburguerToggle()

    }



    menuHamburguerToggle(){

        this.menuHamburguerBtn.addEventListener('click', e =>{

            this.navContent.classList.toggle('none')
            this.navContent.classList.toggle('flex')

        })

    }
}