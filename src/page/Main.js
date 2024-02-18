import React, { useState, useEffect } from 'react';
// async function getAPI(){
//     const url = 'https://amazon-merchant-data.p.rapidapi.com/search-products?term=iphone%2012&country=ca';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '9abbb307fcmsh85c4f6181c8ad20p137488jsnf113f2654af6',
//             'X-RapidAPI-Host': 'amazon-merchant-data.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.text()
//         console.log();
//     } catch (error) {
//         console.error(error);
//     }
// }

function App() {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/data.json'); // Assuming the JSON file is served from the public directory
            const data = await response.json();
            setProducts(data);
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        fetchData();
      }, []);

    console.log(products)

  return (
    <>

    </>
  );
}

export default App;
