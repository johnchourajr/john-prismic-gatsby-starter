import React from 'react';
import ReactModal from 'react-modal';
import styled, { createGlobalStyle } from 'styled-components';
import { hoverChange } from '../../functions/util';

// Components
import X from '../svg/x';

const MainModal = (props) => {
  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background:
        'linear-gradient(to bottom, rgba(0,0,0, .95) 0%, rgba(0,0,0, .8) 100%)'
    },
    content: {
      position: 'absolute',
      top: 'unset',
      left: 'unset',
      right: 'unset',
      bottom: 'unset',
      border: 'none',
      width: 'fit-content',
      height: '50.625vw',
      background: '#fff',
      overflow: 'hidden',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '0px',
      outline: 'none',
      margin: '2vw',
      padding: '0px'
    }
  };

  return (
    <>
      <ModalGlobals />
      <ReactModal
        isOpen={props.modalVisible}
        contentLabel="Minimal Modal Example"
        onRequestClose={(e) => props.handleModal(false)}
        shouldCloseOnOverlayClick={true}
        closeTimeoutMS={500}
        style={styles}
      >
        <CloseButton
          aria-label="Close"
          onClick={(e) => props.handleModal(false)}
          onMouseEnter={() => hoverChange('link')}
          onMouseLeave={() => hoverChange(null)}
          className="nav--banner--close nav--banner--close-float"
        >
          <X fill="#ffffff" />
        </CloseButton>
        {props.children}
      </ReactModal>
    </>
  );
};

const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 1vw;
  right: 1vw;
  z-index: 500;
  background: transparent;
  padding: 0.25rem;
  outline: none !important;
  border: none !important;
  mix-blend-mode: difference;
  transition: transform ${(props) => props.theme.animation.duration[300].css}
      ${(props) => props.theme.animation.timingFunction.css},
    opacity ${(props) => props.theme.animation.duration[100].css}
      ${(props) => props.theme.animation.timingFunction.css} !important;

  &:hover {
    transform: scale(1.2);
  }

  path {
    fill: #ffffff;
  }
`;

const ModalGlobals = createGlobalStyle`
  .ReactModal__Overlay {
    opacity: 0;
    will-change: opacity;
    transition: opacity ${(props) => props.theme.animation.duration[100].css}
        ${(props) => props.theme.animation.timingFunction.css};

  }

  .ReactModal__Content {
    transition: transform ${(props) => props.theme.animation.duration[100].css}
        ${(props) => props.theme.animation.timingFunction.css};
    transform: translateY(50%);
    will-change: transform;
  }

  .ReactModal__Overlay--after-open{
    opacity: 1;

    .ReactModal__Content {
      transform: none;
    }
  }

  .ReactModal__Overlay--before-close{
    opacity: 0;

    .ReactModal__Content {
      transform: translateY(50%);
    }
  }
`;

ReactModal.setAppElement('#___gatsby');

export default MainModal;
