<script>
    export let changeCounter
    export let counter
    export let slider
    let el0
    let el1
    let el2
    let el3
    let el4
    let el5
    function handleNextSlide() {
        setTimeout(() => {
            if (counter === 6) {
                changeCounter(1)
            } else {
                changeCounter(counter+1)
            }
        }, 400)
        
        slider.style.transition = 'transform 0.4s ease-in-out'
        slider.style.transform = 'translateX(-200vw)'
        slider.addEventListener('transitionend', () => {
            slider.style.transition = 'none'
            slider.style.transform = 'translateX(-100vw)'
        })
    }

    function handlePrevSlide() {
        setTimeout(() => {
            if (counter === 1) {
                changeCounter(6)
            } else {
                changeCounter(counter-1)
            }
        }, 400)
        slider.style.transition = 'transform 0.4s ease-in-out'
        slider.style.transform = 'translateX(0vw)'
        slider.addEventListener('transitionend', () => {
            slider.style.transition = 'none'
            slider.style.transform = 'translateX(-100vw)'
            
        })
    }

    function goToSlide(value) {
        changeCounter(value)
    }    
    
</script>

<div class="content-start items-start w-full absolute h-full">
    <button on:click={handlePrevSlide} class="bg-arrow-left bg-no-repeat z-50 absolute top-1/2 left-3 w-5 h-5 cursor-pointer"></button>
    <button on:click={handleNextSlide} class="bg-arrow-right bg-no-repeat absolute top-1/2 right-3 w-5 h-5 cursor-pointer"></button>
    <div class="w-full h-9px absolute text-center m-auto bottom-5 flex items-start content-start flex-row">
        <div class="flex flex-row text-center items-center content-center relative h-full mx-auto">
            <button id="1" on:click={goToSlide(el0.id)} bind:this={el0} class="{el0 && el0.id != counter ? 'opacity-75' : 'opacity-100'} flex w-50px mr-2.5 h-full rounded-sm bg-white cursor-pointer hover:opacity-100"></button>
            <button id="2" on:click={goToSlide(el1.id)} bind:this={el1} class="{el1 && el1.id != counter ? 'opacity-75' : 'opacity-100'} flex w-50px mr-2.5 h-full rounded-sm bg-white cursor-pointer hover:opacity-100"></button>
            <button id="3" on:click={goToSlide(el2.id)} bind:this={el2} class="{el2 && el2.id != counter ? 'opacity-75' : 'opacity-100'} flex w-50px mr-2.5 h-full rounded-sm bg-white cursor-pointer hover:opacity-100"></button>
            <button id="4" on:click={goToSlide(el3.id)} bind:this={el3} class="{el3 && el3.id != counter ? 'opacity-75' : 'opacity-100'} flex w-50px mr-2.5 h-full rounded-sm bg-white cursor-pointer hover:opacity-100"></button>
            <button id="5" on:click={goToSlide(el4.id)} bind:this={el4} class="{el4 && el4.id != counter ? 'opacity-75' : 'opacity-100'} flex w-50px mr-2.5 h-full rounded-sm bg-white cursor-pointer hover:opacity-100"></button>
            <button id="6" on:click={goToSlide(el5.id)} bind:this={el5} class="{el5 && el5.id != counter ? 'opacity-75' : 'opacity-100'} flex w-50px h-full rounded-sm bg-white cursor-pointer hover:opacity-100"></button>
        </div>

    </div>
</div>