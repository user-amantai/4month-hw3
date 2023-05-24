import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      todoList: [],
    };
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleCreateTodo = () => {
    if (this.state.inputValue.trim() === "") {
      return;
    }
  
    const update = this.state.todoList.concat(this.state.inputValue);
    this.setState({
      inputValue: "",
      todoList: update,
    });
  };
  

  render() {
    return (
      <div style={{width: '300px',margin: '100px auto', border: '1px solid #333',borderRadius: '10px', padding: '30px'}}>
        <div>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            placeholder="Введите задачу"
          />
          <button onClick={this.handleCreateTodo}>
            Сохранить
          </button>
        </div>
        <div>
          {this.state.todoList.map((todo, index) => (
            <div key={index}>
              <h3>{todo}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
