import { heroSectionData } from "../../assets/assets"

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[540px] mb-10 rounded-3xl flex items-center">
      <img src={heroSectionData.hero_image} alt="Hero" />
    </section>
  )
}

export default Hero
