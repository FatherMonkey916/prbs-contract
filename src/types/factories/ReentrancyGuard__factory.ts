/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ReentrancyGuard,
  ReentrancyGuardInterface,
} from "../ReentrancyGuard";

const _abi = [
  {
    inputs: [],
    name: "ReentrantCall",
    type: "error",
  },
];

export class ReentrancyGuard__factory {
  static readonly abi = _abi;
  static createInterface(): ReentrancyGuardInterface {
    return new utils.Interface(_abi) as ReentrancyGuardInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReentrancyGuard {
    return new Contract(address, _abi, signerOrProvider) as ReentrancyGuard;
  }
}
