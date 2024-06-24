import Layout from "../components/layout/Layout";

const Careers = () => {
    return (
        <Layout parent="Home" sub="Pages" subChild="About">
            <div className="container  pt-50">
                <div className="row">
                    <div className="col-xl-10 col-lg-12 m-auto">
                        <section className="row align-items-center mb-50">
                            <div className="col-lg-6">
                                <img src="assets/landing/carer.jpg" alt=""
                                     className="border-radius-15 mb-md-3 mb-lg-0 mb-sm-4"/>
                            </div>
                            <div className="col-lg-6">
                                <div className="pl-25">
                                    <h2 className="mb-30">Join Afreebmart: Grow With Us</h2>
                                    <p className="mb-25">
                                        Welcome to Afreebmart Careers, where we believe in cultivating talent and fostering a culture of growth and innovation. As a leading player in revolutionizing the agricultural food industry, we're on a mission to connect suppliers, vendors, and consumers directly, paving the way for a fresher and more sustainable future. If you're passionate about making a meaningful impact and being part of a collaborative team, explore our current opportunities below and embark on a rewarding career journey with Afreebmart.
                                    </p>

                                </div>
                            </div>
                        </section>

                        <section className="business-section section-b-space">
                            <div className="container-fluid-lg">
                                <div className="vendor-title mb-5">
                                    <h5>Why Choose Afreebmart?</h5>
                                </div>
                                <div className="business-contain">
                                    <div className="row">
                                        <div className="col-xxl-4">
                                            <div className="business-box">
                                                <div>
                                                    <div className="business-detail">
                                                        <h4>Innovative Environment</h4>
                                                        <p>We thrive on creativity and encourage out-of-the-box
                                                            thinking. Your ideas and contributions are valued and can
                                                            shape the future of our industry.</p>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4">
                                        <div className="business-box">
                                                <div>
                                                    <div className="business-detail">
                                                        <h4>Career Growth</h4>
                                                        <p>Afreebmart is committed to your professional development. We
                                                            offer continuous learning opportunities, mentorship
                                                            programs, and career advancement paths.</p>


                                                    </div>
                                                </div>
                                        </div>
                                        </div>
                                        <div className="col-xxl-4">
                                        <div className="business-box">
                                                <div>
                                                    <div className="business-number">
                                                    </div>
                                                    <div className="business-detail">
                                                        <h4>Diverse and Inclusive Culture</h4>
                                                        <p>We embrace diversity in all its forms and foster an inclusive
                                                            environment where everyone feels respected, valued, and
                                                            empowered.</p>

                                                    </div>
                                                </div>
                                        </div>
                                        </div>
                                        <div className="col-xxl-4">
                                        <div className="business-box">
                                                <div>
                                                    <div className="business-detail">
                                                        <h4>Impactful Work</h4>
                                                        <p>Join us in making a difference. Your work at Afreebmart
                                                            directly impacts vendors, suppliers, consumers, and the
                                                            environment, contributing to a more sustainable and
                                                            efficient food ecosystem.</p>

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
                                    <h4 className="mb-20 text-muted">How To Apply</h4>
                                    <p>To apply for a position or express your interest in working with us,
                                        please send your resume and a cover letter highlighting your relevant
                                        experience, skills, and enthusiasm for joining Afreebmart to <a
                                            href="mailto:support@afreebmart.com">info@afreebmart.com.</a> Be sure to specify the
                                        position you're applying for in the subject line of your email.
                                    </p>

                                </div>
                            </div>
                        </section>

                        <section className="row align-items-center mb-50 mt-50">
                            <div className="row mb-50 align-items-center">
                                <div className="">
                                    <h4 className="mb-20 text-muted">Join Us in Transforming the Future of Food</h4>
                                    <p>At Afreebmart, we're not just offering jobs; we're inviting you to be part of a
                                        mission-driven organization that is reshaping the way we think about food and
                                        sustainability. Join us in creating a brighter and fresher future for
                                        generations to come. We look forward to welcoming you to the Afreebmart
                                        family!</p>


                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Careers;