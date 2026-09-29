import { useState } from "react";
import { createContext } from "react";
import { useRef } from "react";

export const MyStore = createContext();

export const ContextProvider =({children})=>{

    const [recipes,setRecipes] = useState(JSON.parse(localStorage.getItem('recipes'))||[]);
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