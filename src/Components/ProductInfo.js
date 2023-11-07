import React from 'react';

export const ProductInfo = ({ details }) => {
    const productInfo = details.product;

    let minus = document.querySelector(".minus");
    let num = document.querySelector(".num");
    let plus = document.querySelector(".plus");
    let i = 1;

    if (plus) {
        plus.addEventListener("click", () => {
            i++;
            num.innerText = i;
        });
    }
    
    if (minus) {
        minus.addEventListener("click", () => {
            if (i > 1) {
                i--;
                num.innerText = i;
            }
        });
    }
    
    return (
        <>
            <p>{productInfo?.brand}</p>
            <p>{productInfo?.title}</p>
            <p>{productInfo?.totalRating}</p>
            <p>{productInfo?.price}</p>

            <div class="wrapper">
                <span class="minus">-</span>
                <span class="num">1</span>
                <span class="plus">+</span>
            </div>
        </>
    );
};