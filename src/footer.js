import React from "react";
import "./footer.css"
function Footer() {
    return (<div className="footer">&copy; {(new Date()).getFullYear()}</div>);
}
export default Footer;