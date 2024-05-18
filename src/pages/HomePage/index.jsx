import Button from "../../components/Button";

const HomePage = () => {
  document.title = "eComify | Home";

  return (
    <>
      <h1>Home H1</h1>
      <p>Main is where the main content of the page will display</p>
      <h2>And here's H2</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem quaerat,
        temporibus doloribus voluptatum consectetur iste optio quam? Non ipsa
        saepe quasi, temporibus eveniet ullam ipsum sint molestiae amet,
        doloremque quae.
      </p>
      <h3>Where this is H3</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem quaerat,
        temporibus doloribus voluptatum consectetur iste optio quam? Non ipsa
        saepe quasi, temporibus eveniet ullam ipsum sint molestiae amet,
        doloremque quae.
      </p>
      <p>
        <a href="#">This is a link</a>
      </p>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="disabled">Disabled</Button>
    </>
  );
};

export default HomePage;
