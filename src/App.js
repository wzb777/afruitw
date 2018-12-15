import React, { Component } from 'react';
import "./common/css/style.css"
import "./common/css/reset.css"
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         	<i>menu</i>
         	<h1>LOGO</h1>
         	<p>搜索</p>
        </header>
        <footer>
        		<ul>
        				<li>首页</li>
        				<li>列表</li>
        				<li>我的</li>
        				<li>登陆</li>
        		</ul>
        </footer>
      </div>
    );
  }
}

export default App;
