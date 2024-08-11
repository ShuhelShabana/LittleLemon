import React from 'react';
import { Element } from 'react-scroll';
import './Legal.css';

const Terms = () => {
    return (
        <Element name='terms'>
            <div className="terms-container">
            <h2>Terms and Conditions</h2>
            <p>
            Welcome to Little Lemon. By using our website, making reservations, or visiting our restaurant, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please do not use our services.
            </p>
            <ol>
                <li>
                    <h4>Reservations</h4>
                    <p>Reservations can be made online or by contacting us directly. We recommend making reservations in advance to secure your preferred time and date. Cancellation policies may apply; please check our cancellation policy at the time of booking.</p>
                </li>
                <li>
                    <h4>Payments</h4>
                    <p>Payments for meals and services at Little Lemon can be made via cash, credit, or debit card. Prices are subject to change without notice. Taxes and tips are not included in the menu prices.</p>
                </li>
                <li>
                    <h4>Menu and Pricing</h4>
                    <p>Menu items and prices are subject to change based on availability and seasonal factors. We strive to ensure that all information on our website and menu is accurate, but we do not guarantee that all menu items will be available at all times.</p>
                </li>
                <li>
                    <h4>User Conduct</h4>
                    <p>You agree to use our website and services for lawful purposes only. Any inappropriate behavior, harassment, or abuse towards our staff or other guests will not be tolerated and may result in removal from the premises.</p>
                </li>
                <li>
                    <h4>Intellectual Property</h4>
                    <p>All content on our website, including text, images, and logos, is the property of Little Lemon and may not be reproduced or used without our prior written consent.</p>
                </li>
                <li>
                    <h4>Limitation of Liability</h4>
                    <p>Little Lemon is not liable for any indirect, incidental, or consequential damages arising from the use of our website or services. We are also not responsible for any loss or damage to personal property.</p>
                </li>
                <li>
                    <h4>Changes to Terms</h4>
                    <p>We may update these terms and conditions from time to time. Any changes will be posted on our website, and continued use of our services constitutes acceptance of the updated terms.</p>
                </li>
                <li>
                    <h4>Contact Information</h4>
                    <p>For any questions or concerns regarding these terms and conditions, please contact us at the given phone or write us a mail at the given email address.</p>
                </li>
            </ol>
        </div>
        </Element>
    );
};

export default Terms;
