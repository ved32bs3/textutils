import React, {useState} from 'react';
/*import PropTypes from 'prop-types';*/

export default function About(props) {
  let btnStyle = {
    position: 'relative',
    left: '81%',
    transform: 'translatey(-50px)'
  }

  let accStyle = {
    position: 'relative',
    transform: 'translatey(-45px)'
  }

  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
    border: '2px solid #fff'
  });

  const [buttonText, setButtonText] = useState('Enable dark mode');

  const toggleModeClick = () => {
    if (myStyle.color === 'black') {
      setMyStyle({ color: 'white', backgroundColor: 'black'});
      setButtonText('Enable light mode');
    } else {
      setMyStyle({ color: 'black', backgroundColor: 'white'});
      setButtonText('Enable dark mode');
    }
  }
  
  return (
    <div className="container pynvjgbfgnbbnnbvnnbnvnnnbnvbnvvvjgifyu hhuvh xchgcghfghufdkf dgf rgyબિુીુિબૂ-0" style={myStyle}>
      <h2 className="mx-2">About Us:</h2>
      <button className="btn btn-primary m-3" style={btnStyle} onClick={toggleModeClick}>{buttonText}</button>
      <div className="accordion border-2" style={myStyle} style={accStyle} id="accordionExample">
        <div className="accordion-item border-2">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item border-2">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>

          </div>
        </div>
        <div className="accordion-item border-2">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
