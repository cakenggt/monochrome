import * as React from "React";

export class App extends React.Component {
  public foo: string = "Hello world";

  public render() {
    const className = 'class';
    return (
      <div className={className}>
        <header className="App-header">
          <h1 className="App-title">{this.foo}</h1>
        </header>
      </div>
    );
  }
}

export const AppContainer = () => <App/>
