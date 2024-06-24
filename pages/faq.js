import Layout from "../components/layout/Layout";
import { Card, CardHeader, CardBody, Container } from "reactstrap";

const Faq = () => {
    const faqData = [
        {
            question: "Payment",
            answer: "What payment methods are accepted on Afreebmart?\n" +
                "Afreebmart accepts payments through major credit/debit cards. We do not offer cash on delivery (COD).\n" +
                "\n" +
                "How can I update my payment information?\n" +
                "You can update your payment information by logging into your Afreebmart account, navigating to the \"Payment Methods\" section, and adding/editing your preferred payment method."
        },
        {
            question: "Delivery",
            answer: "What are the delivery options available?\n" +
                "Afreebmart offers standard shipping service. We do not offer in-store pickup options. Delivery times vary based on the shipping method and your location.\n" +
                "\n" +
                "How can I track my order?\n" +
                "Once your order is shipped, you will receive a tracking number via email or SMS. You can use this tracking number to monitor the status of your delivery on our website or through our delivery partner's tracking system."
        },
        {
            question: "Product",
            answer: "Are products on Afreebmart authentic?\n" +
                "Yes, Afreebmart partners with trusted suppliers, vendors and vendors to ensure that all products listed on our platform are authentic and of high quality.\n" +
                "\n" +
                "How can I return or exchange a product?\n" +
                "If you are not satisfied with your purchase, you cannot return your order because they are food items. However, you can be compensated by the vendor after reporting quality issues with your order thorough our complaint channel."
        },
        {
            question: "Sell on Afreebmart",
            answer: "How can I become a seller on Afreebmart?\n" +
                "To sell on Afreebmart, you can apply to become a seller by filling out the seller registration form on our website. Our team will review your application, and upon approval, you can start listing your products for sale.\n" +
                "\n" +
                "What are the seller fees and commissions?\n" +
                "Afreebmart charges a [X%] commission on successful sales, in addition to any applicable transaction fees. Detailed fee structures are available in your seller dashboard."
        },
        {
            question: "Account Management",
            answer: "How can I change my account password?\n" +
                "You can change your account password by logging into your Afreebmart account, going to the \"Account Settings\" section, and selecting the option to change your password.\n" +
                "\n" +
                "Can I delete my Afreebmart account?\n" +
                "Yes, you can request to delete your Afreebmart account by contacting our customer support team. Please note that deleting your account will permanently remove all account data and order history."
        },
        {
            question: "Group Purchase",
            answer: "What is a group purchase on Afreebmart?\n" +
                "A group purchase on Afreebmart allows customers to join together with others to make bulk purchases of a specific product. This enables them to benefit from discounted prices or special offers that are only available for group purchases.\n" +
                "\n" +
                "How does a group purchase work?\n" +
                "To initiate a group purchase, a customer creates a group and invites others to join. Once the required number of participants has joined the group, the purchase is confirmed, and all members receive the discounted price or special offer.\n" +
                "\n" +
                "Can anyone join a group purchase?\n" +
                "Yes, anyone with an Afreebmart account can join a group purchase, provided that they meet the criteria set by the group creator, such as minimum quantity or total order amount.\n" +
                "\n" +
                "How can I create or join a group purchase?\n" +
                "To create a group purchase, log into your Afreebmart account, navigate to the group purchase section, and follow the prompts to create a new group. To join an existing group purchase, simply accept the invitation or request to join from the group creator.\n" +
                "\n" +
                "What are the benefits of participating in a group purchase?\n" +
                "Participating in a group purchase allows customers to enjoy lower prices, bulk discounts, or exclusive deals that may not be available for individual purchases. It also fosters a sense of community and collaboration among buyers.\n" +
                "\n" +
                "Can I customize the terms of a group purchase?\n" +
                "Yes, as the group creator, you can customize the terms of the group purchase, such as setting the minimum quantity, maximum participants, duration of the group, and any special conditions or requirements.\n" +
                "\n" +
                "How are payments handled in a group purchase?\n" +
                "Payments for group purchases are typically collected from all participants once the group purchase is confirmed. Each participant is responsible for their share of the total purchase amount based on the agreed-upon terms."
        }
    ];

    return (
        <Layout parent="Home" sub="Pages" subChild="About">
            <Container className="mt-5 col-xl-10 col-lg-12 m-auto">
                <h1 className="text-center mb-4">Frequently Asked Questions</h1>
                {faqData.map((faq, index) => (
                    <Card key={index}>
                        <CardHeader>{faq.question}</CardHeader>
                        <CardBody style={{fontSize: '18px'}}>
                            {faq.answer.split('\n').map((line, i) => <p key={i}>{line}</p>)}
                        </CardBody>
                    </Card>
                ))}
            </Container>
        </Layout>
    );
}

export default Faq;