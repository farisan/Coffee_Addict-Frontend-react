import React from "react";
import { Navigate } from "react-router-dom";

// props.children => mengakses komponen child
class PrivateElement extends React.Component {
    render() {
        // conditional, jika true semua maka return kan komponen child
        // jika false, maka redirect
        // kondisi 1 = apakah sudah login
        const { allowedRoles = [], children } = this.props;
        if (!localStorage.token)
            return (
                <Navigate
                    to="/"
                    replace={true}
                    state={{ msg: "Silahkan Login Terlebih Dahulu", isRedirected: true }}
                />
            );
        // kondisi 2 = apakah sesuai dengan role
        if (allowedRoles.length > 0)
            if (!allowedRoles.includes(localStorage.role))
                return (
                    <Navigate
                        to="/"
                        replace={true}
                        state={{
                            msg: "Forbidden",
                            isRedirected: true,
                        }}
                    />
                );
        return children;
    }
}

export default PrivateElement;