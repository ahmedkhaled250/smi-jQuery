
$(".mySection").slideDown(1000, function () {
    $("h1").show(1000, () => {$(".container-p").show(1000, () => {$(".col-md-4").slideDown(1000)})
    })
})
