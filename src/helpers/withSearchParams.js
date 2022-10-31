import React from "react";
import { useSearchParams } from "react-router-dom";

function withSearchParams(Component) {
    // fungsi yang mereturnkan komponen
    function WithSearchParams(props) {
        // komponen fungsi yang menempelkan fitur navigasi
        const [searchParams, setSearchParams] = useSearchParams();
        return (
            <Component
                searchParams={searchParams}
                setSearchParams={setSearchParams}
                {...props}
            />
        );
    }
    return WithSearchParams;
}

export default withSearchParams;