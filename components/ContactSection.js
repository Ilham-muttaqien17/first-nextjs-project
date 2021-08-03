import SectionTitle from "./SectionTitle"
import SectionParagraph from "./SectionParagraph"
import ContactItem from "./ContactItem"
import Field from "./Field"
import Button from "./Button"

export default function ContactSection() {
    
    return (
        <div className="bg-contact" id="contact">
            <section className="container mx-auto px-10 2xl:px-0">
                <div className="lg:p-14 md:p-8 p-10 flex flex-wrap">
                    <div className="md:w-6/12 w-full">
                        <SectionTitle left className="text-white">Contact</SectionTitle>
                        <SectionParagraph left className="text-white">Hubungi saya sebagai berikut</SectionParagraph>
                        <ContactItem 
                            label="Mail"
                            value="imuttaqien17@gmail.com"
                            icon="/mail.svg"
                        />
                        <ContactItem 
                            label="Facebook"
                            value="ilham.muttaqien.52"
                            icon="/facebook.svg"
                        />
                        <ContactItem 
                            label="Phone"
                            value="08221133114411"
                            icon="/phone.svg"
                        />
                    </div>
                    <div className="md:w-6/12 w-full">
                        <form className="py-16 md:py-8 md:px-10 px-5" action="">
                            <div className="flex flex-wrap -mx-4">
                                <div className="lg:w-6/12 w-full px-4">
                                    <Field 
                                        label="Name"
                                        name="name"
                                        type="text"
                                    />
                                </div>
                                <div className="lg:w-6/12 w-full px-4">
                                    <Field 
                                        label="Email"
                                        name="email"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <Field 
                                label="Subject"
                                name="subject"
                                type="text"
                            />
                            <Field 
                                label="Message"
                                name="message"
                                type="textarea"
                                className="h-36"
                            />
                            <div className="text-right">
                                <Button variant="black">Send</Button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </section>
        </div>
        
        
    )
}
