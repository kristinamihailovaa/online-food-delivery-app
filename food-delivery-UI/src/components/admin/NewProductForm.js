import { Link } from "react-router-dom";

const NewProductForm = () => {
    return <div className="col-lg-8 col-md-8 pl-0">
        <form action="#">
            <div className="input-group-icon mt-10">
                <input type="text" name="address" placeholder="Име *" required className="single-input pl-20" />
            </div>
            <div className="input-group-icon mt-10">
                <input type="text" name="address" placeholder="Цена *" required className="single-input pl-20" />
            </div>
            <div className="input-group-icon mt-10">
                <input type="text" name="address" placeholder="Количество *" required className="single-input pl-20" />
            </div>
            <div className="input-group-icon mt-10">
                <input type="url" name="address" placeholder="Адрес на изображението (URL) *" required className="single-input pl-20" />
            </div>
            <div className="mt-10">
                <textarea className="single-textarea" placeholder="Кратко описание" required rows="2"></textarea>
            </div>
            <div className="input-group-icon mt-10">
                <label htmlFor="nice-select" style={{color: 'FFFFFF'}}>Категория на ястието:</label>
                <div className="default-select" id="default-select">
                    <select className="nice-select">
                        <option className="list option" value=" 1">Бургери</option>
                        <option className="list option" value="1">Пици</option>
                        <option className="list option" value="1">Месо</option>
                        <option className="list option" value="1">Тортили</option>
                        <option className="list option" value="1">Картофки</option>
                        <option className="list option" value="1">Напитки</option>
                        <option className="list option" value="1">Десерти</option>
                    </select>

                </div>
            </div>
        </form>

        <div className="order-actions">
            <Link to="/admin" className="btn btn-danger">Отказ</Link>
            &nbsp;
            &nbsp;
            <Link to="/admin" className="btn btn-success">Запази</Link>
        </div>
    </div>
};

export default NewProductForm;