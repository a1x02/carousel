<script>
    export let src
    export let alt
    export let logo
    export let text
</script>


<div class="relative block w-100vw shrink-0">
    <div class="absolute w-40% h-80% portrait:h-70% left-5vw portrait:left-1/2 portrait:translate-x-(-)50% flex flex-col text-center justify-between">
        <img src={logo} alt={`${alt} logo`} class="w-15vw portrait:w-p portrait:mt-p mx-0 mt-2vw mb-4">
        <p class="text-left portrait:text-prt portrait:text-center mx-auto drop-shadow-text font-inter font-extrabold text-test text-white w-100%">{text}</p>
    </div>
    <img class="object-cover block object-center w-100vw h-full" src={src} alt={alt}>
</div>
