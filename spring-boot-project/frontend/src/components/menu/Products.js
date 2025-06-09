import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { deleteItem, getItemsByCategory } from "../../services/itemService";
import { getcategories } from '../../services/categoryService';

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const user = JSON.parse(localStorage.getItem('user'));
    
    useEffect(() => {
        getcategories()
        .then((result) => {            
            setCategories(result.data);
            setSelectedCategory(result.data[0].id)
        });     
    }, []);

    useEffect(() => {
        getItemsByCategory(selectedCategory)
        .then((result) => {            
            setProducts(result.data);
        });
    }, [selectedCategory]);

    const confirmDelete = (itemId) => {
        const deleteConfirmed = window.confirm('Сигурни ли сте, че искате да изтриете посочения продукт?');
        if(!deleteConfirmed){
            return;
        }
        deleteItem(itemId);
        const newProducts = products.filter(p =>
                  p.id !== itemId
                )
        setProducts(newProducts)
    };

    const addToCart = (product) => { 
        console.log("adding", product);
        
        const cart = JSON.parse(localStorage.getItem('products'))??[];

        const item = cart?.find((item)=>item.id === product.id);

        if(item){
            item.quantity++;
        }
        else{
            product.quantity=1;
            cart.push(product);
        }

        localStorage.setItem('products', JSON.stringify(cart));
    };

    return <div>
        <div className="bradcam_area breadcam_bg overlay">
            <h3 style={{ fontWeight: 'bold' }}>МЕНЮ</h3>
        </div>

        <div className="best_burgers_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section_title text-center mb-80">
                            <span>Поръчай сега!</span>
                            <h3>Вкусно, бързо, качествено!</h3>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <aside className="single_sidebar_widget search_widget">
                            <form action="#">
                                <div className="form-group">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder='Търси...' />
                                        <div className="input-group-append">
                                            <button className="btn boxed-btn3" style={{ borderRadius: '3px' }} type="button"><i className="ti-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </aside>
                        <br />
                        <br />
                    </div>

                    <div className="col-lg-8">
                        <div className="blog_right_sidebar">
                            <aside className="single_sidebar_widget tag_cloud_widget">
                                <h4 className="widget_title">Избери категория</h4>
                                <ul className="list">
                                    {categories.map((category)=>(
                                        <li>
                                            <Link to="#" onClick={()=>setSelectedCategory(category.id)}>{category.name} </Link>
                                        </li>
                                    ))}
                                </ul>
                            </aside>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {products.map((product)=>(
                        <div className="col-xl-6 col-md-6 col-lg-6">
                            <div className="single_delicious d-flex align-items-center">
                                <div className="thumb">
                                    <img style={{objectFit: 'cover'}} width="166" height="166"ize src={product.imageUrl} alt="" />
                                </div>
                                <div className="info">
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                    <span>
                                        {product.price}лв
                                        <button to="" className="boxed-btn3" style={{ fontSize: '14px' }} onClick={() => addToCart(product)}>Поръчай</button>
                                    </span>
                                    {!(user && user.isAdmin) ?? <div>
                                        <br />
                                        <Link to={`/admin/${product.id}`} className="genric-btn warning radius"><i className="ti-pencil">&nbsp;Редактирай</i></Link>
                                        &nbsp;
                                        &nbsp;
                                        <button className="genric-btn danger radius" onClick={()=>confirmDelete(product.id)}><i className="ti-trash">&nbsp; Изтрий</i></button>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* <nav className="blog-pagination justify-content-center d-flex">
                <ul className="pagination">
                    <li className="page-item">
                        <Link to="/menu" className="boxed-btn3" aria-label="Previous">
                            <i className="ti-angle-left"></i>
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link to="/menu" className="boxed-btn3">1</Link>
                    </li>
                    <li className="page-item active">
                        <Link to="/menu" className="boxed-btn3">2</Link>
                    </li>
                    <li className="page-item active">
                        <Link to="/menu" className="boxed-btn3">3</Link>
                    </li>
                    <li className="page-item active">
                        <Link to="/menu" className="boxed-btn3">4</Link>
                    </li>
                    <li className="page-item">
                        <Link to="/menu" className="boxed-btn3" aria-label="Next">
                            <i className="ti-angle-right"></i>
                        </Link>
                    </li>
                </ul>
            </nav> */}
        </div>
    </div>
};

export default Products;