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
    let el6
    let el7
    
    function handleNextSlide() {
        setTimeout(() => {
            if (counter === 8) {
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
                changeCounter(8)
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
    <button on:click={handlePrevSlide} class="bg-arrow-left bg-no-repeat bg-contain z-50 absolute top-1/2 left-1.5vw w-1vw portrait:w-4vw portrait:h-4vw h-1vw cursor-pointer"></button>
    <button on:click={handleNextSlide} class="bg-arrow-right bg-no-repeat bg-contain z-50 absolute top-1/2 right-1.5vw w-1vw portrait:w-4vw portrait:h-4vw h-1vw cursor-pointer"></button>
    <div class="w-full min-h-9px absolute text-center m-auto bottom-1vw flex items-start content-start flex-row h-t portrait:h-p">
        <div class="flex flex-row text-center items-center content-center relative h-full mx-auto">
            <button id="1" on:click={goToSlide(el0.id)} bind:this={el0} class="{el0 && el0.id != counter ? 'border-btn' : 'border-curr'} flex 2 w-5vw portrait:w-p bg-0 bg-btn bg-center mr-0.5vw h-full rounded-sm bg-no-repeat bg-contain cursor-pointer hover:bg-white hover:border-white transition linear duration-300 border-width"></button>
            <button id="2" on:click={goToSlide(el1.id)} bind:this={el1} class="{el1 && el1.id != counter ? 'border-btn' : 'border-curr'} flex 2 w-5vw portrait:w-p bg-1 bg-btn bg-center mr-0.5vw h-full rounded-sm bg-no-repeat bg-contain cursor-pointer hover:bg-white hover:border-white transition linear duration-300 border-width"></button>
            <button id="3" on:click={goToSlide(el2.id)} bind:this={el2} class="{el2 && el2.id != counter ? 'border-btn' : 'border-curr'} flex 2 w-5vw portrait:w-p bg-2 bg-btn bg-center mr-0.5vw h-full rounded-sm bg-no-repeat bg-contain cursor-pointer hover:bg-white hover:border-white transition linear duration-300 border-width"></button>
            <button id="4" on:click={goToSlide(el3.id)} bind:this={el3} class="{el3 && el3.id != counter ? 'border-btn' : 'border-curr'} flex 2 w-5vw portrait:w-p bg-3 bg-btn bg-center mr-0.5vw h-full rounded-sm bg-no-repeat bg-contain cursor-pointer hover:bg-white hover:border-white transition linear duration-300 border-width"></button>
            <button id="5" on:click={goToSlide(el4.id)} bind:this={el4} class="{el4 && el4.id != counter ? 'border-btn' : 'border-curr'} flex 2 w-5vw portrait:w-p bg-4 bg-btn bg-center mr-0.5vw h-full rounded-sm bg-no-repeat bg-contain cursor-pointer hover:bg-white hover:border-white transition linear duration-300 border-width"></button>
            <button id="6" on:click={goToSlide(el5.id)} bind:this={el5} class="{el5 && el5.id != counter ? 'border-btn' : 'border-curr'} flex 2 w-5vw portrait:w-p bg-5 bg-btn bg-center mr-0.5vw h-full rounded-sm bg-no-repeat bg-contain cursor-pointer hover:bg-white hover:border-white transition linear duration-300 border-width"></button>
            <button id="7" on:click={goToSlide(el6.id)} bind:this={el6} class="{el6 && el6.id != counter ? 'border-btn' : 'border-curr'} flex 2 w-5vw portrait:w-p bg-6 bg-btn bg-center mr-0.5vw h-full rounded-sm bg-no-repeat bg-contain cursor-pointer hover:bg-white hover:border-white transition linear duration-500 border-width"></button>
            <button id="8" on:click={goToSlide(el7.id)} bind:this={el7} class="{el7 && el7.id != counter ? 'border-btn' : 'border-curr'} flex 2 w-5vw portrait:w-p bg-7 bg-btn bg-center h-full rounded-sm bg-no-repeat bg-contain cursor-pointer hover:opacity-100 hover:border-white transition linear duration-500 border-width"></button>
        </div>

    </div>
</div>