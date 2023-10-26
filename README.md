# Compartmentalize repeated elements in a website

I thought of this incredible way to repeat the navbar across pages while using pure HTML, CSS, and Vanilla JS.

Other frameworks (React) allow us to compartmentalize parts of the page into their own files/modules so it is easy to repeat them.

I tried to do the same but while not use any framework.

I am not sure if it's a common practice or if I am the rare one who came up with this idea. But I have never seen anyone do this before. So I take credit for it, as of now.

---

## how it works

1. Create the element in a different file (e.g., navbar.html)

   ```html
   <nav>
     <ul>
       <li><a href="#">Home</a></li>
       <li><a href="#">About</a></li>
       <li><a href="#">Contact</a></li>
     </ul>
   </nav>
   ```

2. Create a holder element in the page that is used as a wrap element.
   ```html
   <div id="nav-bar"></div>
   ```
3. Call the function using <script>.

   ```javascript
    <script src="./index.js"></script>
    <script>
      navbar(); // I created a navbar() as an example
    </script>
   ```

4. The function:

   a. fetches the file

   b. parses the response data to text

   c. sets it as the body of the required element.

   ```javascript
   function navbar() {
     fetch("./navbar.html")
       .then((response) => response.text())
       .then((data) => {
         document.getElementById("nav-bar").innerHTML = data;
       });
   }
   ```

## License

[GNU General Public License v2.0](https://choosealicense.com/licenses/gpl-2.0/)
