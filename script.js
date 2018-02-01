var app = {
    totalSlides: 3,

    init: function () {
        app.slider.events();
    },
    slider: {
        events: function () {
            $('#arrow-slider-left').click(app.slider.goToSlide.bind(null, -1));
            $('#arrow-slider-right').click(app.slider.goToSlide.bind(null, 1));
        },
        goToSlide: function (number) {
            //1 -> frente e -1 -> trás
            var sliderActual = $('.slider .item.active'),
                indexActual = parseInt(sliderActual.attr('data-slide'));

            indexActual += number;

            if (indexActual < 0) {
                indexActual = app.totalSlides - 1;
            }
            else if (indexActual >= app.totalSlides) {
                indexActual = 0;
            }

            var sliderToGo = $('.slider .item[data-slide=' + indexActual + ']');

            var classToSliderToGo = (number == 1) ? 'right' : 'left';
            var classToSliderActual = (number == 1) ? 'left' : 'right';

            console.log('-----INÍCIO SLIDDDEEEEEE-----');
            console.log('indexActual', indexActual);
            console.log('sliderActual', sliderActual[0]);
            console.log('sliderToGo', sliderToGo[0]);
            console.log('sliderActual class', sliderActual.attr('class'));
            console.log('sliderToGo class', sliderToGo.attr('class'));
            console.log('classToSliderActual ', classToSliderActual);
            console.log('classToSliderToGo ', classToSliderToGo);

            console.log('sliderActualleft', sliderActual.offset().left);
            console.log('sliderToGoLEFT', sliderToGo.offset().left);

            sliderToGo.addClass(['no-transition', classToSliderToGo]);
            console.log('sliderToGo class 1', sliderToGo.attr('class'));

            app.slider.requestAnimationFrame(function () {
                sliderToGo.removeClass(classToSliderActual);
               

                console.log('sliderToGo class 2', sliderToGo.attr('class'));
                console.log('sliderActualleft', sliderActual.offset().left);
                console.log('sliderToGoLEFT', sliderToGo.offset().left);

                app.slider.requestAnimationFrame(function () {
                    console.log('sliderActualleft', sliderActual.offset().left);
                    console.log('sliderToGoLEFT', sliderToGo.offset().left);

                    sliderToGo.removeClass('no-transition');
                    sliderToGo.removeClass(classToSliderToGo);
                    sliderActual.addClass(classToSliderActual);
                    sliderActual.removeClass('active');
                    sliderToGo.addClass('active');

                    console.log('sliderActual class 3', sliderActual.attr('class'));
                    console.log('sliderToGo class 3', sliderToGo.attr('class'));
                }, 0);
            }, 0);
        },
        requestAnimationFrame: function (callback) {
            if (window.requestAnimationFrame) {
                window.requestAnimationFrame(callback);
            }
            else {
                setTimeout(callback, 0);
            }
        }
    }
}

$(document).ready(function () {
    app.init();
});