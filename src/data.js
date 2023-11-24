fetch("cart.json")
.then(function (response) {
    return response.json();
})
.then(function (products){
    let cartInfo = document.querySelector("#productCart");
    let out = "";

    for (let product of products){
        out += `
            <div style="display:flex; padding-bottom: 16px; justify-content: space-between" class="border-bot">
    <div style="display: flex">
        <div style="display: flex; margin-right: 16px; height: 76px; flex-direction: row">
            <div style="object-fit: cover">
                <img src='${product.img}' style="width: 76px; height: 76px;">
            </div>
            <div>
                <p>${product.Name}</p>
                <b>${product.Cost}</b>
            </div>
        </div>
    </div>
</div>

        `;
    }

    cartInfo.innerHTML = out;
})

/*
{
    "Type": "Tablet",
    "Name": "Xiaomi Redmi Pad SE",
    "Cost": "196.99$",
    "Screen": {
      "Resolution": "1920x1200",
      "Diagonal": "11 inch",
      "Aspect ratio": "16:10"
    },
    "Camera": {
      "Resolution": "FullHD(1080)",
      "Front camera": "5 Mpix",
      "Main camera": "8 Mpix"
    },
    "Memory": {
      "Built-in memory": "128 GB",
      "RAM": "4",
      "Memory card format": "microSD"
    },
    "Main characteristics": {
      "Series": "Redmi Pad SE",
      "OS": "Android 13",
      "CPU Manufacturer": "Qualcomm",
      "Processor model": "Snapdragon 660",
      "Number of processor cores": "8"
    },
    "img": "assets/Tablet.jpg"
  }
 */