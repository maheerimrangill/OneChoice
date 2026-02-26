// 10 PRE-ADDED SHOPS
let shops = [
  {shop:"Rehmat Bakers & Sweets", discount:"15% OFF", img:"rehmat.jpg", address:"sabzi mandi road near old sabzi mandi", contact:"0462511986", rating:5},
  {shop:"Lala Sweets and Bakers", discount:"10% OFF", img:"LaLa.jpg", address:"Main Saddar Bazzar near Cheap corner", contact:"03336868872", rating:3},
  {shop:"Breadway Bakers & Cake Shop", discount:"5% OFF", img:"Bread.jpg", address:"Near darbar ", contact:"03078284937", rating:3},
  {shop:"Cake Shake", discount:"10% OFF", img:"CS.jpg", address:"Near Muncipul office", contact:"0462513335", rating:4},
  {shop:"A One Bakers & Sweets", discount:"5% OFF", img:"A1.jpg", address:"Near Bin Aslam and General Bus Stand", contact:"03216866740", rating:4},
  {shop:"Multan Rewari Sweets", discount:"15% OFF", img:"multan.jpg", address:"Sabzi mandi road near MCB bank", contact:"03007350162", rating:5},
  {shop:"M. Ismail Sweets & Bakers", discount:"5% OFF", img:"mi.jpg", address:"opposite Saddar Bazzar", contact:"0462514399", rating:4},
  {shop:"wali's sweets And Bakers", discount:"10% OFF", img:"wali.jpg", address:"Jhang road opp.Shaheen football stadium", contact:"0462510893", rating:4},
  {shop:"SHAMA Sweets and Bakers", discount:"10% OFF", img:"shama.jpg", address:"Rajana Road", contact:"0462514293", rating:5},
  {shop:"Madina Bakery", discount:"10% OFF", img:"Madina bakery.png", address:"Saddar Bazzar", contact:"0462516007", rating:5}
 

];


// SHOW SHOPS WITH AUTO-GENERATED CODES
function showShops(){
    const grid = document.getElementById("shopGrid");
    grid.innerHTML = "";
    shops.forEach((s)=>{
        // generate random code
        const code = s.shop.split(" ").map(w=>w[0]).join("").toUpperCase() + Math.floor(1000 + Math.random()*9000);
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <div class="image"><img src="${s.img}" alt="${s.shop}"></div>
        <div class="info">
            <div class="shop">${s.shop}</div>
            <div class="discount">${s.discount}</div>
            <div class="code">${code}</div>
            <div>Rating: ${"⭐".repeat(s.rating)}</div>
            <div>Address: ${s.address}</div>
            <div>Contact: ${s.contact}</div>
            <button class="btn">Buy Promo Code</button>
        </div>`;
        grid.appendChild(card);
    });
}

// SEARCH FUNCTION
document.getElementById("searchBox").addEventListener("keyup", function(){
    const value = this.value.toLowerCase();
    document.querySelectorAll(".card").forEach((card)=>{
        const shopName = card.querySelector(".shop").innerText.toLowerCase();
        if(shopName.includes(value)){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// PROMO SLIDER
let promoIndex = 0;
function startPromoSlider(){
    const promos = document.querySelectorAll(".promo-slider img");
    setInterval(()=>{
        promos.forEach(img=> img.classList.remove("active"));
        promoIndex = (promoIndex+1)%promos.length;
        promos[promoIndex].classList.add("active");
    },15000);
}

// RUN ON PAGE LOAD
window.onload = function(){
    showShops();
    startPromoSlider();
};