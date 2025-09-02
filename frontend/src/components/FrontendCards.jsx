import SkillCard2 from "./SkillCard2";
function FrontendCards() {
  return (
    <div className='mt-6 '>
    <div className="indicator w-full ">
  <span className="indicator-item indicator-center badge badge-xl badge-accent">Frontend</span>
  <div className="flex flex-col  sm:flex-row justify-evenly items-center gap-6  p-6 bg-base-300 shadow-2xl h-auto w-full place-items-center">
    <SkillCard2 img="react.png" title="React.js" progress={70} theme="corporate" />
    <SkillCard2 img="vite.png" title="Vite" progress={70} theme="fantasy" />
    <SkillCard2 img="html5.png" title="Html" progress={70} theme="halloween" />
    <SkillCard2 img="css3.png" title="Css" progress={70} theme="corporate" />
    <SkillCard2 img="bootstrap.png" title="Bootstrap" progress={70} theme="fantasy" />
    <SkillCard2 img="tailwind.png" title="Tailwind Css" progress={70} theme="corporate" />
     <SkillCard2 img="zustand.png" title="Zustand" progress={70} theme="black" />
     <SkillCard2 img="daisy.png" title="Daisy UI" progress={70} theme="halloween" />
  </div>
</div>
</div>
  )
}

export default FrontendCards
