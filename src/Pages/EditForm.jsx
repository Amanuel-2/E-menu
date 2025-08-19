import React, {createContext,useState} from "react"
export const EditContext=createContext()
function EditForm(){
    const [dishName,setDishName]=useState([]);
    const [price,setPrice]=useState([]);
    const [uploadImg,setUploadImg]=useState([]);
    const [category,setCategory]=useState([]);

    function handleDishName(){
  
    }
    return(
        <div>
            <div>
                <h2>Edit Menu Item</h2>
                <div>
                    <form action="">
                        <h3>Dish name</h3>
                        <input type="text" placeholder="Name of the dish"value={dishName} onChange={handleDishName}/>
                        <h3>Price</h3>
                        <input type="number" placeholder="price in birr" />
                        <h3>Upload from Device</h3>
                        <input type="file" />
                        <h3>Category</h3>
                        <select name="Category" id="Category">
                            <option value="Breakfast">Breakfast</option>
                            <option value="Launch">Launch</option>
                            <option value="Fasting food">Fasting food</option>
                        </select>
                        <h3>Description</h3>
                        <input type="text" />
                        <p>Tap the switch to mark this dish as Available or Unavailable.
                            <img src="" alt="" />
                        </p>
                        <button >Add</button>
                        <button>save</button>
                    </form>
                </div>
            </div>
           <div>{dishName}, {price}, {uploadImg}, {category}</div>
        </div>
    )
}
export default EditForm