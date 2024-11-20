import React, { useEffect } from "react";
import ResponsiveAppBar from "../header/header";



export default function Wrapper({ children }) {
    return (
        <>
            <ResponsiveAppBar />
            {children}

        </>
    );
}