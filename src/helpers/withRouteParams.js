import React from "react";
import { useParams } from "react-router-dom";

function withRouteParams(Component) {
    // fungsi yang mereturnkan komponen
    function WithRouteParams(props) {
        // komponen fungsi yang menempelkan fitur navigasi
        const params = useParams();
        return <Component params={params} {...props} />;
    }
    return WithRouteParams;
}

export default withRouteParams;