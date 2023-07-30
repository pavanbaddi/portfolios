import $ from 'jquery';
import themeChangeInit from "./theme-change";
import "../assets/css/style.css";

$(document).ready(function () {
    window.$ = $;
    themeChangeInit();
})