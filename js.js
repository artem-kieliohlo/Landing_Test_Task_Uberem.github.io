window.onload=function(){
  let switchButton=document.querySelectorAll(".switch__button")

  for(let i=0;i<switchButton.length;i++){
    if(i==0){
      switchButton[i].addEventListener("click",function(){
      switchButton[i].classList.add("switch__button_active");
      switchButton[i+1].classList.remove("switch__button_active");
      })
    }

    if(i==1){
        switchButton[i].addEventListener("click",function(){
        switchButton[i].classList.add("switch__button_active");
        switchButton[i-1].classList.remove("switch__button_active");
      })
    }
  }

  const animItems=document.querySelectorAll(".anim-items");
  if(animItems.length>0){
    window.addEventListener("scroll",animOnScroll)
    function animOnScroll(params){

      for(let index=0;index<animItems.length;index++){
        const animItem=animItems[index];
        const animItemHeight=animItem.offsetHeight;
        const animItemOffset=offset(animItem).top
        animStart=5;

        if((animItems[index].classList[0] =="slider-picture")||(animItems[index].classList[0] =="slider-nav")){
          animStart=1.5
        }

        let animItemPoint=window.innerHeight-animItemHeight/animStart;

        if(animItemHeight>window.innerHeight){
          animItemPoint=window.innerHeight-window.innerHeight/animStart;
        }

        if ((pageYOffset>animItemOffset-animItemPoint)&&pageYOffset<(animItemOffset+animItemHeight)){
          animItem.classList.add("_active")
        }else{
          if(!animItem.classList.contains("_anim-no-hiden")){
            animItem.classList.remove("_active")
          }
        }
      }
    }
    
    function offset(el){
      const rect=el.getBoundingClientRect(),
      scrollLeft=window.pageXOffset||document.documentElement.scrollLeft,
      scrollTop=window.pageXOffset||document.documentElement.scrollTop;
      return {top:rect.top+scrollTop,left:rect.left+scrollLeft}
    }
    animOnScroll()
  }


  const menu=[...document.querySelectorAll(".slider__menu-item")];
  const sliderFoto=document.querySelector(".slider-wrap");
  const positionFoto=["0%","-100%","-200%","-300%"]

  for(let i=0;i<menu.length;i++){
    menu[i].addEventListener('click',position)

    function position(){
      let button=document.querySelectorAll(`.foto__button._${i+1}`);
     
      for(let j=0;j<button.length;j++){
        button[j].classList.add("_active")
      }

      let activeButton=document.querySelector(".slider__menu-item_active")
      let numberButton=menu.indexOf(activeButton)
      menu[numberButton].classList.remove("slider__menu-item_active")
      menu[i].classList.add('slider__menu-item_active')
      sliderFoto.style.left = `${positionFoto[i]}`
      sliderFoto.style.transition=`all   2s`
    }
  }
  //   let elem=document.querySelector(".buyButton-block-wrap")
  //   let elemBut=document.querySelector(".buyButton-block-wrap__button")

  //   let elemButCenterX=elemBut.offsetWidth/2
  //   let elemButCenterY=elemBut.offsetHeight/2
  //   let mouseX = event.offsetX;
  // let  mouseY = event.offsetY;

  //   let centerX=elem.offsetWidth/2
  //   let centerY=elem.offsetHeight/2
    
  //   console.log(mouseX)
  //   console.log(mouseY)
  //   elem.addEventListener('mousemove',function(){
  //     mouseX = event.offsetX;
  //     mouseY = event.offsetY;
  //     console.log(mouseX,"   :  ",mouseY)
      
      
  //   })
  //   elemBut.addEventListener('mousemove',function(){
  //     // const mouseX = event.offsetX;
  //     // const mouseY = event.offsetY;
  //     // elem.style.bottom="-30px"
  //     elemBut.style.transform=`translate(${mouseX-elemButCenterX}px,${mouseY-elemButCenterY}px) `
      
  //   })
  //   elemBut.addEventListener("mouseleave",function(){
  //     elemBut.style.transform=`translate(0px,0px)`
  //     // elem.style.bottom="-51px"
  //   })

}