export default function Product(){
    const products=[{id:1,name:"laptop",price:100},{id:2,name:"SMart-Phone",price:200},{id:3,name:"PC",price:500}]
    const productList=products.map((product)=>(<h1 key={product}>{product.name} :${product.price}</h1>))
    return <div>
{productList}
    </div>
}