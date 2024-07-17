const Footer = () => {
    return (
        <footer className="flex flex-col justify-center gap-4 pl-8 border-t w-full h-[130px] md:mx-24">
            <ul className="text-sm grid gap-1">
                
                <li>
                    <a href="https://dayanandgawade.thedpl.eu.org/" target="_blank" className="hover:underline">Hire Me</a>
                </li>
            </ul>
            <p className="text-xs">©{new Date().getFullYear()}. All rights reserved</p>
        </footer>
    )
};

export default Footer;