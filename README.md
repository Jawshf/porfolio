# porfolio
Simple Portfolio
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>Jawad Shariff - Portfolio</title>
  </head>
  <body>
    <header>
      <img src="Jawad.jpeg" alt="Profile Picture" width="150" height="150" />
      <!-- Add this line -->
      <h1>Jawad Shariff</h1>
      <p>Bangalore</p>
    </header>

    <main>
      <section>
        <h2>About Me</h2>
        <p>Welcome to my portfolio website.</p>
      </section>

      <section>
        <h2>Contact Me</h2>
        <p>You can reach out to me via email:</p>
        <p>
          <a href="mailto:jawadjunaid98@gmail.com">jawadjunaid98@gmail.com</a>
        </p>
        <h3>Self Contact Form</h3>
        <form id=" contact-form">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label for="comment">Comment:</label>
          <textarea id="comment" name="comment" rows="4" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>

    <script src="script.js"></script>
  </body>
</html>
