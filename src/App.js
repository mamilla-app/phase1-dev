import { DefaultOptionButton, PrimaryOptionButton } from './components/option-button';

function App() {
  return (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <DefaultOptionButton text="Text" />
      <PrimaryOptionButton text="Text" />
    </div>
  );
}

export default App;
