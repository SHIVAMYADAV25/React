import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil';
import {todoAtomFamily} from "./atomFamily"


function App() {


  return (
    <>
    <RecoilRoot>
      <Todo id={1}/>
      <Todo id={2}/>
    </RecoilRoot>
    </>
  )
}

function Todo({id}){

  const todo = useRecoilValue(todoAtomFamily(id));
  console.log(todo)
  return(
  <>
      {todo.title}
      {todo.description}
      <br />
  </>
  )
}
export default App
