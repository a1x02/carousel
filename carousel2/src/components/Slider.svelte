<script>
    import Slide from "./Slide.svelte";
    let sources = [{
        name: "Slide 1",
        image: "src/img/Escapists2_0.png",
    },
    {
        name: "Slide 2",
        image: "src/img/Escapists2_1.png",
    },
    {
        name: "Slide 3",
        image: "src/img/Escapists2_2.png",
    },
    {
        name: "Slide 4",
        image: "src/img/Escapists2_3.png",
    },
    {
        name: "Slide 5",
        image: "src/img/Escapists2_4.png",
    },
    {
        name: "Slide 6",
        image: "src/img/Escapists2_5.png",
    },
    {
        name: "Slide 7",
        image: "src/img/Escapists2_6.png",
    },
    {
        name: "Slide 8",
        image: "src/img/Escapists2_7.png",
    }]
    let slider
    export let changeSlider
    // let size = sources[0].image.clientWidth
    function transformSlider() {
        slider.style.transform = 'translateX(-100vw)'
        changeSlider(slider)
    }
    $: slider && transformSlider()
    // $: slider && console.log(slider)
    export let counter
</script>

<div class="w-full flex h-70vw portrait:h-50vh" bind:this={slider}>
    {#if counter == 1}
    <Slide
        src={sources[sources.length-1].image}
        alt={sources[sources.length-1].name} />
    {:else }
    <Slide
        src={sources[counter-2].image}
        alt={sources[counter-2].name}/>
    {/if}

    <Slide 
        src={sources[counter-1].image}
        alt={sources[counter-1].name}/>

    {#if counter == 8}
    <Slide
        src={sources[0].image}
        alt={sources[0].name}/>
    {:else }
    <Slide 
        src={sources[counter].image} 
        alt={sources[counter].name}/>
    {/if}
</div>