import ContactSection from "../components/ContactSection"
import FooterSection from "../components/FooterSection"
import Hero from "../components/Hero"
import ProfileSection from "../components/ProfileSection"
import ProjectSection from "../components/ProjectSection"
import SkillsSection from "../components/SkillsSection"

export default function Home() {
    return (
        <>
            <Hero />
            <ProfileSection />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
            <FooterSection />
        </>
    )
}
