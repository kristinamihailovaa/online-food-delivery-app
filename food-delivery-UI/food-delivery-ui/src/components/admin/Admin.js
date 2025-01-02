import NewProductForm from "./NewProductForm";

const Admin = () => {
    return <div>
        <div className="bradcam_area breadcam_bg overlay">
            <h3 style={{ fontWeight: 'bold' }}>АДМИН ПАНЕЛ</h3>
        </div>

        <div className="whole-wrap">
            <div className="container box_1170">
                <div className="section-top-border">
                    <h2 className="mb-30 cart-title">Добавяне на ново ястие към менюто</h2>
                    <NewProductForm />
                </div>

            </div>

        </div>
    </div>
};

export default Admin;