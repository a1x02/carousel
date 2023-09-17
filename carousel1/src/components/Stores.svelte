<script>
    let platforms
    let stores

    let sources = [{
        name: 'PlayStation',
        link: 'src/img/ps.svg'
    },
    {
        name: 'Xbox',
        link: 'src/img/xb.svg'
    },
    {
        name: 'Windows',
        link: 'src/img/win.svg'
    },
    {
        name: 'Battle.net',
        link: 'src/img/bs.svg'
    },
    {
        name: 'Epic Games Store',
        link: 'src/img/eg.svg'
    },
    {
        name: 'gog.com',
        link: 'src/img/gog.svg'
    },
    {
        name: 'Steam',
        link: 'src/img/steam.svg'
    },
    {
        name: 'Humble Bundle',
        link: 'src/img/hb.svg'
    },
    {
        name: 'Back',
        link: 'src/img/back.svg'
    }]

    function handleWinClick() {
        platforms.classList.add('animate-fadeOut')
        setTimeout(() => {
            platforms.classList.add('hidden')
            stores.classList.remove('hidden')
            platforms.classList.remove('animate-fadeOut')
        }, 100)
        stores.classList.add('animate-fadeIn')
        setTimeout(() => {
            stores.classList.remove('animate-fadeIn')
        },100)
    }

    function handleBackClick() {
        stores.classList.add('animate-fadeOut')
        setTimeout(() => {
            stores.classList.add('hidden')
            platforms.classList.remove('hidden')
            stores.classList.remove('animate-fadeOut')
        }, 100)
        platforms.classList.add('animate-fadeIn')
        setTimeout(() => {
            platforms.classList.remove('animate-fadeIn')
        },100)
    }
</script>

<div class="absolute w-full flex flex-row text-center m-auto bottom-2vw">
    <div class="flex flex-row mx-auto" bind:this={platforms}>
        <p class="text-white font-inter text-1.5vw text-center my-auto drop-shadow-text">Buy it for</p>
        <div class="ml-3.5 relative self-end group drop-shadow-text">
            <img src={sources[0].link} alt={sources[0].name} class="w-2.5vw cursor-pointer">
            <span class="cursor-pointer group-hover:opacity-100 transition linear duration-300 left-1/2 translate-x-(-)50% text-1vw absolute bottom-(-)4px text-center text-white opacity-0">{sources[0].name}</span>
        </div>
        <div class="ml-3.5 relative self-end group drop-shadow-text">
            <img src={sources[1].link} alt={sources[1].name} class="w-2.5vw cursor-pointer">
            <span class="cursor-pointer group-hover:opacity-100 transition linear duration-300 left-1/2 translate-x-(-)50% text-1vw absolute bottom-(-)4px text-center text-white opacity-0">{sources[1].name}</span>
        </div>
        <div class="ml-3.5 relative self-end group drop-shadow-text" on:click={handleWinClick}>
            <img src={sources[2].link} alt={sources[2].name} class="w-2.5vw cursor-pointer">
            <span class="cursor-pointer group-hover:opacity-100 transition linear duration-300 left-1/2 translate-x-(-)50% text-1vw absolute bottom-(-)4px text-center text-white opacity-0">{sources[2].name}</span>
        </div>
    </div>
    <div class="flex flex-row mx-auto hidden" bind:this={stores}>
        <p class="text-white font-inter text-1.5vw text-center my-auto drop-shadow-text">Buy it on</p>
        <div class="ml-3.5 relative self-end group drop-shadow-text">
            <img src={sources[3].link} alt={sources[3].name} class="w-2.5vw cursor-pointer">
            <span class="cursor-pointer group-hover:opacity-100 transition linear duration-300 left-1/2 translate-x-(-)50% text-1vw absolute bottom-(-)4px text-center text-white opacity-0">{sources[3].name}</span>
        </div>
        <div class="ml-3.5 relative self-end group drop-shadow-text">
            <img src={sources[4].link} alt={sources[4].name} class="w-2.5vw h-40px cursor-pointer">
            <span class="cursor-pointer group-hover:opacity-100 transition linear duration-300 left-1/2 translate-x-(-)50% text-1vw absolute bottom-(-)4px text-center text-white opacity-0 whitespace-nowrap">{sources[4].name}</span>
        </div>
        <div class="ml-3.5 relative self-end group drop-shadow-text">
            <img src={sources[5].link} alt={sources[5].name} class="w-2.5vw cursor-pointer">
            <span class="cursor-pointer group-hover:opacity-100 transition linear duration-300 left-1/2 translate-x-(-)50% text-1vw absolute bottom-(-)4px text-center text-white opacity-0">{sources[5].name}</span>
        </div>
        <div class="ml-3.5 relative self-end group drop-shadow-text">
            <img src={sources[6].link} alt={sources[6].name} class="w-2.5vw cursor-pointer">
            <span class="cursor-pointer group-hover:opacity-100 transition linear duration-300 left-1/2 translate-x-(-)50% text-1vw absolute bottom-(-)4px text-center text-white opacity-0">{sources[6].name}</span>
        </div>
        <div class="ml-3.5 relative self-end group drop-shadow-text">
            <img src={sources[7].link} alt={sources[7].name} class="w-2.5vw cursor-pointer">
            <span class="cursor-pointer group-hover:opacity-100 transition linear duration-300 left-1/2 translate-x-(-)50% text-1vw absolute bottom-(-)4px text-center text-white opacity-0 whitespace-nowrap">{sources[7].name}</span>
        </div>
        <div class="ml-3.5 relative self-end group drop-shadow-text" on:click={handleBackClick}>
            <img src={sources[8].link} alt={sources[8].name} class="w-2.5vw h-40px cursor-pointer">
            <span class="cursor-pointer group-hover:opacity-100 transition linear duration-300 left-1/2 translate-x-(-)50% text-1vw absolute bottom-(-)4px text-center text-white opacity-0">{sources[8].name}</span>
        </div>
    </div>
</div>