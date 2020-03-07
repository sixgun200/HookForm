import React from 'react';
import './App.css';
import RegisterForm2 from './components/RegisterForm2';

function App() {
  return (
    <div className="App">
      <RegisterForm2 firstName={""} fnError={""} lastName={""} lnError={""} email={""} emError={""} password={""} pwError={""} confirmPassword={""} cpError={""}></RegisterForm2>
    </div>
  );
}

export default App;
