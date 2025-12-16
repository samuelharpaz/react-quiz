import Header from './Header';
import MainEl from './MainEl';

export default function App() {
  return (
    <div className="app">
      <Header />
      <MainEl>
        <p>1/15</p>
        <p>Question</p>
      </MainEl>
    </div>
  );
}
