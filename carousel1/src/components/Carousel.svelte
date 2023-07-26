<script>
    import "../app.css"
    import Controls from "./Controls.svelte";
</script>

<div class="w-full flex content-start relative h-854px overflow-hidden">
    <div class="w-full flex h-full">
        <img class="object-cover content-center" src="src/img/Diablo4.png" alt="Diablo 4">
        <img class="object-cover content-center" src="src/img/Warcraft.jpeg" alt="Warcraft 1">
        <img class="object-cover content-center" src="src/img/Overwatch.jpeg" alt="Overwatch">
        <img class="object-cover content-center" src="src/img/HoMM3.jpeg" alt="HoMM3">
        <img class="object-cover content-center" src="src/img/Warhammer.jpeg" alt="Warhammer">
        <img class="object-cover content-center" src="src/img/CyberPunk.png" alt="CyberPunk 2077">
    </div>
    <Controls />
</div>