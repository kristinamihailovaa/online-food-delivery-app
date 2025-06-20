import { useState } from 'react';

import SavedAddresses from "./SavedAddresses";
import NewAddressForm from "./NewAddressForm";
import PersonalData from './PersonalData';

const OrderDetails = () => {
    const [isNewAddressChecked, setIsNewAddressChecked] = useState(false);

    const handleCheckedChange = (checked) => {
        setIsNewAddressChecked(checked);
    };

    const user = JSON.parse(localStorage.getItem('user'));

    return <div>
        <div className="bradcam_area breadcam_bg overlay">
            <h3 style={{ fontWeight: 'bold' }}>АДРЕС И ЛИЧНИ ДАННИ</h3>
        </div>
        <div className="whole-wrap">
            <div className="container box_1170">
                <div className="section-top-border">
                    <h2 className="mb-30 cart-title">Адрес за доставка</h2>
                    {user && <SavedAddresses user={user} showNewAddressForm={isNewAddressChecked} onCheckedChange={handleCheckedChange} />}
                </div>

                <NewAddressForm isVisible={isNewAddressChecked || !user} />
                <PersonalData user={user}/>
            </div>

        </div>
    </div >
};

export default OrderDetails;