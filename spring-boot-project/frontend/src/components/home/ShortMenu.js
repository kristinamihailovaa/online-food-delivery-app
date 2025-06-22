import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../services/categoryService";
import { getItemsByCategory } from "../../services/itemService";

const ShortMenu = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllCategories()
        .then((categoryResult) => {            
            getItemsByCategory(categoryResult.data[0].id)
            .then((result) => {            
                setProducts(result.data);
            });
        });
    }, []);

    return <div>
        <div className="best_burgers_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section_title text-center mb-80">
                            <span>Нашето меню</span>
                            <h3>Вкусната храна е начин на живот!</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {products.map((product)=>(
                        <div className="col-xl-6 col-md-6 col-lg-6">
                            <div className="single_delicious d-flex align-items-center">
                                <div className="thumb">
                                    <Link to="/">
                                        <img src={product.imageUrl} alt="" />
                                    </Link>
                                </div>
                                <div className="info">
                                    <Link to="/"><h3>{product.name}</h3></Link>
                                    <Link to="/"><p>{product.description}</p></Link>
                                    <span>
                                        {product.price}лв
                                        <Link to="/menu" className="boxed-btn3" style={{ fontSize: '14px' }}>Поръчай</Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="iteam_links">
                            <Link className="boxed-btn5" to="/menu">Виж още вкусотии</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default ShortMenu;