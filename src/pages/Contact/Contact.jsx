import ContactForm from "../../components/ContactForm/ContactForm";
import Faq from "../../components/Faq/Faq";

const Contact = () => {
  return (
    <section>
      <div className="p-8 bg-dark-5 text-center rounded-2xl mb-10">
        <h3 className="text-[2rem] font-bold text-dark">Contact us</h3>
      </div>
      <ContactForm></ContactForm>
      <Faq></Faq>
    </section>
  );
};

export default Contact;
