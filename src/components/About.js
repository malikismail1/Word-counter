import React from 'react';

export default function About(props) {

  const myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#0e3c70ff' : 'white',
    border: '1px solid',
    borderColor: props.mode === 'dark' ? '#fff' : '#000'
  };

  return (
    <>
        <h1 className="my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>About Us</h1>
          <div className="accordion" id="accordionExample">
          <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" style={{...myStyle, fontSize:'12px' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <strong>Analyze your text</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body"style={{...myStyle, fontSize:'12px',fontWeight:'300' }}>
                <strong>This feature helps you examine your text by counting words, characters, and checking readability. It ensures your writing is clear and well-structured.</strong>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" style={{...myStyle, fontSize:'12px' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={{...myStyle, fontSize:'12px',fontWeight:'300' }}>
                <strong>TextUtils is completely free. You can use all features without any cost — no sign-up or subscription needed.</strong>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" style={{...myStyle, fontSize:'12px',}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatibility</strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={{...myStyle, fontSize:'12px',fontWeight:'300' }}>
                <strong>This tool works directly in your browser. No installation is required — just open the website and start editing your text anytime, anywhere.</strong>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}