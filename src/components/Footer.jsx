const Footer = () => {
    return (
        <div className="w-full bg-white-800 text-black py-4 text-center">
            <hr className="my-4 border-t-2 border-gray-600" />
            {/* Copyright Text */}
            <p>@Copyright All rights reserved.</p>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-6 mt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="facebook.png" alt="Facebook" className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src="linkedin.png" alt="LinkedIn" className="w-6 h-6" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="twitter.png" alt="Twitter" className="w-6 h-6" />
                </a>
            </div>
        </div>
    );
};

export default Footer;
