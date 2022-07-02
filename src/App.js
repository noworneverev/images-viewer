import Previews from './Previews';
import './App.css';

function App() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div
          className="icon"
          style={{ textAlign: 'right', marginBottom: 2, marginLeft: 'auto' }}
        >
          <a
            href="https://github.com/noworneverev/images-viewer"
            target="_blank"
          >
            <i
              className="fa fa-github"
              style={{ fontSize: '24px', textAlign: 'right' }}
            />
          </a>
        </div>
        <div
          className="icon"
          style={{ textAlign: 'right', marginBottom: 2, marginLeft: 10 }}
        >
          <a href="https://noworneverev.github.io/" target="_blank">
            <i
              className="fa fa-id-card"
              style={{ fontSize: '24px', textAlign: 'right' }}
            />
          </a>
        </div>
      </div>
      <Previews />
    </>
  );
}

export default App;
