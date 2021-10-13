const faders = document.querySelectorAll(".fade");
const sliders = document.querySelectorAll(".slider");

const exibirOpcoes = {
    threshold: 0,
    rootMargin: "50% 0px -200px 50%"
};

const exibirOnScroll = new IntersectionObserver((entries, exibirOnScroll) => {

    entries.forEach((entry) => {
        if(!entry.isIntersecting){
            return
        }else{
            entry.target.classList.add('exibir');
            exibirOnScroll.unobserve(entry.target);
        }
    })

}, exibirOpcoes);


faders.forEach(fader => {
    exibirOnScroll.observe(fader);
})

sliders.forEach(slider => {
    exibirOnScroll.observe(slider)
})