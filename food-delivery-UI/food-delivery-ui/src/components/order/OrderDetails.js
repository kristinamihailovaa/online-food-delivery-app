import { useState } from 'react';

import Footer from "../Footer";
import Header from "../Header";
import SavedAddresses from "./SavedAddresses";
import NewAddressForm from "./NewAddressForm";
import PersonalData from './PersonalData';

const OrderDetails = () => {
    const [isNewAddressChecked, setIsNewAddressChecked] = useState(false);

    const handleCheckedChange = (checked) => {
        setIsNewAddressChecked(checked);
    };

    return <div>
        <Header />
        <div className="bradcam_area breadcam_bg overlay">
            <h3 style={{ fontWeight: 'bold' }}>АДРЕС И ЛИЧНИ ДАННИ</h3>
        </div>
        <div className="whole-wrap">
            <div className="container box_1170">
                <div className="section-top-border">
                    <h2 className="mb-30 cart-title">Адрес за доставка</h2>
                    <SavedAddresses showNewAddressForm={isNewAddressChecked} onCheckedChange={handleCheckedChange} />
                </div>

                <NewAddressForm isVisible={isNewAddressChecked} />
                <PersonalData />
            </div>

        </div>
        <Footer />
    </div >
};

export default OrderDetails;