import ProjectItem from "./ProjectItem";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function ProjectSection() {
    return (
        <section className="py-28" id="projects">
            <div className="container mx-auto px-10 2xl:px-0">
                <SectionTitle>Projects</SectionTitle>
                <SectionParagraph className="text-gray-600">Beberapa project yang dibuat</SectionParagraph>
                <div className="flex -mx-4 mt-20 flex-wrap">
                    <div className="md:w-6/12 w-full px-4 pb-8">
                        <ProjectItem 
                            name="Project 1"
                            desc="Explorasi Landing Page"
                            image="/project1.png"
                        />
                    </div>
                    <div className="md:w-6/12 w-full px-4 pb-8">
                        <ProjectItem 
                            name="Project 2"
                            desc="Explorasi Resource Page"
                            image="/project2.png"
                        />
                    </div>
                    <div className="md:w-6/12 w-full px-4 pb-8">
                        <ProjectItem 
                            name="Project 2"
                            desc="Explorasi Resource Page"
                            image="/project2.png"
                        />
                    </div>
                    <div className="md:w-6/12 w-full px-4 pb-8">
                        <ProjectItem 
                            name="Project 1"
                            desc="Explorasi Landing Page"
                            image="/project1.png"
                        />
                    </div>
                </div>
                
            </div>
        </section>
    )
}
