class institucionalController{

    constructor(){

        this.menuHamburguerBtn = document.querySelector('#menu-hamburguer')
        this.navContent = document.querySelector('#content-nav')
        

        this.menuHamburguerToggle()
        this.serviceSectionHover()

    }



    menuHamburguerToggle(){

        this.menuHamburguerBtn.addEventListener('click', e =>{

            this.navContent.classList.toggle('none')
            this.navContent.classList.toggle('flex')

        })

    }

    serviceSectionHover(){
        document.querySelectorAll('.service').forEach(divService =>{
            
            divService.addEventListener('mouseenter', e =>{
                divService.querySelector('.p-content').classList.remove('hide')

            })


            divService.addEventListener('mouseleave', e =>{
                divService.querySelector('.p-content').classList.add('hide')

            })
        })
    }

}