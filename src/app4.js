import $ from 'jquery'
import './app4.css'

const $circle = $('#app4 .circle')

$circle.on('mouseenter', () => {
    $circle.addClass('active')
}).on('mouseenter', () => {
    $circle.removeClass('active')
})