import { useEffect, useState, useContext } from "react";
import { BlockchainContext } from "./context/BlockchainContext";

export const Connect = () => {
  const { currentSignerAddress, checkIfWalletIsConnected } = useContext(BlockchainContext);

  function connectWalletHandler() {
    checkIfWalletIsConnected();
  }

  return (
    <>
      <div>
        {currentSignerAddress ? (
          <img src="./assets/img/connected.png" alt="connected" />
        ) : (
          <img
            src="./assets/img/connect.png"
            alt="connect"
            onClick={connectWalletHandler}
          />
        )}
      </div>
    </>
  );
};
