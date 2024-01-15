import {socialLinks} from '../constants'

const Socials = () => {
    const Socials = socialLinks.map((link) => (
        <a href={link.link} key={link.name} className='' target='_blank' rel='noreferrer'>
            <span className='text-base'>{link.name}</span>
            {/* <img src={link.iconUrl} alt={link.name} /> */}
            </a>)
    )
  return (
    <div className="flex flex-col lg:flex-1 lg:flex-row items-center justify-center w-full flex-wrap gap-4"> {Socials} </div>
  )
}

export default Socials