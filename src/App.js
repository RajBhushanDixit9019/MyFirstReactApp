// getting css styling from the App.css
import "./App.css";


export default function GreetUser() {
  function greetuser(username){
    alert(`Hello ${username}`);
  }
  return (
    <div class="form-container">
      <label for="username" class="form-label">
        Name:
      </label>
      <input type="text" id="username" class="form-input" placeholder="Your Name..." />
      <button class="form-button" onclick={greetuser}>Submit</button>
    </div>
  );
}

