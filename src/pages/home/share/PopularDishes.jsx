
import { useContext } from "react"
import { Link } from "react-router-dom"
import ProductCard from "../../../components/ProductCard"
import { AuthContext } from "../../../provider/AuthProvider"


export default function PopularDishes() {
    const {allFoods}=useContext(AuthContext)
    
    return (
        <div className="my-20 bg-gray-200 py-10">
            <div className="text-center space-y-9">
                <h2 className="text-4xl font-cormorant font-bold">Popular Dishes</h2>
                <p className="max-w-5xl mx-auto">
                    In the bustling world of culinary delights, few things captivate the palate quite like the allure of popular dishes. Picture yourself indulging in the savory ecstasy of Crispy Chicken Wings, each bite offering a symphony of flavors that dance across your taste buds. The Classic Cheeseburger beckons with its juicy beef patty, oozing cheese, and a medley of fresh toppings, promising a culinary journey like no other.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
                {
                    allFoods.map(food => {
                        return <ProductCard foodItem={food} key={food._id} />
                    })
                }
            </div>
            <div className="w-full flex justify-center">
                <Link to='/allfoods'><button className="border-2 border-[#E1B168] text-gray-900 text-2xl px-4 py-2 ">See all dishes</button></Link>
            </div>
        </div>
    )
}
