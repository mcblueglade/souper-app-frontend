import React from "react";
import Navbar from "../components/layout/Navbar";
import SouperFooter from "../components/layout/SouperFooter";
import AddEditItems from "../components/AddEditItem"

function Page() {
    return (
     <>
        <Navbar />
        <AddEditItems />
        <SouperFooter />
     </>
    );
}

export default Page;
