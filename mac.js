// memory cost evnthandler
const extraMemoryCostt = document.getElementById('memory-8GB-btn').addEventListener('click', function(){
    productsCost('extra-memory-cost', 0);
    updateTotal ();
})
const extraMemoryCost = document.getElementById('memory-16GB-btn').addEventListener('click', function(){
    productsCost("extra-memory-cost", 180);
    updateTotal ();
})


// storage cost event handler
const extraStorageCostt = document.getElementById('storage-256-ssd').addEventListener('click', function(){
    productsCost("extra-ssd-cost",0);
    updateTotal ();
})
const storage = document.getElementById('storage-512-ssd').addEventListener('click', function(){
    productsCost("extra-ssd-cost",100);
    updateTotal ();
})
const strCost = document.getElementById('storage-1tb').addEventListener('click', function(){
    productsCost("extra-ssd-cost",180,);
    console.log(productsCost);
    updateTotal ();
})

// delivery eventhandler
const delivery = document.getElementById('free-delivery').addEventListener('click', function(){
    productsCost("delivery-charge",0);
    updateTotal ();
})
const deliveryy = document.getElementById('delivery-withcharge').addEventListener('click', function(){
    productsCost("delivery-charge",20);
    updateTotal ();
})


// promocode

document.getElementById('apply-btn').addEventListener('click',function(){
    const promoInput = document.getElementById('promo-input');
    const promoInputValue = promoInput.value;
    const subtotal = document.getElementById('subtotal').innerText;
    

    if(promoInputValue == 'stevekaku'){
        const discountPrice = (subtotal-(subtotal*20)/100);
        document.getElementById('grand-total').innerText=discountPrice;
    }
    promoInput.value = '';
    
})

// extra cost setting function 
function productsCost (cost, xtraCost){
    document.getElementById(cost).innerText =xtraCost; 
}  

// extra cost total funtion
function updateTotal (){
    const extraMemoryCost = document.getElementById("extra-memory-cost");
    const memoryCost = Number(extraMemoryCost.innerText);

    const extraStorageCost = document.getElementById("extra-ssd-cost");
    const storageCost = Number(extraStorageCost.innerText);

    const delivery = document.getElementById("delivery-charge");
    const deliveryCost = Number(delivery.innerText);
    const total = document.getElementById("best-price")
    const bestPrice = Number(total.innerText);
    
    const totalCost = memoryCost+storageCost+deliveryCost+bestPrice;
    const subTotal = document.getElementById('subtotal');
    subTotal.innerText =totalCost;

    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = totalCost;
}






