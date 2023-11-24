function Footer() {
  return (
    <footer className="mx-[20%]">
      <nav className="grid grid-cols-2 grid-rows-1 my-12 ">
        <div className="left flex gap-24 ">
          {["Fingertipe", "Resources", "About"].map((sectionName) => (
            <section className="flex flex-col gap-8">
              <header>{sectionName}</header>
              <nav className="flex flex-col gap-4">
                <div>Home</div>
                <div>Examples</div>
                <div>Pricing</div>
                <div>Updates</div>
              </nav>
            </section>
          ))}
        </div>
        <div className="flex justify-end ">
          <div className="flex flex-col gap-10 ">
            <div>Mockingbird hill undefined</div>
            <div>981 123 1235</div>
            <div>LinkedIn Twitter Instagram</div>
          </div>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
