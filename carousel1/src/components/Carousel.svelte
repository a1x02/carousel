<script>
    import "../app.css"
    import Controls from "./Controls.svelte";
    import Slider from "./Slider.svelte";
    // let diabloImage = "src/img/Diablo4.png"
    // let warcraftImage = "src/img/Warcraft.jpeg"
    // let overwatchImage = "src/img/Overwatch.jpeg"
    // let homm3Image = "src/img/HoMM3.jpeg"
    // let warhammerImage = "src/img/Warhammer.jpeg"
    // let cyberpunkImage = "src/img/CyberPunk.png"
    let images = ["src/img/Diablo4.png",
                    "src/img/Warcraft.jpeg",
                    "src/img/Overwatch.jpeg",
                    "src/img/HoMM3.jpeg",
                    "src/img/Warhammer.jpeg",
                    "src/img/Warhammer.jpeg",
                    "src/img/CyberPunk.png"]

    let counter = 1
    let slider

    function changeSlider(newValue) {
        slider = newValue
    }

    function changeCounter(newValue) {
        counter = newValue
        console.log(counter)
    }
</script>

<div class="w-full flex relative overflow-hidden">
        <Slider counter={counter} changeSlider={changeSlider}/>
    <!-- <div class="w-full flex h-full"> -->
        <Controls changeCounter={changeCounter} counter={counter} slider={slider}/>
    <!-- </div> -->
</div>