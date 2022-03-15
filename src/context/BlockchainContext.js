import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import ApeContractData from "../blockchain/ApeContract";
export const BlockchainContext = createContext();

const getProvider = () => {
  return new ethers.providers.Web3Provider(window.ethereum);
};

const getSigner = () => {
  const provider = getProvider();
  return provider.getSigner();
};

// returns promise
const getSignerAddress = () => {
  const provider = getProvider();
  return provider.getSigner().getAddress();
};

export const BlockchainContextProvider = (props) => {
  const [currentSigner, setCurrentSigner] = useState("");
  const [currentSignerAddress, setCurrentSignerAddress] = useState("");

  useEffect(() => {
    checkIfWalletIsConnected();
    listenMMAccount(); // Event is registered in background
  }, []);

  async function listenMMAccount() {
    window.ethereum.on("accountsChanged", async function () {
      window.location.reload();
    });

    window.ethereum.on("chainChanged", (currentChainId) => {
      window.location.reload();
    });
  }

  const getTotal = async () => {
    const nftContract = await getApeContract();
    if (nftContract != null) {
      const t = await nftContract.totalSupply();
      window.document.getElementById("total").textContent = parseInt(t, 16)
        .toString()
        .concat("/10000");
    }
  };

  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (
      userAgent.match(/iPad/i) ||
      userAgent.match(/iPhone/i) ||
      userAgent.match(/iPod/i)
    ) {
      return "iOS";
    } else if (userAgent.match(/Android/i)) {
      return "Android";
    } else {
      return "unknown";
    }
  }

  const checkIfWalletIsConnected = async () => {
    try {
      if (!window.ethereum) {
        if (
          getMobileOperatingSystem() === "iOS" ||
          getMobileOperatingSystem() == "Android"
        ) {
          window.location.replace(
            "https://metamask.app.link/dapp/www.hamtonpigs.com/ "
          );
        }
        return alert("Please install Metamask");
      } else {
        await window.ethereum.enable();
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        console.log(accounts);
        const chainId = await window.ethereum.request({
          method: "eth_chainId",
        });
        console.log(chainId);
        if (chainId === "0x89") {
          if (accounts.length) {
            // Set Current Signer
            const signer = getSigner();
            setCurrentSigner(signer);

            // Set Current Signer Address
            const signerAddress = await getSignerAddress();
            setCurrentSignerAddress(signerAddress);
            await getTotal();
          } else {
            console.log("No accounts found");
          }
        } else {
          document.querySelector(".alert-box").classList.add("open-alert");
          document.querySelector(".text-alert").innerText =
            "Please Select Matic Mainnet!";
          window.scrollTo(0, 0);
          // lol
        }
      }
    } catch (error) {
      alert(error.data.message);
      throw new Error("No window.ethereum Object");
    }
  };

  // Get APE Contract

  const getApeContract = async () => {
    const signer = getSigner();
    console.log(signer);
    if (!signer) {
      alert("Please Connect Wallet First!");
      // setIsLoading(false);
      return null;
    }

    const provider = getProvider();
    console.log(ApeContractData.address);
    console.log(provider);
    const ApeContract = new ethers.Contract(
      ApeContractData.address,
      ApeContractData.abi,
      provider
    );
    return ApeContract;
  };

  const mint = async (props) => {
    if (props.amount < 1) {
      document.querySelector(".alert-box").classList.add("open-alert");
      document.querySelector(".text-alert").innerText =
        "Mint Amount should be at least 1";
      window.scrollTo(0, 0);
      return;
    }
    // Get Ethereum Contract
    const nftContract = await getApeContract();
    const nftContractWithSigner = nftContract.connect(currentSigner);

    // Check if Signer is Owner
    const owner = await nftContract.owner();
    // Get Cost
    const cost = await nftContract.cost();
    const Single_Mint_Cost = cost.toString();
    const Total_Cost = Single_Mint_Cost * props.amount;
    let tx;

    try {
      if (owner === currentSignerAddress) {
        tx = await nftContractWithSigner.mint(
          currentSignerAddress,
          props.amount
        );
      } else {
        tx = await nftContractWithSigner.mint(
          currentSignerAddress,
          props.amount,
          {
            value: Total_Cost.toString(),
          }
        );
      }
      await tx.wait();
      await getTotal();
      // Loader False
      // setIsLoading(false);
    } catch (error) {
      // setIsLoading(false);
      // alert(error.data.message);
      if (error.code === -32603) {
        document.querySelector(".alert-box").classList.add("open-alert");
        document.querySelector(".text-alert").innerText = "Insufficient Funds!";
        window.scrollTo(0, 0);
      } else if (error.code === 4001) {
        document.querySelector(".alert-box").classList.add("open-alert");
        document.querySelector(".text-alert").innerText = "Transaction denied";
        window.scrollTo(0, 0);
      }
      console.log(error);
    }
  };

  // Claim

  return (
    <BlockchainContext.Provider
      value={{
        currentSigner,
        currentSignerAddress,
        checkIfWalletIsConnected,
        mint,
      }}
    >
      {props.children}
    </BlockchainContext.Provider>
  );
};
