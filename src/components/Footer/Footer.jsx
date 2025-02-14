import { useEffect } from "react";
import { Collapse, Dropdown, initTWE } from "tw-elements";
import logo from '../../assets/logo.png';




function Footer() {
    useEffect(() => {
        initTWE({ Collapse, Dropdown });
    }, []);

 




    return (
        <>
            <footer
                class="flex flex-col items-center  ">
                <div class="w-full bg-black/5 p-4 text-center">
                    © 2023 Copyright:
                    <a href="https://tw-elements.com/">TW Elements</a>
                </div>
            </footer>
        </>
    );
}

export default Footer;