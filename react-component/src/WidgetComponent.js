import { useState } from 'react';

const WidgetComponent = ({ truecostValue, onOptInChange }) => {
  const [showModal, setShowModal] = useState(false);
  const modalLabelStyles = {
    fontSize: '13px',
    lineHeight: '15px',
    fontWeight: '500',
    letterSpacing: '0.01em',
    textTransform: 'none'
  };
  const modalFlowStepStyles = {
    display: 'flex',
    alignItems: 'center',
    fontWeight: '400',
    marginTop: '0',
    justifyContent: 'space-between'
  };
  const modalFlowStepPara = {
    fontSize: '12px',
    lineHeight: '14px',
    marginTop: '0',
    maxWidth: '96%',
    color: '#878990'
  };
  return (
    <>
      <div
        id='climes-widget-inner-wrapper'
        className='climes-box'
        style={{
          boxSizing: 'border-box',
          maxWidth: '375px',
          maxHeight: '103px',
          height: 'fit-content',
          width: '100%',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: '2px',
          fontFamily: 'Arial, Helvetica, sans-serif',
          marginTop: '8px',
          marginBottom: '12px'
        }}
      >
        <div
          className='climes-checkbox-wrapper'
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            padding: '8px 4px 8px 8px'
          }}
        >
          <input
            onChange={(e) => onOptInChange(e)}
            id='add-climes-checkbox'
            type='checkbox'
            style={{ width: '19px', height: '19px', marginTop: '6px' }}
          />
          <div
            className='climes-content'
            style={{
              marginLeft: '8px',
              textAlign: 'left',
              letterSpacing: '0',
              marginTop: '-4px',
              color: '#000'
            }}
          >
            <label
              htmlFor='add-climes-checkbox'
              style={{
                marginBottom: '0',
                marginTop: '0',
                fontSize: 'calc(14px + 0.08vw)',
                fontWeight: '400',
                letterSpacing: '0',
                lineHeight: '18px'
              }}
            >
              Make my order carbon neutral for ₹<span id='climes-truecost-value'>{truecostValue}</span>
            </label>
            <p
              style={{
                fontSize: '12px',
                fontWeight: '400',
                marginTop: '2px',
                color: '#878990',
                lineHeight: '14px',
                marginBottom: '6px'
              }}
            >
              Neutralise this product's carbon emissions with{' '}
              <a
                className='climes-link'
                href='${`https://climes.io/?utm_source=${window.location.host}&utm_medium=widget`}'
                target='_blank'
              >
                <svg width={44} height={9} viewBox='0 0 44 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M7.39518 8.24851C7.39895 8.34469 7.33201 8.45783 7.24715 8.50309C6.96428 8.65396 6.63049 8.77088 6.24484 8.85291C5.78565 8.95003 5.30665 8.99906 4.8088 8.99906C3.81215 8.99906 2.95506 8.80105 2.23656 8.40503C1.51807 8.00901 0.966475 7.47156 0.579885 6.79267C0.193295 6.11472 0 5.35003 0 4.49953C0 3.64903 0.198009 2.85794 0.594028 2.18376C0.990047 1.50959 1.52939 0.976847 2.21393 0.586485C2.89754 0.195181 3.67449 0 4.54385 0C5.15956 0 5.70927 0.0641173 6.19298 0.190466C6.59466 0.296071 6.95768 0.44505 7.28203 0.638345C7.38952 0.702462 7.44421 0.848612 7.40178 0.966475L6.81058 2.60901C6.74647 2.78628 6.56354 2.85134 6.40796 2.74479C6.22598 2.62127 6.02986 2.51943 5.81959 2.43929C5.49712 2.31765 5.13505 2.25637 4.73525 2.25637C4.30529 2.25637 3.92153 2.34217 3.58491 2.51283C3.24736 2.6835 2.98146 2.93525 2.78628 3.2681C2.5911 3.6 2.49303 4.01111 2.49303 4.49953C2.49303 4.93892 2.59015 5.3274 2.78628 5.66496C2.98146 6.00252 3.26056 6.26559 3.62169 6.45605C3.98282 6.64652 4.40807 6.74175 4.89649 6.74175C5.42452 6.74175 5.89314 6.67858 6.3033 6.55129C6.53808 6.47868 6.74647 6.39476 6.93033 6.30047C7.13211 6.19581 7.31032 6.30613 7.32069 6.53337L7.39612 8.24851H7.39518Z'
                    fill='#8832BF'
                  />
                  <path
                    d='M8.5752 8.58135V0.418643C8.5752 0.268721 8.69777 0.147087 8.84675 0.147087H10.7363C10.8862 0.147087 11.0079 0.269664 11.0079 0.418643V6.3825C11.0079 6.53242 11.1305 6.65405 11.2794 6.65405H14.1572C14.3194 6.65405 14.441 6.78606 14.4278 6.9473L14.2958 8.60209C14.2845 8.73975 14.1628 8.85196 14.0252 8.85196H8.84675C8.69683 8.85196 8.5752 8.72938 8.5752 8.5804V8.58135Z'
                    fill='#8832BF'
                  />
                  <path
                    d='M17.8917 0.418643V8.58135C17.8917 8.73127 17.7691 8.8529 17.6201 8.8529H15.7305C15.5806 8.8529 15.459 8.73032 15.459 8.58135V0.418643C15.459 0.268721 15.5816 0.147087 15.7305 0.147087H17.6201C17.77 0.147087 17.8917 0.269664 17.8917 0.418643Z'
                    fill='#8832BF'
                  />
                  <path
                    d='M28.8066 0.418647V8.58135C28.8066 8.73128 28.684 8.85291 28.535 8.85291H26.6455C26.4955 8.85291 26.3739 8.73033 26.3739 8.58135V4.33829H26.3004C26.2607 4.55327 26.2098 4.76826 26.1467 4.98324C26.0825 5.19822 25.9977 5.42829 25.8902 5.6725L25.1396 7.44138C25.101 7.53285 24.9888 7.60734 24.8898 7.60734H22.9634C22.8644 7.60734 22.7522 7.53285 22.7136 7.44138L21.963 5.6725C21.8753 5.44809 21.797 5.22274 21.7282 4.99832C21.6594 4.77391 21.6009 4.55422 21.5519 4.33829H21.4783V8.58135C21.4783 8.73128 21.3558 8.85291 21.2068 8.85291H19.42C19.2701 8.85291 19.1484 8.73033 19.1484 8.58135V0.418647C19.1484 0.268726 19.271 0.147092 19.42 0.147092H21.5642C21.6622 0.147092 21.7744 0.220638 21.8131 0.310214L23.4132 3.97245C23.5103 4.18743 23.6112 4.42975 23.714 4.69754C23.8167 4.96627 23.8922 5.19351 23.9412 5.37926H24.0148C24.0638 5.19351 24.1392 4.96627 24.242 4.69754C24.3448 4.42881 24.4447 4.18743 24.5428 3.97245L26.141 0.309271C26.1806 0.219695 26.2919 0.146149 26.3899 0.146149H28.5341C28.684 0.146149 28.8056 0.268726 28.8056 0.417705L28.8066 0.418647Z'
                    fill='#8832BF'
                  />
                  <path
                    d='M36.1065 0.44033L35.9745 2.06589C35.9632 2.20356 35.8415 2.31576 35.7039 2.31576H32.7677C32.6178 2.31576 32.4961 2.43834 32.4961 2.58732V3.14269C32.4961 3.29261 32.6187 3.41424 32.7677 3.41424H35.0382C35.1881 3.41424 35.3098 3.53682 35.3098 3.6858V5.2529C35.3098 5.40282 35.1872 5.52446 35.0382 5.52446H32.7677C32.6178 5.52446 32.4961 5.64703 32.4961 5.79601V6.40984C32.4961 6.55976 32.6187 6.6814 32.7677 6.6814H35.9321C36.082 6.6814 36.2036 6.80398 36.2036 6.95295V8.57852C36.2036 8.72844 36.081 8.85007 35.9321 8.85007H30.3341C30.1841 8.85007 30.0625 8.7275 30.0625 8.57852V0.418643C30.0625 0.268721 30.1851 0.147087 30.3341 0.147087H35.8359C35.9981 0.147087 36.1197 0.279093 36.1065 0.441272V0.44033Z'
                    fill='#8832BF'
                  />
                  <path
                    d='M43.2683 0.686431L42.942 2.29408C42.9071 2.46569 42.744 2.55903 42.58 2.49397C42.4772 2.45343 42.3622 2.41571 42.2339 2.38083C41.9652 2.30728 41.6889 2.24882 41.406 2.2045C41.1222 2.16019 40.8639 2.1385 40.6291 2.1385C40.268 2.1385 39.9917 2.17527 39.8012 2.24882C39.6108 2.32237 39.5155 2.45626 39.5155 2.65144C39.5155 2.79759 39.591 2.91262 39.7428 2.9956C39.8936 3.07857 40.0916 3.15495 40.3368 3.22284C40.581 3.29167 40.8526 3.36427 41.1505 3.44253C41.4485 3.52079 41.7464 3.61886 42.0444 3.73578C42.3423 3.8527 42.6139 4.01205 42.8581 4.21194C43.1023 4.41278 43.3003 4.66359 43.4521 4.96721C43.604 5.26988 43.6794 5.6461 43.6794 6.09586C43.6794 6.98502 43.3522 7.69125 42.6969 8.21362C42.0425 8.73598 41.1137 8.99811 39.9115 8.99811C39.3637 8.99811 38.8442 8.95191 38.3501 8.85856C37.9465 8.78313 37.6033 8.68601 37.3214 8.56721C37.2214 8.52572 37.1479 8.40314 37.1564 8.29471L37.2856 6.622C37.3016 6.41456 37.4713 6.30896 37.6627 6.39287C37.7759 6.4419 37.8994 6.48999 38.0361 6.53525C38.3294 6.63331 38.6471 6.71157 38.9884 6.77003C39.3307 6.82849 39.6626 6.85772 39.9851 6.85772C40.3858 6.85772 40.6866 6.82095 40.8865 6.7474C41.0864 6.67386 41.1873 6.53054 41.1873 6.31461C41.1873 6.16846 41.1119 6.04871 40.9601 5.95537C40.8082 5.86296 40.6102 5.78187 40.366 5.71304C40.1218 5.64515 39.8503 5.57161 39.5523 5.49334C39.2543 5.41508 38.9564 5.31514 38.6584 5.19256C38.3605 5.07092 38.0889 4.9144 37.8447 4.72394C37.6005 4.53347 37.4025 4.28643 37.2507 3.98376C37.0989 3.68109 37.0234 3.30958 37.0234 2.87019C37.0234 2.29408 37.1677 1.79057 37.4562 1.36061C37.7448 0.930642 38.1549 0.595912 38.6877 0.356415C39.2204 0.116918 39.8474 -0.00283051 40.5716 -0.00283051C40.8544 -0.00283051 41.1656 0.0141417 41.5022 0.0480862C41.8398 0.0820307 42.1689 0.13389 42.4913 0.201779C42.7195 0.249867 42.9222 0.308327 43.1014 0.376216C43.2192 0.420532 43.2928 0.560082 43.2683 0.683602V0.686431Z'
                    fill='#8832BF'
                  />
                </svg>
              </a>
            </p>
            <a
              onClick={() => setShowModal((x) => !x)}
              id='how-climes-works'
              style={{
                fontSize: '13px',
                lineHeight: '14px',
                textDecoration: 'underline',
                color: '#8832BF',
                letterSpacing: '0.02em',
                cursor: 'pointer'
              }}
            >
              Find out how it works.
            </a>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div
        className='climes-modal-window'
        id='climes-modal-inner-wrapper'
        style={{
          zIndex: '99999',
          display: showModal ? 'block' : 'none',
          backgroundColor: 'rgba(0,0,0,0.4)',
          fontFamily: 'inherit',
          position: 'fixed',
          backgroundColor: 'rgba(255,255,255,0.25)',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          zIndex: '9999',
          pointerEvents: 'none',
          transition: 'all 0.3s',
          letterSpacing: '0.01em'
        }}
      >
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'black',
            opacity: 0.3
          }}
        />
        <div
          className='climes-modal-wrapper'
          style={{
            width: '380px',
            position: 'relative',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '1.5em',
            background: '#F5F5F5',
            borderRadius: '1rem'
          }}
        >
          <a
            title='Close'
            className='climes-modal-close'
            id='climes-modal-close'
            style={{
              color: '#000000',
              lineHeight: '50px',
              fontSize: '20px',
              position: 'absolute',
              right: '0',
              textAlign: 'center',
              top: '0',
              width: '70px',
              textDecoration: 'none',
              pointerEvents: 'auto',
              cursor: 'pointer'
            }}
            onClick={() => setShowModal(false)}
          >
            ×
          </a>
          <h3
            className='climes-modal-heading'
            style={{
              marginBottom: '1.25rem',
              fontSize: '16px',
              fontWeight: '200',
              fontStyle: 'italic',
              lineHeight: '18px',
              width: '90%',
              marginTop: '0',
              textTransform: 'none',
              textAlign: 'left'
            }}
          >
            {' '}
            You opted for a climate conscious purchase!
          </h3>
          <div
            className='climes-info-wrapper'
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '1rem',
              gap: '12px'
            }}
          >
            <div
              className='climes-infodiv'
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '8px',
                gap: '13px',
                background: '#FFFFFF',
                borderRadius: '4px'
              }}
            >
              <img src='https://ik.imagekit.io/climesimages/shopify/smartivity-co2.svg' />
              <p
                style={{
                  margin: '0',
                  fontSize: '12px',
                  lineHeight: '16px',
                  color: '#878990'
                }}
              >
                This small change can help neutralise {truecostValue / 2}-{truecostValue} kgs of carbon emissions in just one month.
              </p>
              <p></p>
            </div>
            <div
              className='climes-infodiv'
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '8px',
                gap: '13px',
                background: '#FFFFFF',
                borderRadius: '4px'
              }}
            >
              <img src='https://ik.imagekit.io/climesimages/shopify/smartivity-tree.svg' />
              <p
                style={{
                  margin: '0',
                  fontSize: '12px',
                  lineHeight: '16px',
                  color: '#878990'
                }}
              >
                Which is equivalent to 10 seedlings grown for the next 10 years!
              </p>
              <p></p>
            </div>
          </div>
          <div
            className='climes-modal-workflow'
            style={{
              marginTop: '2rem',
              fontFamily: 'inherit',
              paddingBottom: '6rem',
              textAlign: 'left'
            }}
          >
            <p style={{ marginTop: '4px', fontSize: '14px', lineHeight: '14px' }}>How it works?:</p>
            <p style={{ marginTop: '4px', fontSize: '14px', lineHeight: '14px' }}>You will collect climes (credits) to transparently:</p>
            <div
              className='climes-workflow-steps'
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                marginTop: '0.5rem'
              }}
            >
              <div className='climes-workflow-step' style={modalFlowStepStyles}>
                <div>
                  <label style={modalLabelStyles}> 1. Choose</label>
                  <p style={modalFlowStepPara}>
                    Choose a project you love from our portfolio of avoided emissions and removed emission projects.
                  </p>
                </div>
                <img style={{ height: '68px', width: 'auto' }} src='https://ik.imagekit.io/climesimages/shopify/choose.svg' />
              </div>
              <div className='climes-workflow-step' style={modalFlowStepStyles}>
                <div>
                  <label style={modalLabelStyles}> 2. Allocate</label>
                  <p style={modalFlowStepPara}>
                    Your Climes will be added to your wallet - and you can allocate them to a project via the Climes platform.
                  </p>
                </div>
                <img style={{ height: '68px', width: 'auto' }} src='https://ik.imagekit.io/climesimages/shopify/allocate.svg' />
              </div>
              <div className='climes-workflow-step' style={modalFlowStepStyles}>
                <div>
                  <label style={modalLabelStyles}> 3. Get rewarded</label>
                  <p style={modalFlowStepPara}>Get access to exclusive vouchers and rewards for being Climate concious.</p>
                </div>
                <img style={{ height: '68px', width: 'auto' }} src='https://ik.imagekit.io/climesimages/shopify/reward.svg' />
              </div>
            </div>
            <p
              className='climes-optin-text'
              style={{
                fontSize: '12px',
                lineHeight: '14px',
                fontWeight: '400',
                paddingTop: '1rem',
                textAlign: 'center',
                margin: '1rem auto 0.25rem',
                width: '90%'
              }}
            >
              *by opting-in you allow Climes to contact you with updates on your purchase.
            </p>
          </div>
          <div
            className='climes-modal-footer'
            style={{
              backgroundColor: '#00AA44',
              textAlign: 'center',
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              padding: '16px 36px',
              borderBottomLeftRadius: '1rem',
              borderBottomRightRadius: '1rem',
              color: 'white',
              fontSize: 18
            }}
          >
            Your contribution of ₹<span id='climes-modal-value'>{truecostValue}</span> will neutralise your carbon emissions
          </div>
        </div>
      </div>
    </>
  );
};

export default WidgetComponent;
