/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Admin, AdminInterface } from "../Admin";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Admin__AdminZeroAddress",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "Admin__NotAdmin",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldAdmin",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "TransferAdmin",
    type: "event",
  },
  {
    inputs: [],
    name: "_renounceAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "_transferAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b031916339081178255604051909182917fbdd36143ee09de60bdefca70680e0f71189b2ed7acee364b53917ad433fdaf80908290a35061023a806100616000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063bfa2530814610046578063e6abb5ae14610050578063f851a44014610063575b600080fd5b61004e610092565b005b61004e61005e3660046101fd565b61012e565b600054610076906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b6000546001600160a01b031633146100d757600054604051633fb1e38960e11b81526001600160a01b0390911660048201523360248201526044015b60405180910390fd5b600080546040516001600160a01b03909116907fbdd36143ee09de60bdefca70680e0f71189b2ed7acee364b53917ad433fdaf80908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b6000546001600160a01b0316331461016e57600054604051633fb1e38960e11b81526001600160a01b0390911660048201523360248201526044016100ce565b6001600160a01b03811661019557604051638ad1a93360e01b815260040160405180910390fd5b600080546040516001600160a01b03808516939216917fbdd36143ee09de60bdefca70680e0f71189b2ed7acee364b53917ad433fdaf8091a36000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b60006020828403121561020f57600080fd5b81356001600160a01b038116811461022657600080fd5b939250505056fea164736f6c634300080c000a";

type AdminConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AdminConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Admin__factory extends ContractFactory {
  constructor(...args: AdminConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Admin";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Admin> {
    return super.deploy(overrides || {}) as Promise<Admin>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Admin {
    return super.attach(address) as Admin;
  }
  connect(signer: Signer): Admin__factory {
    return super.connect(signer) as Admin__factory;
  }
  static readonly contractName: "Admin";
  public readonly contractName: "Admin";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AdminInterface {
    return new utils.Interface(_abi) as AdminInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Admin {
    return new Contract(address, _abi, signerOrProvider) as Admin;
  }
}