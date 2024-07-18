import React from "react";

const Footer = () =>{
    return(
        <footer>
            <div className="foot_container">
                <div className="foot">
                    <div className="footer_info">
                        <img src="/assets/components/footer/m.svg" alt="Logo" />
                        <div className="info_social">
                            <div className="web_desc">Your ultimate guide to the Marvel Cinematic Universe. Discover movie and show reviews, character insights, and the best watch order for a seamless Marvel experience. Dive into the world of superheroes and epic adventures with us!</div>
                            <div className="social_links">
                                <img src="/icons/footer/insta.svg" alt="instagram" />
                                <img src="/icons/footer/github.svg" alt="github" />
                                <img src="/icons/footer/linkedin.svg" alt="linkedin" />
                            </div>
                        </div>
                    </div>
                    <div className="mail_extra">
                        <div className="newsletter">
                            <input type="text" className="email_newsletter" placeholder="Enter your mail"/>
                            <button type="submit">SUBSCRIBE</button>
                        </div>
                        <div className="extra_extra">
                            <div className="innovate extra2">
                                <div className="innovate_tag tag">Innovate</div>
                                <div className="innovate_op op">
                                    <div className="api but_op">API</div>
                                    <div className="keywords but_op">Keywords</div>
                                    <div className="designs but_op">Designs</div>
                                </div>
                            </div>
                            <div className="foot_more extra2">
                                <div className="foot_more_tag tag">More</div>
                                <div className="foot_more_op op">
                                    <div className="api but_op">About us</div>
                                    <div className="keywords but_op">Blog</div>
                                    <div className="designs but_op">FAQ</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="marvel_rights">
                <div className="tag">All character and content rights are owned by Marvel Inc.</div>
            </div>
        </footer>
    );
};

export default Footer;