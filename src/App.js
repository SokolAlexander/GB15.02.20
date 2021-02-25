import { TextField } from "@material-ui/core";
import { useState, useCallback } from "react";

export default function Example() {
  const [value, setValue] = useState("");

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <TextField
      style={{ margin: '20px' }}
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
      value={value}
      onChange={handleChange}
    />
  );
}

// // function Child(props) {
// //   const [count, setCount] = useState(0);
// //   const [value, setValue] = useState('');
// //   const span = useRef(null);

// //   const increaseCount = useCallback(() => {
// //     setCount(count + 1);
// //   }, [count]);

// //   const changeValue = useCallback((e) => {
// //     setValue(e.target.value)
// //   }, []);

// //   useEffect(() => {
// //     console.log('childDidMount');
// //   }, []);

// //   const handleClick = () => {
// //     props.onSendMessage(value)
// //   }

// //   return (
// //     <>
// //       <span ref={span}>Hello from child: {count}</span>
// //       <input type="text" value={value} onChange={changeValue} />
// //       <button onClick={handleClick}>+1</button>
// //     </>
// //   );
// // }

// // class ChildClass extends React.Component {
// //   componentDidMount() {
// //     console.log("classchildMount");
// //   }

// //   render() {
// //     console.log("classchildRender");
// //     return null;
// //   }
// // }

// // class Message extends React.Component {
// //   constructor(props) {
// //     super(props);

// //     this.state = {
// //       messages: [{ text: "Message", author: "me" }],
// //       showChild: true,
// //     };

// //     console.log("constructor");
// //   }

// //   componentDidMount() {
// //     console.log("didMount");
// //   }

// //   componentDidUpdate(prevProps, prevState) {
// //     console.log("didUpdate", prevProps, prevState);
// //   }

// //   componentWillUnmount() {
// //     console.log("willUnmount");
// //   }

// //   addMessage = () => {
// //     const newMessages = [...this.state.messages, "newMessage"];
// //     this.setState({ messages: newMessages });
// //   };

// //   toggleChild = () => {
// //     this.setState(({ showChild }) => ({ showChild: !showChild }));
// //   };

// //   renderMessage = (mess, i) => (
// //     <React.Fragment key={i}>
// //       <span>{mess.author}: </span>
// //       <span>{mess.text}</span>
// //     </React.Fragment>
// //   );

// //   handleSendMessage = (text) => {
// //     this.setState({ messages: [...this.state.messages, {text, author: 'me'}] });
// //   };

// //   render() {
// //     console.log("render");
// //     const { showChild, messages } = this.state;

// //     return (
// //       <div className="App">
// //         <header className="App-header">
// //           My First React App (Class component)
// //           <ChildClass />
// //           <h3>Hello, {this.props.name}</h3>
// //           {showChild ? (
// //             <Child
// //               count={this.state.count}
// //               onSendMessage={this.handleSendMessage}
// //             />
// //           ) : null}
// //           {messages.map(this.renderMessage)}
// //           <button onClick={this.addMessage}>addMessage</button>
// //           <button onClick={this.toggleChild}>
// //             {showChild ? "HIDE" : "SHOW"}
// //           </button>
// //         </header>
// //       </div>
// //     );
// //   }
// // }

// // import React, { useState } from 'react';

// function Child(props) {
//   return <span>{props.count}</span>;
// }

// function Button() {
//   const [count, setCount] = useState(0);

//   const prevCount = usePrevious(count);

//   useEffect(() => {
//     if (prevCount !== count) {
//       /* ... */
//     }
//   }, [prevCount, count]);

//   const changeCount = useCallback(() => {
//     setCount(1);
//   }, []);

//   return (
//     <div className="button" onClick={changeCount}>
//       Click!
//     </div>
//   );
// }

export default function MessagesList() {
  const [messages, setMessages] = useState([
    "message 1",
    "message 2",
    "message 3",
  ]);

  return messages.map((message) => <div>{message}</div>);
}

// export function Example(props) {
//   const badIdea = () => {
//     const err = useCallback(() => {
//       // вызовет ошибку
//     }, []);
//   };

//   for (let i = 0; i < 10; i++) {
//     // вызовет ошибку
//     const res = useMemo(() => null, []);
//   }

//   if (!props.show) {
//     return null;
//   }

//   // ошибка!
//   const dont = useRef(null);

//   return <div>Hooks</div>;
// }

// // export class Counter extends React.Component {
// //   constructor(props) {
// //     super(props);

// //     console.log('constructor');
// //   }

// //   componentDidMount() {
// //     console.log('componentDidMount');
// //   }

// //   render() {
// //     console.log('render');

// //     return (
// //       <div>
// //         rendered!
// //         <Child />
// //       </div>
// //     );
// //   }
// // }

// // class Child extends React.Component {
// //   constructor(props) {
// //     super(props);

// //     console.log("child constructor");
// //   }

// //   componentDidMount() {
// //     console.log("child componentDidMount");
// //   }

// //   render() {
// //     console.log("child render");

// //     return <div>rendered!</div>;
// //   }
// // }

// export default Example;

// function Error() {
//   return (
//     <React.Fragment>
//       <span>This is right!</span>
//       <div>Краткая запись фрагмента</div>
//     </React.Fragment>
//   );
// }