import React from 'react'

const Button = (props) => {

    const {
    children,            // the text or elements shown inside the button
    variant = "primary", // default style
    size = "medium",     // default size
    disabled = false,    // default not disabled
    onClick              // function to call when clicked
  } = props;

//   console.log(children)

  const baseStyle = {
    border: "1px solid transparent",
    padding: "8px 14px",
    fontSize: 16,
    borderRadius: 6,
    cursor: "pointer",
    display: "inline-block",
    userSelect: "none"
  }

  const variantStyles = {
    primary: {
      backgroundColor: "#2563eb", // blue
      color: "white",
      borderColor: "#2563eb"
    },
    outline: {
      backgroundColor: "transparent",
      color: "#2563eb",
      borderColor: "#2563eb"
    }
  };

    const sizeStyles = {
    small: { padding: "6px 10px", fontSize: 14 },
    medium: { padding: "8px 14px", fontSize: 16 }
  };

  const disabledStyle = disabled
    ? { opacity: 0.5, cursor: "not-allowed" }
    : {};


    const style = {
    ...baseStyle,
    ...(variantStyles[variant] || variantStyles.primary),
    ...(sizeStyles[size] || sizeStyles.medium),
    ...disabledStyle
  };

  console.log(style)

  function handleClick(e) {
    if (disabled) return;      // ignore clicks when disabled
    if (typeof onClick === "function") {
      onClick(e);              // call the parent's function
    }
  }

  return (
    <button style={style} onClick={handleClick} disabled={disabled}>
        {children}
    </button>
  )
}

export default Button