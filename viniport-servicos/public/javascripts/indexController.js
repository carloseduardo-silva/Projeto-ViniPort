class indexController{

    constructor(){

        this.menuHamburguerBtn = document.querySelector('#menu-hamburguer')
        this.navContent = document.querySelector('#content-nav')
        this.imgSlideArr = document.querySelectorAll('.img-slide')
        this.nextBtn = document.querySelector('.button-next')
        this.previousBtn = document.querySelector('.button-prev')

        this.menuHamburguerToggle()
        this.serviceSectionHover()
        this.carrousel()
        console.log(this.imgSlideArr)
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

    next(){

    }

    previous(){


    }

  carrousel(){

    this.nextBtn.addEventListener('click', e =>{

        this.next()
        console.log('next')

    })

    this.previousBtn.addEventListener('click', e =>{

        this.previous()
        console.log('previous')

    })
      


    }

}