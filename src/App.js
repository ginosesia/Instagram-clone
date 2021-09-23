import './App.css';
import Header from './components/header/header';
import Footer from './components/Footer/footer';
import Posts from './components/Posts/Posts';
import Stories from './components/Stories/Stories';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Stories */}
      <Stories />
      {/* Posts */}
      <Posts />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;