import { WhatWeDoContainer, WhatWeDoElement } from "./WhatweDo.styled"
import RaiseHandImage from '../../assets/images/icons8-woman-raising-hand-48.png';
import StrongImage from '../../assets/images/icons8-muscle-48.png';

function WhatweDo() {
  return (
    <WhatWeDoContainer>
      <WhatWeDoElement>
          <div className='title'>
            <p>What we design women-only group trips as muti-dimensional as you</p>
          </div>

        <div className="what_we_do">
        <div className="connect">
          <h1>Connect</h1>
          <p>
            Our trips bring together awesome women.
             <span>(that you <img src={RaiseHandImage} alt="Image Description" />!)
             </span>
          </p>
        </div>


        <div className="experience">
          <h1>Experience</h1>
          <p>We curate uplifting experiencess you can't find anywhere else</p>
        </div>



          <div className="celebrate">
          <h1>Celebrate</h1>
          <p>
            Our trips bring together awesome women.
             <span>(that you <img src={StrongImage} alt="upness" />!)
             </span>
          </p>
        </div>


      </div>
    </WhatWeDoElement>
      </WhatWeDoContainer>
  )
}

export default WhatweDo