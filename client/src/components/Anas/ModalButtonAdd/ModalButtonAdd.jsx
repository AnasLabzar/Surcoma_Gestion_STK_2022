import React, {useState} from "react";
import Axios from "axios";

export default function BtnAddProduct() {
  const [Nom_Article, setNom_Article] = useState("");
  const [Désignation, setDésignation] = useState("");
  console.log(Désignation);
  const [Nom_fournisseur, setNom_fournisseur] = useState("");
  const [N_Catégorie, setN_Catégorie] = useState("");
  const [TVA, setTVA] = useState(0);
  const [Prix_unitaire_HT, setPrix_unitaire_HT] = useState(0);
  const [Prix_TTC, setPrix_TTC] = useState(0);
  const [Init_qty, setInit_qty] = useState(0);
  const [STK_actuel, setSTK_actuel] = useState(100);

  const addToList = ()  => {
    Axios.post("http://localhost:8080/Surcoma/post", {
      Nom_Article: Nom_Article,
      Désignation: Désignation,
      Nom_fournisseur: Nom_fournisseur,
      N_Catégorie: N_Catégorie,
      TVA: TVA,
      Prix_unitaire_HT: Prix_unitaire_HT,
      Prix_TTC: Prix_TTC,
      Init_qty: Init_qty,
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
                    <form className="mt-5 space-y-6" action="#" method="POST">
                      <input
                        type="hidden"
                        name="remember"
                        defaultValue="true"
                      />
                      <div className="rounded-md shadow-sm w-[300px] -space-y-px">
                        <div>
                          <label htmlFor="email-address" className="sr-only">
                            Nom d'artcile
                          </label>
                          <input
                            type="text"
                            onChange={(event) => {
                                setNom_Article(event.target.value);
                              }}
                            autoComplete="email"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Nom d'artcile"
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
                              setInit_qty(event.target.value);
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
