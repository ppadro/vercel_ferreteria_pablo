function Inicio() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        {/* <h1> FERRETERIA PABLO - Compras Online </h1>
        <hr />
        <h2> Herramientas de calidad para cada proyecto </h2>
        <hr />
        <main>
       
      <p>En Ferretería Pablo trabajamos con marcas reconocidas y 
        materiales seleccionados para garantizar herramientas 
        duraderas, precisas y seguras. Cada producto que ofrecemos 
        ha sido probado en condiciones reales de obra, asegurando 
        su rendimiento tanto en manos profesionales como en tareas domésticas. 
        Nuestro equipo capacitado te asesora en cada compra, ayudándote a elegir 
        la solución ideal para tu proyecto. Porque sabemos que una buena herramienta 
        no solo facilita el trabajo, sino que lo transforma.</p>
      <div className="imagen">
        <img src="./img/tablero.jpg"
          alt="Imagen de un tablero de herramientas organizado en una pared de taller"
          width="40%">
          </img>  
      </div> 
        </main>*/}


<div className="bloque-intro">
     <div className="imagen-izquierda">
    <img src="/img/Ferreteria2.png" alt="Herramienta destacada" />
  </div>
  <div className="texto">
    <h1>FERRETERÍA PABLO</h1>
    <h2>Compras Online</h2>
    <h3>Herramientas de calidad para cada proyecto</h3>
    <p>
      En Ferretería Pablo trabajamos con marcas reconocidas y materiales seleccionados para garantizar herramientas duraderas, precisas y seguras.
      Cada producto que ofrecemos ha sido probado en condiciones reales de obra, asegurando su rendimiento tanto en manos profesionales como en tareas domésticas.
      Nuestro equipo capacitado te asesora en cada compra, ayudándote a elegir la solución ideal para tu proyecto.
      Porque sabemos que una buena herramienta no solo facilita el trabajo, sino que lo transforma.
    </p>
  </div>

  <div className="imagen">
    <img
      src="/img/tablero.jpg"
      alt="Tablero de herramientas"
    />
  </div>
</div>


        {/* <img
          src="https://www.glueckshaendler.de/wp-content/uploads/2020/09/Senet-Brettspiel-aus-Holz-mit-Spielsteinen.jpg"
          alt="Senet de madera"
        />
        <br />
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1jKo9c_Vh2Rsg0jUj4idDOhBge3smcm8qrjmJklxoNe9vPpFSKJWhfi00lMaGrpn3oyAABwhhVwrxxnDk0Vsvno-HiGhOuUXN0mC_42I8CLswGKJzUHgl-UqtkDdEf5SsbmsAHg9CxZ0/s320/492ca122590140b5b1366be3336cd2d3.jpg"
          width="20%"
          alt="Tablero Senet alternativo"
        />
        <img
          src="https://scontent.fepa14-1.fna.fbcdn.net/v/t39.30808-6/485278816_1103223241605755_1856274675638214079_n.jpg?..."
          width="20%"
          alt="Senet en uso"
        />
        <br /> */}

        <div className="contenedor-video">
          <video autoPlay loop playsInline muted>
            <source src="/video/eligiendo.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
            {/* <track src="/video/subtitulo.vtt" kind="subtitles" srclang="es" label="Español" default /> */}
          </video>
        </div>
      </div>
    </>
  );
}

export default Inicio;