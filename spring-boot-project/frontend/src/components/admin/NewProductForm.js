import { Link } from "react-router-dom";
import { getcategories } from "../../services/categoryService";
import { useEffect, useState } from "react";
import { createItem, getItemById, updateItem } from "../../services/itemService";

const NewProductForm = ({itemId}) => {
    const [item, setItem] = useState({});
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getcategories()
        .then((result) => {            
            setCategories(result.data);
        });
    }, []);

    useEffect(() => {
        if(itemId){
            getItemById(itemId)
            .then((result) => {               
                    setItem(result.data);
                });
        }
    }, [itemId]);

    const changeItem = (event) => {
        const changedItem = {...item, [event.target.name]:event.target.value};
        setItem(changedItem);
    }

    const onSubmit = () => {
        if(itemId){
            updateItem(item);
        }
        else{
            createItem(item);
        }
    }

    return <div className="col-lg-8 col-md-8 pl-0">
        <form onSubmit={onSubmit}>
            <div className="input-group-icon mt-10">
                <input type="text" name="name" placeholder="Име *" defaultValue={item.name} onChange={changeItem} required className="single-input pl-20" />
            </div>
            <div className="input-group-icon mt-10">
                <input type="text" name="price" placeholder="Цена *" defaultValue={item.price} onChange={changeItem} required className="single-input pl-20" />
            </div>
            <div className="input-group-icon mt-10">
                <input type="text" name="quantity" placeholder="Количество *" defaultValue={item.quantity} onChange={changeItem} required className="single-input pl-20" />
            </div>
            <div className="input-group-icon mt-10">
                <input type="string" name="imageUrl" placeholder="Адрес на изображението (URL) *" defaultValue={item.imageUrl} onChange={changeItem} required className="single-input pl-20" />
            </div>
            <div className="mt-10">
                <textarea className="single-textarea" name="description" placeholder="Кратко описание" defaultValue={item.description} onChange={changeItem} required rows="2"></textarea>
            </div>
            <div className="input-group-icon mt-10">
                <label htmlFor="nice-select" style={{color: 'FFFFFF'}}>Категория на ястието:</label>
                <div className="default-select" id="default-select">
                    <select className="nice-select" name="category" value={item.category} onChange={changeItem}>
                        {categories.map((category)=>(
                            <option className="list option" value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="order-actions">
                <Link to="/menu" className="btn btn-danger">Отказ</Link>
                &nbsp;
                &nbsp;
                <Link to="/menu" onClick={onSubmit} className="btn btn-success">Запази</Link>
            </div>
        </form>
    </div>
};

export default NewProductForm;