function SectionPrecios() {
  return (
    <section id="precios" className="container-precios">
            <h2>Precios</h2>
                <table className='table table-dark table-striped-columns text-center'>
                    <thead>
                        <th>COMPLEJOS</th>
                        <th>ENTRADA GENERAL</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Entradas 2D</td>
                            <td>TODOS LOS DIAS $700</td>
                        </tr>
                        <tr>
                            <td>Entradas 3D</td>
                            <td>TODOS LOS DIAS $800</td>
                        </tr>
                        <tr>
                            <td>Formas de Pago</td>
                            <td>Efectivo, Tarjeta de débito y crédito Visa, Mastercard debito y crédito, Tarjeta Naranja, American Express, Maestro, Cabal</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="2">
                                <p>!!ATENCION¡¡</p>
                                <p>-Miercoles $400 Y Viernes $500 dias de descuento.</p>
                                <p>-Menores pagan a partir de los 2 años.</p>
                                <p>-Recordar respetar las medidas de Bioseguridad.</p>  
                                <p>"CUIDAR LAS INSTALACIONES ES SIGNO DE CULTURA"</p>
                                <p>MUCHAS GRACIAS!!!</p>
                            </td>
                        </tr>
                    </tfoot>
                </table>
    </section>
  )
}

export default SectionPrecios