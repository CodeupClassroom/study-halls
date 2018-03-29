# Study Hall!

- How does all of this fit together / how is everything divided? See whiteboard diagram

- Logic in the jsp? What kind of logic goes in the jsp?

    - only the logic required for presentation
    - a handful of loops and conditionals

- Servlets, how to construct one?

    - class that extends `HttpServlet`, and implements (usually) `doGet`, and (maybe) `doPost`
    - `@WebServlet` annotation that defines the urlMapping for the servlet
    - urlPatterns == what the user sees in the browser (can be anything) (doesn't necessarily correspond with a file)
    - Handles one url, and determines what the response for that url is (jsp - i.e. html response, 403 unauthorized, json)

- How to connect button for the show page for an individual ad?

    - anchor tags
    - forms

- Preview of sessions and cookies

