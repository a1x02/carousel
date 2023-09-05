<script>
    import Slide from "./Slide.svelte";
    let images = ["src/img/Diablo4.png",
                    "src/img/Warcraft.jpeg",
                    "src/img/Overwatch.jpeg",
                    "src/img/HoMM3.jpeg",
                    "src/img/Warhammer.jpeg",
                    "src/img/CyberPunk.png"]
    let slider
    export let changeSlider
    let size = images[0].clientWidth
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
    <Slide src={images[images.length-1]} alt="Diablo 4"/>
    {:else }
    <Slide src={images[counter-2]} alt="Diablo 4"/>
    {/if}

    <Slide src={images[counter-1]} alt="Warcraft 1"/>

    {#if counter == 6}
    <Slide src={images[0]} alt="Overwatch"/>
    {:else }
    <Slide src={images[counter]} alt="Overwatch"/>
    {/if}
</div>