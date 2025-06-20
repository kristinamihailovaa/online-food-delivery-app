const SavedAddresses = ({ user, showNewAddressForm, onCheckedChange }) => {

    const manageShowNewAddressForm = (event) => {
        showNewAddressForm = !showNewAddressForm;
        const checked = event.target.checked;
        onCheckedChange(checked); // notifying parent component for the change
    };

    return <div className="single-element-widget mt-30">
        <h4 className="mb-30" style={{ color: '#FFFFFF' }}>Запазени адреси</h4>
        <div className="default-select" id="default-select">
            <select className="nice-select" disabled={showNewAddressForm}>
                {user.addresses.map((address)=>(
                    <option className="list option" value={address.id}>{address.city}, {address.address}, {address.description}</option>
                ))}
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