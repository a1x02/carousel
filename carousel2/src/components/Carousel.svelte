<script>
    import "../app.css"
    import Controls from "./Controls.svelte";
    import Slider from "./Slider.svelte";

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
        <Controls changeCounter={changeCounter} counter={counter} slider={slider}/>
</div>