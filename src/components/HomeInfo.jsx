import { Link } from "react-router-dom"
import arrow from "../assets/icons/arrow.svg"


const InfoBox = ({text, link, btnText}) => (
    <div className="info-box">
       <p className="font-medium sm:text-ml text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} alt="arrow" />
        </Link>
    </div>
)

const renderContent = {
    1: (<h1 className="sm:text-ml sm:leading-snug text-center neo-brutalism-blue py-2 px-4 text-white mx-5">Hi, I am <span className="font-bold">Robert Medina</span> 👋<br/>
    A Front-End Developer. </h1>),
    2: (<InfoBox text="Worked with many companies and picked up many skills along the way" link="/about" btnText="Learn more"/>),
    3: (<h1>3</h1>),
    4: (<h1>4</h1>),
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null
}

export default HomeInfo