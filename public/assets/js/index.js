$(document).ready(function () {

    const devouredBtn = $(".devouredBtn");

    devouredBtn.on("click", function () {
        const id = $(this).data("id");
        const toEat = $(this).data("toEat");

        const nowDevour = { devoured: toEat };

        $.ajax({
            url: `/api/burgers/${id}`,
            method: "PUT",
            data: nowDevour
        }).then((response) => {
            location.reload();
        })
    });

    const submitBtn = $("#submitBtn");

    submitBtn.on("click", function (event) {
        event.preventDefault();
        const userInput = $("#userInput").val().trim();

        const burger = { burger_name: userInput };

        $.ajax({
            url: "/api/burgers/",
            method: "POST",
            data: burger
        }).then((response) => {
            location.reload();
        });
    });
})