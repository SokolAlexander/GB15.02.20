
function Button(props) {
  return (
    <button className={props.className}>
      {props.label}
    </button>
  );
}

const withClassName = (Component) => {
  return (...props) => <Component {...props} className="button-green" />;
}

<Button label='label' className="button-yellow" />

const GreenButton = withClassName(Button);

<GreenButton label="label" />