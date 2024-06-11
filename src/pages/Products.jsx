import React, { useEffect, useState } from 'react'
import Table from '../components/Table'
import Home from '../pages/Home'
import Menu from '../components/Menu'
import { deleteProductService, getProducts } from '../services/product'
import Swal from 'sweetalert2'

    export default function Products() {

    const [listProducts, setListProducts] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        getListProducts();
    }, [refresh]);
    
    const getListProducts = async () => {
        const response = await getProducts();
        setListProducts(response);
        console.log(response);
    }

    const deleteProduct = async (id) => {
        Swal.fire({
                title: "¿Estás seguro de eliminar este artículo?",
                text: "¡Esta acción no se puede revertir!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "¡Si, eliminar!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const response = await deleteProductService(id);
                    if (response === 200) {
                        Swal.fire({
                            title: "Eliminado!",
                            text: "Producto eliminado con éxito.",
                            icon: "success"
                        });
                        setRefresh(!refresh);
                    } else {
                        Swal.fire({
                            title: "Error al eliminar!",
                            text: "Ops! Algo salió mal.",
                            icon: "error"
                        });
                    }
                }
            });
        }

    return (
        <>
            <Menu />
            <div className="container pt-3">
                <div className="d-flex justify-content-end">
                    <button className='btn btn-primary'>Nuevo Producto</button>
                </div>

                <Table list={listProducts} title="Listado de Productos" deleteElement={deleteProduct}/>
            </div>
        </>
    )
}
