import SkillCard2 from "./SkillCard2";
function BackendCards() {
  return (
     <div className='mt-6 '>
    <div className="indicator w-full ">
  <span className="indicator-item indicator-center badge badge-xl badge-accent">Backend</span>
  <div className="flex flex-col sm:flex-row justify-evenly items-center gap-6  p-6 bg-base-300 shadow-2xl h-auto w-full place-items-center">
    <SkillCard2 img="js.png" title="JavaScript" progress={70} theme="bumblebee" />
    <SkillCard2 img="node.png" title="Node.js" progress={70} theme="emerald" />
    <SkillCard2 img="express.png" title="Express" progress={70} theme="black" />
    <SkillCard2 img="mongo.png" title="MongoDB" progress={70} theme="emerald" />
    <SkillCard2 img="Postman.png" title="Postman" progress={70} theme="halloween" />
    <SkillCard2 img="mongoose.png" title="Mongoose" progress={70} theme="coffee" />
    <SkillCard2 img="jwt.png" title="JWT" progress={70} theme="cupcake" />
  </div>
</div>
</div>
  )
}

export default BackendCards
