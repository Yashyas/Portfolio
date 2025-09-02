// USAGE
// <SkillCard2 
//   imgSrc="react.png" 
//   title="React.js" 
//   progress={70} 
//   theme="corporate" 
// />

function SkillCard2({img,title,progress,theme = ''}) {
  return (
   <div  className="card bg-base-100 max-w-fit shadow-2xl glass">
  <figure className="px-8 pt-6 ">
    <img
      src={img}
      alt={title}
      className="rounded-full w-24 h-24 border-1" />
  </figure>
  <div className="card-body items-center text-center">
    <h1 className="card-title">{title}</h1>
   {/* For TSX uncomment the commented types below */}
<div
data-theme={theme}
  className="radial-progress bg-primary text-primary-content border-primary border-4"
  style={{ "--value": progress} /* as React.CSSProperties */ } aria-valuenow={progress} role="progressbar">
  {progress}%
</div>
  </div>
</div>
  );
}

export default SkillCard2;
