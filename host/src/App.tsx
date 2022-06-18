import React from 'react';
import ReactDOM from 'react-dom';
import Counter from 'remote/Counter';
import decreaseCounterWrapper from 'remote_solid_js/decreaseCounterWrapper';
import AAAA from 'remote_react/MicroApp2';
import './index.scss';
console.log('aaas');
console.dir(decreaseCounterWrapper);
const App = () => {
  const solidRef = React.useRef<null | HTMLDivElement>(null);
  React.useEffect(() => {
    console.log(solidRef);
    decreaseCounterWrapper(solidRef.current);
  }, []);
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Counter />
      <AAAA />
      <div className="solid-js" ref={solidRef}></div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
