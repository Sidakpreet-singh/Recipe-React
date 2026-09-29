import { useState } from "react";
import { createContext } from "react";
import { useRef } from "react";

export const MyStore = createContext();

export const ContextProvider =({children})=>{

    const [recipes,setRecipes] = useState([
  {
    id: 1,
    RecipeName: "Butter Chicken",
    ChefName: "Arjun Kapoor",
    Description:
      "Tender chicken cooked in a rich tomato and butter gravy with aromatic Indian spices.",
    Price: 329,
    PrepTime: 40,
    RecipeImage:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    quantity: 1,
  },
  {
    id: 2,
    RecipeName: "Paneer Tikka",
    ChefName: "Riya Sharma",
    Description:
      "Grilled paneer cubes marinated with yogurt, peppers and flavorful Indian spices.",
    Price: 249,
    PrepTime: 30,
    RecipeImage:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
    quantity: 1,
  },
  {
    id: 3,
    RecipeName: "Chicken Tacos",
    ChefName: "Carlos Diaz",
    Description:
      "Soft tortillas filled with spicy grilled chicken, fresh vegetables and creamy sauce.",
    Price: 279,
    PrepTime: 25,
    RecipeImage:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80",
    quantity: 1,
  },
  {
    id: 4,
    RecipeName: "Creamy Mushroom Soup",
    ChefName: "Olivia Martin",
    Description:
      "A warm and creamy mushroom soup prepared with herbs, garlic and fresh cream.",
    Price: 189,
    PrepTime: 25,
    RecipeImage:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    quantity: 1,
  },
  {
    id: 5,
    RecipeName: "Classic Cheeseburger",
    ChefName: "Michael Brown",
    Description:
      "Juicy grilled beef patty topped with melted cheese, lettuce, tomato and special sauce.",
    Price: 299,
    PrepTime: 30,
    RecipeImage:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    quantity: 1,
  },
  {
    id: 6,
    RecipeName: "Fresh Greek Salad",
    ChefName: "Sophia Miller",
    Description:
      "Fresh cucumber, tomatoes, olives and feta cheese tossed with a light herb dressing.",
    Price: 199,
    PrepTime: 15,
    RecipeImage:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
    quantity: 1,
  },
  {
    id: 7,
    RecipeName: "Chicken Alfredo",
    ChefName: "Daniel Wilson",
    Description:
      "Creamy Alfredo pasta combined with tender grilled chicken and parmesan cheese.",
    Price: 319,
    PrepTime: 35,
    RecipeImage:
      "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=800&q=80",
    quantity: 1,
  },
  {
    id: 8,
    RecipeName: "Masala Dosa",
    ChefName: "Karan Mehta",
    Description:
      "Crispy South Indian dosa filled with spiced potato masala and served with chutney.",
    Price: 149,
    PrepTime: 25,
    RecipeImage:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80",
    quantity: 1,
  },
  {
    id: 9,
    RecipeName: "Chocolate Lava Cake",
    ChefName: "Emma Davis",
    Description:
      "Warm chocolate cake with a soft center of melted chocolate served as a rich dessert.",
    Price: 229,
    PrepTime: 25,
    RecipeImage:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    quantity: 1,
  },
  {
    id: 10,
    RecipeName: "Pesto Penne",
    ChefName: "Luca Romano",
    Description:
      "Penne pasta tossed in fresh basil pesto with parmesan, garlic and toasted nuts.",
    Price: 269,
    PrepTime: 20,
    RecipeImage:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
    quantity: 1,
  },
  {
    id: 11,
    RecipeName: "Chicken Shawarma",
    ChefName: "Omar Hassan",
    Description:
      "Juicy seasoned chicken wrapped with fresh vegetables, garlic sauce and soft flatbread.",
    Price: 249,
    PrepTime: 30,
    RecipeImage:
      "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80",
    quantity: 1,
  },
  {
    id: 12,
    RecipeName: "Mango Cheesecake",
    ChefName: "Nisha Verma",
    Description:
      "Smooth and creamy cheesecake topped with fresh mango and a buttery biscuit crust.",
    Price: 259,
    PrepTime: 45,
    RecipeImage:
      "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80",
    quantity: 1,
  },
  {
    id: 13,
    RecipeName: "Creamy Garlic Pasta",
    ChefName: "John Doe",
    Description:
      "A creamy and delicious pasta made with garlic, herbs and parmesan cheese.",
    Price: 199,
    PrepTime: 25,
    RecipeImage:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
    quantity: 1,
  },
  {
    id: 14,
    RecipeName: "Margherita Pizza",
    ChefName: "Marco Rossi",
    Description:
      "Classic Italian pizza topped with fresh tomatoes, mozzarella and basil.",
    Price: 299,
    PrepTime: 30,
    RecipeImage:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    quantity: 1,
  },
  {
    id: 15,
    RecipeName: "Chicken Biryani",
    ChefName: "Aman Singh",
    Description:
      "Aromatic basmati rice cooked with tender chicken and traditional Indian spices.",
    Price: 249,
    PrepTime: 45,
    RecipeImage:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
    quantity: 1,
  },
  {
    id: 16,
    RecipeName: "Chocolate Pancakes",
    ChefName: "Emma Wilson",
    Description:
      "Soft and fluffy chocolate pancakes served with fresh berries and syrup.",
    Price: 179,
    PrepTime: 20,
    RecipeImage:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
    quantity: 1,
  },
  {
    id: 17,
    RecipeName: "Grilled Chicken",
    ChefName: "David Smith",
    Description:
      "Juicy grilled chicken breast seasoned with herbs and served with fresh vegetables.",
    Price: 349,
    PrepTime: 35,
    RecipeImage:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    quantity: 1,
  },
  {
    id: 18,
    RecipeName: "Veggie Burger",
    ChefName: "Sophia Brown",
    Description:
      "Crispy vegetable patty served inside a toasted bun with fresh lettuce and sauce.",
    Price: 229,
    PrepTime: 25,
    RecipeImage:
      "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=80",
    quantity: 1,
  },
]);
const [cartitems,setCartitems] = useState(JSON.parse(localStorage.getItem('cartitems'))||[]);
    const [showForm, setShowForm] = useState(false);
     const formRef = useRef(null);
     const handleOpenForm = () => {
    setShowForm(true);

    setTimeout(() => {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };


  
  const incrementQuantity =(id)=>{
    const item = cartitems.find((elem) =>  elem.id === id);
    item.quantity++;
    setCartitems((prev)=>[...prev]);
    localStorage.setItem('cartitems',JSON.stringify(cartitems));
  }
const decrementQuantity = (id) => {
  setCartitems((prev) => {
    const updatedCart = prev
      .map((elem) => {
        if (elem.id === id) {
          return {
            ...elem,
            quantity: elem.quantity - 1,
          };
        }

        return elem;
      })
      .filter((item) => item.quantity > 0);

    localStorage.setItem("cartitems", JSON.stringify(updatedCart));

    return updatedCart;
  });
};
    return <MyStore.Provider value={{recipes,setRecipes,showForm, setShowForm,formRef,cartitems,setCartitems,handleOpenForm,incrementQuantity,decrementQuantity}}>{children}</MyStore.Provider>
}
