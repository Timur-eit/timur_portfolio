import './style.scss'

function Skills() {
  return (
    <div className='skills'>
      <h2>My hard skills</h2>
      <div className='skills__window'>
        <div className='window__header'>
          <div className='window_control-panel'>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className='window__content'>
          <pre>
            <code>
            <span>&lt;ul&gt;</span><br/>           
                &nbsp;&nbsp;<span>&lt;li&gt;</span>JavaScript<span>&lt;/li&gt;</span><br/>
                &nbsp;&nbsp;<span>&lt;li&gt;</span>TypeScript<span>&lt;/li&gt;</span><br/>
                &nbsp;&nbsp;<span>&lt;li&gt;</span>ReactJS (Hooks)<span>&lt;/li&gt;</span><br/>
                &nbsp;&nbsp;<span>&lt;li&gt;</span>Redux<span>&lt;/li&gt;</span><br/>
                &nbsp;&nbsp;<span>&lt;li&gt;</span>Jest<span>&lt;/li&gt;</span><br/>
                &nbsp;&nbsp;<span>&lt;li&gt;</span>SASS<span>&lt;/li&gt;</span><br/>
                &nbsp;&nbsp;<span>&lt;li&gt;</span>Webpack<span>&lt;/li&gt;</span><br/>              
                &nbsp;&nbsp;<span>&lt;li&gt;</span>macOS<span>&lt;/li&gt;</span><br/>
                &nbsp;&nbsp;<span>&lt;li&gt;</span>Ubuntu<span>&lt;/li&gt;</span><br/>
              <span>&lt;/ul&gt;</span><br/>
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default Skills;
