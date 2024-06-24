import Link from "next/link";
import Layout from "../components/layout/Layout";

const RetunPolicy = () => {
    return (
        <Layout parent="Home" sub="Pages" subChild="Privacy">
            <div className="page-content pt-50">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 col-lg-12 m-auto">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="single-page pr-30 mb-lg-0 mb-sm-5">
                                        <div className="single-header style-2">
                                            <h2>Return Policy at Afreebmart</h2>
                                            <div className="entry-meta meta-1 meta-3 font-xs mt-15 mb-15">
                                                <span className="post-on has-dot">9 April 2024</span>
                                                <span className="time-reading has-dot">1 mins read</span>
                                            </div>
                                        </div>
                                        <div className="single-content mb-50">
                                            <p>At Afreebmart, we prioritize the safety and satisfaction of our
                                                customers. Due to the nature of the products we offer, which primarily
                                                include perishable food items, we do not have a standard return policy.
                                                However, we understand that there may be instances where customers
                                                receive items that do not meet the required standards of safety and
                                                quality.</p>

                                            <h4>Compensation for Substandard Items</h4>
                                            <p>If you receive a product that is unsafe or unhealthy for consumption or
                                                use, we encourage you to contact us immediately. Our customer support
                                                team will assist you in addressing the issue with the vendor.
                                            </p>

                                            <h4>Steps to Request Compensation:</h4>
                                            <ol>
                                                <li>Contact Us: Reach out to our customer support team at <a href="mailto:support@afreebmart.com">support@afreebmart.com</a> or through our designated support channels.</li>
                                                <li>Provide Details: Please provide detailed information about the substandard item, including photos if possible, and explain the issue you encountered.
                                                </li>
                                                <li>Investigation: Our team will investigate the matter and liaise with the vendor to determine the appropriate compensation.
                                                </li>
                                                <li>Compensation Process: If the vendor acknowledges the issue and agrees to compensate you, they will arrange for the compensation directly.
                                                </li>

                                            </ol>
                                            <h4>Vendor Responsibility</h4>
                                            <p>Vendors on Afreebmart are responsible for ensuring the quality and safety of the products they sell. In cases where items fall below the required standard, vendors are expected to take corrective actions and provide compensation as necessary.
                                            </p>

                                            <h4>Our Commitment</h4>
                                            <p>While we do not offer returns for food items, we are committed to addressing any concerns related to product quality and safety. Your feedback helps us maintain high standards and improve the overall shopping experience for our customers.

                                                Thank you for understanding our policy regarding returns and compensation for substandard items at Afreebmart. We appreciate your trust in us and strive to ensure your satisfaction with every purchase.</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default RetunPolicy;
