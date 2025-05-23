import { Link } from "react-router-dom";

const PersonalData = () => {
    return <div className="col-lg-8 col-md-8 pl-0 mt-20">
        <h4 className="mb-30" style={{ color: "#FFFFFF" }}>Лични данни</h4>
        <form action="#">
            <div className="input-group-icon mt-10">
                <input type="text" name="address" placeholder="Име" value="Pesho Peshov" required className="single-input pl-20" />
            </div>
            <div className="input-group-icon mt-10">
                <input type="text" name="address" placeholder="Имейл" value="pesho@abv.bg" required className="single-input pl-20" />
            </div>
            <div className="input-group-icon mt-10">
                <input type="text" name="address" placeholder="Телефон" value="088899911" required className="single-input pl-20" />
            </div>
        </form>

        <div className="order-actions">
            <Link to="/orderConfirm" className="btn btn-success">Финализиране</Link>
        </div>
    </div>
};

export default PersonalData;