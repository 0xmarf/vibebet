import React from "react";
import "./IconWallet.css";

interface IconWalletProps {
  className?: string;
}

export const IconWallet: React.FC<IconWalletProps> = ({ className = "", ...props }) => {
  return <img className={"icon-wallet " + className} src="icon-wallet.svg" alt="Wallet" {...props} />;
};