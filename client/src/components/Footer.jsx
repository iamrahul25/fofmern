import style from './footer.module.css';
import { useEffect } from "react";
import axios from 'axios';

import { useFOFContext } from "../context/context";


const Footer = ({ websiteData }) => {

    const { currentPath } = useFOFContext();
    const validPaths = ['/', '/login', '/signup', '/allDetails', '/editAllDetails', 'searchFriends'];

    if (validPaths.includes(currentPath)) {

        return (

            <footer>
                <div className={style.div1}>
                    <div className={style.stats_div}>
                        <div>
                            <i className="fa-solid fa-user-large"></i>
                            <strong> {websiteData.totalVisitors}+</strong>
                            <p>Total Website Visits</p>
                        </div>

                        <div>
                            <i className="fa-solid fa-users"></i>
                            <strong> {websiteData.totalUsers}+</strong>
                            <p>Registered Users</p>
                        </div>

                        <div>
                            <i className="fa-solid fa-hand-holding-dollar"></i>
                            <strong> {websiteData.donationAmount}+</strong>
                            <p>Donation Amount($)</p>
                        </div>
                    </div>
                </div>

                <div className={style.div2}>

                    <div className={style.policy_div}>
                        <strong className={style.heading2}>Privacy Policy | Terms & Conditions </strong>
                        <p className={style.para}>Copyright &#169; 2023 FOF - All Right Reserved  </p>
                    </div>

                    <div className={style.contact_div}>
                        <strong className={style.heading2}>Contact Us</strong>
                        <p className={style.para}>Email ID: fof25122@gmail.com</p>
                        <p className={style.para}>Phone No: xxxxx-xxxxx</p>
                    </div>

                    <div className={style.follow_div}>
                        <strong className={style.heading2}>Follow Us</strong>
                        <div className={style.social_icons}>
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-youtube"></i>
                        </div>
                    </div>

                </div>

            </footer>

            // <footer>

            //     <div className={style.div1}>
            //         <div className={style.stats_card}>
            //             <i className="fa-solid fa-user-large"></i>
            //             <h1>{websiteData.totalVisitors}+</h1>
            //             <p>Total Visitors</p>
            //         </div>

            //         <div className={style.stats_card}>
            //             <i className="fa-solid fa-users"></i>
            //             <h1>{websiteData.totalUsers}+</h1>
            //             <p>Registered Users</p>
            //         </div>

            //         <div className={style.stats_card}>
            //             <i className="fa-solid fa-hand-holding-dollar"></i>
            //             <h1>{websiteData.donationAmount}+</h1>
            //             <p>Donation Amount($)</p>
            //         </div>
            //     </div>

            //     <hr className={style.hrline} />

            //     <div className={style.div2}>
            //         <div className={style.follow_contact_us}>

            //             <h1>Follow us</h1>

            //             <div className={style.social_media}>
            //                 <a href=""> <i className="fa-brands fa-instagram"> </i> </a>
            //                 <a href=""> <i className="fa-brands fa-facebook"> </i> </a>
            //                 <a href=""> <i className="fa-brands fa-twitter"> </i> </a>
            //                 <a href=""> <i className="fa-brands fa-linkedin"> </i> </a>
            //                 <a href=""> <i className="fa-solid fa-envelope"> </i> </a>
            //                 <a href=""> <i className="fa-brands fa-youtube"> </i> </a>
            //             </div>
            //         </div>

            //         <div className={style.follow_contact_us}>

            //             <h1>Contact Us</h1>
            //             <p>Phone no: 91+ 9646565565</p>
            //             <p><a href="#">Email: fofwebsite@gmail.com</a></p>

            //         </div>

            //     </div>
            // </footer>
        )
    }

}

export default Footer