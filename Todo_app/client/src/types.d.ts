type Todo={
        name:string;
        complete:boolean;
    }
    type ClickToDoToggle=(selected:Todo)=>void;
    type AddToDoData=(newToDo:string)=>void;