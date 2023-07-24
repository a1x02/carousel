<script>
    import '../app.css'

    let slideIndex = 1

    function switchSlides(direction) {
        showSlides(slideIndex += direction)
    }

    function goToSlide(index) {
        showSlides(slideIndex = index)
    }

    function showSlides(index) {
        const sliderItems = document.querySelectorAll('.slider__item')
        const sliderIndicators = document.querySelectorAll('.slider__indicator')
    
        if (index > sliderItems.length) {
            slideIndex = 1
        }
        if (index < 1) {
            slideIndex = sliderItems.length
        }

        for (let i = 0; i < sliderItems.length; i++) {
            sliderItems[i].style.display = "none"
        }

        for (let i = 0; i < sliderIndicators.length; i++) {
            sliderIndicators[i].className = sliderIndicators[i].className.replace("bg-opacity-100", "bg-opacity-75")
        }

        sliderItems[slideIndex-1].style.display = "block"
        sliderIndicators[slideIndex-1].className.replace("bg-opacity-75", "bg-opacity-100")
    }

    showSlides(slideIndex)
</script>

<!-- <h1 class="text-6xl underline text-center">Hello !</h1> -->
<div class="slider__container max-w-full relative m-auto">
    <div class="slider__item w-full">
        <img src="src/img/Diablo4.png" alt="Diablo 4">
        <div class="slider__description">

        </div>
    </div>
    <div class="slider__item w-full">
        <img src="src/img/Warcraft.jpeg" alt="Warcraft 1">
        <div class="slider__description">

        </div>
    </div>
    <div class="slider__item w-full">
        <img src="src/img/Overwatch.jpeg" alt="Overwatch">
        <div class="slider__description">

        </div>
    </div>
    <div class="slider__item w-full">
        <img src="src/img/HoMM3.jpeg" alt="HoMM3">
        <div class="slider__description">

        </div>
    </div>
    <div class="slider__item w-full">
        <img src="src/img/Warhammer.jpeg" alt="Warhammer">
        <div class="slider__description">

        </div>
    </div>
    <div class="slider__item w-full">
        <img src="src/img/CyberPunk.png" alt="CyberPunk 2077">
        <div class="slider__description">

        </div>
    </div>
    <p class="prev cursor-pointer absolute top-1/2 left-11 text-white w-4 h-4 p-0 bg-arrow-left bg-no-repeat bg-center" onclick="switchSlides(-1)"></p>
    <p class="next cursor-pointer absolute top-1/2 right-11 text-white w-4 h-4 p-0 bg-arrow-right bg-no-repeat bg-center" onclick="switchSlides(1)"></p>
    <div class="slider__indicators w-full absolute bottom-5 content-center flex flex-row justify-center items-center z-1">
        <div class="slider__indicator rounded-sm w-12 h-2 bg-white mx-2.5 my-6 cursor-pointer border-black" onclick="goToSlide(1)"></div>
        <div class="slider__indicator rounded-sm w-12 h-2 bg-white bg-opacity-75 hover:bg-opacity-100 duration-300 ease mr-2.5 my-6 cursor-pointer border-black" onclick="goToSlide(2)"></div>
        <div class="slider__indicator rounded-sm w-12 h-2 bg-white bg-opacity-75 hover:bg-opacity-100 duration-300 ease mr-2.5 my-6 cursor-pointer border-black" onclick="goToSlide(3)"></div>
        <div class="slider__indicator rounded-sm w-12 h-2 bg-white bg-opacity-75 hover:bg-opacity-100 duration-300 ease mr-2.5 my-6 cursor-pointer border-black" onclick="goToSlide(4)"></div>
        <div class="slider__indicator rounded-sm w-12 h-2 bg-white bg-opacity-75 hover:bg-opacity-100 duration-300 ease mr-2.5 my-6 cursor-pointer border-black" onclick="goToSlide(5)"></div>
        <div class="slider__indicator rounded-sm w-12 h-2 bg-white bg-opacity-75 hover:bg-opacity-100 duration-300 ease my-6 cursor-pointer border-black" onclick="goToSlide(6)"></div>
    </div>
</div>
