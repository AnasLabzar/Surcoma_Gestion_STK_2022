import React, { useEffect, useState } from "react";
import Axios from "axios";

const aquaticCreatures = [
  { label: "Shark", value: "Shark" },
  { label: "Dolphin", value: "Dolphin" },
  { label: "Whale", value: "Whale" },
  { label: "Octopus", value: "Octopus" },
  { label: "Crab", value: "Crab" },
  { label: "Lobster", value: "Lobster" },
];
/**
 * The options array should contain objects.
 * Required keys are "name" and "value" but you can have and use any number of key/value pairs.
 */
export default function BtnAddFournisseur() {
  const [Anas, setAnas] = useState("");
  const [Username, setUsername] = useState("");
  const [Supplier_Type, setSupplier_Type] = useState("");
  const [Adresse, setAdresse] = useState("");
  const [Mail, setMail] = useState("");
  const [Tel, setTel] = useState("");
  const [Fax, setFax] = useState("");

  useEffect(() => {
    console.log([Anas]);
  }, [Anas]);

  const addToList = () => {
    Axios.post("http://localhost:8080/Surcoma/Fournisseur/post", {
      Anas: Anas.value,
      Username: Username,
      Supplier_Type: Supplier_Type,
      Adresse: Adresse,
      Mail: Mail,
      Tel: Tel,
      Fax: Fax,
    });
  };
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button
        className="bg-[#5E72E4] text-white font-semibold text-[12px] p-2 rounded shadow hover:shadow-[#5E72E4] outline-none focus:outline-none mr-3  mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Product
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-md relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                  <div className="max-w-md w-full space-y-8">
                    <div>
                      <img
                        className="mx-auto h-20 w-auto"
                        src={
                          require("../../../assets/img/brand/logo-Surcoma-1024x1024-1.png")
                            .default
                        }
                        alt="Workflow"
                      />
                    </div>
                    <form
                      className="mt-5 space-y-6"
                      action="/admin/Fournisseur"
                      method="POST"
                    >
                      <div className="rounded-md shadow-sm w-[300px] -space-y-px">
                        <div>
                          <input
                            required
                            // value={Nom_Article}
                            onChange={setUsername}
                            placeholder={"Username"}
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                        </div>
                        <div>
                          <label htmlFor="password" className="sr-only">
                            Supplier Type
                          </label>
                          <input
                            type="text"
                            onChange={(event) => {
                              setSupplier_Type(event.target.value);
                            }}
                            autoComplete="current-password"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Supplier Type"
                          />
                        </div>
                        <div>
                          <label className="sr-only">Adresse</label>
                          <input
                            type="text"
                            autoComplete="current-password"
                            required
                            onChange={(event) => {
                              setAdresse(event.target.value);
                            }}
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Adresse"
                          />
                        </div>
                        <div>
                          <label htmlFor="password" className="sr-only">
                            Mail
                          </label>
                          <input
                            type="text"
                            autoComplete="current-password"
                            required
                            onChange={(event) => {
                              setMail(event.target.value);
                            }}
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Mail"
                          />
                        </div>
                        <div>
                          <label htmlFor="password" className="sr-only">
                            Tel
                          </label>
                          <input
                            type="number"
                            autoComplete="current-password"
                            required
                            onChange={(event) => {
                              setTel(event.target.value);
                            }}
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Tel"
                          />
                        </div>
                        <div>
                          <label className="sr-only">Fax</label>
                          <input
                            type="number"
                            autoComplete="current-password"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Fax"
                            onChange={(event) => {
                              setFax(event.target.value);
                            }}
                          />
                        </div>

                        <div>
                          <button
                            onClick={addToList}
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                              {/* <LockClosedIcon
                              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                              aria-hidden="true"
                            /> */}
                            </span>
                            Add
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
