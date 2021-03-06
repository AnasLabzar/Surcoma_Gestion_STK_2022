
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import ProgressBar from "components/Anas/progressBar/progressBar";
// core components
import Header from "components/Headers/Header.js";
import BtnAddProduct from "components/Anas/ModalButtonAdd/ModalButtonAdd";


const Products = () => {

  const [productList, setproductList] = useState([]);
  // console.log(productList);


  // const fetchData = async () => {
  //   await fetch("http://localhost:8080/Surcoma/get")
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(data => {
  //       setproductList(data)
  //     })
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  useEffect(() => {
    Axios.get("http://localhost:8080/Surcoma/get").then((response) => {
      setproductList(response.data);
      // console.log(response);
    });
  }, []);

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row className="mt-20">
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <div className="row">
                  <h3 className="col mb-0">Card Products</h3>
                  <div className="col text-right">
                    <BtnAddProduct
                      color="primary"
                      href="#pablo"
                      size="sm"
                    >
                      Add Product
                    </BtnAddProduct>
                  </div>
                </div>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Articles</th>
                    <th scope="col">D??signation</th>
                    <th scope="col">Cat??gorie</th>
                    <th scope="col">TVA</th>
                    <th scope="col">P.U.H (MAD)</th>
                    <th scope="col">Prix TTC (MAD)</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Fournisseur</th>
                    <th scope="col">La Date</th>
                    <th scope="col">Stock Actuel</th>
                    <th scope="col">Status</th>
                    <th scope="col" />
                  </tr>
                </thead>
                {productList.map((val, key) => (
                  <tbody>
                    <tr key={key}>
                    <td>
                        {val.id}
                      </td>
                      <th scope="row">
                        <span className="mb-0 text-sm">
                          {val.Nom_Article}
                        </span>
                      </th>
                      <td>{val.D??signation}</td>
                      <td>
                        {val.N_Cat??gorie}
                      </td>


                      <td>
                        {val.TVA}
                      </td>

                      <td>
                        {val.Prix_unitaire_HT}
                      </td>

                      <td>
                        {val.Prix_TTC}
                      </td>

                      <td>
                        {val.Init_qty}
                      </td>

                      <td>
                        {val.Nom_fournisseur}
                      </td>
                      <td>
                        {val.updatedAt}
                      </td>


                      <td>
                        <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                      </td>
                      <td className="text-center gap-2 flex  ">
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                        <i className="fa fa-eye" />
                        <button>
                          
                        <i className="fa fa-trash text-red" aria-hidden="true" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );

  // function newFunction() {
  //   useEffect(() => {
  //     Axios.delete("http://localhost:8080/Surcoma/delete/:_id").then((response) => {
  //       setproductList(response.data);
  //       // console.log(response);
  //     });
  //   }, []);
  // }
};

export default Products;
