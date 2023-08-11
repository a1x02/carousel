<script>
    import Slide from "./Slide.svelte";
    let images = ["src/img/Diablo4.png",
                    "src/img/Warcraft.jpeg",
                    "src/img/Overwatch.jpeg",
                    "src/img/HoMM3.jpeg",
                    "src/img/Warhammer.jpeg",
                    "src/img/CyberPunk.png"]
    export let counter
</script>

<div class="w-full flex h-854px overflow-hidden">
    <!-- <Slide src={images[counter-1]} alt="Diablo 4"/> -->
    <Slide src={images[counter]} alt="Warcraft 1"/>
    <!-- <Slide src={images[counter+1]} alt="Overwatch"/> -->
</div>