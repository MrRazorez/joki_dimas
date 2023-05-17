import axios from 'axios';

const product = [];

const loadProducts = async () => {
  try {
    const response = await axios.get('http://10.0.2.2:3000/api/products');
    const data = response.data;
    product.push(...data.product); // Menambahkan produk ke array product
    console.log(product); // Outputkan array product setelah parsing
  } catch (error) {
    console.error(error);
  }
};

loadProducts();

export { product };

/**
 * [
    {
        _id:"1",
        name:"Sepatu Bola",
        image:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
        images: [
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1_1.png",
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1_2.png",
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1_3.png",
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1_4.png",
          ],
        description:"Sepatu Olah Raga untuk berlari-lari mengejar harapan",
        price:"150.000",
        lokasi:"belwis",
    },
    {
        _id:"2",
        name:"Sepatu Sport",
        image:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike2_1.png",
        images: [
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike2.png",
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike2_1.png",
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike2_2.png",
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike2_3.png",
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike2_4.png",
          ],
        description:"Sepatu Olah Raga untuk berlari-lari mengejar harapan",
        price:"550.000",
        lokasi:"Airan Raya",
    },
    {
        _id:"3",
        name:"Sneakers Nike",
        image:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike3.png",
        images: [
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike3.png",
          ],
        description:"Sepatu Olah Raga untuk berlari-lari mengejar harapan",
        price:"300.000",
        lokasi:"belwis",
    },
    {
        _id:"4",
        name:"Sepatu Murah",
        image:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike4.png",
        images: [
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike4.png",
          ],
        description:"Sepatu Olah Raga untuk berlari-lari mengejar harapan",
        price:"100.000",
        lokasi:"Korpri",
    },
    {
        _id:"5",
        name:"Sneakers Biru",
        image:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike5.png",
        images: [
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike5.png",
          ],
        description:"Sepatu Olah Raga untuk berlari-lari mengejar harapan",
        price:"200.000",
        lokasi:"Way halim",
    },
]
 * 
 * 
 * 
 */