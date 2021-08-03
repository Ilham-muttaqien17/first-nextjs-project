
export default function ProjectItem({name, desc, image}) {
    return (
        <article className="text-center">
            <img src={image} className="w-full rouded-lg" />
            <h1 className="text-xl font-semibold mt-5 mb-1">{name}</h1>
            <p className="text-lg text-gray-400">{desc}</p>
        </article>
    )
}
