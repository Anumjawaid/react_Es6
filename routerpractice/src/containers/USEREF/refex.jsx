import React, {useRef} from 'react'

function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
      // `current` points to the mounted text input element
      inputEl.current.focus();
    };
    return (
      <>
        <input type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
        <input ref={inputEl} type='text'/>
      </>
    );
  }
export default TextInputWithFocusButton;