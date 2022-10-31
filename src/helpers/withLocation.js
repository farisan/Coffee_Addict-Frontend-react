import React from "react";
import { useLocation } from "react-router-dom";

function withLocation(Component) {
    // fungsi yang mereturnkan komponen
    function WithLocation(props) {
        // komponen fungsi yang menempelkan fitur navigasi
        const location = useLocation();
        return <Component location={location} {...props} />;
    }
    return WithLocation;
}

export default withLocation;