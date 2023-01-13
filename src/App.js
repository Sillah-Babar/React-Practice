import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/welcome'
import Hello from './components/hello'
import Message from './components/message'
import Counter from'./components/counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import Parent from './components/parent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import StyleSheet from './components/StyleSheet'
import { Component } from 'react'
import Inline from './components/inline'
import './appStyle.css'
import styles from './appStyle.module.css'
import Form from './components/form'
import LifeCycleA from './components/LifeCycleA'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import ParentComponent from './components/ParentComponent';
import RefDemo from './components/RefDemo'
function App() {
  return (
    <div className="App">
      
      <ParentComponent></ParentComponent>
      <RefDemo></RefDemo>
      <Table></Table>
      <FragmentDemo></FragmentDemo>
      <h1 className='error'>Erros</h1>
      <h1 className={styles.success}>success</h1>
      <LifeCycleA></LifeCycleA>
      <Form></Form>
      <Inline></Inline>
      <StyleSheet primary={false}>
        
      </StyleSheet>
      <NameList></NameList>
      <UserGreeting></UserGreeting>
      <ClassClick></ClassClick>
<FunctionClick></FunctionClick>
<EventBind></EventBind>
      <Parent></Parent>

     <Greet name='sillh' heroName="batman"> <p> this is children props</p></Greet>
     <Greet name='mohsin' heroName="superwomen"><button>bro what is wrong</button> </Greet>
     <Greet name='rehman' heroName="superman"> </Greet>
     <Welcome name='sillh' heroName="batman">using props</Welcome>
     <Welcome name='mohsin' heroName="superwomen"></Welcome>
     <Hello></Hello>
     <Message></Message>
     <Counter></Counter>
    </div>
  );
}

export default App;
