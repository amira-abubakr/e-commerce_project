import React ,{createContext,useState}from "react";
//Imports  image temporarily
import  image_2 from  "../../assets/hager-images/image 2.jpg"
import  Rectangle_1 from  "../../assets/hager-images/Rectangle 1.jpg"
import  Rectangle_2 from  "../../assets/hager-images/Rectangle 2.jpg"
import  Rectangle_3 from  "../../assets/hager-images/Rectangle 3.jpg"
import  Rectangle_4 from  "../../assets/hager-images/Rectangle 4.jpg"
import  Rectangle_5 from  "../../assets/hager-images/Rectangle 5.jpg"

// import icons

export const ProductContext=createContext();

export default function ProductContextProvider({children})
{

      // Customized product temporarily
      const Product_lessdetails = {
      "id": "product-12345",
      "name": "White Casual T-shirt",
      "oldPrice": 200000,
      "currentPrice": 100000,
        "sale":50,
      "currency": "IDR",
      "stockQuantity": 50,
        "images": [
          {
            "url": image_2,
            "altText": "Front view of the white casual t-shirt"
          },
          {
            "url": Rectangle_1,
            "altText": "Close-up of the t-shirt fabric"
          },
          {
            "url": Rectangle_2,
            "altText": "Model wearing the white t-shirt"
          },
          {
            "url":Rectangle_3,
            "altText": "T-shirt displayed on a hanger"
          },
          {
            "url": Rectangle_4,
            "altText": "T-shirt folded neatly on a surface"
          },
          {
            "url": Rectangle_5,
            "altText": "Side profile of the t-shirt"
          }
       
        ]
    
    };

    return  <ProductContext.Provider value={{isLightSection,setIsLightSection}}>
{children}
    </ProductContext.Provider>
}