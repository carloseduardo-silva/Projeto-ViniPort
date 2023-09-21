class indexController{

    constructor(){

        this.menuHamburguerBtn = document.querySelector('#menu-hamburguer')
        this.navContent = document.querySelector('#content-nav')
        this.imgSlideArr = document.querySelectorAll('.img-slide')
        this.nextBtn = document.querySelector('.button-next')
        this.previousBtn = document.querySelector('.button-prev')
        this.sectionArr = document.querySelectorAll('.hidden')
        
        this.count = 0;
    

        this.menuHamburguerToggle()
        this.serviceSectionHover()
        this.carrousel()
        this.observe()
    }

    observe(){

        const myObserve = new IntersectionObserver( entries =>{

            entries.forEach(entry =>{

                if(entry.isIntersecting === true){
                    entry.target.classList.add('show')
                }
                else{
                    entry.target.classList.remove('show')
                }

            })

        })

        this.sectionArr.forEach( section =>{
            myObserve.observe(section)
        })

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

        if(this.count === -720){
            this.imgSlideArr.forEach(img =>{
                img.style.transform = `translateX(0px)`
                img.style.transition = `600ms`
             })
        
             this.count = 0

        } else{

            this.imgSlideArr.forEach(img =>{
               img.style.transform = `translateX(${this.count - 80}px)`
               img.style.transition = `600ms`
            })
       
            this.count = this.count - 80

        }
     
    
     
    }

    previous(){


        if(this.count === 720){
            this.imgSlideArr.forEach(img =>{
                img.style.transform = `translateX(0px)`
                img.style.transition = `600ms`
             })
        
             this.count = 0

        }
        else{

            this.imgSlideArr.forEach(img =>{
                img.style.transform = `translateX(${this.count + 80}px)`
                img.style.transition = `600ms`
             })
    
             this.count = this.count + 80
             

        } 

      
    
        console.log(this.count)

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