
'use strict';

// import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

window.addEventListener('DOMContentLoaded', () => {

    function slider({container, slide, nextArrow, prevArrow, wrapper, field, slidesToShow}) {

        const slides = document.querySelectorAll(slide),
              slider = document.querySelector(container),
              prev = document.querySelector(prevArrow),
              next = document.querySelector(nextArrow),
              slidesWrapper = document.querySelector(wrapper),
              slidesField = document.querySelector(field),
              width = window.getComputedStyle(slidesWrapper).width;

        let slideIndex = 1;
        let offset = 0;

        slidesField.style.width = 100 * slides.length + '%';
        slidesField.style.display = 'flex';
        slidesField.style.transition = '0.5s all';

        slidesWrapper.style.overflow = 'hidden';

        slides.forEach(slide => {
            slide.style.width = delLetters(width) / slidesToShow + "px";
            // slide.style.width = width;
        });


        slider.style.position = 'relative';
        
        function delLetters(str) {
            return +str.replace(/\D/g, '');
        }

        next.addEventListener('click', () => {
            if (offset == delLetters(width) / slidesToShow * (slides.length - 1)) {
                offset = 0;
            } else {
                offset += delLetters(width) / slidesToShow;
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == slides.length) {
                slideIndex = 1;
            } else {
                slideIndex++;
            }
        });

        prev.addEventListener('click', () => {
            if (offset == 0) {
                offset = delLetters(width) / slidesToShow * (slides.length - 1);
            } else {
                offset -= delLetters(width) / slidesToShow;
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == 1) {
                slideIndex = slides.length;
            } else {
                slideIndex--;
            }
        });
    }

    slider({
        container: '.main__slider',
        nextArrow: '.main__slider-next',
        slide: '.main__slide',
        prevArrow: '.main__slider-prev',
        wrapper: '.main__slider-wrapper',
        field: '.main__slider-inner',
        slidesToShow: 1
    });

    slider({
        container: '.reviews__slider',
        nextArrow: '.reviews__slider-next',
        slide: '.reviews__slide',
        prevArrow: '.reviews__slider-prev',
        wrapper: '.reviews__slider-wrapper',
        field: '.reviews__slider-inner',
        slidesToShow: 2
    });

    slider({
        container: '.our__slider',
        nextArrow: '.our__slider-next',
        slide: '.our__slide',
        prevArrow: '.our__slider-prev',
        wrapper: '.our__slider-wrapper',
        field: '.our__slider-inner',
        slidesToShow: 6
    });

    // tns({
    //     container: '.our__slider',
    //     items: 6,
    //     gutter: 6,
    //     mouseDrag: true
    //   });


});