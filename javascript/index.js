let all_value = document.querySelector(".container");
let red = document.querySelector(".red");
let blue = document.querySelector(".blue");
let black = document.querySelector(".black");
let looping = [red, blue, black];

/*looping.forEach(function (colorGroup, index) {
    colorGroup.forEach(function (element) {
        element.addEventListener("click", function () {
            if (index === 0) {
                all_value.style.backgroundImage = "url(/BMW_bike_img/BMW1.png)";
            }
            else if (index === 1) {
                all_value.style.backgroundImage = "url(/BMW_bike_img/BMW2.png)";
            } 
            else if (index === 2) {
                all_value.style.backgroundImage = "url(/BMW_bike_img/BMW3.png)";
            }
        });
    });
});*/ 

looping.forEach((values,index)=>
{
    values.addEventListener("click",()=>{
        if (index === 0) {
            all_value.style.backgroundImage = "url(/BMW_bike_img/BMW1.png)";
        }
        else if (index === 1) {
            all_value.style.backgroundImage = "url(/BMW_bike_img/BMW2.png)";
        } 
        else if (index === 2) {
            all_value.style.backgroundImage = "url(/BMW_bike_img/BMW3.png)";
        }
    })
})