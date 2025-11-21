
import './App.css'
import { RecoilRoot, useRecoilStateLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
   const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));

  // useRecoilStateLoadable
  // this will return two value getter(todo) and setter(setTodo)
  // in Todo it will have state which shows the condition or state of request
  // eg ( loading / hasValue / hasError ) at each end point we can render data as needed

  // to load data there is other value in todo that is content
  // only need to add todo.contents.title instead of todo.title

    const todo = useRecoilValueLoadable(todosAtomFamily(id));
  
  // ## useRecoilValueLoadable 

  // - only difference is that there is no setter in this only getter
  // - and everything is same gets getter can access state and content in same way

   if (todo.state === "loading") {
      return <div>loading</div>
   }else if(todo.state === "hasValue"){
         return (
    <>
      {todo.contents.title}
      {todo.contents.description}
      <br />
    </>
  )}else if(todo.state === "hasError"){
    return <div>Error while something</div>
   }
}

export default App