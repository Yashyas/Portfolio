import SkillCard2 from "./SkillCard2";
function FrontendCards() {
  return (
    <div className='mt-4 '>
    <div className="indicator w-full ">
  <span className="indicator-item indicator-center badge badge-xl badge-accent">Frontend</span>
  <div className="flex flex-col sm:flex-row justify-evenly items-center gap-6  p-6 bg-secondary  h-auto w-full place-items-center">
    <SkillCard2 img="react.png" title="React.js" progress={70} theme="emerald" />
    <SkillCard2 img="react.png" title="React.js" progress={70} theme="emerald" />
    <SkillCard2 img="react.png" title="React.js" progress={70} theme="emerald" />
    <SkillCard2 img="react.png" title="React.js" progress={70} theme="emerald" />
    <SkillCard2 img="react.png" title="React.js" progress={70} theme="emerald" />
    <SkillCard2 img="react.png" title="React.js" progress={70} theme="emerald" />
  </div>
</div>
</div>
  )
}

export default FrontendCards
