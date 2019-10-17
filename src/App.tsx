import React from 'react';
//import ReducerSample from "./ReducerSample";
//<ReducerSample/>
//import Counter from "./Counter";
//<Counter />
import MyForm from "./MyForm";


const App: React.FC = () => {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
      <MyForm onSubmit={onSubmit} />
  );
}

export default App;
