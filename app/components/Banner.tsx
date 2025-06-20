export default function Banner() {
  return (
    <section
      className="w-full h-64 md:h-[400px] lg:h-[1000px] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 md:px-16 lg:px-32"
      style={{ backgroundImage: "url('/banner.png')" }}
    >
      <div className="text-center text-white max-w-4xl">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">MADAME WEB</h1>
        <p className="text-xs md:text-sm lg:text-base font-light text-gray-300 leading-relaxed">
          Pendant ce temps, dans un autre univers Dans une variation du genre
          classique, Madame Web raconte les origines de l'une des plus
          énigmatiques héroïnes des bandes dessinées Marvel. Le suspense met en
          vedette Dakota Johnson dans le rôle de Cassandra Webb, une
          ambulancière de Manhattan ayant des dons de voyance. Contrainte de
          faire face à des révélations sur son passé, elle
        </p>
        <button className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition mt-4 text-sm md:text-lg">
          Explore Now
        </button>
      </div>
    </section>
  );
}
