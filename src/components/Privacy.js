import React from 'react';
import { Element } from 'react-scroll';
import './Legal.css';

const Privacy = () => {
    return (
        <Element name='privacy'>
            <div className="privacy-policy-container">
            <h2>Privacy Policy</h2>
            <p>
            At Little Lemon, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or interact with us.
            </p>
            <ol>
                <li>
                    <h4>Information We Collect</h4>
                    <p>We may collect the following types of information:</p>
                    <ul>
                        <li>
                            <h5>Personal Identification Information:</h5>
                            <p>Name, email address, phone number, and any other information you provide when making a reservation or contacting us.</p>
                        </li>
                        <li>
                            <h5>Payment Information:</h5>
                            <p>Credit card details used for online reservations or orders.</p>
                        </li>
                        <li>
                            <h5>Usage Data:</h5>
                            <p>Information about your visit to our website, including IP address, browser type, and pages visited.</p>
                        </li>
                    </ul>
                </li>
                <li>
                    <h4>How We Use Your Information</h4>
                    <p>We use your personal information to:</p>
                    <ul>
                        <li>
                            <p>Process reservations and orders.</p>
                        </li>
                        <li>
                            <p>Communicate with you regarding your reservations or inquiries.</p>
                        </li>
                        <li>
                            <p>Improve our services and website based on your feedback and usage data.</p>
                        </li>
                        <li>
                            <p>Send promotional offers or updates, if you have opted-in to receive them.</p>
                        </li>
                    </ul>
                </li>
                <li>
                    <h4>Data Sharing and Disclosure</h4>
                    <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted third parties who assist us in operating our website, processing payments, or conducting business, provided they agree to keep your information confidential.</p>
                </li>
                <li>
                    <h4>Data Security</h4>
                    <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure.</p>
                </li>
                <li>
                    <h4>Cookies</h4>
                    <p>Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your device that help us remember your preferences and improve our services. You can control cookie settings through your browser.</p>
                </li>
                <li>
                    <h4>Your Rights</h4>
                    <p>You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at contact@littlelemon.com.</p>
                </li>
                <li>
                    <h4>Changes to Privacy Policy</h4>
                    <p>We may update this Privacy Policy from time to time. Any changes will be posted on our website, and continued use of our services constitutes acceptance of the updated policy.</p>
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

export default Privacy;
