import Link from "next/link";
import Layout from "../components/layout/Layout";

function Privacy() {
    return (
        <>
            <Layout parent="Home" sub="Pages" subChild="Privacy">
                <div className="page-content pt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 col-lg-12 m-auto">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="single-page pr-30 mb-lg-0 mb-sm-5">
                                            <div className="single-header style-2">
                                                <h2>Privacy Notice For Afreebmart</h2>
                                                <div className="entry-meta meta-1 meta-3 font-xs mt-15 mb-15">
                                                    <span className="post-on has-dot">9 April 2024</span>
                                                    <span className="time-reading has-dot">5 mins read</span>
                                                </div>
                                            </div>
                                            <div className="single-content mb-50">
                                                <p>At Afreebmart, we are committed to protecting your privacy and
                                                    ensuring the security of your personal information. This Privacy
                                                    Notice outlines how we collect, use, disclose, and protect your data
                                                    specifically within the operational area of Wisconsin, where we
                                                    connect suppliers, vendors, and consumers directly in the
                                                    agricultural food industry.</p>

                                                <h4>Information We Collect</h4>
                                                <ol>
                                                    <li>Personal Information: We collect personal information such as
                                                        your name, contact details, billing address, and payment
                                                        information when you create an account or place an order.
                                                    </li>
                                                    <li>Transaction Data: We gather information related to your
                                                        purchases, including order details, transaction history, and
                                                        delivery preferences.
                                                    </li>
                                                    <li>Location Information: With your consent, we may collect location
                                                        data to provide localized services, such as delivery options and
                                                        promotions specific to your area.
                                                    </li>
                                                    <li>Usage and Analytics: We collect data on how you interact with
                                                        our platform, including website visits, app usage, clicks, and
                                                        preferences, to improve our services and enhance user
                                                        experience.
                                                    </li>
                                                </ol>

                                                <h4>How We Use Your Information</h4>
                                                <ol>
                                                    <li>Order Processing: We use your personal and transaction data to
                                                        process orders, manage deliveries, and provide customer support
                                                        related to agricultural food items.
                                                    </li>
                                                    <li>Account Management: Your information helps us manage and secure
                                                        your account, verify identity, and prevent unauthorized access.
                                                    </li>
                                                    <li>Personalization: We personalize your experience by recommending
                                                        products based on your preferences, browsing history, and
                                                        location within Wisconsin.
                                                    </li>
                                                    <li>Communication: We may use your contact information to send order
                                                        updates, promotional offers, newsletters, and important
                                                        notifications relevant to your account and location.
                                                    </li>
                                                    <li>Analytics and Improvements: We analyze usage patterns, feedback,
                                                        and market trends to enhance our services, optimize product
                                                        offerings, and tailor marketing strategies for the Wisconsin
                                                        market.
                                                    </li>
                                                </ol>

                                                <h4>Data Security</h4>
                                                <p>We employ industry-standard security measures to protect your data
                                                    from unauthorized access, misuse, loss, or disclosure. This includes
                                                    encryption, access controls, secure payment processing, and regular
                                                    security audits.</p>

                                                <h4>Your Rights and Choices</h4>
                                                <ol>
                                                    <li>Access and Updates: You have the right to access, review, and
                                                        update your personal information through your account settings
                                                        or by contacting us directly.
                                                    </li>
                                                    <li>Consent Withdrawal: You may withdraw consent for certain data
                                                        processing activities, such as marketing communications or
                                                        location tracking, at any time.
                                                    </li>
                                                    <li>Data Deletion: You can request the deletion of your personal
                                                        data, subject to legal requirements and contractual obligations.
                                                    </li>
                                                    <li>Opt-Out: You have the option to opt-out of receiving promotional
                                                        communications or marketing materials from Afreebmart.
                                                    </li>
                                                </ol>

                                                <h4>Contact Us</h4>
                                                <p>If you have any questions, concerns, or requests regarding your
                                                    privacy or this Privacy Notice specific to our operations in
                                                    Wisconsin, please contact our Privacy Team at <a
                                                        href="mailto:support@afreebmart.com">support@afreebmart.com</a>.

                                                    <br/>We are dedicated to addressing your inquiries and ensuring
                                                    transparency in our data practices.
                                                </p>

                                                <h4>Changes to Privacy Notice</h4>
                                                <p>We reserve the right to update or modify this Privacy Notice as necessary to reflect changes in our data processing practices or legal requirements. We will notify you of any material changes through our platform or via email. Thank you for choosing Afreebmart. We appreciate your trust and value your privacy as we work together to support local suppliers, vendors, and consumers in Wisconsin.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Privacy;
