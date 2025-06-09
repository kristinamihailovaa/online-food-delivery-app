import { useParams } from "react-router-dom";
import NewProductForm from "./NewProductForm";
import OrdersTable from "./OrdersTable";

const Admin = () => {
    let { itemId } = useParams();

    return <div>
        <div className="bradcam_area breadcam_bg overlay">
            <h3 style={{ fontWeight: 'bold' }}>АДМИН ПАНЕЛ</h3>
        </div>

        <div className="whole-wrap">
            <div className="container box_1170">
                <div className="section-top-border">
                    {itemId ? <h2 className="mb-30 cart-title" style={{fontWeight: 'bold'}}>Редактиране на ястие</h2> :
                    <h2 className="mb-30 cart-title" style={{fontWeight: 'bold'}}>Добавяне на ново ястие към менюто</h2>}
                    <NewProductForm itemId={itemId}/>
                    <br/>
                    <h2 className="mb-30 cart-title" style={{fontWeight: 'bold'}}>Обновяване на поръчка</h2>
                    <div className="col-lg-4">
                        <aside className="single_sidebar_widget search_widget">
                            <form action="#">
                                <div className="form-group">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder='Търси по номер...' />
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
                    <OrdersTable />
                </div>

            </div>

        </div>
    </div>
};

export default Admin;