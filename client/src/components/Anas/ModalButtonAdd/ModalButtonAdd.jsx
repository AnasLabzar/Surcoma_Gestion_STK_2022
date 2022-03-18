import React, { useEffect, useState } from "react";
import Axios from "axios";
import Select from "react-select";
import { STK } from "assets/json/Stock  - Feuille 1 (2)-converted (1)";

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
export default function BtnAddProduct() {
  const [Nom_Article, setNom_Article] = useState(STK[0].value);
  const [Désignation, setDésignation] = useState("");
  console.log(Désignation);
  const [Nom_fournisseur, setNom_fournisseur] = useState("");
  const [N_Catégorie, setN_Catégorie] = useState("");
  const [TVA, setTVA] = useState(0);
  const [Prix_unitaire_HT, setPrix_unitaire_HT] = useState(0);
  const [Prix_TTC, setPrix_TTC] = useState(0);
  const [Qte, setQte] = useState(0);
  const [STK_actuel, setSTK_actuel] = useState(100);

  useEffect(() => {
    console.log(Nom_Article);
  }, [Nom_Article]);

  const addToList = () => {
    Axios.post("http://localhost:8080/Surcoma/post", {
      Nom_Article: Nom_Article.value,
      Désignation: Désignation,
      Nom_fournisseur: Nom_fournisseur,
      N_Catégorie: N_Catégorie,
      TVA: TVA,
      Prix_unitaire_HT: Prix_unitaire_HT,
      Prix_TTC: Prix_TTC,
      Qte: Qte,
      STK_actuel,
    });
  };
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-[#5E72E4] text-white font-semibold text-[12px] p-2 rounded shadow hover:shadow-[#5E72E4] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
                    <form className="mt-5 space-y-6" action="/Admin/Product" method="POST">
                      <input
                        type="hidden"
                        name="remember"
                        defaultValue="true"
                      />
                      <div className="rounded-md shadow-sm w-[300px] -space-y-px">
                        <div>
                          <Select
                            required
                            // value={Nom_Article}
                            options={STK}
                            onChange={setNom_Article}
                            placeholder={"Nom d'artcile"}
                            className="appearance-none text-left rounded-none relative block w-full px-1 py-2 border-none border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          />
                        </div>
                        <div>
                          <label htmlFor="password" className="sr-only">
                            Désignation
                          </label>
                          <input
                            type="text"
                            onChange={(event) => {
                              setDésignation(event.target.value);
                            }}
                            autoComplete="current-password"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Désignation"
                          />
                        </div>
                        <div>
                          <label htmlFor="password" className="sr-only">
                            Catégorie
                          </label>
                          <input
                            type="text"
                            autoComplete="current-password"
                            required
                            onChange={(event) => {
                              setN_Catégorie(event.target.value);
                            }}
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Catégorie"
                          />
                        </div>
                        <div>
                          <label htmlFor="password" className="sr-only">
                            TVA
                          </label>
                          <input
                            type="Number"
                            autoComplete="current-password"
                            required
                            onChange={(event) => {
                              setTVA(event.target.value);
                            }}
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="TVA"
                          />
                        </div>
                        <div>
                          <label htmlFor="password" className="sr-only">
                            Prix unitaire HT (MAD)
                          </label>
                          <input
                            type="number"
                            autoComplete="current-password"
                            required
                            onChange={(event) => {
                              setPrix_unitaire_HT(event.target.value);
                            }}
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Prix unitaire HT (MAD)"
                          />
                        </div>
                        <div>
                          <label htmlFor="password" className="sr-only">
                            Prix TTC (MAD)
                          </label>
                          <input
                            type="number"
                            autoComplete="current-password"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Prix TTC (MAD)"
                            onChange={(event) => {
                              setPrix_TTC(event.target.value);
                            }}
                          />
                        </div>
                        <div>
                          <label htmlFor="password" className="sr-only">
                            Quantity
                          </label>
                          <input
                            type="number"
                            autoComplete="current-password"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Quantity"
                            onChange={(event) => {
                              setQte(event.target.value);
                            }}
                          />
                        </div>
                        <div>
                          <label htmlFor="password" className="sr-only">
                            Fournisseur
                          </label>
                          <input
                            type="text"
                            autoComplete="current-password"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Fournisseur"
                            onChange={(event) => {
                              setNom_fournisseur(event.target.value);
                            }}
                          />
                        </div>
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
