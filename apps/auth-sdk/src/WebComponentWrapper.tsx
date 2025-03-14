import ReactDOM from 'react-dom/client';
import App from './App';

class WebComponent extends HTMLElement {
  private root?: ReactDOM.Root;

  connectedCallback() {
    this.root = ReactDOM.createRoot(this);
    this.root.render(<App />);
  }

  disconnectedCallback() {
    this.root?.unmount();
  }
}

customElements.define('auth-sdk', WebComponent);
