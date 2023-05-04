import './App.css'

function App() {
  return (
    <div className="App">
      <>
        <header className="header">
          <h1>Matthew Randle</h1>
        </header>
        <p>
          <a href="/downloads/MRandleCV.pdf" download>
            Download my CV!
          </a>
        </p>
        <h3>About Me</h3>
        <p>
          Hi! I am Matthew, and I am a passionate and insightful individual with
          experience and knowledge in software development and process design. I
          am driven by curiosity and innovation, and my background in
          engineering lends me a keen eye for effective design and collaborating
          with others. I have experience with a variety of full-stack web
          development tools, like Typescript, React, Redux, and SQL databases,
          as well as other programming tools such as Python and VBA. I love
          learning new things and I strive to grow and hone my skills!
        </p>
        <section className="main">
          <h1>Magic Analyser</h1>
          <a href="https://github.com/svalbird/magic-analyzer/tree/clean">
            Link to GitHub
          </a>
          <p>
            <i>
              Uses node.js, React, Typescript, Knex, relational databases,
              Tremor, Tailwind, JSONStream
            </i>
          </p>
          <p>
            This project is able to import Magic: The Gathering decks from text
            files and can then displays the card information, as well as
            information about the entire deck of cards. it also contains a
            script to read an enormous JSON file using JSONStream, allowing for
            400MB of cards to be used by the program. Tremor and Tailwind allow
            for a clean design.
          </p>
          <p>
            In this project I became confident in learning new packages to get
            the result I wanted. I also became very confident with relational
            databases - cards are complex, and can have many properties, and I
            spent a lot of time designing my databases to ensure I had all the
            info I needed while keeping it flexible for the huge variety of
            cards that exist.
          </p>
        </section>
      </>
    </div>
  )
}

export default App
