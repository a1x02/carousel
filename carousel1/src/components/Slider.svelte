<script>
    import Slide from "./Slide.svelte";
    let sources = [{
        name: "Diablo 4",
        image: "src/img/Diablo4.png",
        logo: "src/img/d4-logo.png",
        text: "The new part of the famous series will plunge you into the horrors of Sanctuary"
    },
    {
        name: "Warcraft",
        image: "src/img/Warcraft.jpeg",
        logo: "src/img/wc-logo.png",
        text: "An eternal classic of war between the Horde and the people of Lordaeron"
    },
    {
        name: "Overwatch",
        image: "src/img/Overwatch.jpeg",
        logo: "src/img/ow-logo.png",
        text: "A fresh take on co-op shooters expands the horizons of the genre"
    },
    {
        name: "Heroes of Might and Magic 3",
        image: "src/img/HoMM3.jpeg",
        logo: "src/img/homm-logo.png",
        text: "A modern version of the turn-based strategy genre immortal leader"
    },
    {
        name: "Warhammer 40000",
        image: "src/img/Warhammer.jpeg",
        logo: "src/img/wh-logo.png",
        text: "Defy Chaos in a classic real-time strategy game"
    },
    {
        name: "Cyberpunk 2077",
        image: "src/img/CyberPunk.png",
        logo: "src/img/cp-logo.png",
        text: "A milestone in the contemporary art"
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

<div class="w-full flex h-854px" bind:this={slider}>
    {#if counter == 1}
    <Slide
        src={sources[sources.length-1].image}
        alt={sources[sources.length-1].name} 
        logo={sources[sources.length-1].logo}
        text={sources[sources.length-1].text}/>
    {:else }
    <Slide
        src={sources[counter-2].image}
        alt={sources[counter-2].name}
        logo={sources[counter-2].logo}
        text={sources[counter-2].text}/>
    {/if}

    <Slide 
        src={sources[counter-1].image}
        alt={sources[counter-1].name}
        logo={sources[counter-1].logo}
        text={sources[counter-1].text}/>

    {#if counter == 6}
    <Slide
        src={sources[0].image}
        alt={sources[0].name}
        logo={sources[0].logo}
        text={sources[0].text}/>
    {:else }
    <Slide 
        src={sources[counter].image} 
        alt={sources[counter].name}
        logo={sources[counter].logo}
        text={sources[counter].text}/>
    {/if}
</div>