var crsr = document.querySelector('#cursor');
var blur =document.querySelector('#cursor-blur');
document.addEventListener("mousemove",function(dets){
    console.log(dets)
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x-150+"px"
    blur.style.top=dets.y-150+"px"

})


gsap.to('#nav',{
    backgroundColor:'black',
    height:'90px',
    duration:0.6,
    scrollTrigger:{
        trigger:'#nav',
        scroller:'body',
        start:'top -15%',
        end:'top -11%',
        scrub:1,


    }
})
gsap.to('#main',{
    backgroundColor:'black',
    scrollTrigger:{
        trigger:'#main',
        scroller:'body',
        start:'top -40%',
        end:'top -70%',
        scrub:7,
    }
})