import React from 'react'
import SectionParagraph from './SectionParagraph'
import SectionTitle from './SectionTitle'
import SkillItems from './SkillItems'

export default function SkillsSection() {
    return (
        <section className="bg-skills py-28" id="skills">
            <div className="container mx-auto px-10 2xl:px-0">
                <SectionTitle>Skills</SectionTitle>
                <SectionParagraph className="text-gray-600">List skill yang saya miliki</SectionParagraph>
                <div className="flex -mx-4 mt-16 flex-wrap">
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillItems 
                            name="Javascript"
                            level="Beginner"
                            image="/javascript.svg"
                            imageClassName="h-20 md:h-16 rounded-full"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillItems 
                            name="HTML5"
                            level="Medium"
                            image="/html-5.svg"
                            imageClassName="h-20 md:h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillItems 
                            name="CSS3"
                            level="Medium"
                            image="/css-3.svg"
                            imageClassName="h-20 md:h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillItems 
                            name="Javascript"
                            level="Beginner"
                            image="/bootstrap.svg"
                            imageClassName="h-20 md:h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillItems 
                            name="HTML5"
                            level="Beginner"
                            image="/wordpress.svg"
                            imageClassName="h-20 md:h-16"
                        />
                    </div>
                    <div className="md:w-4/12 w-full px-4 pb-8">
                        <SkillItems 
                            name="CSS3"
                            level="Beginner"
                            image="/json.svg"
                            imageClassName="h-20 md:h-16"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
