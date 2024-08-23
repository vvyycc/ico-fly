"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { ethers } from "ethers";
import Link from "next/link";
import UseSticky from "../../hooks/UseSticky";
import NavMenu from "./Menu/NavMenu";
import Sidebar from "./Menu/Sidebar";
import HeaderOffcanvas from "./Menu/HeaderOffcanvas";

const HeaderOne = () => {
  const [accountData, setAccountData] = useState({});
  const { sticky } = UseSticky();
  const [isActive, setIsActive] = useState(false);
  const [offCanvas, setOffCanvas] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const _connectToMetaMask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum
        .request({ method: "eth_requestAccounts" })
        const address = accounts[0];
        const balance =  await window.ethereum
        .request({
            method: "eth_getBalance",
            params: [address, "latest"],
        })
        const networkId = "97";

        console.log("Connected to MetaMask with address: ", address);
        setAccountData({
          address,
          balance: ethers.formatEther(balance),
          chainId: networkId.toString(),
          network: 'BSCT',
        });
        setIsConnected(true);
      } catch (error) {
        alert(`Error connecting to MetaMask: ${error.message || error}`);
      }
    } else {
      alert("MetaMask is not installed");
    }
  };

  const _disconnectMetaMask = () => {
    setAccountData({
      address: '',
      balance: '',
      chainId: '',
      network: ''
    });
    setIsConnected(false);
  };

  return (
  
      <>
        <header id="header" className="header-layout1">
          <div id="sticky-header" className={`menu-area transparent-header ${sticky ? "sticky-menu" : ""}`}>
            <div className="container custom-container">
              <div className="row">
                <div className="col-12">
                  <div className="menu-wrap">
                    <nav className="menu-nav">
                      <div className="logo">
                        <Link href="/"><Image src="/assets/img/logo/logo.png" width={80} height={80} alt="Logo" /></Link>
                      </div>
                      <div className="navbar-wrap main-menu d-none d-lg-flex">
                        <NavMenu />
                      </div>
                      <div className="header-action">
                        <ul className="list-wrap">
                          <li>
                            <div className="dropdown-link">
                              <Link className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false">ENGLISH</Link>
                              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                <li>
                                  <Link href="#">GERMAN</Link>
                                  {/* <Link href="#">FREN</Link>
                                                                  <Link href="#">ARAB</Link>
                                                                  <Link href="#">LAT</Link> */}
                                  <Link href="#">SPANISH</Link>
                                </li>
                              </ul>
                            </div>
                          </li>
  
                        </ul>
                      </div>
  
                      <div onClick={() => setIsActive(true)} className="mobile-nav-toggler"><i className="fas fa-bars"></i></div>
                      <div
                        className={`h-full flex flex-col before:from-white after:from-sky-200 py-2 `}
                      >
                        <div className="px-6 md:px-12 sm:px-2">
                          <div className="flex justify-between items-centers">
                            <div className="flex-1 px-2 mx-2">
                              <span>🟢 {accountData.address ?? "Wallet Address"}</span>
                            </div>
                            <div className="flex gap-8 items-center">
                              <div className="flex items-center gap-2">
                                <span>{accountData.balance ?? "Balance"}</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                  />
                                </svg>
                              </div>
                              <div className="flex gap-2 item-center">
                                <span>{accountData.chainId ?? "Chain ID"}</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                  />
                                </svg>
                              </div>
                              <div className="flex gap-2 item-center">
                                <span>{accountData.network}</span>
                                <svg
                                  className="svg-icon"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 1024 1024"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M1024.26 141.82c0-77.04-62.46-139.5-139.5-139.5s-139.5 62.46-139.5 139.5c0 52.26 28.74 97.8 71.27 121.69l-55.6 246.87c-1.38-0.04-2.77-0.07-4.17-0.07-38.52 0-73.39 15.61-98.63 40.85l-254.64-147a140.05 140.05 0 0 0 3.78-32.34c0-77.04-62.46-139.5-139.5-139.5s-139.5 62.46-139.5 139.5c0 51.45 27.86 96.39 69.32 120.58l-56.9 252.62c-0.4 0-0.79-0.01-1.18-0.01C62.46 745 0 807.46 0 884.5S62.46 1024 139.5 1024 279 961.54 279 884.5c0-51.25-27.65-96.04-68.83-120.29l56.96-252.89c0.21 0 0.43 0.01 0.64 0.01 39.99 0 76.05-16.83 101.48-43.79L622.06 613.5a139.612 139.612 0 0 0-4.79 36.34c0 77.04 62.46 139.5 139.5 139.5s139.5-62.46 139.5-139.5c0-50.15-26.47-94.12-66.2-118.7l56.27-249.82c76.31-0.86 137.92-62.98 137.92-139.5z m-884.5 809.42c-37.19 0-67.42-30.25-67.42-67.42 0-37.19 30.23-67.42 67.42-67.42 37.17 0 67.42 30.23 67.42 67.42 0 37.17-30.25 67.42-67.42 67.42z m128.27-512.67c-37.19 0-67.42-30.25-67.42-67.42 0-37.19 30.23-67.42 67.42-67.42 37.17 0 67.42 30.23 67.42 67.42 0 37.17-30.25 67.42-67.42 67.42z m489 278c-37.19 0-67.42-30.25-67.42-67.42 0-37.19 30.23-67.42 67.42-67.42 37.17 0 67.42 30.23 67.42 67.42 0 37.17-30.25 67.42-67.42 67.42z m128-642.84c37.17 0 67.42 30.23 67.42 67.42 0 37.17-30.25 67.42-67.42 67.42-37.19 0-67.42-30.25-67.42-67.42 0-37.19 30.23-67.42 67.42-67.42z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
  
                        <div className="flex flex-col flex-1 justify-center items-center">
                          <div className="grid gap-4">
                            <Image
                              src="https://images.ctfassets.net/9sy2a0egs6zh/4zJfzJbG3kTDSk5Wo4RJI1/1b363263141cf629b28155e2625b56c9/mm-logo.svg"
                              alt="MetaMask"
                              width={320}
                              height={140}
                              priority
                            />
                            <button onClick={isConnected ? _disconnectMetaMask : _connectToMetaMask} className="bg-purple-800 text-white btn2  p-4 rounded-md">
                                {isConnected ? "Connected" : "Connect to MetaMask"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </nav>
  
                  </div>
  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
        </header>
        <Sidebar style={false} isActive={isActive} setIsActive={setIsActive} />
        <HeaderOffcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
      </>
  );
}

export default HeaderOne;
