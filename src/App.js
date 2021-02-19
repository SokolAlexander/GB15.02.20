import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import './App.scss';

function Child(props) {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');
  const span = useRef(null);

  const increaseCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const changeValue = useCallback((e) => {
    setValue(e.target.value)
  }, []);

  useEffect(() => {
    console.log('childDidMount');
  }, []);

  useEffect(() => {
    console.log("countDidUpdate");
  }, [count]);

  useEffect(() => {
    console.log("childDidUpdate");
  });

  const handleClick = () => {
    props.onSendMessage(value)
  }

  return (
    <>
      <span ref={span}>Hello from child: {count}</span>
      <input type="text" value={value} onChange={changeValue} />
      <button onClick={handleClick}>+1</button>
    </>
  );
}

// function App(props) {
//   return (
//     <div className="App">
//       <header className="App-header">
//         My First React App
//         <h3>Hello, {props.name}</h3>
//         <Child count={0} />
//       </header>
//     </div>
//   );
// }

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // count: 0,
      messages: [{ text: "Message", author: "me" }],
      showChild: true,
    };

    console.log("constructor");
  }

  componentDidMount() {
    console.log("didMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("didUpdate", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("willUnmount");
  }

  addMessage = () => {
    const newMessages = [...this.state.messages, "newMessage"];
    this.setState({ messages: newMessages });
  };

  toggleChild = () => {
    this.setState(({ showChild }) => ({ showChild: !showChild }));
  };

  renderMessage = (mess, i) => (
    <React.Fragment key={i}>
      <span>{mess.author}: </span>
      <span>{mess.text}</span>
    </React.Fragment>
  );

  handleSendMessage = (text) => {
    this.setState({ messages: [...this.state.messages, {text, author: 'me'}] });
  };

  render() {
    console.log("render");
    const { showChild, messages } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          My First React App (Class component)
          <h3>Hello, {this.props.name}</h3>
          {showChild ? (
            <Child
              count={this.state.count}
              onSendMessage={this.handleSendMessage}
            />
          ) : null}
          {messages.map(this.renderMessage)}
          <button onClick={this.addMessage}>addMessage</button>
          <button onClick={this.toggleChild}>
            {showChild ? "HIDE" : "SHOW"}
          </button>
        </header>
      </div>
    );
  }
}

export default Message;
