function SectionHorarios() {
  return (
    <section className="container-horarios" id="horarios">
            <h2>Horarios</h2>
            <table className="table table-dark table-striped-columns text-center">
                <thead>
                    <th>Peliculas de la Semana</th>
                    <th>Lunes a Domingos</th>
                </thead>
                <tbody>
                    <tr>
                        <td>GodzillaVSKingKong</td>
                        <td>16:00pm</td>
                    </tr>
                    <tr>
                        <td>Jhon Wick 3</td>
                        <td>18:05pm</td>
                    </tr>
                    <tr>
                        <td>Joker</td>
                        <td>20:10pm</td>
                    </tr>
                    <tr>
                        <td>Vengadores: EndGame</td>
                        <td>22:30pm</td>
                    </tr>
                </tbody>
            </table>
        </section>
  )
}

export default SectionHorarios