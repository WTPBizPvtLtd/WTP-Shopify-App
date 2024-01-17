export const loader = async ({ request }) => {
    // const { productId } = await request.json(); // Extracting product ID from the request body
  
    // if (!productId) {
    //   return new Response('Product ID is required', { status: 400 });
    // }
  
    // const shopifyStoreUrl = process.env.SHOPIFY_STORE_URL;
    // const accessToken = process.env.SHOPIFY_ACCESS_TOKEN;
  
    // try {
    //   const response = await fetch(`${shopifyStoreUrl}/admin/api/2024-01/products/${productId}.json`, {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'X-Shopify-Access-Token': accessToken,
    //     },
    //   });
  
    //   if (!response.ok) {
    //     throw new Error(`Network response was not ok: ${response.status}`);
    //   }
  
    //   const productData = await response.json();
    //   return new Response(JSON.stringify(productData), {
    //     status: 200,
    //     headers: {'Content-Type': 'application/json'},
    //   });
    // } catch (error) {
    //   console.error('Error fetching product:', error);
    //   return new Response(`Error fetching product: ${error.message}`, { status: 500 });
    // }
console.log("abavaudhsfudsf");
    return "asdhajkdhasjdhajsdhakjsdhkashd";
  };
  