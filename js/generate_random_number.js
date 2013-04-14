/// <reference group="Dedicated Worker" />

$(document).ready(function () {

    setInterval(function () {
        $("#operand1-bubble").html(Math.floor((Math.random()*100)+1));
    }, 5000);


});
