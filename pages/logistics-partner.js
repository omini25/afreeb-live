import Layout from "../components/layout/Layout";

const LogisticsPartner = () => {
    return (
        <>
            <Layout parent="Home" sub="Pages" subChild="About">
                <div className="container  pt-50">
                    <div className="row">
                        <div className="col-xl-10 col-lg-12 m-auto">
                            <section className="row align-items-center mb-50">
                                <div className="col-lg-6">
                                    <img src="assets/landing/logistic-partner.jpg" alt=""
                                         className="border-radius-15 mb-md-3 mb-lg-0 mb-sm-4"/>
                                </div>
                                <div className="col-lg-6">
                                    <div className="pl-25">
                                        <h2 className="mb-30">Become A Logistics Partner With Afreebmart Logistics</h2>
                                        <p className="mb-25">
                                            Are you looking for an opportunity to join a dynamic team and be part of
                                            delivering exceptional service to customers? Become a logistics partner with
                                            Afreebmart Logistics and play a crucial role in ensuring timely and
                                            efficient delivery of agricultural food items to our valued customers.
                                        </p>

                                    </div>
                                </div>
                            </section>
                            <section className="text-center mb-50">
                                <h2 className="title style-3 mb-40">Why Partner With Afreebmart Logistics?</h2>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 mb-24">
                                        <div className="featured-card">
                                            <img src="/assets/imgs/theme/icons/icon-1.svg" alt=""/>
                                            <h4>Flexible Schedule</h4>
                                            <p>Work on your schedule and availability, allowing you to balance work and
                                                personal commitments.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-24">
                                        <div className="featured-card">
                                            <img src="/assets/imgs/theme/icons/icon-2.svg" alt=""/>
                                            <h4>Earn Competitive Income</h4>
                                            <p>Enjoy competitive earnings and incentives based on the number of
                                                deliveries completed.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-24">
                                        <div className="featured-card">
                                            <img src="/assets/imgs/theme/icons/icon-3.svg" alt=""/>
                                            <h4>Join A Growing Network</h4>
                                            <p>Be part of a rapidly growing logistics network, connecting suppliers,
                                                vendors, and consumers seamlessly.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="business-section section-b-space">
                                <div className="container-fluid-lg">
                                    <div className="vendor-title mb-5">
                                        <h5>How to Get Started</h5>
                                    </div>
                                    <div className="business-contain">
                                        <div className="row">
                                            <div className="col-xxl-4">
                                                <div className="business-box">
                                                    <div>
                                                        <div className="business-number">
                                                            <h2>1</h2>
                                                        </div>
                                                        <div className="business-detail">
                                                            <h4>Sign Up</h4>
                                                            <p>
                                                                Visit our website or download the Afreebmart Driver app
                                                                to
                                                                begin your registration process.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4">
                                                <div className="business-box">
                                                    <div>
                                                        <div className="business-number">
                                                            <h2>2</h2>
                                                        </div>
                                                        <div className="business-detail">
                                                            <h4>Provide Information</h4>
                                                            <p>
                                                                Fill out the required information, including your name,
                                                                contact details, email address, and location.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4">
                                                <div className="business-box">
                                                    <div>
                                                        <div className="business-number">
                                                            <h2>3</h2>
                                                        </div>
                                                        <div className="business-detail">
                                                            <h4>Upload Documents</h4>
                                                            <p>
                                                                Upload necessary documents such as your driver's
                                                                license,
                                                                insurance information, vehicle registration (if
                                                                applicable),
                                                                and any other required documents.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-4">
                                                <div className="business-box">
                                                    <div>
                                                        <div className="business-number">
                                                            <h2>4</h2>
                                                        </div>
                                                        <div className="business-detail">
                                                            <h4>Start Delivering</h4>
                                                            <p>
                                                                Log in to the Afreebmart Driver app and start accepting
                                                                delivery orders to begin providing top-notch delivery
                                                                services.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="row align-items-center mb-50 mt-50">
                                <div className="row mb-50 align-items-center">
                                    <div className="">
                                        <h4 className="mb-20 text-muted">Join Us</h4>
                                        <p>
                                            Ready to embark on an exciting journey as a logistics partner with
                                            Afreebmart Logistics? Sign up now and be part of delivering freshness
                                            and quality to our customers while enjoying the benefits of
                                            flexibility and competitive earnings.
                                            <br/>
                                            For any inquiries or assistance during the registration process,
                                            please contact us at{" "}
                                            <a href="mailto:support@afreebmart.com">
                                                info@logistics.afreebmart.com
                                            </a>{" "}
                                            or through our app's support feature.
                                        </p>

                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

            </Layout>
        </>

    )
}

export default LogisticsPartner