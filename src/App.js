import "./App.css";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";
import SearchBox from "./component/SearchBox";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="container">
      <div className="contact-container">
        <div className="title">
          <div>My Contact</div>
          <img
            className="call-img"
            width={100}
            height={95}
            src="https://cdn-icons-png.flaticon.com/512/15/15866.png"
            alt=""
          />
        </div>
        <div>
          <SearchBox />
        </div>
        <div>
          <ContactList />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default App;
