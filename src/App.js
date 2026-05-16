import { PrimaryButton, SecondaryButton, TertiaryButton } from './components/buttons';

function App() {
  return (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '20px' }}>
      <SecondaryButton text="Text" />
      <PrimaryButton text="Text" />
      <TertiaryButton text="Text" />
    </div>
  );
}

export default App;
