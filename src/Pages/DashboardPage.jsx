import React, {useState, useEffect} from 'react';

import ShopTable from "../Component/ShopTable.jsx";
import DashboardAside from "../Component/DashboardAside.jsx";

function DashboardPage() {
    useEffect(() => {

    }, []);
    return (
        <div className="pt-4 bg-gray-900">
            <span>
                <DashboardAside/>
            </span>
            <div className="pt-8 bg-gray-900">
                <ShopTable/>
            </div>


            {/*<DashboardAside/>*/}
        </div>
    )
}

export default DashboardPage;