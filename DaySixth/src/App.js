import { Counter } from "./Component/Counter";
import { TaskFirst } from "./Component/TaskFirst";
import { ParentComp } from "./Component/ParentComp";
import { TaskSecond } from "./Component/TaskSecond";
import { LogComponent } from "./Component/LogComponent";
import { Array } from "./Component/Array";
import './App.css'
import { ConditionRendering} from "./Component/ConditionRendering";
function App() {
  return (
    <div>
    <TaskFirst/>  
    <TaskSecond/>
    <ParentComp name="Md Zeyad Ali" Age="22"/>
    <Counter/> 
    <LogComponent/>
    <ConditionRendering/>
    <Array/>
    </div>
  )
}

export default App;

