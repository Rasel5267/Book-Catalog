const Hero = () => {
  return (
    <div className="hero min-h-[70vh] mb-8">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://res.cloudinary.com/mahadiul5267/image/upload/v1689459161/Books/6822662_tztthi.jpg"
          className="mb-4 md:max-w-lg rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Open a book, open your mind.</h1>
          <p className="py-6">
            Reading is a passport to countless adventures, a journey into the
            realms of imagination where the possibilities are infinite.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
