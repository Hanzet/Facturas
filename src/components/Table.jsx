import React from 'react'

    const Table = ({list, title, deleteElement}) => { // props
    return (
        <div className="table-responsive">
            <h2>{title}</h2>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>Precio</td>
                        <td>Stock</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((element, index) => (
                            <tr key={index}>
                                <td>{element.name}</td>
                                <td>{element.price}</td>
                                <td>{element.stock}</td>
                                <td>
                                    <button className="btn btn-primary">✍</button>
                                    <button className="btn btn-danger" onClick={() => deleteElement(element.id)}>❌</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table
