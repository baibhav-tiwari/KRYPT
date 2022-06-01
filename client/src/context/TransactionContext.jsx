import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../utils/constants';
export const TransactionsContext = React.createContext();
const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider,
        signer,
        transactionsContract
    });
}
export const TransactionProvider = ({ children }) => {
    useState[connectedAccout, setConnectedAccout] = useState(initialState)
    const checkifwalletisconnected = async () => {
        if (!ethereum) return alert("Please install metamask");
        const accounts = await ethereum.requests({ method: 'eth_accounts' });
        console.log(accounts);
    }
    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install metamask");
            const accounts = await ethereum.requests({ method: 'eth_requestAccounts' });
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);
            throw new Error("NO ETHEREUM OBJECT")
        }
    }
    useEffect(() => {
        checkifwalletisconnected();
    }, []);
    return (
        <TransactionContext.Provider value={{ connectWallet }}>
            {children}
        </TransactionContext.Provider>
    );
}