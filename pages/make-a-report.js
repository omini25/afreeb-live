import Layout from "../components/layout/Layout";

const MakeAReport = () => {
  return (
      <Layout parent="Home" sub="Pages" subChild="About">
          <div className="container  pt-50">
              <div className="row">
                  <div className="col-xl-10 col-lg-12 m-auto">
                      <section className="row align-items-center mb-50">
                          <div className="col-lg-6">
                              <img src="/assets/imgs/page/about-1.png" alt="" className="border-radius-15 mb-md-3 mb-lg-0 mb-sm-4" />
                          </div>
                          <div className="col-lg-6">
                              <div className="pl-25">
                                  <h2 className="mb-30">Report A Product Or Vendor</h2>
                                  <p className="mb-25">
                                      At Afreebmart, we value your feedback and strive to maintain a high standard of quality for both products and vendors. If you encounter any issues or have concerns regarding a product or vendor, we encourage you to report it to us. Your feedback helps us improve our platform and ensures a better experience for all our users.
                                  </p>
                              </div>
                          </div>
                      </section>
                      <section className="mb-50">
                          <div className="single-content mb-50">
                              <h4>Reporting a Product</h4>
                              <p>If you have received a product that does not meet your expectations or if you believe there is an issue with the product quality, you can report it to us. Please provide detailed information about the product and the nature of the problem. Our team will investigate the issue promptly and take appropriate action to address your concerns.

                                  Additionally, you can report a product via your product review. Simply leave a review for the product and mention the issue you encountered. Our team will review your feedback and take necessary steps to resolve the issue.
                              </p>

                              <h4>Reporting a Vendor</h4>
                              <p>If you have had a negative experience with a vendor, such as delayed deliveries, poor customer service, or any other issues related to vendor performance, please let us know. We take vendor feedback seriously and will review the reported vendor to ensure they meet our standards of service and reliability.
                              </p>

                              <h4>How to Report</h4>
                              <p>To report a product or vendor, please follow these steps:</p>
                              <ol>
                                  <li>Log in to your Afreebmart account.</li>

                                  <li>Navigate to the product or vendor page you wish to report.</li>

                                  <li>Look for the "Report" or "Feedback" option.</li>

                                  <li>Provide detailed information about the issue you encountered.</li>
                                  <li>Submit your report.</li>
                              </ol>
                              <p>
                                  Alternatively, you can contact our customer support team directly at <a href="mailto:support@afreebmart.com">support@afreebmart.com</a> or through our designated support channels. Please include as much information as possible to help us investigate and resolve the issue efficiently.
                              </p>


                          </div>
                      </section>
                      <section className="row align-items-center mb-50">
                          <div className="row mb-50 align-items-center">
                              <div className="">
                                  <h4 className="mb-20 text-muted">Our Commitment</h4>
                                  <p className="mb-30">At Afreebmart, we are committed to ensuring a positive and trustworthy shopping experience for our customers. Your feedback plays a crucial role in maintaining the integrity of our platform and improving our services. We appreciate your cooperation in reporting any product or vendor concerns you may have.

                                      Thank you for helping us uphold our standards of quality and reliability at Afreebmart. We value your feedback and are here to assist you in any way we can.</p>

                              </div>
                          </div>
                      </section>
                  </div>
              </div>
          </div>
      </Layout>
  )
}

export default MakeAReport;