import { product } from "./product.js";
import { CookieUtil } from './cookie.js';
const addCart = document.querySelectorAll("#add"); // id ของปุ่ม add
const cartNumbers = document.querySelector("#cart"); //id ของตัวเลขตรงกระตร้า

// let amount = localStorage.getItem("amount");
let amount = CookieUtil.get("amount");
if (CookieUtil.length < 1) { //เช็กว่ามีอะไรอยู่ใน Local มั๊ย
    // localStorage.setItem("amount", 0); //ถ้าไม่มีให้ตั้งค่า amount เป็น 0
    CookieUtil.set("amount", 0, Date(9000));
    // cartNumbers.innerHTML = `${localStorage.getItem("amount")}`;
    cartNumbers.innerHTML = `${CookieUtil.get("amount")}`;
} else {
    // cartNumbers.innerHTML = `${localStorage.getItem("amount")}`;
    cartNumbers.innerHTML = `${CookieUtil.get("amount")}`
}
let cart = []
let quantity = 0;
for (let i = 0; i < addCart.length; i++) {

    addCart[i].addEventListener("click", () => {

        if (product[i].productId != cart) { //เช็กว่าสินค้าอยู่ในตะกร้ายัง 
            cart = product[i].productId //ถ้ายังให้เอาลงตะกร้าแล้วตั้งไอดีสินค้านั้นเป็น 1
                // localStorage.setItem(product[i].productId, quality = 1)
            CookieUtil.set(product[i].productId, quantity = 1, Date(9000));
        } else {
            // localStorage.setItem(product[i].productId, quality += 1) //ถ้ามีแล้วบวกเพิ่มได้เลย
            CookieUtil.set(product[i].productId, quantity += 1, Date(9000));
        }

        alert(`ADD ${product[i].productName} TO CART ! ! ! `)
            // localStorage.setItem("amount", ++amount); //เพิ่มจำนวนสินค้าในตะกร้า
        CookieUtil.set("amount", ++amount, Date(9000))
        cartNumbers.innerHTML = `${amount}`; //เอา amount ไปเปลี่ยนตัวเลขหน้าเบราวเซอร์ที่ html
    })
}

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    console.log(cart)
    cart = [];
    quantity = 0;
    // localStorage.setItem("amount", 0);
    CookieUtil.set("amount", 0, Date(9000));
    product.forEach(p => {
        CookieUtil.unset(p.productId);
        // CookieUtil.set("amount", 0, Date(0));
    });
    cartNumbers.innerHTML = 0;
})