import classNames from "classnames";

export default function SkillItems({name, level, image, imageClassName}) {
    return (
        <div className="bg-white shadow-skills rounded-lg p-5 px-10 md:px-6 flex items-center">
            <img className={classNames("mr-6", imageClassName)} src={image} alt="" />
            <div>
                <h4 className="lg:text-2xl md:text-lg font-semibold">{name}</h4>
                <p className="lg:text-lg md:text-sm font-semibold text-gray-400 mt-2">{level}</p>
            </div>
        </div>
    )
}
