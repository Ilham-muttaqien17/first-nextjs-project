import SectionParagraph from "./SectionParagraph"
import SectionTitle from "./SectionTitle"

export default function ProfileSection() {
    return (
        <section className="py-24" id="profile">
            <div className="container mx-auto px-10 2xl:px-0">
                <SectionTitle>Profile</SectionTitle>
                <SectionParagraph className="text-gray-600">Kenali saya lebih dekat</SectionParagraph>

                <div className="flex items-center xl:w-10/12 md:items-start flex-wrap mx-auto mt-10">
                    <div className="md:w-4/12 w-full px-10 mb-10 md:mb-0">
                        <img className="w-full" src="/profile.png" alt="" />
                    </div>
                    <div className="md:w-8/12 w-full px-10">
                        <p className="text-lg leading-relaxed">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. </p>
                        <p className="text-lg mt-5 leading-relaxed">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
