const SavedAddresses = ({ showNewAddressForm, onCheckedChange }) => {

    const manageShowNewAddressForm = (event) => {
        showNewAddressForm = !showNewAddressForm;
        const checked = event.target.checked;
        onCheckedChange(checked); // notifying parent component for the change
    };

    return <div className="single-element-widget mt-30">
        <h4 className="mb-30" style={{ color: '#FFFFFF' }}>Запазени адреси</h4>
        <div className="default-select" id="default-select">
            <select className="nice-select" disabled={showNewAddressForm}>
                <option className="list option" value=" 1">гр. София, Бул. България 120</option>
                <option className="list option" value="1">гр. Бургас, ЖК. Лазур</option>
                <option className="list option" value="1">гр. Варна, ул. Русалка 9</option>
            </select>
        </div>
        <div className="switch-wrap d-flex mt-20 align-baseline">
            <div className="primary-checkbox">
                <input type="checkbox" id="default-checkbox" name="showNewAddress" onChange={manageShowNewAddressForm} />
                <label htmlFor="default-checkbox"></label>
            </div>
            <p style={{ color: "#FFFFFF" }} className="ml-10">Добави нов адрес</p>
        </div>
    </div>
};

export default SavedAddresses;