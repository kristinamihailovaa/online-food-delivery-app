const NewAddressForm = ({ isVisible }) => {
    return <div className="col-lg-8 col-md-8 pl-0" style={{ display: isVisible ? 'block' : 'none', padding: '20px 0' }}>
        <h4 className="mb-30" style={{ color: "#FFFFFF" }}>Нов адрес</h4>
        <form action="#">
            <div className="input-group-icon mt-10">
                <input type="text" name="address" placeholder="Град *" required className="single-input pl-20" />
            </div>
            <div className="input-group-icon mt-10">
                <input type="text" name="address" placeholder="Улица *" required className="single-input pl-20" />
            </div>
            <div className="input-group-icon mt-10">
                <input type="text" name="address" placeholder="Номер *" required className="single-input pl-20" />
            </div>
            <div className="input-group-icon mt-10">
                <input type="text" name="address" placeholder="Блок (незадължително)" className="single-input pl-20" />
            </div>
            <div className="input-group-icon mt-10">
                <input type="text" name="address" placeholder="Вход (незадължително)" className="single-input pl-20" />
            </div>
            <div className="input-group-icon mt-10">
                <input type="text" name="address" placeholder="Етаж (незадължително)" className="single-input pl-20" />
            </div>
            <div className="input-group-icon mt-10">
                <input type="text" name="address" placeholder="Апартамент (незадължително)" className="single-input pl-20" />
            </div>

            <div className="mt-10">
                <textarea className="single-textarea" placeholder="Коментар към поръчката..." rows="3"></textarea>
            </div>
        </form>
    </div>
};

export default NewAddressForm;