import ProductList from "@/components/ProductList";

export default function products() {
    
    return (

        <div className="flex flex-col items-center">
            <h1 className="text-4xl text-gray-400">Browse your favourite products</h1>
            <ProductList products={[]}/>
        </div>
    );
}