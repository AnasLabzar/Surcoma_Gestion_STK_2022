
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
// core components
import Header from "components/Headers/Header.js";
import BasicTable from "components/Anas/TableFournisseur/TableFournisseur";
import BtnAddFournisseur from "components/Anas/TableFournisseur/AddFournisseur";



const Tables = () => {

  const [productList, setproductList] = useState([]);
  console.log(productList);
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
                  <h3 className="col mb-0">List Fournisseur</h3>
                  {/* <div className="col text-right">
                    <BtnAddProduct
                      color="primary"
                      href="#pablo"
                      size="sm"
                    >
                      Add Product
                    </BtnAddProduct>
                  </div> */}
                <BtnAddFournisseur />
                </div>
              </CardHeader>
              <BasicTable />
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
};

export default Tables;
